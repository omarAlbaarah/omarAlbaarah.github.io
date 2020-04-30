function PrintProduct(){
    var text = "";
    text += "Product number is: "+$("#ProductNumber").val()+"\n";
    text += "Product name is: "+$("#name").val()+"\n"; 
    text += "price is: "+$("#price").val()+"\n";
    text += "Quanity in stock is: "+$("#QuanityInStock").val()+"\n";
    text += "supplier is: "+$("#supplier").val()+"\n";
    text += "Supplied date is: "+$("#suppliedDate").val()+"\n";
    alert(text);
}
