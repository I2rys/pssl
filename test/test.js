"use strict";

// Dependencies
const pssl = require("../index")

// Main
var encrypted;

describe("PSSL", ()=>{
    test("Shuffle a string", async()=>{
        const result = pssl.shuffle("Very awesome.", "Secret key.")
        encrypted = result

        expect(result).toBe("ҦӇӒӨ҂ӒҔӍӕӥҘҵҐ")
    })

    test("Unshuffle the shuffled string", async()=>{
        const result = pssl.unshuffle(encrypted, "Secret key.")
    
        expect(result).toBe("Very awesome.")
    })
})