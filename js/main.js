
    function getRandomPosition(element) {
      var x = document.body.offsetHeight-element.clientHeight;
      var y = document.body.offsetWidth-element.clientWidth;
      var randomX = Math.floor(Math.random()*x);
      var randomY = Math.floor(Math.random()*y);
      console.log(x);
      console.log(y);
      return [randomX,randomY];
    }


    function generatedDiv(){

         var div = document.createElement('div');
      var col = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      var  width = (Math.floor(Math.random()*600));
      var height = (Math.floor(Math.random()*600));

      console.log('width'+width);
      console.log('height'+height);

      var xy = getRandomPosition(div);
      div.style.background = col;
      div.style.width = 300 ;
      div.style.height = 400 ;
      document.body.appendChild(div);
      div.style.top = xy[0] + 'px';
      div.style.left = xy[1] + 'px';

     
    }

function findPosX(obj) {
    var curleft = 0;
    if (obj.offsetParent) {
        while (1) {
            curleft+=obj.offsetLeft;
            if (!obj.offsetParent) {
                break;
            }
            obj=obj.offsetParent;
        }
    } else if (obj.x) {
        curleft+=obj.x;
    }
    return curleft;
}
 
function findPosY(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        while (1) {
            curtop+=obj.offsetTop;
            if (!obj.offsetParent) {
                break;
            }
            obj=obj.offsetParent;
        }
    } else if (obj.y) {
        curtop+=obj.y;
    }
    return curtop;
}


window.onload = function(){

        var btn = document.querySelector('.generated-js');
        var div1 = document.getElementById("main-page");
        var div = document.getElementsByTagName('div');

        btn.addEventListener("click", generatedDiv);



        document.addEventListener("mousemove", function (e) {
              var activeEl = e.target;
              var offsetX = 0;
              var offsetY = 0;
              var mY = 200;
              var x = findPosX(activeEl);
              var y = findPosY(activeEl);
              var height = activeEl.clientHeight;
                 
                var res = (y+height);
               //var elLeftCoord = activeEl.offsetLeft;
               //var elTopCoord = activeEl.offsetTop;


            if (activeEl.tagName.toLowerCase()  === 'div') { 
                if(activeEl) {
                 
                
/*//check if move down or up and set style.top
                    if (e.pageY < res) { //up

                      activeEl.style.top = (e.clientY - offsetY)+'px';
                      
                    } 

                    if (e.pageY > res ) { //down
                         activeEl.style.top = (e.pageY - offsetY)+'px';
            
                  } */
                 
                  activeEl.style.top = (e.clientY - offsetY)+'px';
                  activeEl.style.left = (e.clientX - offsetX)+'px';

                }

            }

    });
     
}
