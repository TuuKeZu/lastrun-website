document.addEventListener('DOMContentLoaded', () => {

    const parallaxEffects = [
        {element: document.getElementById('DOWNLOAD'), multiplier: 0.9, offset: -250},
        {element: document.getElementById('MINIMIUM'), multiplier: -0.2, offset: -150},
        {element: document.getElementById('RECOMMENDED'), multiplier: -0.4, offset: -350}
    ]

    const floatingEffects = [
        {element: document.getElementById('LAUNCHER-LOGIN'), multiplier: {x: 0.05, y: 0.05}, offset: {x: 0, y: 200}},
        {element: document.getElementById('LAUNCHER-MAIN'), multiplier: {x: 0.02, y: 0.02}, offset: {x: 0, y: 0}}
    ]

    let windowSize = {width: window.innerWidth, height: window.innerWidth}

    document.addEventListener('resize', () => {
        reSize();
    });
    
    document.addEventListener('scroll', () => {
        parallaxScroll();
    });

    document.addEventListener('mousemove', (e) => {
        floatingEffect(e);
    });

    const parallaxScroll = () => {
        const distance = window.pageYOffset;

        parallaxEffects.forEach(effect => {
            effect.element.style.marginBottom = `${((distance*effect.multiplier) / 2) - effect.offset}px`;
        });
    }

    const floatingEffect = (e) => {
        if(windowSize.width <= 1300){ return; }

        const pos = {x: (windowSize.width / 2 -  e.pageX), y: -(windowSize.height / 2 - e.pageY)};

        floatingEffects.forEach(effect => {
            effect.element.style.marginBottom = `${effect.offset.y +  pos.y * effect.multiplier.y}px`
            effect.element.style.marginLeft = `${effect.offset.x + pos.x * effect.multiplier.x}px`
        });
    }

    const reSize = () => {
        windowSize = {width: window.innerWidth, height: window.innerWidth}
    }
});


