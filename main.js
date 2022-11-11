
const item = document.getElementsByClassName('item');
console.log(item);

let activeItem = 0;


const next = document.querySelector('.arrow');

next.addEventListener('click', 

    function(){
        
        if(activeItem < item.length - 1){

            item[activeItem].classList.remove['active'];
            item[activeItem].classList.add['hidden'];

            activeItem++;

            item[activeItem].classList.add['active'];

            if (activeItem === item.length - 1) {

                 next.classList.remove['hidden'];
            }


        }

    }

)

