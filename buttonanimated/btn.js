var dur = 600;
var button = document.querySelector('.button')
var blobs = [].slice.call(document.querySelectorAll('.blob'));
var splash = [].slice.call(document.querySelectorAll('.splash'));
button.addEventListener('click', function() {
	blobs.forEach(el => {
	el.classList.add('animated');
		setTimeout(function(){
        	el.classList.remove('animated');
        }, dur);
	})
	splash.forEach(el => {
	el.classList.add('animated');
		setTimeout(function(){
        	el.classList.remove('animated');
        }, dur);
	})
	button.classList.add('animated');
		setTimeout(function(){
        	button.classList.remove('animated');
        }, dur);
	
})