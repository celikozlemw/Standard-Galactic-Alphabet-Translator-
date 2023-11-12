let map = new Map<string, string>();
map.set("a", "ᔑ");
map.set("b", "ʖ");
map.set("c", "ᓵ");
map.set("ç", "ç");
map.set("d", "↸");
map.set("e", "ᒷ");
map.set("f", "⎓");
map.set("g", "⊣");
map.set("ğ", "ğ");
map.set("h", "⍑");
map.set("ı", "ı");
map.set("i", "╎");
map.set("j", "⋮");
map.set("k", "ꖌ");
map.set("l", "ꖎ");
map.set("m", "ᒲ");
map.set("n", "リ");
map.set("o", "𝙹");
map.set("ö", "ö");
map.set("p", "!¡");
map.set("q", "ᑑ");
map.set("r", "∷");
map.set("s", "ᓭ");
map.set("ş", "ş");
map.set("t", "ℸ ̣");
map.set("u", "⚍");
map.set("ü", "ü");
map.set("v", "⍊");
map.set("w", "∴");
map.set("x", "̇/");
map.set("y", "||");
map.set("z", "⨅");


function turkishToSymbols(text: string): string {
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

function symbolsToTurkish(text: string): string {
  let result = "";
  for (let char of text) {
    if (map.hasValue(char)) {
      result += map.getKey(char);
    }
    
    else {
      result += char;
    }
  }
  return result;
}

// Test 
let turkishText = "cümleyi buraya küçük harf kullanarak yazınız";
let symbolText = turkishToSymbols(turkishText);
console.log(symbolText); //ᓵüᒲꖎᒷ||╎ ʖ⚍∷ᔑ||ᔑ ꖌüçüꖌ ⍑ᔑ∷⎓ ꖌ⚍ꖎꖎᔑリᔑ∷ᔑꖌ ||ᔑ⨅ıリı⨅
