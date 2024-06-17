function showBurger() {
  let ul = document.querySelector('header ul');
  ul.classList.toggle('active');
  let brg = document.querySelector('header .burger');
  brg.classList.toggle('active');
  let bef = document.querySelector('header .burger::before');
  bef.classList.toggle('active');
}