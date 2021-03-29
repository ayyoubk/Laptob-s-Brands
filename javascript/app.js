function offers(){
    var wantOffesrs = confirm ('Do you want to see some suggested offers?');
    if (wantOffesrs == true) {
        var favBrands=prompt('What is your favorite brand?');
        while (favBrands !== 'hp'&& favBrands !== 'acer'&& favBrands !== 'dell'&& favBrands !== 'lenovo'&& favBrands !== 'asus'&& favBrands !== 'apple') {
         favBrands=prompt('Again, what is your favorite brand from the list we provide?')
        };
        var offersNum = prompt('How many offers would you like to see?');
        if (favBrands === 'hp') {
        for (var i =1;i<=offersNum;i++){
            document.write('<img src="https://www.city.co.ke/wp-content/uploads/2020/09/HP-EliteBook-840-G3-Core-i7-4GB-1TB-HDD-14%E2%80%B3-laptop-EX-UK-city-communication.jpg">')
        }
        }else if (favBrands === 'acer'){
        for (var i =1;i<=offersNum;i++){
            document.write('<img src="https://s.cdnshm.com/catalog/be_nl/t/504374578/acer-aspire-a515-55g-589v.jpg">')
        }
        }else if (favBrands === 'asus'){
        for (var i =1;i<=offersNum;i++){
            document.write('<img src="https://i.pinimg.com/originals/b8/73/c4/b873c4a4ae3d71b2d0e9d3d2ab64e38f.jpg">')
        }
        }else if (favBrands === 'dell'){
        for (var i =1;i<=offersNum;i++){
            document.write('<img src="http://cdna.pcpartpicker.com/static/forever/images/product/4c30b068292df4a62805af729815e06a.256p.jpg">')
        }
        }else if (favBrands === 'apple'){
        for (var i =1;i<=offersNum;i++){
            document.write('<img src="https://www.blitzmicro.eu/12227-medium_default/AP-MYD82TA.jpg">')
        }
        }else if (favBrands === 'lenovo'){
        for (var i =1;i<=offersNum;i++){
            document.write('<img src="https://www.dealsmagnet.com/images/13FU15JU/2019/October/14/large/Lenovo-Ideapad-S145-Intel-Core-I3-8th-Gen-156-inc.jpg">')
        }    
        }else {
        alert ('Well, No products and offers are available!')
        }
    } else {
        alert ('Well, feel free to browse our products and offers!')
    }
};


function helpYou(){
    var help = confirm("Hello, I am here to help you, would you like to continue?");
    if (help == true) {
    var nn = prompt ('Can you tell me your nickname to help you?');
    document.write('<h3>' + 'Welcome '+ nn +'</h3>');
    offers();
    } else {
    alert('Welcome to the site, but now you will serve yourself :)');
    }
};
helpYou();
/*var favBrands=prompt('What is your favorite brand?');
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
}*/