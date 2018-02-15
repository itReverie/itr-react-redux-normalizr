module.exports = {
  validString : function (text) {
      let invalid;
       //Check that the object is a string so we can actually do a to lower case
    if (typeof text !== 'string') {
      return invalid;
    }

    if (text !== undefined || !isNaN(text)) {
     return true;
    }

    return invalid;
  },
  //sets inputs to lower case so when making comparisons we get accurate results
  toLowerCase: function (text) {
    //Check that the object is a string so we can actually do a to lower case
    if (typeof text !== 'string') {
      throw (new Error(`Failed trying to lower case a string.Entry value was: ${text}.`));
    }

    let textToLower = '';
    if (text !== undefined || !isNaN(text)) {
      textToLower = text.trim().toLowerCase();
    }
    else {
      throw (new Error(``));
    }

    return textToLower;
  },
  //sets the output string in title case for a nice display
  toTitleCase: function (text) {
    if (typeof text !== 'string') {
      throw (new Error(``));
    }
    return text.toLowerCase().split(' ').map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
}