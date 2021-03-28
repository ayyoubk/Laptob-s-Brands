var help = confirm("Hello, I am here to help you, would you like to continue?");
if (help == true) {
    var nn = prompt ('Can you tell me your nickname to help you?');
    document.write('<h3>' + 'Welcome '+ nn +'</h3>');
} else {
    alert('Welcome to the site, but now you will serve yourself :)');
}
var favBrands=prompt('What is your favorite brand?');
while (favBrands !== 'hp'&& favBrands !== 'acer'&& favBrands !== 'dell'&& favBrands !== 'lenovo'&& favBrands !== 'asus'&& favBrands !== 'apple') {
    favBrands=prompt('Again, what is your favorite brand from the list we provide?')
};
var wantPic = confirm ('Do you want to see some suggested offers?');
if (wantPic == true) {
    var offersNum = prompt('How many offers would you like to see?');
    for (var i =1;i<=offersNum;i++){
        document.write('<img src="https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_256,w_256/v1605129693/Croma%20Assets/Computers%20Peripherals/Laptop/Images/8935709409310.png">')
    };
} else {
    alert ('Well, feel free to browse our products and offers!')
}