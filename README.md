## Install

Start by installing [Google Clasp](https://github.com/google/clasp/)

Once installed, either `clasp clone` your Google Sheets Apps Script file, or `clasp create` a new standalone Apps Script project.

In your `.clasp.json` file, add `"rootDir": "dist/prod"` as a parameter.

Finally, run `npm install` and you're good to go.

## Scripts

_build_

- Makes a dev build in `dist/local`

_local_

- Runs the current dev build

_prod_

- Makes a production build in `dist/gas`

_gas_

- Packages your Apps Script files into the AppLib library module (from lib.bundle.js) so you can utilize your npm packages server-side as well.

_deploy_

- Bundles prod and gas
- Removes the extra app.bundle.js file (it's inlined into index.html)
- Pushes your code to Apps Script
- Deploys a new version
- Launches the Webapp selector

## Extras

I've included the basic setup for [Material-UI](https://material-ui.com/) and React Router.
