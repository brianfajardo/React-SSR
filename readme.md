# 🤖 Rendering React on the Server

Server-side rendering (SSR) of React definitely adds a significant layer, a whole 'nother level in comparison to client-side rendering (CSR). From setting up your server development environment to managing two seperate levels of Redux store, server-side rendering does have it's drawbacks, but it's benefits are pretty significant.

## 🖥 Client-side rendering flow example:
 1. Browser's initial `GET` request to the server
 2. Server response of an `index.html` containing a script tag
 3. Browser request to the server to fetch the production `bundle.js` (React code)
 4. Server response of sending `bundle.js` to the user's browser
 5. Browser request to the server for data/JSON from the backend
 6. Server response with JSON data

 As you can see, typical CSR requires three round trips to the server. At the same time, nothing is actually rendered in the Browser until the HTML, bundle.js and data are done loading. In terms of real world examples, the user is left waiting for all requests to finish and this may take a while, especially for mobile users with slower connection speeds. So it's in our best interest to optimize and efficiently condense this loading process to be able to push visible content to the user ASAP! This is where SSR steps in.

 ## 📲 Server-side rendering flow example:
 1. Browser's initial `GET` request to the server
 2. In the server:
    - React app is generated in memory
    - Components fetch data to update state
    - React app is rendered in `renderToString`
    - String version of the app is injected into an HTML template
3. Server sends the HTML template back to the browser and visible content is now viewable.
4. Second request to the server to fetch `bundle.js` to hydrate (bind event handlers) the React 'skeleton'

In short, SSR = faster load times = increased user satisfaction! I also came across this article online, although outdated (2012), it was true at one point...

"How One Second Could Cost Amazon $1.6 Billion in Sales"

https://www.fastcompany.com/1825005/how-one-second-could-cost-amazon-16-billion-sales