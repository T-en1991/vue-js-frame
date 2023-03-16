module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    vueFeatures: {
      filter: false // Don't!!
    }
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prefer-promise-reject-errors': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-deprecated-v-on-native-modifier': 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'vue/no-deprecated-slot-attribute': 0,
    'vue/no-deprecated-dollar-listeners-api': 0
  }
}
