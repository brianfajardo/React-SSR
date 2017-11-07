import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { Helmet } from 'react-helmet'
import serialize from 'serialize-javascript'

import Routes from '../client/Routes'

export default (req, store, context) => {
  // JSX is given to renderToString to be passed as content to
  // fill the html template for initial SSR HTML. renderRoutes
  // takes the Routes array and returns the specified component.
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  )

  // Call Helmet.renderStatic after renderToString to get the head
  // data for use in the HTML template. Helmet returns an object.
  const helmet = Helmet.renderStatic()

  // Preserving server store/state by adding JSON data to the window.
  return `
    <html>

      <head>
        <meta charset="utf-8" />
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
      </head>

      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
      </body>

    </html>
  `
}
