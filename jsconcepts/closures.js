
//*** lexical scope
function gra_par(){
    var b='grandparent scope'
    parent()
   
    function parent(){
        child()
        function child(){
            console.log(b)
        }

    }
}
gra_par()
//*** closures
function gra_par(){
    var b='inside grandparent'
     return parent()
   
    function parent(){
        return function child(){
            console.log(b)
        }
       

    }
}

var child=gra_par()
child()
