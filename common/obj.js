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

const map = (o, cb) => Object.keys(o)
	.reduce(
		(o2, k, i) =>
			((o2[k] = cb(o[k], k, i)), o2),
		{});

const chainCall = (o, chain) => chain.reduce(
	(o, link) => (typeof link[1] === 'undefined')
		? o[link[0]]()
		: o[link[0]](link[1]),
	o
);

module.exports = {
	keyValue,
	clone,
	sub,
	patch,
	map,
	chainCall
};
