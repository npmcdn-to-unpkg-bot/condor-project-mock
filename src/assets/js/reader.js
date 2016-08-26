(function mainIFEE() {
'use strict';

var _TOOLBAR = (function ToolbarInstanciator() {
	var instance;

	function Toolbar() {
		var toolIconRef = document.getElementById('tools-icon');

		var toolBarRef = document.getElementById('tool-bar');

		var collapsed = true;

		var toggle = function toggleToolbar(evt) {
			if(collapsed) {
				toolBarRef.classList.remove('dn');
				toolBarRef.classList.add('flex');
				toolIconRef.innerHTML = '&#215;';
				collapsed = false;
			} else {
				toolBarRef.classList.remove('flex');
				toolBarRef.classList.add('dn');
				toolIconRef.innerHTML = '<svg class="icon icon-wrench"><use xlink:href="#icon-wrench"></use></svg>';
				collapsed = true;
			}
		};

		// X 
		return {
			init: function initToolbar() {
				toolIconRef.addEventListener('click', toggle);
			}
		};
	}

	return {
		getInstance: function() {
			if(!instance) return Toolbar();
			return instance;
		}
	};
})();

// --> MAIN FUNCTION
function main() {
	var toolbar = _TOOLBAR.getInstance();

	toolbar.init();
}
// <-- MAIN FUNCTION

document.addEventListener('DOMContentLoaded', main);

})();