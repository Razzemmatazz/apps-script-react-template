## Install

Start by installing [Google Clasp](https://github.com/google/clasp/)

Once installed, either `clasp clone` your Google Sheets Apps Script file, or `clasp create` a new standalone Apps Script project.

In your `.clasp.json` file, add `"rootDir": "dist/prod"` as a parameter.

Finally, run `npm install` and you're good to go.

## Scripts

_launch:local_

- Runs the current dev build

_launch:prod_

- Uses `clasp` to launch the webapp picker and open the selected version in the browser

_build:local_

- Builds a dev version in `dist/local`

_build:prod_

- Builds a prod version in `dist/prod`

_build:gas_

- Packages your Apps Script files into the AppLib library module (from lib.bundle.js) so you can utilize your npm packages server-side as well. Builds in `dist/prod`.

_redeploy_

- Allows you to redeploy to the same version ID. Useful for keeping a static URL.

_deploy:gas_

- Pushes the latest `dist/prod` via `clasp` to your Apps Script project

_deploy:prod_

- Bundles `client` into `app.bundle.js` and `server` into `lib.bundle.js`
- Inlines `app.bundle.js` into `index.html`
- Pushes your code to Apps Script
- Deploys a new version
- Launches the Webapp selector

## Extras

I've included a basic setup for [Material-UI 6](https://material-ui.com/) and React Router 6.
