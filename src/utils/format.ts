import { removeVietnameseTones, getWordRhymCharacter, checkRhryme } from './helper';
import type { CustomeRhyme } from './helper';

export type Lyric = string[][];

export function parseLyrics(lyric: string): Lyric {
  return lyric.trim().split('\n').map((line) => {
    return line.trim().split(' ');
  })
}

export function formatInputLyric(lyrics = ''): string {
  let stringArr = []
  let lines = lyrics.split('\n');
  for (let i = 0; i < lines.length; i++) {
    let chars = lines[i].split(' ');
    let j = 0;
    let lineFormated = []
    while (j < chars.length) {
      if (removeVietnameseTones(chars[j]) !== '') {
        let char = chars[j];
        if (j < chars.length - 1) {
          if (removeVietnameseTones(chars[j + 1]) === '') {
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
          && getWordRhymCharacter(char) !== '') {

          let matchs = char.match(/(!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.\.\.|\.\.|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\)/g);
          if (matchs) {
            if (matchs.length > 1 && char.indexOf(matchs.join('')) > -1) {
              lineFormated.push(char);
            } else {
              const tmpChar = char.replace(/(!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.\.\.|\.\.|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\)/g, "$1 ").split(' ');
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
    if (lineFormated.length > 0 && getWordRhymCharacter(lineFormated[lineFormated.length - 1]) === '') {
      lineFormated[lineFormated.length - 2] += lineFormated[lineFormated.length - 1]
      lineFormated.pop();
      if (lineFormated.length > 0 && getWordRhymCharacter(lineFormated[lineFormated.length - 1]) === '') {
        lineFormated[lineFormated.length - 2] += lineFormated[lineFormated.length - 1]
        lineFormated.pop();
      }
    }
    stringArr.push(lineFormated)
  }
  return stringArr.map(line => line.join(' ')).join('\n')
}

export type rhymeInLine = {
  locations: number[],
  partten: string[]
}

export type Rhyme = {
  color: string,
  locations: {
    line: number,
    position: number
  }[]
}

export type RhymeLocation = { [key: number]: { [key: number]: boolean } };

export function getLyricRhymeLocation(lyric: Lyric, rhymes: CustomeRhyme, color: string,): RhymeLocation {
  const rhymeGroup: Rhyme[] = []
  const rhymeLocations: RhymeLocation = {}
  for (let i = 0; i < lyric.length - 1; i++) {
    let minLength = lyric[i].length <= lyric[i + 1].length ? lyric[i].length : lyric[i + 1].length
    const rhyme2Lines: rhymeInLine = {
      locations: [],
      partten: []
    }
    const rhymeInLines: rhymeInLine = {
      locations: [],
      partten: []
    }
    for (let j = 0; j < lyric[i].length - 3; j++) {
      for (let z = j + 2; z < lyric[i].length - 1; z++) {
        if ([lyric[i][j], lyric[i][j + 1]].join(' ').toLocaleLowerCase() !== [lyric[i][z], lyric[i][z + 1]].join(' ').toLocaleLowerCase()) {
          if (checkRhryme(lyric[i][j], lyric[i][z], rhymes) && checkRhryme(lyric[i][j + 1], lyric[i][z + 1], rhymes)) {
            rhymeInLines.locations.push(j)
            rhymeInLines.locations.push(j + 1)
            rhymeInLines.locations.push(z)
            rhymeInLines.locations.push(z + 1)
            rhymeInLines.partten.push(lyric[i][j] + ' ' + lyric[i][j + 1])
          }
        }
      }
    }

    for (let j = 0; j < minLength; j++) {
      if (checkRhryme(lyric[i][lyric[i].length - j - 1], lyric[i + 1][lyric[i + 1].length - j - 1], rhymes)) {
        rhyme2Lines.locations.push(j)
        rhyme2Lines.partten.push(lyric[i][lyric[i].length - j - 1])
      }
      else
        break
    }
    const rhymeTmp: Rhyme = {
      color,
      locations: []
    }

    for (let j = 0; j < rhyme2Lines.locations.length; j++) {
      rhymeTmp.locations.push({
        line: i,
        position: lyric[i].length - j - 1
      })
      rhymeTmp.locations.push({
        line: i + 1,
        position: lyric[i + 1].length - j - 1
      })
      if (!rhymeLocations[i]) {
        rhymeLocations[i] = {
          [lyric[i].length - j - 1]: true
        }
      } else {
        rhymeLocations[i][lyric[i].length - j - 1] = true;
      }

      if (!rhymeLocations[i + 1]) {
        rhymeLocations[i + 1] = {
          [lyric[i + 1].length - j - 1]: true
        }
      } else {
        rhymeLocations[i + 1][lyric[i + 1].length - j - 1] = true;
      }
    }
    rhymeInLines.locations = [...new Set(rhymeInLines.locations)];
    for (let j = 0; j < rhymeInLines.locations.length; j++) {
      if (!rhymeLocations[i]) {
        rhymeLocations[i] = {
          [rhymeInLines.locations[j]]: true
        }
      } else {
        rhymeLocations[i][rhymeInLines.locations[j]] = true;
      }

    }
    rhymeGroup.push(rhymeTmp)
  }

  return rhymeLocations;
}

export function highlightRhyme(lyric: Lyric, rhymeLocations: RhymeLocation, color: string): Lyric {
  const data: Lyric = []
  for (let i = 0; i < lyric.length; i++) {
      let line = []
      for(let j = 0; j < lyric[i].length; j++) {
          if(rhymeLocations[i] && rhymeLocations[i][j]) {
              line.push(`<span style="color: ${color}">${lyric[i][j]}</span>`)
          } else {
              line.push(lyric[i][j])
          }
      }
      data.push(line)
  }
  return data
}

export function highlight(lyric: string, rhymes: CustomeRhyme, color = '#699940'): string {
  const formattedLyric = formatInputLyric(lyric);
  const parsedLyric = parseLyrics(formattedLyric);
  const rhymeLocations = getLyricRhymeLocation(parsedLyric, rhymes, color);
  const highlightLyric = highlightRhyme(parsedLyric, rhymeLocations, color);
  return highlightLyric.map(line => line.join(' ')).join('<br/>');
}
