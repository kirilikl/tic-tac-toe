const gameTable = document.getElementById("gameTable")
const information = document.getElementById("information")
const button = document.getElementById("button")
const boxes = document.getElementsByClassName("box")
let turn = false
let result = ""

const winCheck = () => {
	let drawCheck = 0
	const winCondition = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 4, 8],
		[6, 4, 2],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
	]

	for (let i = 0; i < winCondition.length; i++) {
		if (
			boxes[winCondition[i][0]].innerHTML == "X" &&
			boxes[winCondition[i][1]].innerHTML == "X" &&
			boxes[winCondition[i][2]].innerHTML == "X"
		) {
			result = "X победили"
			information.innerHTML = result
		} else if (
			boxes[winCondition[i][0]].innerHTML == "O" &&
			boxes[winCondition[i][1]].innerHTML == "O" &&
			boxes[winCondition[i][2]].innerHTML == "O"
		) {
			result = "O победили"
			information.innerHTML = result
		}
	}

	for (let i = 0; i < 9; i++) {
		if (boxes[i].innerHTML) {
			drawCheck++
		}
	}
	if (drawCheck == 9 && result == "") {
		information.innerHTML = "НИЧЬЯ!"
		drawCheck = 0
	}
}

gameTable.addEventListener("click", (e) => {
	if (
		e.target.innerHTML == "" &&
		(result == "" || result == "Выбрана занятая клетка!!!")
	) {
		e.target.innerHTML = turn === false ? "X" : "O"
		turn = !turn
		winCheck()
	} else if (result) {
		information.innerHTML = "Игра окончена!"
	} else {
		information.innerHTML = "Выбрана занятая клетка!!!"
	}
})

button.onclick = () => {
	result = ""
	information.innerHTML = " "
	drawCheck = 0
	turn = false
	for (let i = 0; i < 9; i++) {
		boxes[i].innerHTML = ""
	}
}
