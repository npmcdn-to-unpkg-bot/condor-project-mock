(function mainIFEE() {
'use strict';

var _TOOLBAR = (function ToolbarInstanciator() {
	var instance;

	function Toolbar() {
		var headerRef = document.getElementsByClassName('top-header')[0];
		var footerRef = document.getElementsByClassName('top-footer')[0];

		var mainRef = document.getElementsByTagName('main')[0];

		var toolIconRef = document.getElementById('tools-icon');

		var toolBarRef = document.getElementById('tool-bar');

		var articleRef = document.getElementsByTagName('article')[0];

		var collapsed = true;

		var hidden = false;

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

		var hide =  function hideToolbar() {
			if(hidden) {
				mainRef.classList.remove('no-nav');
				headerRef.classList.add('flex');
				headerRef.classList.remove('dn');
				footerRef.classList.add('flex');
				footerRef.classList.remove('dn');
				hidden = false;
			} else {
				mainRef.classList.add('no-nav');
				headerRef.classList.remove('flex');
				headerRef.classList.add('dn');
				footerRef.classList.remove('flex');
				footerRef.classList.add('dn');
				hidden = true;
			}
		};

		return {
			init: function initToolbar() {
				toolIconRef.addEventListener('click', toggle);
				articleRef.addEventListener('click', hide);
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