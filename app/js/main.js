window.addEventListener("load", function(event) {
	// Acá va lo que se va a hacer despuésn de que se cargue la página
	TweenMax.to("#preloader", 3.6, {
		ease: Power2.easeOut,
		delay:1, //pone un retardador a la animación
		opacity: 0,
		scaleX:"3",
		scaleY:"3",
	});
});