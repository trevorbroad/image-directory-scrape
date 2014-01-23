javascript:void(				
    (function () {
      var imgDirectory = prompt('What directory do you want to scrape?'),
    	 imgArray = [],
    	 target = document.getElementsByTagName('img'),
    	 regex_string = imgDirectory + '.*',
    	 regex_dir = RegExp(regex_string);      	    	
    	for (var i = 0; i < target.length; i++) {
    		var src = target[i].getAttribute('src');     		
    		if ( src == src.match(regex_dir)) {    		
    			imgArray.push(target[i].getAttribute('src'));  				    		    			
    		} 
    	}
    	setTimeout(function () {
        console.log(imgArray);
      var link,
        fileName;
        e;        
        for (var i = 0; i < imgArray.length; i++) {                   
              link = document.createElement('a');
              link.href = imgArray[i];
       
              fileName = imgArray[i].substring(imgArray[i].lastIndexOf('/') + 1, imgArray[i].length);
              link.download = fileName;
   
              e = document.createEvent('MouseEvents');
              e.initEvent('click' ,true ,true);
              link.dispatchEvent(e);
                     
          window.open(imgArray[i] + '?download');           
          } 
      }, 1000);		   	    		
    }) ()    
);