const contactButton = document.querySelectorAll(".contact");
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');
// ПОЛУЧЕНИЕ БУРГЕРА
const iconMenu = document.querySelector('.menu__icon');



// ПОПАПЫ!! //

const popupOpen = () => {
   popup.classList.add("popup_opened");

   document.addEventListener('click', (event) => {
      if ((!event.target.classList.contains('contacts__form-set'))
         && (event.target.classList.contains('popup'))
         || (event.target.classList.contains('popup__outer'))) {
         popupClose();
      }
   })
}

const popupClose = () => {
   popup.classList.remove("popup_opened");
}

contactButton.forEach((e) => {
   e.addEventListener('click', popupOpen);
})

closeButton.addEventListener('click', popupClose);

// END 

if (iconMenu) {
   const menuBody = document.querySelector(".header__nav");
   iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
      menuBody.classList.toggle('_active');
      iconMenu.classList.toggle('_active');
   });
}