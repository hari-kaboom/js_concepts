
f=(a)=>{
    a('hi')

}

f(console.log)
console.log('ki')
a=resolve=>('resolve')
console.log('lk',a)
r=(j)=>{console.log(j)}
r('j') 
let p=new Promise(resolve=>resolve('l'))
console.log(p)
//p.then(console.log)
//(a,b)=>a+b
//console.log(resolve=>resolve('l'))
var mypromise=new Promise(function(resolve,reject) {
    var promisestate=true
    if(promisestate){
        resolve('do next action')
    }
    else{
        reject('promise failed')
    }
})

mypromise.then(function() {
    console.log('promise completed')
    
}).catch(function () {
    console.log('promise failed')
    
})


