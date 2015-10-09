
var isPlainObject = require( 'lodash.isplainobject' )

module.exports = function toMap( obj ) {
    // Only accepts plain objects
    if ( !obj || !isPlainObject( obj ) ) {
        throw new TypeError( 'Can not convert non-object to map' )
    }

    var map = new Map()

    Object.keys( obj ).forEach( function( key ) {
        if ( !obj.hasOwnProperty( key ) ) {
            return
        }
        map.set( key, obj[ key ] )
    })

    return map
}
