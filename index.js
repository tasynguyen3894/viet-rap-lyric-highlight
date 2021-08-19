
const rhyme = require('./rhyme');
const checkRhrymeLib = rhyme.checkRhryme;
const removeVietnameseTones = rhyme.removeVietnameseTones;
const checkSpecial = rhyme.checkSpecial;

// const lyrics = 'và tao đã ngã, như chưa bao giờ từng ngã\n đứng dậy rồi lại đi nhưng tao chưa bao giờ dừng cả\n nội tâm phức tạp, âm mưu chẳng chút ánh sáng tựa như rừng già\n tao muốn thoát ra, như chưa bao giờ bị giam cầm\n nhốt bởi 6 bức tường vô hình huyền bí tao ko cam tâm\n như chưa bao giờ phải thất vọng, tự cô lập\n như chưa bao giờ mất lòng tin, phải cố chấp\n sống như chưa bao giờ phải đặt câu hỏi về nghĩa lý\n hồn nhiên và ngây thơ như chưa bao giờ có giây phút chia ly\n quên hết đi, như chưa bao giờ phải nhung nhớ\n quên cái tên, quên hình bóng, quên cả bầu không khí mình cùng thở\n để hôn em đc một lần như chưa từng hôn ai\n đốt thêm 1 điếu để bao ưu phiền kia như chưa từng tồn tại\n sẽ chẳng bao giờ bị những nỗi ưu phiền đến bao vây\n tâm tư gửi vào gió mãi mãi theo làn khói trắng quyện vào mây\n';
// const lyrics = `Chúng tôi xin lỗi anh nhưng nơi đây không còn tuyển dụng\nAnh cúi đầu chào và khẽ quay về, như trên con đường đầy miểng vụng\nThành phố này là một cơ thể sống không có da\nVà em chính là nắng đốt cháy tất cả mọi thứ ,cho một người đc bước từ trong đó ra\nnụ cười và đôi mắt cho cơn dông gió qua\nVì: Cuộc sống xem ta như là cây cỏ\nBỏ lại phía sau những điều ta phải thấy,bình yên như đám mây nhỏ\nEm chưa phải thấy nắng cháy màu da tay đỏ\nEm nói: Có!\nVậy lúc đấy..em lớp mấy\nVà đây không phải nơi cho em -rượu bia thâu đêm và đèn chớp nháy\nAnh táy máy bên chiếc ghế mới đóng\nlà trong khi em thấy được thế giới sống\nAnh chuốt bút\nem với nhẹ lấy điếu thuốc hút\nNgồi bấm bút,và ta ngắm đời lắm lúc sự thật lại giống điều sai\nCon người đóng nhiều vai\nEm vẫn đi trong cơn mưa đang chết\nMùi thuốc trên đôi môi vẫn chưa tan hết\nVà anh viết một nhạc thì có hết 9/10 người\nnghe lười lười\nnhưng vẫn có một người cười\nĐiều mắc phải chính là điều khắc mãi ,em đừng ra đi cho người khác mong chờ\nSống cho chính mình,cho chính bản thân như hạt cát trong bờ\n`
// const lyrics = `Là một kẻ lười biếng: xong bài tập mà ta quan tâm rồi lại lăn trên giường\nMưa làm cho mặt đường lăn tăn, người ta chạy băng băng tiết kiệm xăng: qua quán ăn bên trường\nBực dọc việc học, cực nhọc việc làm ta muốn vẽ bức tranh lớn và căng lên tường\nNgồi ghi câu.. rồi đi đâu? Khi trong không lòng muốn..ta ngẫm nghĩ hồi lâu: Biết đi đâu?! băn khoăn tên đường\nThấy mọi thứ chán nản trong lòng\nNhững mảng bông hồng làm sao qua đêm khi tài khoản không đồng\nThinh thoảng ông chồng..quay về nhà phề phà đập phá mọi thứ loảng xoảng trong phòng\nĐứa con chạy vòng ra sau lưng của mẹ..cho căm tức và tất cả mọi điều khủng hoảng thông đồng\nNó vẫn lớn theo từng ngày cố qua từng con phố và tờ vé số ra miếng cơm cho người đàn ông, mà không tiền công đó vì\nbên trong nó thì\nkhông có gì\nEm ko cần một cuộc sống màu hồng\nEm ko cần một cái ôm vào lòng\nEm ko cần một cuộc sống màu nâu\nEm ko..ko cần ta phải chào nhau\nEm ko cần một cuộc đời màu sắc\nEm ko cần nắng đưa vào mắt\nEm ko có một người thân nào quen\nVà tất cả em có ko chỉ là màu đen\n`
// const lyrics = `Tao tạo ra tôn giáo riêng, có đông tín đồ, mày phải biết tránh thần\nĐó là HƯNG ĐẠO, chúng mày tôn kính tao như Đức Thánh Trần\nKhai sinh punchline chuẩn cho rap Việt, chúng mày làm sao mà theo đây\nHai con chó ngọng lại bị Hưng đánh, nhưng Hưng này đéo phải LK\nTao luyện kỹ thuật trong 8 năm, mày luyện kỹ thuật trong buồng tắm nam\nTao hưởng thụ hip hop Mỹ, mày hưởng THỤ cái thằng bên cạnh nó cắm sang\nDù đều có cái “Mỹ” bên trong, nhưng đây là điều tao đang nghĩ\nTao có cái “Mỹ” trong Rakim, chúng mày có cái “Mỹ” trong Đam Mỹ\nNho Việt đéo biết ngọt không, nhưng chắc chắn có cay và đắng\nNgậm con cu tao kẹt trong họng nên mày để tên mày là Mắc\nĐọc kỹ lyrics thấy cách triển khai ý của mày bị bế tắc\nĐời mày hư cấu như phim, mày nên đổi tên thành Cinemax\nLyrics tao in hoa như quần lót lũ chó liếm đít hóa rồ\nLũ vô danh tiểu tốt chạm thế lồn nào được quần chip Hà Hồ?\nTao dùng cái đầu IQ, đầu mày là đầu đĩa TV màu\nSợ bị tao chặt gãy nên đầu mày rụt lại, giống y QUY ĐẦU\nDùng punchline chửi người khai sáng, khốn nạn con đánh cả cha\nThằng MAX phản phúc sống đéo có ích/X nên tao cho nó ra MA\nVô danh chẳng ai để tâm, danh tiếng chúng mày là câu chuyện bịa\nĐược biết đến nhờ ơn tao share, chúng mày là rau Thiên Địa\n`
// const lyrics = `Rapviet mà hễ tao bước đi đâu cũng lại đụng chó\nSắp hàng từng bầy trùng trùng liệt liệt cho tao trụng nó\nBại tướng vũ sơn của tao là jì mà cứ ca tụng nó?\nKo thành vấn đề vì binh mã của tao đã tung vó\nĐốt bản đồ, nhắm thẳng doanh trại gvr ta cấp tiến\nTướng giặc đã đại bại có quay lại ta cũng lấp giếng\nHữu tướng là MAC vác đại bác đem ra bắn chó\nTả tướng la Pjpo dương cung nỏ xông pha nắng gió\nNhìn tao thật láo thì tao tát mày cho văng mỏ\nTrình tao thật cao đúng là vẹn toàn cả văn võ\nKỳ đà cản mũi tao sẽ tặng cho 1 ký đá\nNhững thằng thích màu mè thì tao sẽ cho tụi mày máu me\nTất cả 3 miền như tam quốc tao sẽ thống trị\nGia cát lượng có sống lại cũng ko fải ng mà rồng kỵ\nĂn Ri SK bắt đc trụng xác ngay trong vạc dầu\nThằng Nah chưa kịp quay lại thì tao đã đập cho tụi mày nát đầu\n`
// const lyrics = `Con nhà giàu, đéo phải biết thế nào gọi là tự lập\nChưa bao giờ tự vấp rồi tự ngã và đứng dậy\nCon nhà giàu bố mẹ cho tiền như lá ở trong rừng cây\nyup, chưa bao giờ phải vấp ngã\nnhưng hàng ngày thì đập đá\nCon nhà giàu có tiền ăn sáng, tiền ăn quà\nĐi học có người đón đưa vẫn vô văn hóa\nCon nhà giàu đéo lo tiền học, ông già chuyển khoản từ trước kì\nCon nhà giàu sổ mũi hắt hơi cũng tìm dược sĩ\nCon nhà giàu có bất động sản\nĐi ra đường đéo sợ công an\nCon nhà giàu có vú nuôi\nCon nhà giàu có thú nuôi\nCon nhà giàu nghe nhạc củ chuối\nVà con nhà giàu thì chưa đủ tuổi\nCòn bạn gái của con nhà giàu, họ yêu tiền, yêu nhà lầu và yêu xe\nCon nhà giàu ít bạn nhưng mà nhiều bè\nVậy mà con nhà giàu lại muốn dạy khôn tao\nTrong khi bụng nó vẫn chưa 1 lần nào phải cồn cào\nBullshit\nCòn con nhà nghèo thì dân dã,\nKo có đá thì cần sa\nCon nhà nghèo thường túng quẫn nên cùng quẫn\nCon nhà nghèo ko thấy ánh sáng, vì thấy bóng tối thì nhúng thân\nCon nhà nghèo trước mắt là con đường dài\nNhưng chẳng đi đến đâu, nếu tự thương hại\nCon nhà nghèo sẽ mãi nghèo, nếu vẫn ngu\nCon nhà nghèo sẽ vươn lên, nếu cần cù\nKo co tiền trong túi thì lúc nào mà chả thấy hèn\nCon nhà nghèo trên đầu có đám mây đen\nCon nhà nghèo thích đâm chém, thích trộm cướp, gây phiền phức\nCon nhà nghèo nuôi mình ko xong, lấy gì để nuôi giấc mơ thành hiện thực\nGiấc mơ bay vụt đi\nVì con nhà nghèo dễ nhụt trí\nCon nhà nghèo mặc cảm ra đường sợ người ta khinh\nMà nếu con ko biết mình, thi chỉ thêm khổ gia đình\nCon nhà nghèo muốn giàu, nhưng thiếu thành ý\nCon nhà nghèo luôn ghanh tị\nCon nhà nghèo hạnh phúc sẽ ko tới tay\nVà con nhà nghèo sẽ ghét cả thế giới này\nVốn sinh ra ông trời tặng cho mỗi người 1 hộp bút chì màu\nHộp thì 12 cây bút, hộp thì lại chỉ có sáu\nNhưng rồi mày sẽ vẽ gì, với những màu mày đang có\nĐen, trắng, xanh, tím, vàng, đỏ.\n`
// const lyrics = `Từng cung bậc,trong hình hài con người ta là nốt nhạc\nTôi cám ơn đời..còn họ dùng lời ca mà hốt bạc\nNghệ sĩ vẽ chì..họ sẽ đan mây, vẽ khói\nCòn người mà đang say sẽ nói đời lắm kẻ gian hay kẻ dối\nĐừng đến một trận đấu với người bạn mong,người bạn cười\nđể xem một trái bóng lăn lóc nằm trong mười vạn người\nĐường phố vẫn còn ngoài kia nơi họ viết những điều ko chắc chắn\nTa tắt nắng, che đi những khuôn mặt kẻ đắc thắng\nNắng trong mây là màu sắc cả cuộc đời cho một vị đắng không cay\nNgày mai cố gắng, giữ trong tay từng lời mẹ mắn hôm nay\nĐây là rap..cho tôi có đc những điều ta nên thấy\nVần, flow và từng câu cho tôi viết thật nhiều ra trên giấy\nĐể đấy chi ? Khi ta già ta nhớ những khi xa nhà\nSuy ra là\nNếu bài nhạc đang làm bạn chăm chú quên khi cả việc khác\nThì hôm nay tôi ko còn muốn gì hơn vì mình làm ra tuyệt tác\nTôi đang nghĩ về ai về nét bút mà khi cầm tay kèm\nĐến khi sẽ biết đc rượu và bia hòa lẫn vào trong vị say mèm\nThấy đói nhưng bới tô cơm và cho dù ngon vẫn không muốn ăn\nNói làm cho xong bài mới nhưng nghe một chút lại ko biết viết\nMuốn thấy một tí lạc quan trong đời nhưng có rồi để làm chi\nThiết nghĩ mình sống đc vài chục năm nữa nhưng mà chỉ là vì\nThấy trong tối là một thằng nhóc mà mẹ nó bắt phải quỳ gối\nTôi ko thấy rõ đc khuôn mặt của nó bị che đi vì khói\nTrong một ngày không có đc vài gói mì thì đói\nThôi mặc kệ muốn nói gì thì nói\nĐây là đời và còn tệ hơn những điều không quan tâm\nHọ có thể đăng lên báo chí, trôi qua ngày tháng rồi sang năm\nHọ có chịu đc cho ta bao nhiêu vết lằn trên da\nCuộc sống lại cần một nhạc trưởng và sẽ nói rằng bên ta`
const lyrics = `Trên đời thứ gì là cho không? Dù một cơn gió đi qua nhẹ\nThế giới dường như ko còn đủ kiên nhẫn được với thời gian cho cha mẹ\nNơi bàn tay mộc mạc,những đùa vui hay là hình phạt nay đã úa\nNgay cả Chúa Người chỉ đứng nhìn,hay nâng ly say và múa\nBất công rồi bất công Người đã cướp đi những bài học\nNgười đã cướp mất trang sách vào đời..Người đã cướp mất những ngày đọc\nNgười đã cướp mất của mẹ con Điều duy nhất trên đời\nVà Người cướp đi đôi mắt,nụ cười..cho ta không thể cất nên lời\nBiết ơn cho ta cảm thấy được sự bình lặng\nĐời ta phải nhìn thẳng..mẹ cho ta biết cách trao và nhận món quà do chính mình tặng\nBồn tắm,tách trà,chiếc dù,ghế..tất cả những điều bỏ sót\nTiếng chim nhỏ hót,đồ chơi dây cót,ta vẽ mặt trời màu đỏ chót\nLót trên đường đời những thay đổi âm thầm và thật đáng sợ\nNhư chơi một ván cờ, nơi con người phải ráng chờ cho đến một ngày mất hết rồi ta gán nợ\nHãy đi rồi yêu bất cứ một ai và xin đừng nói cho ta nghe nữa\nCơ chế suy đồi trong ta đang âm thầm nghe, nhìn qua khe cửa\n\n\nNơi căn phòng trống\nmột đôi vợ chồng sống\nNơi bàn tay đã bắt đầu từng giọt mồ hôi chết tiệt giữa cánh đồng nóng\nHay đã biết cái lạnh dưới lòng cống\nTôi tin vào cha, tin vào mẹ không phải thứ đức tin đồng bóng\nCuộc tình ta buông hình bắt bóng\nkhông muốn thấy nhưng luôn nhìn\nmắt trống nhìn người vui bên muôn nghìn cách sống\nngười giống rập khuôn, mình khác\nsóng chờ ngóng ập tuôn bãi cát nóng\nRubik lập phương rãi rác\ngiống từng đời con người, có nhiều mặt nhưng tồn tại như là xác sống\nrất vất vả\nNhư là vất chất bã, ta nợ một thứ cả đời phải sang bang, sấc bấc trả\nvà khi mất tất cả từng tấc đất ngã màu,ta chết còn không đất cất mả\nngười dưng nước lã trong cuộc đời này bắt ta phải luôn đứng trước cả\nBiết bao cái nóng hân hoan mà Người đang rọi hằng ngày\nTất cả sẽ dừng lại nơi bất công và Người được gọi bằng MÀY\nHãy đi rồi yêu bất cứ một ai và xin đừng nói cho ta nghe nữa\nCơ chế suy đồi trong ta đang âm thầm nghe, nhìn qua khe cửa`;


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
        // check 0 1 2 3 4 5 6 7 8
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

        // check rhyme two lines
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
    
    let result = run(text, color)
    if(format !== 'array') {
        return result.map(line => line.join(' ')).join('<br/>')
    }
    return result;
}

module.exports = {
    highlight: highlight
};

