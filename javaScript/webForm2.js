function PrintProduct(){
    var text = "";
    text += "Product number is: "+document.getElementById("ProductNumber").value+"\n";
    text += "Product name is: "+document.getElementById("name").value+"\n"; 
    text += "price is: "+document.getElementById("price").value+"\n";
    text += "Quanity in stock is: "+document.getElementById("QuanityInStock").value+"\n";
    text += "supplier is: "+document.getElementById("supplier").value+"\n";
    text += "Supplied date is: "+document.getElementById("suppliedDate").value+"\n";
    alert(text);
}
function myFunction(){
    var x = document.getElementById("frm");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "<br>";
    }
    alert(text);
}