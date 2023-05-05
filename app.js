const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const textarea = document.querySelector("#textarea");
const parrafo = document.querySelector(".parrafo");
const submit = document.querySelector('#submit');
const nameRe = new RegExp(/^[a-zA-zÑñáÁéÉíÍóÓúÚüÜ\s]+$/)
const emailRe = new RegExp(/^[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9]+)*(\.[a-z]{2,15})$/)

document.addEventListener('DOMContentLoaded', (e) => {
	validateForm();
	// submit.disabled = true
})

function validateForm() {
	form.addEventListener("click", (e) => {
		if (e.target === name) {
			console.log(e.target)
			validateName()
		}

		if (e.target === email) {
			console.log(e.target)
			validateEmail();
		}

		if (e.target === subject) {
			console.log(e.target)
			validateSubject();
		}

		if (e.target === textarea) {
			console.log(e.target)
			validateTextarea();
		}
	})
}

function validateName() {
 name.addEventListener('keyup', (e) => {
 	console.log(e.target.value);
// 
 	if(nameRe.test(e.target.value)) {
 		name.style.borderColor = 'rgb(81.6, 224.4, 116.41)';
 		parrafo.classList.remove('activo');
 		name.classList.add('valid');
 		formValid()
 	} else {
 		name.style.borderColor = 'rgba(238, 68, 85)';
 		parrafo.classList.add('activo');
 		parrafo.textContent = 'Ingresa un nombre válido'
 	}
 })
}

function validateEmail() {
 email.addEventListener('keyup', (e) => {
 	console.log(e.target.value);

 	if(emailRe.test(e.target.value)) {
 		email.style.borderColor = 'rgb(81.6, 224.4, 116.41)';
 		parrafo.classList.remove('activo');
 		email.classList.add('valid');
 		formValid();
 	} else {
 		email.style.borderColor = 'rgba(238, 68, 85)';
 		parrafo.classList.add('activo');
 		parrafo.textContent = 'Ingresa un email válido'
 	}
 })
}

function validateSubject() {
 subject.addEventListener('keyup', (e) => {
 	console.log(e.target.value);

 	if(e.target.value.length > 0) {
 		subject.style.borderColor = 'rgb(81.6, 224.4, 116.41)';
 		parrafo.classList.remove('activo')
 		subject.classList.add('valid');
 		formValid();
 	} else {
 		subject.style.borderColor = 'rgba(238, 68, 85)';
 		parrafo.classList.add('activo');
 		parrafo.textContent = 'Ingresa el asunto a tratar'
 	}
 })
}

function validateTextarea() {
 textarea.addEventListener('keyup', (e) => {
 	console.log(e.target.value);

 	if (e.target.value !== '') {
 		if(e.target.value.length > 255) {
 		textarea.style.borderColor = 'rgba(238, 68, 85)';
 		parrafo.classList.add('activo');
 		parrafo.textContent = 'Deben haber menos de 255 caracteres';
 		} else {
 		textarea.style.borderColor = 'rgb(81.6, 224.4, 116.41)';
 		parrafo.classList.remove('activo');
 		textarea.classList.add('valid');
 		formValid();
 		}
 		} 
 		if(e.target.value === ''){
 		parrafo.classList.add('activo');
 		parrafo.textContent = 'El campo no debe estar vacío';
 		textarea.style.borderColor = 'rgba(238, 68, 85)';
 	}

 	
 })
}

function formValid(){

	if(name.classList.contains('valid') && email.classList.contains('valid') && subject.classList.contains('valid') && textarea.classList.contains('valid')){
		console.log('Dele');
		submit.disabled = false;
	}
}

document.addEventListener('submit', (e) => {

	if(name.value === '' || email.value === '' || subject.value === '' || textarea.value === '') {
		submit.disabled = true;
	// 	parrafo.classList.add('activo');
	// 	parrafo.textContent = 'Todos los campos requieren ser rellenados';

	// 	setTimeout(() => {
	// 	parrafo.classList.remove('activo');
	// 	}, 5000)on 
	}
})