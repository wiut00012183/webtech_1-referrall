window.addEventListener("DOMContentLoaded", () => {
    const footerLine = document.querySelector(".footer-line")
    const footerIcons = document.querySelectorAll(".footer-right__icons i")

    function changeLine() {
        footerIcons.forEach(item => {
            item.addEventListener("mouseenter", () => {
                footerLine.style.width = "45%"
            })
            item.addEventListener("mouseleave", () => {
                footerLine.style.width = "10%"
            })
        })
    }
    changeLine()



    const estimateNumbers = document.querySelectorAll(".estimate-numbers-h1")
    console.log(typeof(+estimateNumbers[0].innerHTML));

    let lastKnownScrollPosition = 0;
    let ticking = false;


    function doSomething(scrollPos) {
        if(scrollPos > 1600){
            setInterval(() => {
                if(+estimateNumbers[0].innerHTML < 250){
                    estimateNumbers[0].innerHTML = `${1 + Number(estimateNumbers[0].innerHTML)}`
                }
                if(+estimateNumbers[1].innerHTML < 110){
                    estimateNumbers[1].innerHTML = `${1 + Number(estimateNumbers[0].innerHTML)}`
                }

                if(+estimateNumbers[2].innerHTML < 155){
                    estimateNumbers[2].innerHTML = `${1 + Number(estimateNumbers[0].innerHTML)}`
                }

                if(+estimateNumbers[3].innerHTML < 122){
                    estimateNumbers[3].innerHTML = `${1 + Number(estimateNumbers[0].innerHTML)}`
                }
            }, 500);
        }
        
    }

    document.addEventListener('scroll', (e) => {
        lastKnownScrollPosition = window.scrollY;


        if (!ticking) {
            window.requestAnimationFrame(function () {
                doSomething(lastKnownScrollPosition);
                ticking = false;
            });

            ticking = true;
        }
    })






    const wrapperHeader = document.querySelector(".wrapper-header")
    const wrapperHeader2 = document.querySelector(".wrapper-header2")
    const headerTop = document.querySelector(".header-top")

    const headerBtn = document.querySelector(".header-btn")
    const headerBtn2 = document.querySelector(".header-btn2")

    function HeaderHide() {
        wrapperHeader.style.display = 'none';
        headerTop.style.display = 'none'
        wrapperHeader2.style.display = 'flex';
    }


    function HeaderBack() {
        wrapperHeader.style.display = 'flex';
        wrapperHeader2.style.display = 'none';
        headerTop.style.display = 'block'
    }

    headerBtn.addEventListener("click", () => HeaderHide())
    headerBtn2.addEventListener("click", () => HeaderBack())


    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu')

    function menuChange() {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            menu.classList.toggle('active');
        })
    }
    menuChange()


    const home = document.querySelector(".home")
    const news = document.querySelector(".news")
    const benefits = document.querySelector(".benefits")
    const customers = document.querySelector(".customers")
    const contact = document.querySelector(".contact")
    function menuClose() {
        home.addEventListener('click', () => {
            menu.classList.remove('active');
            menuToggle.classList.remove('active');
        })
        news.addEventListener('click', () => {
            menu.classList.remove('active');
            menuToggle.classList.remove('active');
        })
        benefits.addEventListener('click', () => {
            menu.classList.remove('active');
            menuToggle.classList.remove('active');
        })
        customers.addEventListener('click', () => {
            menu.classList.remove('active');
            menuToggle.classList.remove('active');
        })
        contact.addEventListener('click', () => {
            menu.classList.remove('active');
            menuToggle.classList.remove('active');
        })
    }
    menuClose()



    const discoverLeftP = document.querySelector(".discover-left-p")
    const discoverButton = document.querySelector(".discover-button")

    function discover() {
        discoverButton.addEventListener("mouseenter", () => {
            discoverLeftP.style.left = "0px"
            discoverLeftP.style.opacity = "1"
        })
        discoverButton.addEventListener("mouseleave", () => {
            discoverLeftP.style.left = "-300px"
            discoverLeftP.style.opacity = "0"
        })
    }
    discover()






})





