const button=document.querySelector('button')
const space=document.getElementById('seven')
//button.addEventListener("click",show)
function show(){
    const input=document.getElementById("two")
    let food=input.options[input.selectedIndex].value
    console.log(food)
    lunch=''
    diiner=''
    breakfast=''
    switch (food) {
        case 'sunday':
            breakfast='idly,chuteney,sambar'
            lunch='sambarrice,potato ,buttermilk'
            dinner='chapptai,kurma'
        break;
            
         case 'sunday':
             breakfast='idly,chuteney,sambar'
             lunch='sambarrice,potato ,buttermilk'
             dinner='chapptai,kurma'
                
        break;
        case 'sunday':
            breakfast='idly,chuteney,sambar'
            lunch='sambarrice,potato ,buttermilk'
            dinner='chapptai,kurma'
            
             break; 
         case 'sunday':
            breakfast='idly,chuteney,sambar'
            lunch='sambarrice,potato ,buttermilk'
            dinner='chapptai,kurma'
         
            break;
         case 'sunday':
            breakfast='idly,chuteney,sambar'
            lunch='sambarrice,potato ,buttermilk'
            dinner='chapptai,kurma'
            
             break;
        
     
        case 'sunday':
            breakfast='idly,chuteney,sambar'
            lunch='sambarrice,potato ,buttermilk'
            dinner='chapptai,kurma'
                
            break;
        case 'sunday':
             breakfast='idly,chuteney,sambar'
             lunch='sambarrice,potato ,buttermilk'
             dinner='chapptai,kurma'
             break;
        default:
               break;
        }
        space.textContent=breakfast,lunch,dinner


}