const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content item
function selectItem(e) {
	// Add border to current tab
	this.classList.add("tab-border");

	// Remove border from other tabs
	tabItems.forEach((item) => {
		if (item !== this) {
			item.classList.remove("tab-border");
		}
	});
}

// Listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
