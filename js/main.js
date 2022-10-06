var btnEnter = document.getElementById('btnEnter');
var cont1 = document.getElementById('cont1');
var cont2 = document.getElementById('cont2');
var footer = document.getElementById('footer');
var footerBottom = document.getElementById('footer-bottom');


btnEnter.addEventListener('click',displayCont);


function displayCont() {
  cont1.style.display = 'none';
  cont2.style.display = 'block';

  footer.style.display = 'block';
  footerBottom.style.display = 'block';

}
