"use strict";

// Main
function shuffle(string, key){
    var result = ''
    var keyIndex = 0
    var seed = 0

    for( let i = 0; i < key.length; i++ ) seed += key.charCodeAt(i)
    for( let i = 0; i < string.length; i++ ){
        result += String.fromCharCode(string.charCodeAt(i) + seed + key.charCodeAt(keyIndex))
        keyIndex = (keyIndex + 1) % key.length
    }
    
    return result
}

function unshuffle(string, key){
    var result = ''
    var keyIndex = 0
    var seed = 0

    for( let i = 0; i < key.length; i++ ) seed += key.charCodeAt(i)
    for( let i = 0; i < string.length; i++ ){
        result += String.fromCharCode(string.charCodeAt(i) - seed - key.charCodeAt(keyIndex))
        keyIndex = (keyIndex + 1) % key.length
    }
    
    return result
}

module.exports = {
    shuffle,
    unshuffle
}