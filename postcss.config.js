var plugins = [];
const purgecss = require('@fullhuman/postcss-purgecss')


plugins.push(require("autoprefixer"));

if (process.env.HUGO_ENVIRONMENT === 'production') {
  plugins.push(purgecss( {
       content: [
        '**/*.html',
        '**/*.md',
       ],
       whitelist: [
        'blockquote',
       ]
  }))
}




module.exports = {    
  plugins: plugins 
}
