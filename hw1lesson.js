var n = 0;
if (prompt('Are u ready to check 1st exercise? y/n') == 'y') {
	var a = +prompt("Добавьте температуру в градусах по цельсию для ее перевода в градусы по Фаренгейту");
	alert(((9 / 5) * a));
	n++;
	alert(n + ' exercises checked');
}
else if (a != 'y') {
	alert('u make me sad');
	alert(n + 'exercises checked');
}
if (prompt('Do u want to continue? Second exercise is waiting for u! y/n?') == 'y') {
	var admin = 'unknown';
	alert('The name of our admin is ' + admin);
	var name = prompt('choose a name for our future administrator! So exciting!');
	admin = name;
	alert('God save ' + admin);
	n++;
	alert(n + ' exercises checked. Good job!');
}
else if (a != 'y') {
	alert('u make me sad');
	alert(n + ' exercises checked');
}
if (prompt('last one! are u ready? y/n?') == 'y') {
	var m = k + h;
	var h = +1000;
	var k = '108';
	alert(m);
	n++;
	alert(n + ' exercises checked. Wow! Amazing!');
}
if (n == 0) {
	alert('u tried, but.. ' + n + ' exercises checked');
}
// comment to pull requst 1
