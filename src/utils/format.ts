import { removeVietnameseTones, getLastCharacter } from "./helper";

export function formatInputLyric(lyrics = ''): string {
  let stringArr = []
  let lines = lyrics.split('\n');
  for (let i = 0; i < lines.length; i++) {
    let chars = lines[i].split(' ');
    let j = 0;
    let lineFormated = []
    while (j < chars.length) {
      if (removeVietnameseTones(chars[j]) !== "") {
        let char = chars[j];
        if (j < chars.length - 1) {
          if (removeVietnameseTones(chars[j + 1]) === "") {
            char = chars[j] + chars[j + 1];
            j += 2;
          } else {
            char = chars[j];
            j++
          }
        } else {
          char = chars[j];
          j++
        }
        let charSpecialPosition = char.search(/(!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\)/g);
        if (charSpecialPosition > -1
          && charSpecialPosition < char.length - 1
          && charSpecialPosition !== 0
          && getLastCharacter(char) !== "") {

          let matchs = char.match(/(!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.\.\.|\.\.|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\)/g);
          if (matchs) {
            if (matchs.length > 1 && char.indexOf(matchs.join('')) > -1) {
              lineFormated.push(char);
            } else {
              const tmpChar = char.replace(/(!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.\.\.|\.\.|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\)/g, "$1 ").split(" ");
              for (let z = 0; z < tmpChar.length; z++) {
                lineFormated.push(tmpChar[z]);
              }
            }
          }
        } else {
          lineFormated.push(char);
        }
      } else {
        j++;
      }
    }
    if (lineFormated.length > 0 && getLastCharacter(lineFormated[lineFormated.length - 1]) === "") {
      lineFormated[lineFormated.length - 2] += lineFormated[lineFormated.length - 1]
      lineFormated.pop();
      if (lineFormated.length > 0 && getLastCharacter(lineFormated[lineFormated.length - 1]) === "") {
        lineFormated[lineFormated.length - 2] += lineFormated[lineFormated.length - 1]
        lineFormated.pop();
      }
    }
    stringArr.push(lineFormated)
  }
  return stringArr.map(line => line.join(' ')).join('\n')
}
