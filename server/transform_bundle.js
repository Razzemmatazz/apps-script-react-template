const FileSystem = require("fs");
const data = FileSystem.readFileSync("dist/prod/lib.bundle.js", "utf8");
const newValue = data.replace(
  "setTimeout(function () { return resolve(); }, 0);",
  "Utilities.sleep(1); return resolve();"
);
FileSystem.writeFileSync("dist/prod/lib.bundle.js", newValue, "utf-8");
console.log("Bundle updated with GAS-compliant code");
