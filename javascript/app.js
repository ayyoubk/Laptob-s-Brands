var help = confirm("Hi, I am here to help you, would you like to continue?");
if (help == true) {
    var nn = prompt ('Hello, can you tell me your nickname to help you?');
    document.write('<h3>' + 'Welcome '+ nn + ' i will show you a group of companies that manufacture laptops' + '</h3>');
} else {
    alert('Welcome to the site, but now you will serve yourself :)');
}