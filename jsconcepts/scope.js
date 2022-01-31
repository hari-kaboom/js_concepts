var a=10
a=11
function scope(num) {

    console.log(num)
}
scope(a)
//const
const b=10
//b=1
console.log(b)
const obj={
    color:'red'
}
obj.color='blue'
//var scope

var glo=10
function scope2() {
    var glo=11
    if(true){
        var glo=21
        console.log(glo)
    }
    console.log(glo)
    
}

scope2()
// let scope
let lsp=30
function scopel() {
    let lsp=31
    if(true){
        let lsp=32
        console.log(lsp)
    }
    console.log(lsp)
}
scopel()

