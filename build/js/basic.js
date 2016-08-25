(function mainIIFE() {
'use strict';

// Define modules

var _SIDEBAR = (function SidebarInstanciator() {
	var instance;

	function Sidebar() {
		var DOMref = document.getElementById('sidebar');
		var hamburguer = document.getElementById('hamburguer');
		var content = document.getElementById('content');
		var collapsed = true;
		var openClass = 'sidebar--open';
		// This variable holds the name of each category and a boolean value
		// representing whether its subcategories list is collapsed or not.
		var collapsedCat = {};

		var subCatHandler = function onClick(evt) {
			var clickedText,
					arrowRef,
					subMenuRef;

			if(evt.target.classList.contains('menu-item')) {
				clickedText = evt.target.attributes['data-catname'].value;
				arrowRef = evt.target.firstChild;
				subMenuRef = evt.target.nextSibling;
				
				if(collapsedCat[clickedText]) {
					collapsedCat[clickedText] = false;
					arrowRef.innerHTML = '&#9662;';
					subMenuRef.classList.remove('dn');
				} else {
					collapsedCat[clickedText] = true;
					arrowRef.innerHTML = '&#9656;';
					subMenuRef.classList.add('dn');
				}
			}
		};

		return {
			toggle: function toggleSide() {
				if(collapsed) {
					DOMref.classList.add(openClass);
					hamburguer.innerHTML = '&#215;';
					content.classList.add('fixed');
					collapsed = false;
				} else {
					DOMref.classList.remove(openClass);
					hamburguer.innerHTML = '&#8801;';
					content.classList.remove('fixed');
					collapsed = true;
				}
			},
			getHamburguer: function getHamburguer() {
				return hamburguer;
			},
			init: function init() {
				var categories = DOMref.getElementsByClassName('menu-item'),
						obj = {};

				// After this for loop `callpsedCat` will have an entry for each category
				// with the value `true` saying all subcategories are collapsed.
				for(var i=0, max=categories.length; i<max; i+=1) {
					collapsedCat[categories[i].attributes['data-catname'].value] = true;
				}

				DOMref.addEventListener('click', subCatHandler);
			}
		};
	}

	return {
		getInstance: function() {
			if(!instance) return Sidebar();
			return instance;
		}
	};

})();

var _SEARCHBAR = (function SearchbarInstanciator() {
	var instance;

	function Searchbar() {
		var DOMref = document.getElementById('search');
		var icon = document.getElementById('search-ico');
		var searchForm = document.getElementById('search-form');
		var collapsed = true;

		return {
			toggle: function toggleSearch() {
				if(collapsed) {
					DOMref.classList.add('db');
					icon.innerHTML = '&#215;';
					collapsed = false;
				} else {
					DOMref.classList.remove('db');
					icon.innerHTML = '<svg class="icon icon-search"><use xlink:href="#icon-search"></use>';
					collapsed = true;
				}
			},
			getSearchIco: function getSearchIco() {
				return icon;
			}
		};
	}

	return {
		getInstance: function() {
			if(!instance) return Searchbar();
			return instance;
		}
	};
})();

// --> MAIN FUNCTION
function main() {
	var sidebar = _SIDEBAR.getInstance(),
			searchbar = _SEARCHBAR.getInstance();

	sidebar.init();
	sidebar.getHamburguer().addEventListener('click', sidebar.toggle);
	searchbar.getSearchIco().addEventListener('click', searchbar.toggle);
}
// <-- MAIN FUNCTION

// DOMContentLoaded Listener ___________________________________________________
document.addEventListener('DOMContentLoaded', main);

})();