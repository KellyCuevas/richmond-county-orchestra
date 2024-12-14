document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');

  menuBtn.addEventListener('click', () => handleClick());

  function handleClick() {
    siteNav.classList.toggle('site-nav--open');
    menuBtn.classList.toggle('open');
  }
  const mainMenu = document.querySelector('.site-nav, .site-nav--open');
  const menuItems = mainMenu.querySelector('.main-menu');
  const menuLinks = menuItems.querySelectorAll('li');
  menuLinks.forEach((item) =>
    item.addEventListener('click', () => handleClick())
  );
});
