const firstCharacter = ["ngh", "qu", "th", "tr", "nh", "ng", "ph", "kh", "gh", "gi", "ch", "b", "c", "d", "đ", "g", "h", "k", "l", "m", "n", "q", "r", "s", "t", "v", "x"];
const lastCharacter = ["A", "AC", "ACH", "AI", "AM", "AN", "ANG", "ANH", "AO", "AP", "AT", "AU", "AY", "ĂC", "ĂM", "ĂN", "ĂNG", "ĂP", "ĂT", "ÂC", "ÂM", "ÂN", "ÂNG", "ÂP", "ÂT", "ÂU", "ÂY", "E", "EC", "EM", "EN", "ENG", "EO", "EP", "ET", "Ê", "ÊCH", "ÊM", "ÊN", "ÊNH", "ÊP", "ÊT", "ÊU", "I", "IA", "íCH", "IÊC", "IÊM", "IÊN", "IÊNG", "IÊP", "IÊU", "IM", "IN", "INH", "IP", "IT", "IU", "O", "OC", "OI", "OM", "ON", "ONG", "OOC", "OONG", "OP", "OT", "Ô", "ÔC", "ÔI", "ÔM", "ÔN", "ÔNG", "ÔP", "ÔT", "Ơ", "ƠI", "ƠM", "ƠN", "ƠP", "ƠT", "U", "UA", "UC", "UI", "UM", "UN", "UNG", "UÔC", "UÔI", "UÔM", "UÔN", "UÔNG", "UÔT", "UP", "UT", "Ư", "ƯA", "ƯC", "ƯI", "ƯM", "ƯN", "ƯNG", "ƯƠC", "ƯƠI", "ƯƠM", "ƯƠN", "UƠNG", "ƯƠP", "ƯƠT", "ƯƠU", "ƯT", "ƯU"];
const lastCharacterObj = {
  "a": ["a"],
  "oa": ["oa", "a"],
  "ac": ["ac"],
  "oac": ["oac", "ac"],
  "ach": ["ach"],
  "oach": ["ach", "oach"],
  "ai": ["ai"],
  "oai": ["oai", "ai"],
  "am": ["am"],
  "oam": ["oam", "am"],
  "an": ["an"],
  "oan": ["oan", "an", "on"],
  "ang": ["ang", "an"],
  "oang": ["oang", "an"],
  "anh": ["anh"],
  "oanh": ["oanh", "anh"],
  "ao": ["ao"],
  "oao": ["oao", "ao"],
  "ap": ["ap"],
  "oap": ["oap", "ap"],
  "at": ["at", "ac"],
  "oat": ["oat", "ac"],
  "au": ["au", "ao"],
  "ay": ["ay"],
  "oay": ["oay", "ay"],
  "ăc": ["ăc"],
  "oăc": ["oăc", "ăc"],
  "ăm": ["ăm"],
  "oăm": ["oăm", "ăm"],
  "ăn": ["ăn"],
  "oăn": ["oăn", "ăn"],
  "ăng": ["ăng", "ăn"],
  "oăng": ["oăng", "ăn"],
  "ăp": ["ăp"],
  "ăt": ["ăt", "ăc"],
  "oăt": ["oăt", "ăc"],
  "âc": ["âc", "ăc"],
  "âm": ["âm", "ăm"],
  "ân": ["ân"],
  "uân": ["uân", "ân"],
  "âng": ["âng", "ân"],
  "uâng": ["uâng", "ân"],
  "âp": ["âp", "ăp"],
  "ât": ["ât", "ăc"],
  "uât": ["uât", "ăc"],
  "âu": ["âu", "au"],
  "ây": ["ây", "ay"],
  "uây": ["uây", "ay"],
  "e": ["e"],
  "oe": ["oe", "e"],
  "ec": ["ec"],
  "em": ["em"],
  "en": ["en"],
  "oen": ["oen", "en"],
  "eng": ["eng", "en"],
  "eo": ["eo"],
  "oeo": ["oeo", "eo"],
  "ep": ["ep"],
  "et": ["et"],
  "oet": ["oet", "et"],
  "ê": ["ê"],
  "uê": ["uê", "ê"],
  "êch": ["êch"],
  "uêch": ["uêch", "êch"],
  "êm": ["êm"],
  "ên": ["ên"],
  "ênh": ["ênh", "ên"],
  "uênh": ["uênh", "ên"],
  "êp": ["êp"],
  "êt": ["êt"],
  "êu": ["êu"],
  "ill": ["iu"],
  "i": ["i"],
  "uy": ["uy", "i"],
  "y": ["y", "i"],
  "ia": ["ia"],
  "uya": ["uya", "ia"],
  "ich": ["ich"],
  "uych": ["uych", "it"],
  "ych": ["ych", "it"],
  "iêc": ["iêc", "iêt"],
  "êc": ["êc", "ec"],
  "iêm": ["iêm", "im"],
  "yêm": ["yêm", "im"],
  "iên": ["iên"],
  "uyên": ["uyên", "iên"],
  "yên": ["yên", "iên"],
  "iêng": ["iêng", "iên"],
  "êng": ["êng", "iên"],
  "yêng": ["yêng", "iên"],
  "iêp": ["iêp"],
  "iêt": ["iêt"],
  "uyêt": ["uyêt", "iêt"],
  "yêt": ["yêt", "iêt"],
  "iêu": ["iêu", "iu"],
  "yêu": ["yêu", "iu"],
  "im": ["im"],
  "in": ["in"],
  "uyn": ["uyn", "iên"],
  "inh": ["inh", "in"],
  "uynh": ["uynh", "iên", "in"],
  "ynh": ["ynh", "in"],
  "ip": ["ip", "iêp"],
  "uyp": ["uyp", "iêp"],
  "it": ["it", "iêp"],
  "uyt": ["uyt", "iêp"],
  "yt": ["yt", "iêp"],
  "iu": ["iu"],
  "uyu": ["uyu", "u"],
  "yu": ["yu", "u"],
  "o": ["o"],
  "oc": ["oc"],
  "oi": ["oi"],
  "om": ["om"],
  "on": ["on"],
  "ong": ["ong"],
  "ooc": ["ooc", "oc"],
  "oong": ["oong", "ong"],
  "op": ["op"],
  "ot": ["ot"],
  "ô": ["ô"],
  "ôc": ["ôc", "oc"],
  "ôi": ["ôi", "oi"],
  "ôm": ["ôm", "om"],
  "ôn": ["ôn"],
  "ông": ["ông", "ong"],
  "ôp": ["ôp", "op"],
  "ôt": ["ôt"],
  "ơ": ["ơ"],
  "uơ": ["uơ"],
  "ơi": ["ơi"],
  "ơm": ["ơm", "om"],
  "ơn": ["ơn"],
  "ơp": ["ơp"],
  "ơt": ["ơt"],
  "u": ["u"],
  "ua": ["ua"],
  "uc": ["uc"],
  "ui": ["ui"],
  "um": ["um"],
  "un": ["un"],
  "ung": ["ung", "un"],
  "uôc": ["uôc"],
  "uôi": ["uôi", "ui"],
  "uôm": ["uôm", "ôm"],
  "uôn": ["uôn"],
  "uông": ["uông", "uôn"],
  "uôt": ["uôt", "uôc"],
  "up": ["up"],
  "ut": ["ut"],
  "ư": ["ư"],
  "ưa": ["ưa"],
  "ưc": ["ưc"],
  "ưi": ["ưi"],
  "ưm": ["ưm", "um"],
  "ưn": ["ưn"],
  "ưng": ["ưng", "ưn"],
  "ươc": ["ươc"],
  "ươi": ["ươi", "ưi"],
  "ươm": ["ươm", "om"],
  "ươn": ["ươn"],
  "ương": ["ương", "ươn"],
  "ươp": ["ươp"],
  "ươt": ["ươt", "ươc"],
  "ươu": ["ươu", "u"],
  "ưt": ["ưt", "ưc"],
  "ưu": ["ưu", "u"]
}
// const special = new RegExp('(!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\)');
const regex = new RegExp('^(' + firstCharacter.join('|') + ')');

