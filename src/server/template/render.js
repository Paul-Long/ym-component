const order = ['manifest', 'common', 'vendor', 'main'];
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
<meta http-equiv="content-type" content="text/html;charset=utf-8">
  <title>YM APP</title>
  ${css.map(path => `<link rel="stylesheet" href="/${path}" />`).join('\n') }
  </head>
  <body>
    <div id="app"></div>
    ${js.map(path => `<script src="/${path}"></script>`).join('\n')}
  </body>
</html>		
  `
};
export default render;