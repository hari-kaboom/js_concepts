 //fun statement
 fun_stmt()
  
 //fun_exp()//fun_exp is not defined
 function fun_stmt(){
     console.log('hi am funstmt')
 }
 //function expression not has hoist ing 
 fun_exp=function(){
     console.log('hi am funexp')
 }
 //anonymous fun
 /*function () {
     error since fun stmt not has name
 }*/
 //anonymous fun use 
 anonymous=()=>{
     console.log('hi iam anonymous fun')
 }
 //named fun exp
 var b=function xyz() {
     console.log('named fun expr')
     console.log(xyz)
 }
 //first class fun
var fco=function (params) {
    console.log(params,8)
    
}
fco(function () {
    
})
var fco=function (params) {
    return function () {
        
    }
    
}
console.log(fco())



