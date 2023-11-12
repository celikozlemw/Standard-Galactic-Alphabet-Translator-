//https://playcode.io/typescript 

let map = new Map<string, string>();
map.set("a", "ᔑ");
map.set("b", "ʖ");
map.set("c", "ᓵ");
map.set("d", "↸");
map.set("e", "ᒷ");
map.set("f", "⎓");
map.set("g", "⊣");
map.set("h", "⍑");
map.set("i", "╎");
map.set("j", "⋮");
map.set("k", "ꖌ");
map.set("l", "ꖎ");
map.set("m", "ᒲ");
map.set("n", "リ");
map.set("o", "𝙹");
map.set("p", "!¡");
map.set("q", "ᑑ");
map.set("r", "∷");
map.set("s", "ᓭ");
map.set("t", "ℸ ̣");
map.set("u", "⚍");
map.set("v", "⍊");
map.set("w", "∴");
map.set("x", "̇/");
map.set("y", "||");
map.set("z", "⨅");

map.set("A", "ᔑ");
map.set("B", "ʖ");
map.set("C", "ᓵ");
map.set("D", "↸");
map.set("E", "ᒷ");
map.set("F", "⎓");
map.set("G", "⊣");
map.set("H", "⍑");
map.set("I", "╎");
map.set("J", "⋮");
map.set("K", "ꖌ");
map.set("L", "ꖎ");
map.set("M", "ᒲ");
map.set("N", "リ");
map.set("O", "𝙹");
map.set("P", "!¡");
map.set("Q", "ᑑ");
map.set("R", "∷");
map.set("S", "ᓭ");
map.set("T", "ℸ ̣");
map.set("U", "⚍");
map.set("V", "⍊");
map.set("W", "∴");
map.set("X", "̇/");
map.set("Y", "||");
map.set("Z", "⨅");


function Symbols(text: string): string {
  let result = "";
  for (let char of text) {
    
    if (map.has(char)) {
      result += map.get(char);
    }
    
    else {
      result += char;
    }
  }
  return result;
}

function symbols(text: string): string {
  let result = "";
  for (let char of text) {
    for (let [key, value] of map) {
      if (char == value) {
        result += key;
        break;
      }
    }
    if (!map.hasValue(char)) {
      result += char;
    }
  }
  return result;
}

// Test 
let option = prompt("Lütfen bir seçenek girin:1-2");
let Text = prompt("Bir metin girin:");
if (option == "1") {
  let symbolText = Symbols(Text);
  console.log(symbolText);
}
else if (option == "2") {
  let normalText = symbols(Text);
  console.log(normalText);
}
else {
  console.log("Geçersiz metin");
}
