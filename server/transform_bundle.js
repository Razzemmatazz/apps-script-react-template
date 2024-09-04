const fs = require("fs");

const bundleFile = "dist/prod/lib.bundle.js";
const encoding = "utf8";

const data = fs.readFileSync(bundleFile, encoding);
const newData = data.replace(
  "setTimeout(function () { return resolve(); }, 0);",
  "Utilities.sleep(1); return resolve();"
);
fs.writeFileSync(bundleFile, newData, encoding);

// Delete app.bundle.js
fs.unlinkSync("dist/prod/app.bundle.js");

console.log("Bundle updated with GAS-compliant code");
