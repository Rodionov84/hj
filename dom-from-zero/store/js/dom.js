'use strict';

function createElement(node) {
	if (typeof(node) === 'string') {
		return document.createTextNode(node);
	}

	const element = document.createElement(node.name);

	for (const prop in node.props) {
		element.setAttribute(prop, node.props[prop]);
	}

	for (const child of node.childs) {
		element.appendChild(createElement(child));
	}

	return element;
}