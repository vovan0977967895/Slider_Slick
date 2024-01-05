$(document).ready(function(){
   $('.slider').slick({
     arrows: true, //стрелки по умолчанию включені
     dots: true, // вкл если надо точки! по умолчанию викл
     adaptiveHeight: true,//адаптивная висота , если надо вкл, по умолчанию викл
     slidesToShow: 3,// показивает кол-во слайдов, по умолчанию 1
     slidesToScroll: 1,// пролистивает кол-во слайдов, по умолчанию 1
     speed: 600,//скорость пролистивания слайдов, по умолчанию 300мс
     infinite: true,//прекращаем безконечную прокрутку по умолчанию true
     initialSlide:2,//показивает с какого слайда начин, по умолчанию с 0
     autoplay: true,//авт проигривает слайди по умолчанию викл
     autoplaySpeed: 2500,//скорость прокрутки слайди по умолчанию 3000мс 
     pauseOnFocus: true,// пауза при наведении по умолчанию вкл
     pauseOnHover: true,// пауза при наведении по умолчанию вкл
     pauseOnDotsHover: true,// пауза при наведении по умолчанию вкл
     draggable: true,//перетягивание мишкой по умолчанию вкл
     swipe: true,//свайпать в мобиле по умолчанию вкл
     waitForAnimate: false,//скорость пролистивания при бистр клике по умолчанию вкл
     centerMode: false,
     variableWidth:false,// хорошо при адаптиве по умолч false
     rows: 1,// кол-во рядов , по умолчанию 1
     slidesPerRows: 2,// кол-во в ряду , по умолчанию 1
     vertical: false,//свайп по вертикали по умолчанию false
     responsive:[
      {
         breakpoint:768,
         settings: {
            slidesToShow: 2, 
         } 
      },{
         breakpoint:400,
         settings: {
            slidesToShow: 1, 
         } 
      }
     ],//адаптив
     mobileFirst: false,// по умолчанию false
     

   });
});