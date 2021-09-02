            var start = new Date().getTime();
            
            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

            function createShape(){
                
                var top = Math.random()*400;
                var left = Math.random()*600;
                var height = Math.random()*300 + 20;
                
                if(Math.random() > 0.5){
                    document.getElementById("shape").style.borderRadius = "50%";
                }
                else{
                    document.getElementById("shape").style.borderRadius = "0";
                }
                
                document.getElementById("shape").style.backgroundColor = getRandomColor();
                document.getElementById("shape").style.top = top+"px"; 
                document.getElementById("shape").style.left = left+"px"; 
                document.getElementById("shape").style.height = height+"px"; 
                document.getElementById("shape").style.width = height+"px"; 
                document.getElementById("shape").style.display = "block";
                
                start = new Date().getTime();
            }

            function againCreate(){
                setTimeout(createShape,Math.random()*2000);
            }
            
            againCreate();
            var bestT = 10000;
            document.getElementById("shape").onclick = function(){
                var end = new Date().getTime();
                document.getElementById("shape").style.display = "none";
                var timeTaken = (end-start)/1000; 
                document.getElementById("timeTell").innerHTML = timeTaken+'s';
                document.getElementById("bestTime").innerHTML = bestT+'s';
                if(timeTaken < bestT){
                    bestT = timeTaken;
                }
                againCreate();
            }