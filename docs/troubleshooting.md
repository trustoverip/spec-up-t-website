---
sidebar_position: 21
---

# Troubleshooting

## WSL2 users

WSL2 users are recommended to use the `bash` option rather than `PowerShell` in the terminal of Visual Studio Code.

## Node.js versions 15+

Some users have reported problems using spec-up with node versions 15+.
To pin to an older version, use NVM (Node Version Manager):

Install NVM if you haven't already. (Instructions not given here).

Then run Node.js version 14:

```
nvm install 14
nvm use 14
npm i npm@6.14.16 -g
```
