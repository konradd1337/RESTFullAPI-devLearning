'use strict';

const sents = [
	{subject: 'JavaScript', verb: 'is', object: 'great'},
	{subject: 'Elephants2', verb: 'are', object: 'large'},
];

function say({subject, verb, object}) {
	console.log(subject, verb, object);
}
for (let s of sents) {
	say(s);
}