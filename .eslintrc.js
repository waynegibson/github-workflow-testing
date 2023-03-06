module.exports = {
  root: true,
  extends: ['@project/eslint-config-antfu'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
}
