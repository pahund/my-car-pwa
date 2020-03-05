# My Car PWA

A little demo web application that shows how you can create a website that fetches data from an API and that
users can access again at a later point, even if they don't have an internet connection of the web server
is offline.

## How to Run

Install npm dependencies:

```
yarn
```

Build production bundles:

```
yarn build
```

Add global Yarn command `serve`:

```
yarn global add serve
```

Use `serve` command to run a web server with the demo app:

```
serve -s build
```

## How to Test

When the local server is running, go to the web page:

- http://localhost:5000/

A beautiful designed list of cars for sale should be shown. The data is fetched from this API:

- https://fakecarsapi.appspot.com/

Now, let's try it offline:

- kill the server you started with `serve` by hitting Ctrl+C
- disconnect your computer from the internet

If you hit the reload button in the browser now, the page with the cars will still be displayed.

## How It Works

Create React App already has caching through service workers built in, if you enable it by changing `unregister` to `register` in the index.js module.

By default, however, only JavaScript and CSS bundles are cached.

For our demo to work, we also need to cache the car images, the HTML page and the data returned from the Fake Cars API.

This article explains how to override the default service worker setup of CRA:

* https://www.freecodecamp.org/news/how-to-build-a-pwa-with-create-react-app-and-custom-service-workers-376bd1fdc6d3/

In the root of this repository, you can see the two files that make the caching of the demo happen:

* `service-worker.tmpl`
* `sw-precache-config.js`

## License

[MIT licensed](LICENSE)

Copyright © 2020 mobile.de GmbH
