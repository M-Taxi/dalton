const atomSymbolList = [
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
	"Ca",
	"Sc",
	"Ti",
	"V",
	"Cr",
	"Mn",
	"Fe",
	"Co",
	"Ni",
	"Cu",
	"Zn",
	"Ga",
	"Ge",
	"As",
	"Se",
	"Br",
	"Kr",
	"Rb",
	"Sr",
	"Y",
	"Zr",
	"Nb",
	"Mo",
	"Tc",
	"Ru",
	"Rh",
	"Pd",
	"Ag",
	"Cd",
	"In",
	"Sn",
	"Sb",
	"Te",
	"I",
	"Xe",
	"Cs",
	"Ba",
	"La",
	"Ce",
	"Pr",
	"Nd",
	"Pm",
	"Sm",
	"Eu",
	"Gd",
	"Tb",
	"Dy",
	"Ho",
	"Er",
	"Tm",
	"Yb",
	"Lu",
	"Hf",
	"Ta",
	"W",
	"Re",
	"Os",
	"Ir",
	"Pt",
	"Au",
	"Hg",
	"Tl",
	"Pb",
	"Bi",
	"Po",
	"At",
	"Rn",
	"Fr",
	"Ra",
	"Ac",
	"Th",
	"Pa",
	"U",
	"Np",
	"Pu",
	"Am",
	"Cm",
	"Bk",
	"Cf",
	"Es",
	"Fm",
	"Md",
	"No",
	"Lr",
	"Rf",
	"Db",
	"Sg",
	"Bh",
	"Hs",
	"Mt",
	"Ds",
	"Rg",
	"Cn",
	"Nh",
	"Fl",
	"Mc",
	"Lv",
	"Ts",
	"Og"
]; //元素記号の定義
const atomNameList = [
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
	"カルシウム",
	"スカンジウム",
	"チタン",
	"バナジウム",
	"クロム",
	"マンガン",
	"鉄",
	"コバルト",
	"ニッケル",
	"銅",
	"亜鉛",
	"ガリウム",
	"ゲルマニウム",
	"ヒ素",
	"セレン",
	"臭素",
	"クリプトン",
	"ルビジウム",
	"ストロンチウム",
	"イットリウム",
	"ジルコニウム",
	"ニオブ",
	"モリブデン",
	"テクネチウム",
	"ルテニウム",
	"ロジウム",
	"パラジウム",
	"銀",
	"カドミウム",
	"インジウム",
	"スズ",
	"アンチモン",
	"テルル",
	"ヨウ素",
	"キセノン",
	"セシウム",
	"バリウム",
	"ランタン",
	"セリウム",
	"プラセオジム",
	"ネオジム",
	"プロメチウム",
	"サマリウム",
	"ユウロピウム",
	"ガドリニウム",
	"テルビウム",
	"ジスプロシウム",
	"ホルミウム",
	"エルビウム",
	"ツリウム",
	"イッテルビウム",
	"ルテチウム",
	"ハフニウム",
	"タンタル",
	"タングステン",
	"レニウム",
	"オスミウム",
	"イリジウム",
	"白金",
	"金",
	"水銀",
	"タリウム",
	"鉛",
	"ビスマス",
	"ポロニウム",
	"アスタチン",
	"ラドン",
	"フランシウム",
	"ラジウム",
	"アクチニウム",
	"トリウム",
	"プロトアクチニウム",
	"ウラン",
	"ネプツニウム",
	"プロトニウム",
	"アメリシウム",
	"キュリウム",
	"バークリウム",
	"カリフォルニウム",
	"アインスタイニウム",
	"フェルミウム",
	"メンデレビウム",
	"ノーベリウム",
	"ローレンシウム",
	"ラザホージウム",
	"ドブニウム",
	"シーボーギウム",
	"ボーリウム",
	"ハッシウム",
	"マイトネリウム",
	"ダームスタチウム",
	"レントゲニウム",
	"コペルニシウム",
	"ニホニウム",
	"フレロビウム",
	"モスコビウム",
	"リバモリウム",
	"テネシン",
	"オガネソン"
]; //元素名の定義

let atomSymbols = atomSymbolList;
let atomNames = atomNameList;

const getRandom = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
} //乱数生成

const joinArray = (arr1, ...args) => {
	let outputArray = arr1;
	for (const arg of args) {
		outputArray.concat(arg);
	};
	return outputArray;
};

const displayAtom = () => {
	switch (document.getElementById("level").value) {
		case "level0":
			atomSymbols = atomSymbolList.slice(0, 19);
			atomNames = atomNameList.slice(0, 19);
			break;
		case "level1":
			atomSymbols = atomSymbolList.slice(0, 19).concat(["Al", "Fe", "Cu", "Au", "Ag", "Zn"]);
			atomNames = atomNameList.slice(0, 19).concat(["アルミニウム", "鉄", "銅", "金", "銀", "亜鉛"]);
			break;
		case "level2":
			atomSymbols = atomSymbolList.slice(20, 55);
			atomNames = atomNameList.slice(20, 55);
			break;
		case "level3":
			atomSymbols = atomSymbolList.slice(56, 87);
			atomNames = atomNameList.slice(56, 87);
			break;
		case "level4":
			atomSymbols = atomSymbolList.slice(88, 102);
			atomNames = atomNameList.slice(88, 102);
			break;
		case "level5":
			atomSymbols = atomSymbolList.slice(103, 117);
			atomNames = atomNameList.slice(103, 117);
			break;
		default:
			break;
	};
	console.log(atomSymbols);
	const numberOfAtom = atomSymbols.length;
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
