document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed('#typed-text', {
        strings: [
            "Security is not a product, but a process.",
            "Being secure means being prepared. Safety is not a guarantee — it's a mindset.",
            "The best defense against security threats is a good security mindset.",
            "To be secure is to be aware — ignorance is the biggest vulnerability.",
            "The strength of a password lies not in its complexity, but in the unpredictability of the mind that creates it.",        
            "A strong password is your first line of defense in a digital warzone.",
            "Being secure isn't a one-time setup — it's a lifelong habit.",
        ],
        typeSpeed: 50,
        backDelay: 800,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        cursorChar: '▐',
        smartBackspace: true,
        backSpeed: 50,
    });
});