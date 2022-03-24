(async() => {
	await ModMenu.init();
	ModMenu.menu.arr.push(new ModMenu.MenuTree('glixzzy', [
		new ModMenu.MenuTree('Cafe', [
			new ModMenu.MenuButton('Get Coins', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Cafe/Get-Coins.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Infinite Food Level', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Cafe/Infinite-Food-Level.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Stock Infinite Food', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Cafe/Stock-Infinite-Food.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Crypto', [
			new ModMenu.MenuButton('Get Crypto', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Crypto-Hack/Get-Crypto.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Hack Other Users Password', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Crypto-Hack/Get-Other-Users-Password.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Factory', [
			new ModMenu.MenuButton('Get Cash', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Factory/Get-Cash.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Get Mega Bot', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Factory/Get-Mega-Bot.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Fishing Frenzy', [
			new ModMenu.MenuButton('Set Weight', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Fishing-Frenzy/Set-Weight.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Global', [
			new ModMenu.MenuButton('Add Tokens', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Global/Add-Tokens.js").then((res) => res.text().then((t) => eval(t)))),
			new.ModMenu.MenuButon('Get All Blooks In The Game', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Global/Get-All-Blooks-In-Game.js").then((res) => res.text().then((t) => eval(t)))),
      			new ModMenu.MenuButton('Get Every Answer Correct', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Global/Get-All-Answers-Correct.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Sell Duplicate Blooks', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Global/Sell-Dupe-Blooks.js").then.((res) => res.text().then((t) => eval(t)))),
      			new ModMenu.MenuButton('Spam Open Boxes', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Global/Spam-Open-Boxes.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Gold', [
			new ModMenu.MenuButton('Get Gold', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Gold-Quest/Get-Gold.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Chest ESP', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Gold-Quest/Chest-ESP.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Racing', [
			new ModMenu.MenuButton('Instant Win', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Racing/Instant-Win.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Tower Defense', [
			new ModMenu.MenuButton('Change Game Round', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Tower-Defense/Change-Game-Round.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Get Cash', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Tower-Defense/Get-Cash.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Clear Enimies', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Tower-Defense/Clear-Enemies.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Tower of Doom', [
			new ModMenu.MenuButton('Add Coins', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Tower-Of-Doom/Add-Coins.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Max Out Stats', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Tower-Of-Doom/Max-Out-Stats.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Lower All Enemy Stats', () => fetch("https://raw.githubusercontent.com/lol-jude/Blooket-Hacks/main/Tower-Of-Doom/Lower-All-Enemy-Stats.js").then((res) => res.text().then((t) => eval(t)))),
		]),
	]));
})(); 
