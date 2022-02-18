// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  swcMinify: true,
  compiler: {
    styledComponents: true,
    displayName: !isProd,
    removeConsole: {
      exclude: ['error'],
    },
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
