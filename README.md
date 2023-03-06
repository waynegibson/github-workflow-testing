# github-workflow-testing

The Github workflow testing space. It uses turborepo, and Nuxt 3 project to lint, typecheck, build and test the Github workflow.

## Apps

- @project/nuxt-website

## Packages

- @project/tsconfig
- @project/eslint-config-antfu

## Commands

To run a specific app without running all apps in parallel.

### Apps

```console
pnpm web:nuxt
```
### Maintenance

- Kill-port

  To kill a server process after the server was left running when the terminal is closed.

  ```console
  npx kill-port --port <NUMBER>
  ```
  or to kill multiple ports

  ```console
  npx kill-port --port <NUMBER>,<NUMBER>,<NUMBER>
  ```
## Contributors

- [Wayne Gibson](https://github.com/waynegibson)
