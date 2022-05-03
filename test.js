const highlight = require('./index');

const lyrics = `Thất bại cho cái số thèm fame.\n Dùng mặt bợ đít nhiều thằng đến nỗi cái trán nó tèm lem`;

console.log(highlight.highlight(lyrics, {
    format: "text",
    rhymes: {
        "em": "fame"
    }
}));