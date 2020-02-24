

var id = 0;
var seconds = 60;

function changeText() {
    //  document.getElementById('text').innerHTML = "This text is changed using JS";
  
      document.getElementById('text').innerHTML = seconds + " seconds left";
      seconds--;
  }
  

function start() {
    //id = window.setTimeout(changeText,5000);
    id = window.setInterval(changeText,1000);
}

function stop(){
    window.clearTimeout(id);
}


