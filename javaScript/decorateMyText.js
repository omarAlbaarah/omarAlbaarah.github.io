window.onload = function(){
    "use strict";
    // put all of your code here
    var BiggerDecorationsBtn = document.getElementById("BiggerDecorations");
    var blinkCheckBox = document.getElementById("bling");
    BiggerDecorationsBtn.onclick = textAreaClick;
    blinkCheckBox.onclick = checkBoxChange;
    
function textAreaClick(){
    alert("hello");
    
    setInterval(function(){  
        var myText = document.getElementById("txtArea");
        var originFontSize = window.getComputedStyle(myText, null).getPropertyValue('font-size');
        var fontSize = parseInt(originFontSize);
        myText.style.fontSize = (fontSize + 2) + 'pt';

    }, 500);
}
function checkBoxChange(){
    alert("bling check box is clicked!");

    if(blinkCheckBox.checked){
        document.getElementById("txtArea").style.fontWeight = "bold";
        document.getElementById("txtArea").style.color = "green";
        document.getElementById("txtArea").style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('images/hundred-dollar-bill.jpg')";

    }
    else{
        document.getElementById("txtArea").style.fontWeight = "normal";
        document.getElementById("txtArea").style.color = "initial";
        document.getElementById("txtArea").style.textDecoration = "initial";
        document.body.style.backgroundImage = "initial";
    }
}
}