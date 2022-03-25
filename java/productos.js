const productosbtn = document.querySelector('.productos'),
 uldrop = document.querySelector('.uldeproductos');
 flecha = document.querySelector('#flechaproductos')

  productosbtn.addEventListener('click', (e) =>{
   

     uldrop.classList.toggle('activo');
     flecha.classList.toggle('activarrotacion')
     
  });



  const searchbtn = document.querySelector('#search'),
 input = document.querySelector('.divinput');

  searchbtn.addEventListener('click', (e) =>{

     input.classList.toggle('activo2');
     
  });


 // var hamburger = document.querySelector(".hamburger");

  // On click
  //hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
   // hamburger.classList.toggle("is-active");
    
 // })
  
  
  //const IconoMenu = document.querySelector("#icono-menu"),
  //menu = document.querySelector("#menu");
  


//IconoMenu.addEventListener("click", (e) => {
  //Alternamos ESTILOS del menu y el body
  //menu.classList.toggle("active");
 

//});
  
const btnnoche = document.querySelector('#luna')

  header = document.querySelector('header');
  ul = document.querySelector('.uldenav')
  a1 = document.querySelector('.hrefdeheader')
  nav = document.querySelector('nav')
  a2 = document.querySelector('.hrefdeheader2')
  a3 = document.querySelector('.hrefdeheader3')
  lupa = document.querySelector('#search')
  login = document.querySelector('.btn-inicio')
  body = document.querySelector('body')
  cartascuerpo = document.querySelector('.card__body')
  cartasfooter = document.querySelector('.card__footer')
  cartasheader = document.querySelector('.card')
  footer = document.querySelector('footer')
  footerli = document.querySelector('.ull1')
  footerli2 = document.querySelector('.ull2dos')
  pfooter = document.querySelector('.copu')

  btnnoche.addEventListener('click', (e) =>{

    header.classList.toggle('oscuro');
    footer.classList.toggle('oscuro');
    ul.classList.toggle('blanco');
    nav.classList.toggle('blanco')
    a1.classList.toggle('blanco2');
    a2.classList.toggle('blanco2');
    a3.classList.toggle('blanco2');
    btnnoche.classList.toggle('blanco3');
    lupa.classList.toggle('blanco4');
    login.classList.toggle('blanco5');
    body.classList.toggle('oscuro2');
    cartascuerpo.classList.toggle('oscuro3');
    cartasfooter.classList.toggle('oscurofootercard');
    cartasheader.classList.toggle('oscuroheadercard');
    footerli.classList.toggle('blanco8')
    footerli2.classList.toggle('blanco8')
    pfooter.classList.toggle('blanco8')
 });
