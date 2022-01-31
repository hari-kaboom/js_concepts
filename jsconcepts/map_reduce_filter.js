function double(val) {
    return val*2
}
function isodd(val) {
    return val%2
    
}
const arr=[1,2,3,4]
const double_output=arr.map(double)
console.log(double_output)
var rop=arr.filter(isodd)
var rop=arr.filter((x)=>x>3)
console.log(rop)
var sum=arr.reduce((acc,cur)=>{acc+=cur
return acc})
console.log(sum)