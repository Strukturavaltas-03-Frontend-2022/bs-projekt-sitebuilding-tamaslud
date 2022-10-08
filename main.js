let displayScrolled = false;
const navbar = document.querySelector('.navbar');
addEventListener('scroll', () => {
    if (displayScrolled !== Boolean(window.scrollY)){
        displayScrolled = Boolean(window.scrollY);
        if(displayScrolled) {
            navbar.classList.add('bg-white');
            navbar.classList.remove('bg-transparent');
        } else{
            navbar.classList.add('bg-transparent');
            navbar.classList.remove('bg-white');
        };
    };
});
