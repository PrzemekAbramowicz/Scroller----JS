document.addEventListener('DOMContentLoaded' , function() { 

    const scroller = new Scroller('.scroller');
    
    document.addEventListener('mousewheel' , scroller.listenScroll)
})