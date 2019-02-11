# format-url-query [![Build Status](https://travis-ci.com/yuheiy/format-url-query.svg?branch=master)](https://travis-ci.com/yuheiy/format-url-query)

Format the parsed URL query with default values.

## Install

```sh
npm install @yuheiy/format-url-query
```

## Usage

```js
const formatUrlQuery = require('@yuheiy/format-url-query')
const { parse } = require('querystring')

formatUrlQuery(parse('tag=html&debug=1'), {
  tag: 'all',
  page: '1',
})
/*
{
  tag: 'html',
  page: '1'
}
*/

formatUrlQuery(parse('tag=html&tag=css&debug=1'), {
  tag: 'all',
  page: '1',
})
/*
{
  tag: 'html',
  page: '1'
}
*/

formatUrlQuery(parse('tag=html&tag=css&debug=1'), {
  tag: [],
  page: '1',
})
/*
{
  tag: ['html', 'css'],
  page: '1'
}
*/

formatUrlQuery(parse('tag=html&tag=css&debug=1'), {
  tag: ['html', 'css', 'javascript'],
  page: '1',
})
/*
{
  tag: ['html', 'css'],
  page: '1'
}
*/
```

## API

### formatUrlQuery(parsedUrlQuery, format)

Returns an object of the same type as the `format`.

#### parsedUrlQuery

Type: `{ [key: string]: string | string[] }`

The object returned by `querystring.parse()`.

#### format

Type: `{ [key: string]: string | string[] }`

The format that is the return type and default values.

## License

MIT © [Yuhei Yasuda](https://github.com/yuheiy)