function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã/g, "a");
  str = str.replace(/ầ|ấ|ậ|ẩ|ẫ/g, "â");
  str = str.replace(/ằ|ắ|ặ|ẳ|ẵ/g, "ă");
  str = str.replace(/è|é|ẹ|ẻ|ẽ/g, "e");
  str = str.replace(/ề|ế|ệ|ể|ễ/g, "ê");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ/g, "o");
  str = str.replace(/ồ|ố|ộ|ổ|ỗ/g, "ô");
  str = str.replace(/ờ|ớ|ợ|ở|ỡ/g, "ơ");
  str = str.replace(/ù|ú|ụ|ủ|ũ/g, "u");
  str = str.replace(/ừ|ứ|ự|ử|ữ/g, "ư");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, "");
  str = str.trim();
  return str;
}

function checkCustomRhymes(str, rhymes = {}) {
  for (const key in rhymes) {
    if(rhymes[key].includes(str)) {
      return key;
    }
  }
  return false;
}

function removeFirstCharacter(str, rhymes = {}) {
  if (["gi"].indexOf(str) > -1) {
    return "i";
  }
  return checkCustomRhymes(str, rhymes) || str.replace(regex, "")
}

function checkRhryme(a, b, rhymes) {
  a = removeFirstCharacter(removeVietnameseTones(a.toLocaleLowerCase()), rhymes)
  b = removeFirstCharacter(removeVietnameseTones(b.toLocaleLowerCase()), rhymes)
  if (a === b) {
    return true;
  }
  if (lastCharacterObj[a] && lastCharacterObj[b]) {
    return (lastCharacterObj[a].some(item => lastCharacterObj[b].includes(item)))
  }
  return false;
}

function crawl() {
  // a = ...
  let stone = {}

  for (let i = 3; i <= 116; i++) {
    let az = a[i].textContent.split('–');
    for (let j = 1; j < az.length; j++) {
      let azz = az[j].split(',');
      for (let z = 0; z < azz.length; z++) {
        let formated = removeFirstCharacter(removeVietnameseTones(azz[z]));
        if (!stone[formated]) {
          stone[formated] = formated
        }
      }
    }
  }
}

// run();

// function checkRhryme(a, b) {
//   a = removeFirstCharacter(removeVietnameseTones(a.toLocaleLowerCase()))
//   b = removeFirstCharacter(removeVietnameseTones(b.toLocaleLowerCase()))
//   if (a === b) {
//     return true;
//   }
//   if (lastCharacterObj[a] && lastCharacterObj[b]) {
//     return (lastCharacterObj[a].some(item => lastCharacterObj[b].includes(item)))
//   }
//   return false;
// }

function checkSpecial(a) {
  return removeFirstCharacter(removeVietnameseTones(a.toLocaleLowerCase()))
}

function checkRhrymeMutiple(a, b) {
  a = removeFirstCharacter(removeVietnameseTones(a.toLocaleLowerCase()))
  b = removeFirstCharacter(removeVietnameseTones(b.toLocaleLowerCase()))
  if (a === b) {
    return true;
  }
  if (lastCharacterObj[a] && lastCharacterObj[b]) {
    return (lastCharacterObj[a].some(item => lastCharacterObj[b].includes(item)))
  }
  return false;
}

module.exports = {
  checkRhryme,
  removeVietnameseTones,
  checkSpecial
}