function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function doGet(e) {
  return HtmlService.createTemplateFromFile("index").evaluate();
}

function doPost(e) {
  return ContentService.createTextOutput(e);
}

function test() {
  console.log(AppLib.getRandomNumbers());
}
