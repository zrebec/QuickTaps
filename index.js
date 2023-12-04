const keys = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"0",
	"q",
	"w",
	"e",
	"r",
	"t",
	"y",
	"u",
	"i",
	"o",
	"p",
	"a",
	"s",
	"d",
	"f",
	"g",
	"h",
	"j",
	"k",
	"l",
	"backspace",
	"shift",
	"z",
	"x",
	"c",
	"v",
	"b",
	"n",
	"m",
	",",
	".",
	" ",
	"enter",
];

document.onkeydown = function (e) {
	const key = e.key.toLowerCase();
	if (keys.includes(key)) {
		const displayKey = document.querySelector("div[data-key='" + key + "']");
		displayKey.classList.add("onpress");
	}
};

document.onkeyup = function (e) {
	const displayKeys = document.querySelectorAll(".onpress");
	displayKeys.forEach((key) => {
		key.classList.remove("onpress");
	});
};
