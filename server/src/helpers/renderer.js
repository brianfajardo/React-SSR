import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import Router from '../client/Router'

export default req => {
  /* Context object contains the results of the render. In a static server environment
     we can't change the app state. Instead, we use the context prop to find out what
     the result of rendering was. If we find a context.url, then we know the app redirected.
     This allows us to send a proper redirect from the server.

     Passing the relative path (req.path) the server received to StaticRouter's location property.
     This will let StaticRouter decide which components to show on the screen. */
  const context = {}

  /* JSX is given to renderToString to be passed as content to fill the html template for initial request. */
  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      <Router />
    </StaticRouter>
  )

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
