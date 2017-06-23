//Reference for all things paper folding.

var flag = true;
var flag1 = false;
function change() {
	if (!flag1) {
		flag = false;
		var elem = document.getElementById("anim1");
		elem.className = "trans1";

		setTimeout(function () {
			elem = document.getElementById("anim2");
			elem.className = "trans2";
		}, 900);

		setTimeout(function () {
			elem = document.getElementById("anim3");
			elem.className = "trans1";
			flag = true;
		}, 1800);
	}
}

function offChange() {
	if (flag) {
		flag1 = true;
		var elem;

		setTimeout(function () {
			elem = document.getElementById("anim3");
			elem.className = "parent1";
		}, 200);

		setTimeout(function () {
			elem = document.getElementById("anim2");
			elem.className = "parent1";
		}, 1100);

		setTimeout(function () {
			elem = document.getElementById("anim1");
			elem.className = "parent1";
			flag1 = false
		}, 2000);
	}
}