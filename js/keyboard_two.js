window.cl = function(a,b) {
  console.log(a + ":" + b);
}

window.keyBoardWuzClkt = function(thz,key) {
  var h, textEditorForKeyBoard;
      h = thz.innerHTML;
      textEditorForKeyBoard = document.getElementById("idOutPutFromKeyboard");
  var currentContent = textEditorForKeyBoard.innerHTML; 
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute('width', '28');
      svg.setAttribute('height', '20');
      svg.innerHTML = h;
      svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
      textEditorForKeyBoard.appendChild(svg);
}


window.tgglTheKeyboard = function() {
  var kbrd = document.getElementsByClassName("keyboard")[0];
  kbrd.classList.toggle("keyboard--hidden");
}



