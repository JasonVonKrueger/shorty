// UI Action

function getShortURL() {
  var ga = new GlideAjax('URLShortener');
  ga.addParam('sysparm_name', 'getShortURL');
  ga.addParam('longurl', window.location.href);
  ga.getXML(showShortURL);
 
  function showShortURL(response) {
    var answer = response.responseXML.documentElement.getAttribute("answer");
    alert(answer); 
    // one day I'll use a proper notification  
  }	
	
}
