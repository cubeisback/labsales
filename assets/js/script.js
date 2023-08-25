   
//header mob menu
document.querySelector('.header_burger').addEventListener('click', function() {
  this.classList.toggle('opened')
  document.querySelector('.header_menu__block').classList.toggle('active')
  document.querySelector('body').classList.toggle('fixed')
});

//promo slider
const promoSlider = new Swiper('.promo__slider', {
    freeMode: true,
    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 1.8,
            spaceBetween: 36,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 36,
        },
        992: {
            slidesPerView: 3.5,
            spaceBetween: 36,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 36,
        }
    }
});

//about slider
const aboutSlider = new Swiper('.about__slider', {
    pagination: {
        el: ".about__pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 4,
        }
    }
});

// map
ymaps.ready(init);

function init() {
    const myMap = new ymaps.Map('map', {
            center: [55.719439, 37.729640],
            zoom: 14,
            controls: ['zoomControl']
        });
        const menu = $('.map__nav');

    myMap.behaviors
        .disable('scrollZoom');
        
    for (let i = 0, l = items.length; i < l; i++) {
        createMenuGroup(items[i]);
    }

    function createMenuGroup (group) {
        const collection = new ymaps.GeoObjectCollection(null, { preset: group.style }),
            myLayout = ymaps.templateLayoutFactory.createClass('<div class="map_mark map_mark-'+group.id+'"><p>$[properties.iconContent]</p></div>'),
            placemark = new ymaps.Placemark(group.center, 
                {
                    iconContent: group.name,
                }, 
                {
                    iconLayout: 'default#imageWithContent',
                    iconContentLayout: myLayout
                }
            );

        myMap.geoObjects.add(collection);
        collection.add(placemark);
    }
    
    menu.appendTo($('#map'));
    myMap.setBounds(myMap.geoObjects.getBounds());
}

const elements = document.querySelectorAll('.map_mark');

document.querySelector('.map_point_1').addEventListener('click', function() {
    this.classList.toggle('active')
    document.querySelector('.map_mark-1').classList.toggle('active')
});
document.querySelector('.map_point_2').addEventListener('click', function() {
    this.classList.toggle('active')
    document.querySelector('.map_mark-2').classList.toggle('active')
});
document.querySelector('.map_point_3').addEventListener('click', function() {
    this.classList.toggle('active')
    document.querySelector('.map_mark-3').classList.toggle('active')
});
document.querySelector('.map_point_4').addEventListener('click', function() {
    this.classList.toggle('active')
    document.querySelector('.map_mark-4').classList.toggle('active')
});
document.querySelector('.map_point_5').addEventListener('click', function() {
    this.classList.toggle('active')
    document.querySelector('.map_mark-5').classList.toggle('active')
});

// items
const items = [
    {
        name: "Магазины",
        id: 1,
        center: [55.712439, 37.682640],
    },
    {
        name: "ЖК “Яблоновский”",
        id: 2,
        center: [55.730439, 37.689640],
    },
    {
        name: "Детский сад",
        id: 3,
        center: [55.717439, 37.711640],
    },
    {
        name: "АЗС",
        id: 4,
        center: [55.722439, 37.700640],
    },
    {
        name: "Поликлинника",
        id: 5,
        center: [55.720439, 37.679240],
    },
];

//desc slider
let navSlider = new Swiper(".nav_slider", {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
let descSlider = new Swiper(".desc_slider", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".desc_slider-next",
        prevEl: ".desc_slider-prev",
    },
    thumbs: {
        swiper: navSlider,
    },
});