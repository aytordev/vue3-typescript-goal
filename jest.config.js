module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  testMatch: ['**/tests/unit**/*.spec.[jt]s?(x)', '**/*/*.unit.[jt]s?(x)'],
};
