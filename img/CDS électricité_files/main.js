	console.clear();

	const app = (() => {
		let about;
		let aboutbtn
		let service;
		let servicebtn;
		let realisation;
		let realisationbtn;
		let ethique;
		let ethiquebtn;
		let contact;
		let contactbtn;
		let menuResponsive;

		const init = () => {
			about = document.querySelector('#one');
			aboutbtn = document.querySelector('#aboutbtn');
			service = document.querySelector('#two');
			servicebtn = document.querySelector('#servicebtn');
			realisation = document.querySelector('#tree');
			realisationbtn = document.querySelector('#realisationbtn');
			ethique = document.querySelector('#four');
			ethiquebtn = document.querySelector('#ethiquebtn');
			contact = document.querySelector('#five');
			contactbtn = document.querySelector('#contactbtn');
			//menuResponsive = document.querySelector('#menuresponsive');


			applyListeners();
		}

		const applyListeners = () => {
			aboutbtn.addEventListener('click',function(){
				window.scroll({
	        top: about.offsetTop,
	        left: 0,
	        behavior: 'smooth'
	    });
			});
			servicebtn.addEventListener('click',function(){
				window.scroll({
	        top: service.offsetTop,
	        left: 0,
	        behavior: 'smooth'
	    });
			});
			realisationbtn.addEventListener('click',function(){
				window.scroll({
	        top: realisation.offsetTop,
	        left: 0,
	        behavior: 'smooth'
	    });
			});
			ethiquebtn.addEventListener('click',function(){
				window.scroll({
	        top: ethique.offsetTop,
	        left: 0,
	        behavior: 'smooth'
	    });
			});
			contactbtn.addEventListener('click',function(){
				window.scroll({
	        top: contact.offsetTop,
	        left: 0,
	        behavior: 'smooth'
	    });
			});
		}
		let buttonResponsive = document.querySelector('#menuresponsive');
		let iconResponsive = document.querySelector('.burger');
		let fullMenu = document.querySelector('#fullmenuresponsive');
		buttonResponsive.addEventListener('click', function(){
			iconResponsive.classList.toggle('open');
			fullmenuresponsive.classList.toggle('open');
		})

		let close = document.querySelector('#close');
		close.addEventListener('click', function(){
			iconResponsive.classList.toggle('open');
			fullmenuresponsive.classList.toggle('open');
		})


		const toggleClass = (element, stringClass) => {
			if(element.classList.contains(stringClass))
				element.classList.remove(stringClass);
			else
				element.classList.add(stringClass);
		}


		init();
	})();
