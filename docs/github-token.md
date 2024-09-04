---
sidebar_position: 2
---

# GitHub Token

## Intro

Because GitHub.com is where all specifications live, it is essential to have good access to it. This goes under the hood through the GitHub API (Application Programming Interface). You have access to this, but soon you run into a limit. To make more requests, you need a token. Here's how to get such a token and how to apply it.

## Get the token

To obtain a Personal Access Token (PAT) for the GitHub API, follow these steps:

- Log in to GitHub: Go to [GitHub](https://github.com) and log in to your account.
- Navigate to Settings:
  - Click on your profile picture in the upper-right corner.
  - Select "Settings" from the dropdown menu.
- Access Developer Settings:
  - In the left sidebar, scroll down and click on "Developer settings".
- Generate a New Token:
  - Click on "Personal access tokens".
  - Click on "Generate new token".
- Configure the Token:
  - Give your token a descriptive name.
  - Select the “repo” scope.
  - Click "Generate token" at the bottom of the page.
- Copy the Token:
  - Copy the generated token and store it securely. You won't be able to see it again once you leave the page.
- Apply the token:
  - Paste the token in the `.env` file of your Spec-Up-T installation.

The token will now be used when making requests to the GitHub API.
