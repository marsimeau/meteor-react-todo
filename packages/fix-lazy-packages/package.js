/* global Package */

Package.describe({
  name: 'fix-lazy-packages',
  summary: 'Fixes lazy packages imports while using webpack',
  version: '0.0.1'
})

Package.onUse(function (api) {
  api.use(['ecmascript', 'react-meteor-data'])
  api.addFiles(['main.js'])
})
