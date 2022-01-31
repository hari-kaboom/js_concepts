
//pass by value
var marvel='spiderman'
function change_marvel(curmarvel){
    console.log(curmarvel)
 curmarvel='ironman' 
 console.log(curmarvel)  
}
console.log(marvel)
change_marvel(marvel)
console.log(marvel)
//pass by reference
var marvellist=['spiderman']
console.log(marvellist)
function change_marvel(curmarvel){
    console.log(curmarvel)
 curmarvel[0]='ironman' 
 console.log(curmarvel)  
}
change_marvel(marvellist)
console.log(marvellist)


