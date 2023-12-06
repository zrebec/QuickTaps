const keys = [
	{ chars: ["1"] },
	{ chars: ["2"] },
	{ chars: ["3"] },
	{ chars: ["4"] },
	{ chars: ["5"] },
	{ chars: ["6"] },
	{ chars: ["7"] },
	{ chars: ["8"] },
	{ chars: ["9"] },
	{ chars: ["0"] },
	{ chars: ["q"] },
	{ chars: ["w"] },
	{ chars: ["e"] },
	{ chars: ["r"] },
	{ chars: ["t"] },
	{ chars: ["y"] },
	{ chars: ["u"] },
	{ chars: ["i"] },
	{ chars: ["o"] },
	{ chars: ["p"] },
	{ chars: ["a"] },
	{ chars: ["s"] },
	{ chars: ["d"] },
	{ chars: ["f"] },
	{ chars: ["g"] },
	{ chars: ["h"] },
	{ chars: ["j"] },
	{ chars: ["k"] },
	{ chars: ["l"] },
	{ chars: ["backspace"] },
	{ chars: ["shift"] },
	{ chars: ["z"] },
	{ chars: ["x"] },
	{ chars: ["c"] },
	{ chars: ["v"] },
	{ chars: ["b"] },
	{ chars: ["n"] },
	{ chars: ["m"] },
	{ chars: [","] },
	{ chars: ["."] },
	{ chars: [" "] },
	{ chars: ["enter"] },
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
