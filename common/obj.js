'use strict';

const keyValue = (k, v) => {
	let o = {};
	o[k] = v;
	return o;
};

const clone = o => Object.assign(Object.create(Object.getPrototypeOf(o) || {}), o);

const sub = (o, p) => (p instanceof Array)
	&& o[p[0]] && sub(o[p[0]], p.slice(1))
	|| o[p] || false;

const patch = (o, k, v) => Object.assign(clone(o),
	(k instanceof Array)
		? keyValue(k[0], (k.length > 1)
			? patch(o[k[0]] || {}, k.slice(1), v)
			: typeof o[k[0]] === 'object' && Object.assign(clone(o[k[0]]), v) || v)
		: keyValue(k, typeof o[k] === 'object' && Object.assign(clone(o[k]), v) || v)
);

module.exports = {
	keyValue,
	clone,
	sub,
	patch
};
