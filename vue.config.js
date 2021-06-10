const pkg = require('./package.json')
const title = 'Style Check'
module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      entry: 'src/main.js',
      title: title,
      encodedTitle: encodeURI(title),
      description: pkg.description,
      author: pkg.author.name,
      homepage: pkg.homepage
    },
  }
}
