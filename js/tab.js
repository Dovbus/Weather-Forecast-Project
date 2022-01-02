import { UI_ELEM } from "./view.js";
export const tab = function () {
	const TAB_NAV = document.querySelectorAll('.tabs-nav__item');
	const TAB_CONTENT = document.querySelectorAll('.tab');
	let tabName;

	TAB_NAV.forEach(element => {
		element.addEventListener('click', selectTabNav);
	});

	function selectTabNav() {
		TAB_NAV.forEach(element => {
			element.classList.remove('is-active');
		});
		this.classList.add('is-active');
		tabName = this.getAttribute('data-tab-name');
		selectTabContent(tabName);
	}

	function selectTabContent(tabName) {
		TAB_CONTENT.forEach(element => {
			element.classList.contains(tabName) ? element.classList.add('is-active') :
				element.classList.remove('is-active');
		})
	}
}
