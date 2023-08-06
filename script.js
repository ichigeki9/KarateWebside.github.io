// Mobile nav menu
const dropdownOne = document.querySelector(".dropdown-container-one");
const dropdownTwo = document.querySelector(".dropdown-container-two");
const dropBtnOne = document.querySelector(".dropBtn-one");
const dropBtnTwo = document.querySelector(".dropBtn-two");
// const btn = document.querySelector('.oranges');

// Accordion

const accordion = document.querySelector(".accordion");
const accordionBtns = document.querySelectorAll(".accordion-btn");


// MOBILE NAV
const hamburgerNav = document.querySelector(".hamburger-nav");
const navBtn = document.querySelector(".hamburger");


// FOOTER YEAR STRONA GRID

const handleNav = () => {
	navBtn.classList.toggle("is-active");
	hamburgerNav.classList.toggle("nav-mobile--active");
};

const added = () => {
	dropdownOne.classList.toggle("visible");
};
const addedd = () => {
	dropdownTwo.classList.toggle("visible");
};

// accordion menu Function
function openAccordionItems() {
	
	if (this.nextElementSibling.classList.contains("active")) {
		this.nextElementSibling.classList.remove("active");
	} else {
		closeAccordionItem();
		this.nextElementSibling.classList.toggle("active");
		
	}
}

const closeAccordionItem = () => {
	const allActiveItems = document.querySelectorAll(".accordion-info");
	allActiveItems.forEach((item) => item.classList.remove("active"))
}

const clickOutsideAccordion = e => {
	if (
		e.target.classList.contains("accordion-btn") ||
		e.target.classList.contains("accordion-info") ||
		e.target.classList.contains("accordion-info-text")
		)
		return
		closeAccordionItem()
	}
	// console.log(btn.nextElementSibling);
	// const addToBtn = () => {
		// 	btn.nextElementSibling.classList.toggle('active');
		// }
		// btn.addEventListener('click', addToBtn );
		
		
		
		accordionBtns.forEach(btn => btn.addEventListener("click", openAccordionItems));
		
		dropBtnOne.addEventListener("click", added);
		dropBtnTwo.addEventListener("click", addedd);
		
		window.addEventListener("click", clickOutsideAccordion);

		navBtn.addEventListener("click", handleNav);