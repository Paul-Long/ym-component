const order = ['manifest', 'common', 'common-main', 'vendor', 'main'];
const mobileOrder = ['manifest', 'common', 'common-mobile', 'vendor', 'mobile'];

const toArray = (chunk) => {
  return Array.isArray(chunk) ? chunk : [chunk];
};

function getChunks(chunks, source) {
  let js = [], css = [];
  source.forEach(key => {
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
  return {js, css};
}

const render = (user, chunks) => {
  const {js = [], css = []} = getChunks(chunks, order);
  return `
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <title>YM APP</title>
  <script>
    window.sessionStorage.user = "${user}"
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

function renderMobile(user, chunks) {
  const {js = [], css = []} = getChunks(chunks, mobileOrder);
  return `
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <link rel="shortcut icon" href="/favicon.ico">
  <title>YM MOBILE</title>
  <script>
    window.sessionStorage.user = "${user}"
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

export default (req, chunks) => {
  const url = req.originalUrl;
  if (url.startsWith('/mobile')) {
    return renderMobile(req.session.user, chunks);
  }
  return render(req.session.user, chunks);
}