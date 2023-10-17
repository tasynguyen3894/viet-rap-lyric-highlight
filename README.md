# viet-rap-lyric-highlight

> Just a simple library to highlight Vietnames rap songs lyrics 

## Install

```bash
$ npm install viet-rap-lyric-highlight
```

## Usage

### Basic

```js
const highlight = require('./index');

const lyrics = `Giang hồ chính hiệu không có lấy một hình xăm\n Mafia kinh tế đô hộ mày hàng nghìn năm.`

highlight.highlight(lyrics, {
    format: "text"
});

```

__Output:__

Giang hồ chính hiệu không có lấy một <span style="color: #699940">hình</span> <span style="color: #699940">xăm</span><br/>Mafia kinh tế đô hộ mày hàng <span style="color: #699940">nghìn</span> <span style="color: #699940">năm.</span>


### Custom config

- `format`: "text" to return text and "array" to return result as an Array.
- `color`: Config color of highlight words (based on CSS).
- `rhymes`: Config rhyme per word.

Example without config `rhymes`:

```js
const lyrics = `Thất bại cho cái số thèm fame.\nDùng mặt bợ đít nhiều thằng đến nỗi cái trán nó tèm lem`

highlight.highlight(lyrics);
```

__Output:__

Thất bại cho cái số thèm fame.<br/>Dùng mặt bợ đít nhiều thằng đến nỗi cái trán nó tèm lem


Example with config `rhymes`:

```js
const lyrics = `Thất bại cho cái số thèm fame.\nDùng mặt bợ đít nhiều thằng đến nỗi cái trán nó tèm lem`

highlight.highlight(lyrics, {
  rhymes: {
    "em": "fame"
  }
});
```

__Output:__

Thất bại cho cái số <span style="color: #699940">thèm</span> <span style="color: #699940">fame.</span><br/>Dùng mặt bợ đít nhiều thằng đến nỗi cái trán nó <span style="color: #699940">tèm</span> <span style="color: #699940">lem</span>


Example lyrics from: 
- SG Guideline - Acy
- Bring It Back - Linh Lam, Lee7, LJ, Baby Red

## License

MIT &copy; [Sang Nguyen](https://github.com/tasynguyen3894)
