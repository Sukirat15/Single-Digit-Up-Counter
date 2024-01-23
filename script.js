

let current=document.querySelector('.current');
var input=document.getElementById("number-input");

let a;

function startCounter()
{   
    
          a=input.value;
        

        for (let i = 1; i <= a; i++) {
            (function (index) {
                setTimeout(function () {
                   animate(index);

                  
                }, i*1000);
            })(i);

          
        }

       
          
        




}

function animate(index)
{    
    if(index==a)
    {current.innerText=index;
     setTimeout(function(){
        current.innerText="0"
     },1000);
    }

    current.innerText=index;
   

   
}



