const header = document.querySelector('#header');

let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");
let span = document.getElementsByClassName("close_modal_window")[0];
let nam = document.querySelector('.name'),
email = document.querySelector('.email'),
tel = document.querySelector('.tel'),
btn_modal = document.querySelector(".btn__modal");

const circles = document.querySelectorAll('.circle');


//  fixed menu 
window.addEventListener('scroll', () => {
    let scroll = window.scrollY;

    if(scroll > 400) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

//  modal menu
window.onload = function() {
   let body = document.querySelector('.body');

   btn.addEventListener('click', () => {
      modal.style.display = 'block';
      body.style.overflow = "hidden";
   });

   span.addEventListener('click', () => {
      modal.style.display = "none";
      nam.value = "";
      email.value = "";
      tel.value = "";
      body.style.overflow = "scroll";
   });

   window.addEventListener('click', function(e){
      if(e.target == modal) {
         modal.style.display = "none";
         nam.value = "";
         email.value = "";
         tel.value = "";
         body.style.overflow = "scroll";  
      };
   });
};


btn_modal.addEventListener('click', () => {
   if (nam.value == "" || tel.value == "" || email.value == "") {
      alert("Заполните все поля!");
   } else {
      modal.style.display = "none";
      alert("Заявка отправлена!");
      nam.value = "";
      email.value = "";
      tel.value = "";
   }
});



