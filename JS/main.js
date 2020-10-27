document.addEventListener('DOMContentLoaded' , function() { 

    const scroller = new Scroller('.scroller');
    
    document.addEventListener('wheel' , (event) => scroller.listenScroll(event))
})