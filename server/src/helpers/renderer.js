import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import Routes from '../client/Routes'

export default (req, store) => {
  // Context object contains the results of the render. In a static server environment
  // we can't change the app state. Instead, we use the context prop to find out what
  // the result of rendering was. If we find a context.url, then we know the app redirected.
  // This allows us to send a proper redirect from the server.
  const context = {}

  // JSX is given to renderToString to be passed as content to fill the html template
  // for initial SSR HTML.
  // renderRoutes takes the Routes array and returns the specified component.
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  )

  // Todo: Replace this html template with an actual index.html and replace stuff...
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
