'use strict';

// средство еs6: блок "левых" объявлений
const sents = [
	{subject: 'JavaScript', verb: 'is', object: 'great'},
	{subject: 'Elephants', verb: 'are', object: 'large'},
];
// средство еs б: строки шаблона
function say({subject, verb, object}) {
	console.log(subject, verb, object);
}
for (let s of sents) {
	say(s);
}