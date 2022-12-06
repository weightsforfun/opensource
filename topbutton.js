const backToTop = document.getElementById('backtotop');

const check_scroll=()=>{
    let pageOffset = window.pageYOffset;

    if(pageYOffset !== 0){
        backToTop.classList.add('show');
    }else{
        backToTop.classList.remove('show');
    }
}

const move_top =()=>{
    if(window.pageYOffset > 0){
        window.scrollTo({top:0, behavior:"smooth"});
    }
}

window.addEventListener('scroll', check_scroll);
backToTop.addEventListener('click',move_top);