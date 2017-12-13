const order = ['manifest', 'common', 'vendor', 'main'];
const mobileOrder = ['manifest', 'common', 'vendor', 'mobile'];
const toArray = (chunk) => {
  return Array.isArray(chunk) ? chunk : [chunk];
};
const render = (req, res, next) => {
  const chunks = res.locals.webpackStats.toJson().assetsByChunkName || {};
  let js = [], css = [];
  order.forEach(key => {
    let chunk = chunks[key] || [];
    chunk = toArray(chunk);
    chunk.forEach(path => {
      if (path.endsWith('.js')) {
        js.push(path);
      } else if (path.endsWith('.css')) {
        css.push(path);
      }
    });
  });
  return `
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <title>YM APP</title>
  <script>
    window.sessionStorage.user = "${req.session.user}"
  </script>
  ${css.map(path => `<link rel="stylesheet" href="/${path}" />`).join('\n') }
  </head>
  <body>
    <div id="app"></div>
    ${js.map(path => `<script src="/${path}"></script>`).join('\n')}
  </body>
</html>		
  `
};

export function renderMobile(req, res, next) {
  const chunks = res.locals.webpackStats.toJson().assetsByChunkName || {};
  console.log(chunks);
  let js = [], css = [];
  mobileOrder.forEach(key => {
    let chunk = chunks[key] || [];
    chunk = toArray(chunk);
    chunk.forEach(path => {
      if (path.endsWith('.js')) {
        js.push(path);
      } else if (path.endsWith('.css')) {
        css.push(path);
      }
    });
  });
  return `
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <link rel="shortcut icon" href="/favicon.ico">
  <title>YM MOBILE</title>
  <script>
    window.sessionStorage.user = "${req.session.user}"
  </script>
  <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
  <script>
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
      }, false);
    }
    if(!window.Promise) {
      document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
    }
  </script>
  ${css.map(path => `<link rel="stylesheet" href="/${path}" />`).join('\n') }
  </head>
  <body>
    <div id="mobile"></div>
    ${js.map(path => `<script src="/${path}"></script>`).join('\n')}
  </body>
</html>		
  `
}

export default render;