const atomSymbols = [
	"H",
	"He",
	"Li",
	"Be",
	"B",
	"C",
	"N",
	"O",
	"F",
	"Ne",
	"Na",
	"Mg",
	"Al",
	"Si",
	"P",
	"S",
	"Cl",
	"Ar",
	"K",
	"Ca"
]; //元素記号の定義
const atomNames = [
	"水素",
	"ヘリウム",
	"リチウム",
	"ベリリウム",
	"ホウ素",
	"炭素",
	"窒素",
	"酸素",
	"フッ素",
	"ネオン",
	"ナトリウム",
	"マグネシウム",
	"アルミニウム",
	"ケイ素",
	"リン",
	"硫黄",
	"塩素",
	"アルゴン",
	"カリウム",
	"カルシウム"
]; //元素名の定義

const numberOfAtom = atomSymbols.length;

const getRandom = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
} //乱数生成

const displayAtom = () => {
	let randomAtomNums = [];
	for (let i = 0; i <= 3; i++) {
		while(true) {
			let random = Math.floor(getRandom(0, numberOfAtom-1));
			if(!randomAtomNums.includes(random)){
				randomAtomNums.push(random);
				break;
			}
		}
	};//原子番号を４つ生成する
	const correctAtomNum = randomAtomNums[Math.floor(getRandom(0, 3))];//生成された原子番号のうち一つを答えとする
	const correctAtomSymbol = atomSymbols[correctAtomNum]; //原子番号に対応する元素記号を宣言
	const correctAtomName = atomNames[correctAtomNum]; //原子番号に対応する元素名を宣言
	document.getElementById("elementName").innerHTML=correctAtomSymbol; //元素記号を表示
	for (let i = 0; i <= 3; i++) {
		document.getElementById("choice"+i).innerHTML=atomNames[randomAtomNums[i]];
	} //選択肢を表示
}

const answer = (answer) => {
	const correctAtomSymbol = document.getElementById("elementName").innerHTML;
	const correctAtomNum = atomSymbols.indexOf(correctAtomSymbol);
	const chosenAtomName = document.getElementById("choice"+answer).innerHTML;
	const chosenAtomNum = atomNames.indexOf(chosenAtomName);
	let correctChoice;
	for (let i = 0; i <= 3; i++) {
		if (document.getElementById("choice"+i).innerHTML === atomNames[correctAtomNum]) {
			correctChoice = i;
			break;
		} else {
			continue;
		}
	}
	theAnswer = document.getElementById("choice" + correctChoice);
	if (chosenAtomNum === correctAtomNum) {
		document.getElementById("elementName").innerHTML = "正解";
		theAnswer.style.backgroundColor = "skyblue";
	} else {
		document.getElementById("elementName").innerHTML = "不正解";
		theAnswer.style.backgroundColor = "red";
	}
	setTimeout(() => {
  		displayAtom();
  		theAnswer.style.backgroundColor = "";
	}, 2000);

}
