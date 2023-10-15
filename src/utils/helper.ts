import { FirstCharacters, LastCharacterSameSound } from './constant';

export function parseLyrics(lyric: string): string[][] {
  return lyric.trim().split('\n').map((line) => {
      return line.trim().split(' ');
  })
}

export function removeVietnameseTones(word: string): string {
  const RegExpTones: [regex: RegExp, letter: string ][] = [
    [/à|á|ạ|ả|ã/g, 'a'],
    [/ầ|ấ|ậ|ẩ|ẫ/g, 'â'],
    [/ằ|ắ|ặ|ẳ|ẵ/g, 'ă'],
    [/è|é|ẹ|ẻ|ẽ/g, 'e'],
    [/ề|ế|ệ|ể|ễ/g, 'ê'],
    [/ì|í|ị|ỉ|ĩ/g, 'i'],
    [/ò|ó|ọ|ỏ|õ/g, 'o'],
    [/ồ|ố|ộ|ổ|ỗ/g, 'ô'],
    [/ờ|ớ|ợ|ở|ỡ/g, 'ơ'],
    [/ù|ú|ụ|ủ|ũ/g, 'u'],
    [/ừ|ứ|ự|ử|ữ/g, 'ư'],
    [/ỳ|ý|ỵ|ỷ|ỹ/g, 'y'],
    [/ + /g, ' ']
  ];

  let result = RegExpTones.reduce((formatted: string, [pattern, letter]) => {
    return formatted.replace(pattern, letter);
  }, word);
  
  result = result.trim();
  result = result.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '');
  result = result.trim();
  return result;
}

export type CustomeRhyme = {
  [key: string]: string[]
}

export function getCustomRhymes(word: string, customRhymes: CustomeRhyme = {}): string | null {
  for (const key in customRhymes) {
    if(customRhymes[key].includes(word)) {
      return key;
    }
  }
  return null;
}

export function removeFirstCharacter(word: string, customRhymes: CustomeRhyme = {}): string {
  if (['gi'].indexOf(word) > -1) {
    return 'i';
  }
  return getCustomRhymes(word, customRhymes) || word.replace(new RegExp('^(' + FirstCharacters.join('|') + ')'), '')
}

export function getWordRhymCharacter(word: string): string {
  return removeFirstCharacter(removeVietnameseTones(word.toLowerCase()));
}

export function checkRhryme(a: string, b: string, customRhymes: CustomeRhyme = {}): boolean {
  const aFormatted = removeFirstCharacter(removeVietnameseTones(a.toLocaleLowerCase()), customRhymes)
  const bFormatted = removeFirstCharacter(removeVietnameseTones(b.toLocaleLowerCase()), customRhymes)
  if (aFormatted === bFormatted) {
    return true;
  }
  if (LastCharacterSameSound[aFormatted] && LastCharacterSameSound[bFormatted]) {
    return (LastCharacterSameSound[aFormatted].some(item => LastCharacterSameSound[bFormatted].includes(item)))
  }
  return false;
}
