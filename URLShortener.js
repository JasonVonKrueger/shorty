// script include

var URLShortener = Class.create();
URLShortener.prototype = Object.extendsObject(AbstractAjaxProcessor, {	
	getShortURL:function() {
		var message = '';
		var longurl = this.getParameter('longurl');  
		
		//try { 
			var r = new sn_ws.RESTMessageV2('URL Shortener', 'getShortURL');
			r.setStringParameter("longurl", longurl);
			//r.setMIDServer('ServiceNowMid')
			var response = r.execute();
			response.waitForResponse(60);
			var responseBody = response.getBody();
			var httpStatus = response.getStatusCode();
			message = responseBody;
		
         //var j = new JSON();
         //var res = {
         //          sysparm_user_name: 'fred',
         //          answer: 'bob'
         //};

         //return j.encode(res);		

		
		
		
		//}
		//catch(ex) {
		// message = ex.getMessage();
		//}
		
		 return message;	
	}
	
});