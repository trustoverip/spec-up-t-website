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
sonar.token=SONAR_TOKEN
sonar.exclusions=<comma-separated-list-of-paths-to-exclude>
```

- Replace the placeholders with your actual values.
- Use the environment variable `SONAR_TOKEN` for security.

Your `sonar-project.properties` file should be committed to git.

Why?

- It contains project-specific SonarQube/SonarCloud configuration.
- It allows all contributors and CI systems to use the same analysis settings.
- It does not contain sensitive information (as long as you do not put your real token in it).

Important:

- Do not commit your actual SonarCloud token.

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

You can find the results of npx sonarqube-scanner in your browser at the dashboard URL shown in your report-task.txt file in the `.scannerwork` directory.

This dashboard shows the Quality Gate status, code issues, duplications, coverage, and more.

:::note
The scanner output in your terminal only shows the upload status, not the full analysis results.
:::

When you run `npx sonarqube-scanner`, your local analysis results are uploaded to the remote SonarCloud server. The dashboardUrl in `.scannerwork/report-task.txt` points to the web dashboard where you can view the results of your latest analysis for your project.

Add .scannerwork to your `.gitignore` file to ensure it is not tracked by git:

```
.scannerwork/
```

## Troubleshooting

```bash
ERROR] ScannerEngine: You are running manual analysis while Automatic Analysis is enabled. Please consider disabling one or the other.
[ERROR] Bootstrapper: An error occurred: Error: Scanner engine failed with code 1
```

You are seeing this error because SonarCloud Automatic Analysis is enabled for your project, but you are also trying to run a manual analysis with the scanner. SonarCloud does not allow both at the same time.

How to fix:

1. Disable Automatic Analysis on SonarCloud:

   - Go to your project on SonarCloud.
   - Navigate to Project Settings > Analysis Method.
   - Switch from Automatic Analysis to CI-based analysis (manual).
   - Save your changes.

2. Now you can run the scanner manually:

   - Make sure you are in your project root.
   - Run: `npx sonarqube-scanner`
   - The error should be gone.
   - 