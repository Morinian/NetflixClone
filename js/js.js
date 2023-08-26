function handleScroll() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  }
  window.addEventListener('scroll', handleScroll);



//   Video Replay 

var meuVideo = document.getElementById('meuVideo');

meuVideo.addEventListener('ended', function() {
    this.currentTime = 0; 
    this.play(); 
});


//variaveis de contagem da direção

var num = 150;
var num2 = 150;

//slide do botão direito

var btnRight = document.getElementById('btnright');

btnRight.addEventListener('click', () => {

    var limi = document.getElementById('limitador').getBoundingClientRect().left;

    var limit = Math.round(limi);

    var er = document.getElementById('btnright').getBoundingClientRect().left;

    var ref = Math.round(er);

    var slideContainer = document.getElementById('container');

    var carrossel = document.getElementById('carrossel');


    if (limit > ref) {

        slideContainer.style.transform = 'translateX(-' + num + 'px)';

        num = num + 150;

        num2 = num2 - 150;

    } else {

        var stoped = ref * slideContainer.clientWidth / carrossel.clientWidth - carrossel.clientWidth + 100;

        var stopedRound = Mtah.round(stoped);

        slideContainer.style.transform = 'translateX(-' + stopedRound + 'px)';


    }


});


//slide botão esquerdo

var btnLeft = document.getElementById('btnleft');

btnLeft.addEventListener('click', () => {


    var limi = document.getElementById('limitador').getBoundingClientRect().left;

    var limit = Math.round(limi);

    var er = document.getElementById('btnleft').getBoundingClientRect().left;

    var ref = Math.round(er);

    var slideContainer = document.getElementById('container');

    var carrossel = document.getElementById('carrsossel');

    var slide = slideContainer.getBoundingClientRect().left;

    if (slide < ref) {

        slideContainer.style.transform = 'translateX(' + num2 + 'px)';

        num = num - 150;
        num2 = num2 + 150;

    } else {

        slideContainer.style.transform = 'translateX(0)';

        num = 150;

    }


});


//variaveis de contagem da direção

var num3 = 150;
var num4 = 150;

//slide do botão direito

var btnRight2 = document.getElementById('btnright2');

btnRight2.addEventListener('click', () => {

    var limi2 = document.getElementById('limitador2').getBoundingClientRect().left;

    var limit2 = Math.round(limi2);

    var er2 = document.getElementById('btnright2').getBoundingClientRect().left;

    var ref2 = Math.round(er2);

    var slideContainer2 = document.getElementById('container2');

    var carrossel2 = document.getElementById('carrossel2');


    if (limit2 > ref2) {

        slideContainer2.style.transform = 'translateX(-' + num3 + 'px)';

        num3 = num3 + 150;

        num4 = num4 - 150;

    } else {

        var stoped2 = ref2 * slideContainer2.clientWidth / carrossel2.clientWidth - carrossel2.clientWidth + 100;

        var stopedRound2 = Mtah.round(stoped2);

        slideContainer2.style.transform = 'translateX(-' + stopedRound2 + 'px)';


    }


});


//slide botão esquerdo

var btnLeft2 = document.getElementById('btnleft2');

btnLeft2.addEventListener('click', () => {


    var limi2 = document.getElementById('limitador2').getBoundingClientRect().left;

    var limit2 = Math.round(limi2);

    var er2 = document.getElementById('btnleft2').getBoundingClientRect().left;

    var ref2 = Math.round(er2);

    var slideContainer2 = document.getElementById('container2');

    var carrossel2 = document.getElementById('carrsossel2');

    var slide2 = slideContainer2.getBoundingClientRect().left;

    if (slide2 < ref2) {

        slideContainer2.style.transform = 'translateX(' + num3 + 'px)';

        num3 = num3 - 150;
        num4 = num4 + 150;

    } else {

        slideContainer2.style.transform = 'translateX(0)';

        num3 = 150;

    }


});