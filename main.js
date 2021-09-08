const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItems = $$('.tab-item');
const tabPanes = $$('.tab-pane');

const lineAppearance = () => {
	const tabActive = $('.tab-item.active');
	const line = $('.tabs .line');

	line.style.left = tabActive.offsetLeft + 'px';
	line.style.width = tabActive.offsetWidth + 'px';
};

lineAppearance();

tabItems.forEach((item, index) => {
	const tabPane = tabPanes[index];

	item.addEventListener('click', function () {
		$('.tab-item.active').classList.remove('active');
		$('.tab-pane.active').classList.remove('active');

		this.classList.add('active');
		tabPane.classList.add('active');

        lineAppearance();
	});
});
