function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('A string original é: "' + stringToSplit + '"');
  console.log('O separador é: "' + separator + '"');
  console.log('O array tem ' + arrayOfStrings.length + ' elementos: ' + arrayOfStrings.join(' / '));
}

var tempestString = 'Oh brave new world that has such people in it.';
var monthString = "Laranja,Verde";

var space = ' ';
var comma = ',';

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
console.log(typeof(monthString))