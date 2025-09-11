# Testing Guide for Spec-Up-T

Welcome to the comprehensive testing guide for Spec-Up-T! This document will help you understand how to test the Spec-Up-T system, set up testing environments, write effective tests, and contribute to the project's quality assurance.

## Table of Contents

1. [Overview](#overview)
2. [Testing Philosophy](#testing-philosophy)
3. [Getting Started](#getting-started)
4. [Setting Up Your Testing Environment](#setting-up-your-testing-environment)
5. [Understanding the Codebase](#understanding-the-codebase)
6. [Types of Testing](#types-of-testing)
7. [Writing Tests](#writing-tests)
8. [Running Tests](#running-tests)
9. [Testing Workflows](#testing-workflows)
10. [Continuous Integration](#continuous-integration)
11. [Best Practices](#best-practices)
12. [Common Testing Scenarios](#common-testing-scenarios)
13. [Troubleshooting](#troubleshooting)

## Overview

Spec-Up-T is a technical specification drafting tool that generates rich specification documents from markdown. As a tester, you'll be working with:

- **Node.js backend scripts** that process markdown and generate HTML
- **Browser-based JavaScript** that provides interactive features
- **GitHub integration** for repository management and workflow automation
- **Template processing** for custom markdown extensions
- **External specification references** and cross-referencing systems

## Testing Philosophy

Spec-Up-T follows a comprehensive testing approach:

- **Unit Testing**: Individual functions and modules
- **Integration Testing**: Component interactions and data flow
- **End-to-End Testing**: Complete user workflows
- **Manual Testing**: User experience and edge cases
- **Performance Testing**: Build times and rendering speed
- **Security Testing**: GitHub token handling and input validation

## Getting Started

### Prerequisites

Before you begin testing Spec-Up-T, ensure you have:

- **Node.js** version 16 or higher
- **npm** (comes with Node.js)
- **Git** for version control
- **GitHub account** with Personal Access Token
- **Code editor** (VS Code recommended)
- **Basic understanding of JavaScript and markdown**

### Quick Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/trustoverip/spec-up-t.git
   cd spec-up-t
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Install Jest testing framework** (if not already installed):

   ```bash
   npm install --save-dev jest
   ```

4. **Verify the setup**:

   ```bash
   npm test
   ```

## Setting Up Your Testing Environment

### Local Development Environment

1. **Create a test project**:

   ```bash
   npx create-spec-up-t test-project
   cd test-project
   ```

2. **Set up environment variables**:

   ```bash
   cp .env.example .env
   # Edit .env with your GitHub token and settings
   ```

3. **Install development dependencies**:

   ```bash
   npm install --save-dev jest puppeteer @testing-library/jest-dom
   ```

### Testing Configuration

Create or verify your `jest.config.js`:

```javascript
module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
    '!src/**/__tests__/**',
    '!src/**/__mocks__/**',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testEnvironment: 'node',
  verbose: true,
};
```

## Understanding the Codebase

### Core Architecture

Spec-Up-T consists of several key components you'll need to test:

1. **Core Processing Engine** (`src/` directory):
   - `index.js` - Main entry point and workflow orchestration
   - `markdown-it-extensions.js` - Custom markdown processing
   - `references.js` - External specification handling
   - `collect-external-references.js` - Cross-reference management

2. **Utility Modules** (`src/utils/` directory):
   - `logger.js` - Centralized logging system
   - `file-filter.js` - File processing utilities
   - `template-patterns.js` - Template parsing utilities
   - `git-info.js` - Git repository information

3. **Build Scripts** (`src/` directory):
   - `create-term-index.js` - Term indexing
   - `create-pdf.js` - PDF generation
   - `health-check.js` - System validation

4. **Frontend Assets** (`assets/` directory):
   - `js/` - Browser-side JavaScript
   - `css/` - Styling and layout

### Key Testing Areas

Focus your testing efforts on these critical areas:

- **Template Processing**: Custom `[[tag]]` syntax handling
- **External References**: Cross-specification linking
- **File Processing**: Markdown parsing and HTML generation
- **Health Checks**: System validation and error reporting
- **GitHub Integration**: Repository access and workflow automation

## Types of Testing

### 1. Unit Testing

Test individual functions and modules in isolation.

**Example test file structure**:

```text
tests/
├── unit/
│   ├── template-processing.test.js
│   ├── file-filter.test.js
│   └── logger.test.js
├── integration/
│   ├── markdown-processing.test.js
│   └── external-references.test.js
└── e2e/
    ├── complete-workflow.test.js
    └── github-integration.test.js
```

### 2. Integration Testing

Test how components work together.

### 3. End-to-End Testing

Test complete user workflows from start to finish.

### 4. Performance Testing

Monitor build times, memory usage, and rendering performance.

## Writing Tests

### Unit Test Example

```javascript
// tests/unit/template-processing.test.js
const { parseTemplate } = require('../../src/utils/template-patterns');

describe('Template Processing', () => {
  test('should parse basic definition template', () => {
    const input = '[[def: example]]';
    const result = parseTemplate(input);
    
    expect(result).toEqual({
      type: 'def',
      term: 'example',
      content: null
    });
  });

  test('should handle templates with content', () => {
    const input = '[[ref: specification, example content]]';
    const result = parseTemplate(input);
    
    expect(result).toEqual({
      type: 'ref',
      term: 'specification',
      content: 'example content'
    });
  });
});
```

### Integration Test Example

```javascript
// tests/integration/markdown-processing.test.js
const md = require('markdown-it')();
const markdownExtensions = require('../../src/markdown-it-extensions');

describe('Markdown Processing Integration', () => {
  let mdProcessor;

  beforeEach(() => {
    mdProcessor = md.use(markdownExtensions, [{
      filter: type => type.match(/^def$|^ref$|^xref|^tref$/i),
      parse(token, type, primary) {
        return primary;
      }
    }]);
  });

  test('should process definition with term reference', () => {
    const markdown = `
[[def: agent]]

~ An agent is an entity that can act.

See also: [[tref: controller]]
    `;

    const result = mdProcessor.render(markdown);
    
    expect(result).toContain('data-term="agent"');
    expect(result).toContain('<a href="#controller"');
  });
});
```

### End-to-End Test Example

```javascript
// tests/e2e/complete-workflow.test.js
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

describe('Complete Workflow', () => {
  const testDir = path.join(__dirname, 'temp-test-project');

  beforeEach(async () => {
    // Create temporary test project
    await fs.ensureDir(testDir);
    process.chdir(testDir);
  });

  afterEach(async () => {
    // Clean up test directory
    await fs.remove(testDir);
  });

  test('should generate complete specification from markdown', async () => {
    // Setup test files
    const specsConfig = {
      specs: [{
        spec_directory: "spec",
        output_path: "./",
        markdown_paths: ["spec-body.md"],
        title: "Test Specification"
      }]
    };

    await fs.writeJson('specs.json', specsConfig);
    await fs.ensureDir('spec');
    await fs.writeFile('spec/spec-body.md', `
# Test Specification

[[def: example]]

~ An example definition for testing.

This specification includes a [[tref: example]].
    `);

    // Run the build process
    execSync('npx spec-up-t', { stdio: 'inherit' });

    // Verify output
    const outputExists = await fs.pathExists('index.html');
    expect(outputExists).toBe(true);

    const html = await fs.readFile('index.html', 'utf8');
    expect(html).toContain('Test Specification');
    expect(html).toContain('data-term="example"');
  });
});
```

## Running Tests

### Basic Test Commands

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Run specific test file
npm test -- template-processing.test.js

# Run tests matching a pattern
npm test -- --testNamePattern="definition"
```

### Coverage Reports

Generate and view coverage reports:

```bash
npm run test:coverage
open coverage/lcov-report/index.html
```

### Debugging Tests

```bash
# Run tests with debugging
node --inspect-brk node_modules/.bin/jest --runInBand

# Run specific test with debugging
node --inspect-brk node_modules/.bin/jest --runInBand template-processing.test.js
```

## Testing Workflows

### 1. Testing New Features

When testing a new feature:

1. **Understand the requirements**
2. **Write failing tests first** (TDD approach)
3. **Implement the feature**
4. **Make tests pass**
5. **Refactor and optimize**
6. **Add integration tests**
7. **Test edge cases**

### 2. Bug Fix Testing

When testing bug fixes:

1. **Reproduce the bug** with a test
2. **Verify the test fails**
3. **Apply the fix**
4. **Verify the test passes**
5. **Add regression tests**

### 3. Performance Testing

Monitor and test performance:

```javascript
// Performance test example
test('should process large markdown file within time limit', async () => {
  const startTime = Date.now();
  
  // Process large file
  await processLargeMarkdownFile();
  
  const endTime = Date.now();
  const processingTime = endTime - startTime;
  
  expect(processingTime).toBeLessThan(5000); // 5 seconds max
});
```

## Continuous Integration

### GitHub Actions Testing

Create `.github/workflows/test.yml`:

```yaml
name: Test Suite

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [16, 18, 20]
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Upload coverage reports
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info
```

## Best Practices

### Test Organization

1. **Group related tests** using `describe` blocks
2. **Use descriptive test names** that explain what is being tested
3. **Follow the Arrange-Act-Assert pattern**
4. **Keep tests independent** and isolated
5. **Use setup and teardown** for common test data

### Test Data Management

```javascript
// Good: Use test fixtures
const testFixtures = {
  basicDefinition: '[[def: example]]',
  complexReference: '[[xref: external-spec, term-name]]',
  markdownDocument: `
# Test Document

[[def: agent]]

~ An agent is an entity.
  `
};

// Good: Create test data factories
function createTestSpec(overrides = {}) {
  return {
    title: 'Test Specification',
    spec_directory: 'spec',
    output_path: './',
    markdown_paths: ['spec-body.md'],
    ...overrides
  };
}
```

### Mocking and Stubbing

```javascript
// Mock external dependencies
jest.mock('axios');
jest.mock('fs-extra');

// Mock GitHub API calls
const mockGitHubApi = {
  getContent: jest.fn(),
  updateFile: jest.fn(),
  createFile: jest.fn()
};
```

### Assertion Patterns

```javascript
// Good assertions
expect(result).toBeDefined();
expect(result.type).toBe('definition');
expect(result.errors).toHaveLength(0);
expect(html).toContain('data-term="example"');
expect(html).toMatch(/<dt[^>]*data-term="example"[^>]*>/);

// Test error conditions
expect(() => parseInvalidTemplate()).toThrow('Invalid template syntax');
```

## Common Testing Scenarios

### 1. Template Processing Tests

```javascript
describe('Template Processing', () => {
  test('definition templates', () => {
    // Test [[def: term]] processing
  });

  test('reference templates', () => {
    // Test [[ref: term]] processing
  });

  test('external references', () => {
    // Test [[xref: spec, term]] processing
  });

  test('escaped templates', () => {
    // Test \[[def: term]] handling
  });
});
```

### 2. File Processing Tests

```javascript
describe('File Processing', () => {
  test('markdown file parsing', () => {
    // Test markdown to HTML conversion
  });

  test('image handling', () => {
    // Test image path resolution
  });

  test('file filtering', () => {
    // Test which files are processed
  });
});
```

### 3. Health Check Tests

```javascript
describe('Health Checks', () => {
  test('configuration validation', () => {
    // Test specs.json validation
  });

  test('external reference validation', () => {
    // Test external spec accessibility
  });

  test('term reference validation', () => {
    // Test term reference consistency
  });
});
```

### 4. GitHub Integration Tests

```javascript
describe('GitHub Integration', () => {
  test('repository access', () => {
    // Test repository content fetching
  });

  test('file updates', () => {
    // Test file modification via API
  });

  test('workflow automation', () => {
    // Test GitHub Actions integration
  });
});
```

## Troubleshooting

### Common Testing Issues

1. **Tests failing in CI but passing locally**:
   - Check Node.js version differences
   - Verify environment variables
   - Check file path separators (Windows vs Unix)

2. **Slow test execution**:
   - Use `--detectSlowTests` flag
   - Mock heavy operations
   - Run tests in parallel with `--maxWorkers`

3. **Flaky tests**:
   - Identify race conditions
   - Add proper async/await handling
   - Use deterministic test data

4. **Coverage issues**:
   - Check ignored files in jest config
   - Verify test file naming patterns
   - Use `--coverage` flag for detailed reports

### Debugging Test Failures

```javascript
// Add debugging output
test('should process template', () => {
  const input = '[[def: example]]';
  const result = parseTemplate(input);
  
  console.log('Input:', input);
  console.log('Result:', result);
  
  expect(result.type).toBe('def');
});

// Use Jest's built-in debugging
test('should process template', () => {
  const result = parseTemplate('[[def: example]]');
  
  // This will show detailed object comparison
  expect(result).toEqual(
    expect.objectContaining({
      type: 'def',
      term: 'example'
    })
  );
});
```

### Performance Monitoring

```javascript
// Monitor test performance
beforeEach(() => {
  global.testStartTime = Date.now();
});

afterEach(() => {
  const duration = Date.now() - global.testStartTime;
  if (duration > 1000) {
    console.warn(`Slow test detected: ${duration}ms`);
  }
});
```

## Testing Tools and Libraries

### Recommended Testing Stack

- **Jest**: Test runner and assertion library
- **Puppeteer**: Browser automation for E2E tests
- **@testing-library/jest-dom**: Enhanced DOM assertions
- **supertest**: HTTP assertion library
- **nock**: HTTP request mocking
- **tmp**: Temporary directory management

### Installation

```bash
npm install --save-dev \
  jest \
  puppeteer \
  @testing-library/jest-dom \
  supertest \
  nock \
  tmp
```

## Contributing to Testing

### Pull Request Testing Checklist

Before submitting a pull request:

- [ ] All existing tests pass
- [ ] New tests added for new functionality
- [ ] Code coverage meets requirements
- [ ] Integration tests updated if needed
- [ ] Documentation updated
- [ ] Manual testing performed

### Reporting Test Issues

When reporting testing-related issues:

1. **Provide test environment details**
2. **Include reproducible test case**
3. **Share error messages and stack traces**
4. **Suggest potential solutions**

---

This testing guide should give you a comprehensive foundation for testing Spec-Up-T. Remember that good testing is an iterative process—start with basic tests and gradually build more comprehensive coverage as you become familiar with the codebase.

For more specific information about particular components or workflows, refer to the other documentation sections in this guide.
