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
    const contentElement = document.querySelector('.arrow__top'); 

    function checkScreenSize() {
        if (window.innerWidth < 550) {
            contentElement.style.display = 'none'; 
        } else {
            contentElement.style.display = 'block'; 
        }
    }
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    changeHeaderBg()

    //mobile menu
    const hamburger = document.querySelector('.hamburger'),
          closeMenu = document.querySelector('.header__mobile-close')  
    hamburger.addEventListener('click', ()=> {
        header.classList.add('active');
    });
    closeMenu.addEventListener('click', ()=> {
        header.classList.remove('active')
    })
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
    const navElement = document.querySelector('.header__link-one');
    const navWindow = document.querySelector('.header__nav-window'); 

    navElement.addEventListener('mouseenter', () => {
        navWindow.style.display = 'block'; 
    });

    navWindow.addEventListener('mouseenter', () => {
        navWindow.style.display = 'block';
    });
    navWindow.addEventListener('mouseleave', () => {
        navWindow.style.display = 'none'; 
    });
    //Всплывающее меню на мобилке
  const headerMobileMenu = document.querySelector('.header__mobile-menu'),
        hedaerMobileItem = document.querySelector('.header__mobile-ltem--2');
        hedaerMobileItem.addEventListener('click', ()=> {
            headerMobileMenu.classList.toggle('active')
        })

    //появление подробнее 
    const hitsItem = document.querySelectorAll('.hits__item-img');
    function removeHitsItem() {
        hitsItem.forEach(item => {
            item.classList.remove('active');
        });
    };
    removeHitsItem();
    function addHitsItem(i) {
        hitsItem[i].classList.toggle('active');
    };
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
        breakpoints: {
            990: {
                perPage: 2,
            },
            768: {
                perPage: 2,
                gap: '20px'
            },
            556: {
                perPage: 1,
                gap: 0,
                padding: '40px'
            },
            450: {
                padding: '10px',
            },
            360: {
                padding: '2px',
                gap: '10px'
            },
        }
        
    }).mount();
    //маска
    let selector = document.querySelector('#phone');
    let im = new Inputmask("+7(999)999-99-99");
    im.mask(selector);
})



