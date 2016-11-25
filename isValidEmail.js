function isValidEmail(string) {
	string = string||'';
	var lastseg = (string.split('@')[1]||'').split('.')[1]||'',
	input = document.createElement('input');
	input.type = 'email';

	input.required = true;
	input.value = string;
	return !!(string && (input.validity && input.validity.valid) && lastseg.length);
}

console.log(isValidEmail('')); // -> false
console.log(isValidEmail('asda')); // -> false
console.log(isValidEmail('asda@gmail')); // -> false
console.log(isValidEmail('asda@gmail.com')); // -> true