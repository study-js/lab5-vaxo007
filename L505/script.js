var sheyvana = prompt("შეიყვანეთ რისი ყიდვა გსურთ: ");

var laptop = document.querySelectorAll('.latop-item');
var desktop = document.querySelectorAll('.desktop-item');

if (sheyvana == "laptop"){
    for (var i = 0; i < laptop.length; ++i) {
        console.log(laptop[i].querySelector('.brand').style.backgroundColor="green");
    }
}
else if (sheyvana == "desktop"){
    for (var j = 0; j < desktop.length; ++j) {
        console.log(desktop[j].querySelector(".brand").style.backgroundColor="blue");
    }
}