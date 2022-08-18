if (window.XMLHttpRequest) { // mozilla, safari, etc.
  request = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
  try {
    request = new ActiveXObject('Msxml2.XMLHTTP');
  }
  catch (e) {
    try {
      request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    catch (e) {}
  }
}

// open and send
request.open('GET', 'https://url.com/some/url', true);
request.send(null);
