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
    //modal
    const modal = document.querySelector('.modal'),
          modalClose = document.querySelector('.modal__dialog-close'),
          modalBtn = document.querySelector('.header__btn');

    function openModal() {
        modal.classList.add('open')
    }    
    function removeModal() {
        modal.classList.remove('open')
    }   
    modalBtn.addEventListener('click',(e)=> {
        openModal()
    });
    modalClose.addEventListener('click', (e)=> {
        removeModal();
    });        
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

    const fillter = document.querySelector('.cables__controls-fillter--img'),
           cables = document.querySelector('#cables'),
           cablesClose = document.querySelector('.cables__controls-category--close');
            
    if(cables) {
        fillter.addEventListener('click', ()=> {
            cables.classList.add('active')
        })
        cablesClose.addEventListener('click', ()=> {
            cables.classList.remove('active')
        })
    }

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
   
    //tabs 
    const history = document.querySelector('.history');
    if(history) {
        const tab = document.querySelectorAll('.history__tab'),
        content = document.querySelectorAll('.history__item'),
        tabParrent = document.querySelector('.history__tabs');
        function hiddenTabs() {
            tab.forEach(item => {
                item.classList.remove('tab__active');
            });
            content.forEach(item => {
                item.style.display = 'none'
            })
        };
        function openTabs(i = 0) {
            tab[i].classList.add('tab__active');
            content[i].style.display = 'block';
        }       
        hiddenTabs();
        openTabs();

        tabParrent.addEventListener('click', (e)=> {
            const target = e.target;
            if(target && target.classList.contains('history__tab')) {
                tab.forEach((item, i)=> {
                    if(target == item) {
                        hiddenTabs();
                        openTabs(i);
                    }
                })
            }
        })
    }

 
  

    //slider
    const slider1 = document.querySelector('#slider1'); 
    if(slider1) {
        new Splide('#slider1', {
            type: 'loop',
            autoplay: 'play',
            arrows: false,
            pagination: true,
            speed: 600,  
        }).mount();
    }
    const slider2 = document.querySelector('#slider2') 
    if(slider2) {
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
    }

    //маска
    const form = document.querySelector('form')
    if(form) {
        let selector = document.querySelector('#phone');
        let phone = document.querySelector('#modal-phone');
        let im = new Inputmask("+7(999)999-99-99");
        if(selector) {
            im.mask(selector);
        }
        if(phone) {
            im.mask(phone);
        }           
        
    };  
       
})



