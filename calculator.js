//document.querySelectorAll('.button)  .. select all with class name button 
//addEventListener: get button from page (using document.) and then tell it to listen from clicl
//button.addEventListener("click",(e)=>){  //e is event object .. e.target.innerHTML tells which button is clicked
// if(e.target== '=') // for evaluating use eval
//   console.log(e.target);    });
// for clearing string = ''


let string='';

const buttons = document.querySelectorAll('.button');

const display = document.querySelector('input');

buttons.forEach(button => {
    button.addEventListener("click",(e)=>{                                       //try to use onClick

        const value = e.target.innerText;
        
        if(value === '=')
            string = eval(string).toString();
        else if(value === 'C'){
            string='';
        }
        else{
            string += value ;
        }

        display.value = string ;
    }); 
});


// use dom

