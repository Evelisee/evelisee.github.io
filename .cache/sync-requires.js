const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-post-jsx": hot(preferDefault(require("/Users/evelise.dib/Documents/projects/evelisee.github.io/src/templates/post/post.jsx"))),
  "component---src-templates-tags-index-jsx": hot(preferDefault(require("/Users/evelise.dib/Documents/projects/evelisee.github.io/src/templates/tags/index.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/evelise.dib/Documents/projects/evelisee.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-index-jsx": hot(preferDefault(require("/Users/evelise.dib/Documents/projects/evelisee.github.io/src/pages/404/index.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/evelise.dib/Documents/projects/evelisee.github.io/src/pages/index.jsx"))),
  "component---src-pages-resume-jsx": hot(preferDefault(require("/Users/evelise.dib/Documents/projects/evelisee.github.io/src/pages/resume.jsx"))),
  "component---src-pages-tags-index-jsx": hot(preferDefault(require("/Users/evelise.dib/Documents/projects/evelisee.github.io/src/pages/tags/index.jsx")))
}

