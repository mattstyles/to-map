[![npm](https://img.shields.io/npm/v/to-map.svg)](https://www.npmjs.com/package/to-map)
[![Build Status](https://travis-ci.org/mattstyles/to-map.svg?branch=master)](https://travis-ci.org/mattstyles/to-map) 

# to-map

> Converts a regular object into a map

```shell
npm install -S to-map
```

## Example

```js
import toMap from 'to-map'

let map = toMap({
  foo: 'foo'
})

map.get( 'foo' ) // 'foo'
```

## Restrictions

Map is not [supported everywhere](https://kangax.github.io/compat-table/es6/#test-Map), however, [babel](https://babeljs.io/) will happily allow Maps to work in modern browsers.

The key advantages of using a Map over a plain ole JS object are probably:

* `.size` property is pretty handy
* Various utility methods exist on maps but not objects
* Iterators!

There are probably loads more, and a few negatives maybe too. Performance is often hit at, but unless your application has a metric ton of data to convert frequently then any performance issues aren’t going to be caused by using maps.

## Immutability

I love immutable maps of data too but [plenty of implementations](http://facebook.github.io/immutable-js/docs/#/Map) already exist.

## Install

Use npm

```shell
npm i -S to-map
```

## License

WTFPL
