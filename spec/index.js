
import tape from 'tape'
import toMap from '../'

tape( 'Requires instantiation with a plain object', t => {
    t.plan( 5 )

    t.throws( () => toMap( null ), TypeError, 'Will not try to convert null' )
    t.throws( () => toMap( function() {} ), TypeError, 'Will not try to convert a function' )
    t.throws( () => toMap( [ 1 ] ), TypeError, 'Will not try to convert an array' )
    t.throws( () => toMap(), TypeError, 'Requires an object to convert' )
    t.doesNotThrow( () => toMap({}), Map, 'Does not throw when handed a plain object, even an empty one' )
})

tape( 'Converts objects into a map', t => {
    t.plan( 2 )

    let map = toMap({
        foo: 'foo'
    })

    t.ok( map.has( 'foo' ), 'Resultant map contains keys' )
    t.equal( map.get( 'foo' ), 'foo', 'Resultant map contains the matching value for a key' )
})

tape( 'Converts deep objects into a map', t => {
    t.plan( 1 )

    let obj = {
        bar: 'bar',
        baz: 2
    }
    let map = toMap({
        foo: obj
    })

    t.ok( Object.is( map.get( 'foo' ), obj ), 'Handles deep objects' )
})
