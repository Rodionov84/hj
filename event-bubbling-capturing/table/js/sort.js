'use strict';

function handleTableClick(event) {
	const th = event.target;
	if( !th.hasAttribute('data-prop-name') || th.nodeName !== 'TH' ) {
	  return;
	}

	let dir;
	if( !th.hasAttribute('data-dir') ) {
	  th.setAttribute('data-dir', '1');
	  dir = 1;
	}
	else {
	  dir = th.getAttribute('data-dir') === '1' ? -1 : 1;
	  th.setAttribute('data-dir', dir);
	}

	let sortBy = th.getAttribute('data-prop-name');
	this.setAttribute('data-sort-by', sortBy);

	sortTable(sortBy, dir);
}
