
const rhyme = require('./rhyme');
const checkRhrymeLib = rhyme.checkRhryme;
const removeVietnameseTones = rhyme.removeVietnameseTones;
const checkSpecial = rhyme.checkSpecial;

function parseLyrics(str) {
    return str.trim().split("\n").map((line) => {
        return line.trim().split(" ");
    })
}

function checkRhryme(z, zz) {
    return checkRhrymeLib(z, zz)
}

function showBaseText(a) {
    a = parseLyrics(a);
    for (let i = 0; i < a.length; i++) {
        console.log(a[i].join(" ").trim())
    } 
}

function formatInputLyric(lyrics = '') {
    let stringArr = []
    let lines = lyrics.split('\n');
    for(let i = 0; i < lines.length; i++) {
        let chars = lines[i].split(' ');
        let j = 0;
        let lineFormated = []
        while (j < chars.length) {
            if(removeVietnameseTones(chars[j]) !== "") {
                let char = chars[j];
                if(j < chars.length - 1) {
                    if(removeVietnameseTones(chars[j + 1]) === "") {
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
                if(charSpecialPosition > -1 
                && charSpecialPosition < char.length - 1
                && charSpecialPosition !== 0
                && checkSpecial(char) !== "") {
                    
                    let matchs = char.match(/(!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.\.\.|\.\.|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\)/g);
                    if(matchs.length > 1 && char.indexOf(matchs.join('')) > -1) {
                        lineFormated.push(char);
                    } else {
                        let tmpChar = char.replace(/(!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.\.\.|\.\.|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\)/g, "$1 ");
                        tmpChar = tmpChar.split(" ");
                        for(let z = 0; z < tmpChar.length; z++) {
                            lineFormated.push(tmpChar[z]);
                        } 
                    }
                } else {
                    lineFormated.push(char);
                }
            } else {
                j++;
            }
        }
        if(lineFormated.length > 0 && checkSpecial(lineFormated[lineFormated.length - 1]) === "") {
            lineFormated[lineFormated.length - 2] += lineFormated[lineFormated.length - 1]
            lineFormated.pop();
            if(lineFormated.length > 0 && checkSpecial(lineFormated[lineFormated.length - 1]) === "") {
                lineFormated[lineFormated.length - 2] += lineFormated[lineFormated.length - 1]
                lineFormated.pop();
            }
        }
        stringArr.push(lineFormated)
    }
    return stringArr.map(line => line.join(' ')).join('\n')
}

function showLyric(a, rhymeLocation, color) {
    let data = []
    for (let i = 0; i < a.length; i++) {
        let line = []
        for(let j = 0; j < a[i].length; j++) {
            if(rhymeLocation[i] && rhymeLocation[i][j]) {
                line.push(`<span style="color: ${color}">${a[i][j]}</span>`)
            } else {
                line.push(a[i][j])
            }
        }
        data.push(line)
    }
    return data
}

function run(baseText, color) {
    baseText = formatInputLyric(baseText)
    let a = parseLyrics(baseText)

    let rhymeGroup = []
    let rhymeLocation = {}
    for (let i = 0; i < a.length - 1; i ++) {
        let minLength = a[i].length <= a[i + 1].length ? a[i].length : a[i + 1].length
        let rhyme2Lines = {
            locations: [],
            partten: []
        }
        let rhymeInLines = {
            locations: [],
            partten: []
        }
        for(let j = 0; j < a[i].length - 3; j++) {
            for(let z = j + 2; z < a[i].length - 1; z++) {
                if([a[i][j],a[i][j + 1]].join(' ').toLocaleLowerCase() !== [a[i][z],a[i][z + 1]].join(' ').toLocaleLowerCase()) {
                    if(checkRhryme(a[i][j], a[i][z]) && checkRhryme(a[i][j + 1], a[i][z + 1])) {
                        rhymeInLines.locations.push(j)
                        rhymeInLines.locations.push(j + 1)
                        rhymeInLines.locations.push(z)
                        rhymeInLines.locations.push(z + 1)
                        rhymeInLines.partten.push(a[i][j] + ' ' + a[i][j + 1])
                    }
                }
            }
        }

        for (let j = 0; j < minLength; j++) {
            if (checkRhryme(a[i][a[i].length - j - 1], a[i+1][a[i + 1].length - j - 1]))
            {
                rhyme2Lines.locations.push(j)
                rhyme2Lines.partten.push(a[i][a[i].length - j - 1])
            }
            else
                break
        }
        let rhymeTmp = {
            color: '#FFFFFF',
            locations: []
        }

        for (let j = 0; j < rhyme2Lines.locations.length; j++) {
            rhymeTmp.locations.push({
                line: i,
                position: a[i].length - j - 1
            })
            rhymeTmp.locations.push({
                line: i + 1,
                position: a[i + 1].length - j - 1
            })
            if(!rhymeLocation[i]) {
                rhymeLocation[i] = {
                    [a[i].length - j - 1]: true
                }
            } else {
                rhymeLocation[i][a[i].length - j - 1] = true;
            }

            if(!rhymeLocation[i + 1]) {
                rhymeLocation[i + 1] = {
                    [a[i+1].length - j - 1]: true
                }
            } else {
                rhymeLocation[i + 1][a[i + 1].length - j - 1] = true;
            }
        }
        rhymeInLines.locations = [...new Set(rhymeInLines.locations)];
        for(let j = 0; j < rhymeInLines.locations.length; j++) {
            if(!rhymeLocation[i]) {
                rhymeLocation[i] = {
                    [rhymeInLines.locations[j]]: true
                }
            } else {
                rhymeLocation[i][rhymeInLines.locations[j]] = true;
            }

        }
        rhymeGroup.push(rhymeTmp)
    }
    return showLyric(a, rhymeLocation, color)
}

const highlight = (text, options = {}) => {
    const {
        format = 'array',
        color = '#699940'
    } = options;
    
    const result = run(text, color)
    if(format !== 'array') {
        return result.map(line => line.join(' ')).join('<br/>')
    }
    return result;
}

module.exports = {
    highlight: highlight
};

