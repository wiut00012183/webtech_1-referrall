const discoverMain = document.querySelector(".discover-main")
    console.log(discoverMain); 

    function discoverPage() {
        setTimeout(() => {
            discoverMain.style.opacity = "1"; 
        }, 1000)        
    }
    discoverPage()