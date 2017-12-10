var phones = document.querySelectorAll(".phone-item");

for (var i = 0; i < phones.length; ++i){
    console.log(phones[i].querySelector('.model').textContent);
}