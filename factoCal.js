
let valEnter = document.getElementById("theNbre"),
    result = document.getElementById('result');



    
function facto (val){

   let rep =  1; 

   alert(val + 1);
    if( isNaN(val) || val <0){    
        rep =  "The value enter is not a valid number for factoriel function ! ";
    } 
    else
    {

        if( val> 1){
            for(i = 2 ; i<=val ; i = i+1 ){
                rep = rep * i;
            }
        }
    }

    return rep;
}


/**
 * Initialization  val= 5 , rep = 1 
 *  if( isNaN(5) || 5 <0) false 
 *   if( val> 1) true 
 * 
 * for(i = 2 ; i<=val ; i++ )
 * 
 *i = 2
 * val = 5 , rep = 1 * 2  = 2 ,
 * i = 3 
 * rep = 2*3= 6
 * 
 * i = 4
 * rep = 6*4 =24 
 * rep  
 * 
 * 
 */





document.getElementById('calculateFact').onclick = function(){
    result.value = facto(valEnter.value);
}

document.getElementById('clear').onclick =function () {
    valEnter.value ='0';
    result.value='';
}

function writeNbre(nbre){
    if(parseFloat(valEnter.value) == 0){
        valEnter.value = nbre;
    }
    else{
        valEnter.value = valEnter.value + nbre
    }
} 


document.getElementById('expo_btn').onclick = function(){
 result.value   =Math.exp(valEnter.value);
}

document.getElementById("sqrt_btn").onclick = function(){
    result.value = Math.sqrt(valEnter.value);
}



document.getElementById("carre_btn").onclick = function(){
    result.value = Math.pow(valEnter.value, 2);
}

