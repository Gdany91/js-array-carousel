
const item = document.getElementsByClassName('item');
console.log(item);

let activeItemUp = 0;
;
//scorrimento su
const next = document.querySelector('.arrow');

next.addEventListener('click', 

    function(){
        
        if(activeItemUp < item.length - 1){

            item[activeItemUp].classList.remove('active');
            item[activeItemUp].classList.add('hidden');

            activeItemUp++;

            console.log(activeItemUp);
            item[activeItemUp].classList.remove('hidden');
            item[activeItemUp].classList.add('active');

            if (activeItemUp === item.length - 1) {

                 next.classList.add('hidden');
            }


        }

    }

)

//scorrimento giu
 
 const previous = document.querySelector('.reverse_arrow');

 previous.addEventListener('click', 

    function(){
        
         
        if (activeItemUp <= item.length - 1){
            
            item[activeItemUp].classList.remove('active');
            item[activeItemUp].classList.add('hidden');

            activeItemUp--;

            console.log(activeItemUp);

            item[activeItemUp].classList.remove('hidden');
            item[activeItemUp].classList.add('active');
 
            if (activeItemUp === 0) {

                previous.classList.add('hidden');


            }

            else {
            previous.classList.add('active');
            previous.classList.remove('hidden');
            }
 

         }

    }

) 