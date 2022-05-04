String.prototype.toAlternatingCase = function () {
    console.log( this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join(''))
}

"hello world".toAlternatingCase() === "HELLO WORLD"