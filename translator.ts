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



function latinToSymbol(text: string): string {
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

function symbolToLatin(text: string): string {
  let result = "";
  for (let char of text) {
    for (let [key, value] of map) {
      if (char === value) {
        result += key.toLowerCase();
        break;
      }
    }
    if (!Array.from(map.values()).includes(char)) {
      result += char;
    }
  }
  return result;
}

// Test 
let option = parseInt(prompt("Lütfen bir seçenek girin 1-2"));

if (option == 1) {
  let Text = prompt("latince karakterlerden oluşan bir metin girin");
  let symbolText = latinToSymbol(Text);
  console.log(symbolText);
}
else if (option == 2) {
    let Text = prompt("latin alfabesine çevrilecek metni girin");
  let normalText = symbolToLatin(Text);
  console.log(normalText);
}
else {
  console.log("Geçersiz metin");
}

