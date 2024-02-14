const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.2,
     rootMargin: "-50px 0px 0px 0px"});


const hiddenElements = document.querySelectorAll('div p');
hiddenElements.forEach((el) => observer.observe(el));