// URL shortener
// scripted REST part

(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
  var uri = request.uri;
  var url = request.url;
var longURL = decodeURIComponent(request.queryParams.longurl);
  var pos = longURL.indexOf("/",9);
  var host = longURL.slice(0,pos);
  var path = longURL.slice(pos,longURL.length);	

var shortURL = longURL.replace(path, '/' + ranStr(4));
  
updateTable(longURL, shortURL);

  return {
  "shortURL": shortURL
  };
  
function ranStr(length) {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyz';

  if (! length) {
    length = Math.floor(Math.random() * chars.length);
  }

  var str = '';
  for (var i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  
  return str;
}

function updateTable(longurl, shorturl) {
  var rec = new GlideRecord('u_url_shortener');
  
  rec.initialize();
  rec.u_shorturl = shorturl;
  rec.u_longurl = longurl;
  rec.insert();	  
}

})(request, response);