   var startTime;
            var endTime;
            var timeFinal;



            function getRandomColor() {

                var letters = "0123456789ABCDEF".split('');
                var color = "#";
                for (var i = 0; i < 6; i++) {
                  color += letters[Math.round(Math.random() * 15)];
                }
                return color;
            }




            function makeShapeAppear() {
                if (Math.random() > 0.5) {
                    
                    document.getElementById("shape").style.borderRadius = "100px";
                    
                    
                } else {
                    
                    document.getElementById("shape").style.borderRadius = "0px";
                }
                
	      				var top = Math.random();
				       		top = top*300;
				      	var left = Math.random();
						      left = left*500; 
						 
		document.getElementById("shape").style.top = top + "px";
		document.getElementById("shape").style.left = left + "px"; 				      	
		document.getElementById("shape").style.backgroundColor=getRandomColor();
                document.getElementById("shape").style.display = "block";
                startTime=new Date().getTime();
                
            }
          

               
               
            function appearAfterDelay(){
                
                setTimeout(makeShapeAppear, Math.random() * 2000);
               
            }
            
            appearAfterDelay();

            document.getElementById("shape").onclick = function(){
               
                document.getElementById("shape").style.display = "none";
                
                endTime = new Date().getTime();
                
                timeFinal = endTime - startTime;
                
                timeFinal=timeFinal/1000
                
                document.getElementById("timeTaken").innerHTML = timeFinal + " seconds";
                
                appearAfterDelay();
            };  
            
            
