// script include

var URLShortener = Class.create();
URLShortener.prototype = Object.extendsObject(AbstractAjaxProcessor, {	
	getShortURL:function() {
		var message = '';
		var longurl = this.getParameter('longurl');  
		
		var r = new sn_ws.RESTMessageV2('URL Shortener', 'getShortURL');
		r.setStringParameter("longurl", longurl);
		
		var response = r.execute();
		response.waitForResponse(60);
		var responseBody = response.getBody();
		var httpStatus = response.getStatusCode();
		message = responseBody;
		
		return message;	
	}
	
});
