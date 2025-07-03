---
sidebar_position: 1
---

# SonarQube

SonarQube is a leading open-source platform for continuous inspection of code quality. It provides automated analysis of source code to identify bugs, vulnerabilities, code smells, and security hotspots. Integrating SonarQube into your development workflow helps ensure high code quality, maintainability, and adherence to best practices throughout your project lifecycle.

## Configuring SonarQube in Visual Studio Code (macOS)

Follow these steps to set up SonarQube analysis in VS Code on a modern macOS system:

### 1. Configure Connected Mode

Create a `.sonarlint/connectedMode.json` file in your project root with the following content:

```json
{
  "sonarCloudOrganization": "<your-organization>",
  "projectKey": "<your-project-key>",
  "region": "<your-region>"
}
```

Replace the placeholders with your actual SonarCloud organization, project key, and region.

### 2. Create `sonar-project.properties`

Add a `sonar-project.properties` file to your project with the following configuration:

```
sonar.projectKey=<your-project-key>
sonar.organization=<your-organization>
sonar.host.url=https://sonarcloud.io
sonar.token=${SONAR_TOKEN}
sonar.exclusions=<comma-separated-list-of-paths-to-exclude>
```

- Replace the placeholders with your actual values.
- Use the environment variable `${SONAR_TOKEN}` for security.

### 3. Set Up Environment Variable

Add your SonarQube token to your shell environment by editing your `~/.zshrc` file:

```bash
export SONAR_TOKEN=<your-sonar-token>
```

After saving the file, reload your shell configuration:

```bash
source ~/.zshrc
```

Your SonarQube setup is now complete. You can now run code analysis and benefit from continuous feedback on code quality directly within your development environment.

To initiate a code quality analysis, run the following command in your project directory:

```bash
npx sonarqube-scanner
```
