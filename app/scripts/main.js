const burger = document.querySelector('.Header-burger');
const menu = document.querySelector('.Header-menu');
const burgerImage = document.querySelector('.Header-burger img');

burger.addEventListener('click', function () {

  if(menu.classList.contains('menuOpen')){
    menu.classList.remove('menuOpen');
    burgerImage.src = 'images/menu-button.svg';
    burger.style.width = 30 + 'px';
  }
  else{
    menu.classList.add('menuOpen');
    burgerImage.src = 'images/cancel-music.svg';
    burger.style.width = 25 + 'px';
  }

});
