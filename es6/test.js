'use strict';

// средство еs6: блок "левых" объявлений
const sentences = [
	{subject: 'JavaScript', verb: 'is', object: 'great'},
	{subject: 'Elephants', verb: 'are', object: 'large'}
];
// средство еs б: строки шаблона
function say({subject, verb, object}) {
	console.log('${subject} ${verb} ${object}');
}
for (let s of sentences) {
	say(s);
}