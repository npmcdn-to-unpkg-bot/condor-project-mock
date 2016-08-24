(function mainIIFE() {
'use strict';

// Define modules

var _SIDEBAR = (function SidebarInstanciator() {
	var instance;

	function Sidebar() {
		var DOMref = document.getElementById('sidebar');
		var hamburguer = document.getElementById('hamburguer');
		var collapsed = true;
		var openClass = 'sidebar--open';

		return {
			toggle: function toggleSide() {
				if(collapsed) {
					DOMref.classList.add(openClass);
					hamburguer.innerHTML = '&#215;';
					collapsed = false;
				} else {
					DOMref.classList.remove(openClass);
					hamburguer.innerHTML = '&#8801;';
					collapsed = true;
				}
			},
			getHamburguer: function getHamburguer() {
				return hamburguer;
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

	sidebar.getHamburguer().addEventListener('click', sidebar.toggle);
	searchbar.getSearchIco().addEventListener('click', searchbar.toggle);
}
// <-- MAIN FUNCTION

// DOMContentLoaded Listener ___________________________________________________
document.addEventListener('DOMContentLoaded', main);

})();