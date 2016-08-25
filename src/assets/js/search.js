(function mainIIFE() {
'use strict';

var _FILTERBAR = (function FilterbarInstanciator() {
	var instance;

	function Filterbar() {
		var filterHeadRef = document.getElementById('filter-heading');
		var filtersFormRef = document.getElementById('filters');
		var arrowRef = filterHeadRef.lastChild;
		var collapsed = true;

		return {
			toggle: function toggleFilterbar(evt) {
				if(collapsed) {
					filtersFormRef.classList.add('flex');
					filtersFormRef.classList.remove('dn');
					arrowRef.innerHTML = '&#9662;';
					collapsed = false;
				} else {
					filtersFormRef.classList.add('dn');
					filtersFormRef.classList.remove('flex');
					arrowRef.innerHTML = '&#9666;';
					collapsed = true;
				}
			},
			init: function init() {
				filterHeadRef.addEventListener('click', this.toggle);
			}
		};
	}

	return {
		getInstance: function() {
			if(!instance) return new Filterbar();
			return instance;
		}
	};
})();

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// --> MAIN FUNCTION
function main() {
	var filterbar = _FILTERBAR.getInstance();

	filterbar.init();
	document.getElementById('search-form').firstChild.value = getParameterByName('query');
}
// <-- MAIN FUNCTION

// Executed code _______________________________________________________________
document.addEventListener('DOMContentLoaded', main);

})();