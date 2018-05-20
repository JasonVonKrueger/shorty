// UI Action

function getShortURL() {
  var ga = new GlideAjax('URLShortener');
  ga.addParam('sysparm_name', 'getShortURL');
  ga.addParam('longurl', window.location.href);
  ga.getXML(showShortURL);
 
  function showShortURL(response) {
    var answer = response.responseXML.documentElement.getAttribute("answer");
	//var answer = JSON.parse(response.responseXML.documentElement.getAttribute("answer"));
	// var responseBody = new JSON().decode(response.getBody());  	  
   
	  
	  alert(answer); 
	// alert(ga.requestObject.response);
	// {"result":{"shortURL":"https://claytondev.service-now.com/uak4"}}	  
  }	
	
}

// https://claytondev.service-now.com/api/clstu/shorty?longurl