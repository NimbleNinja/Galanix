

let date = new Date();
let year = date.getFullYear();
let day = date.getDate();
let month = date.getMonth();
let hours = date.getHours();
let minutes = date.getMinutes();
let minStr = String(minutes);
let minParse = parseInt(minStr, 10);

let countX = document.getElementsByClassName('grid-img__item').length;

content.insertAdjacentHTML('afterbegin',
	`<div class="counter-img">На странице ${countX} изображений</div><div class="counter-time">Текущая дата: ${day}.${month}.${year} ${hours}:${minParse}</div>`
);


let imgObj = document.querySelectorAll('.grid-img__content');

for (let i = 0; i < imgObj.length; i++) {

	//вешаем событие на каждую картинку
	imgObj[i].onclick = function () {

		//добавляем блоки html
		content.insertAdjacentHTML('afterbegin',
			`<div class="full-img" id="imgbox">
				<div class="full-img__btn" data-btn></div>
				<img src="img/${[i + 1]}.jpg">
			</div>`
		);

		//блокируем прокрутку body
		document.querySelector('body').classList.add('lock');
	}

}

//вешаем событие на закрывающую кнопку
document.addEventListener('click', function (event) {

	if (event.target.dataset.btn != undefined) {
		imgbox.remove();
		document.querySelector('body').classList.remove('lock');
	}

});