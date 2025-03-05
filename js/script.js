document.addEventListener('DOMContentLoaded', ()=> {
    //Смена header
    const header = document.querySelector('.header'),
          headerLink = document.querySelectorAll('.header__link'),
          headerAddres = document.querySelector('.header__addres'),
          headerContactsItem = document.querySelectorAll('.header__contacts-item'),
          arrowTop = document.querySelector('.arrow__top');


    function changeHeaderBg() {
        window.addEventListener('scroll', ()=> {
            if(scrollY > 50) {
                header.style.backgroundColor = '#fff';
                headerLink.forEach(link => {
                    link.style.color = '#444444'
                });
                headerContactsItem.forEach(item => {
                    item.style.color = '#444444'
                })
                headerAddres.style.color = '#444444'
            } else {
                header.style.backgroundColor = 'rgba(255, 255, 255, .0)';
                headerLink.forEach(link => {
                    link.style.color = '#fff'
                });
                headerContactsItem.forEach(item => {
                    item.style.color = '#fff'
                })
                headerAddres.style.color = '#fff'
                headerAddres.style.borderTop = '1px solid rgb(199, 199, 199)'; 
                headerAddres.style.borderBottom = '1px solid rgb(199, 199, 199)'; 
            }  
            if (scrollY > 500) {
                arrowTop.style.display = 'block';
            } else {
                arrowTop.style.display = 'none';
            }
        })
    }      
    changeHeaderBg()

    function scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    arrowTop.addEventListener('click', ()=>{
        scrollTop();
    })
    //Всплывающее меню
    const navElement = document.querySelector('.header__nav'); // Элемент навигации
    const navWindow = document.querySelector('.header__nav-window'); // Всплывающее меню

    navElement.addEventListener('mouseenter', () => {
        navWindow.style.display = 'block'; 
    });

    navWindow.addEventListener('mouseenter', () => {
        navWindow.style.display = 'block'; // Сохраняем меню открытым, если курсор над меню
    });
    navWindow.addEventListener('mouseleave', () => {
        navWindow.style.display = 'none'; // Скрываем меню, когда курсор уходит с меню
    });




    //появление подробнее
 
    const hitsItem = document.querySelectorAll('.hits__item-img');

    function removeHitsItem() {
        hitsItem.forEach(item => {
            item.classList.remove('active');
        });
    }

    removeHitsItem();

    function addHitsItem(i) {
        hitsItem[i].classList.toggle('active');
    }


    hitsItem.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            addHitsItem(index); 
        });

        item.addEventListener('mouseleave', () => {
            removeHitsItem(); 
        });

    });







    //slider
    new Splide('#slider1', {
        type: 'loop',
        autoplay: 'play',
        arrows: false,
        pagination: true,
        speed: 600,  
    }).mount();
    new Splide('#slider2', {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        autoplay: 'play',
        arrows: false,
        pagination: false,
        speed: 600,  
    }).mount();
})



