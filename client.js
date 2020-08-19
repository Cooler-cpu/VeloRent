let header=document.getElementsByClassName("header")[0],

tmp = ['b3.png', 'b2.png', 'b1.png'],
i=0;

console.log("ширина экрана:", window.innerWidth);


setInterval(function(){
    if(window.innerWidth <= 1080){
        header.style.background = 'url("img/'+"bg_adapt.png"+'")';
        header.style.backgroundRepeat = 'no-repeat';
        header.style.backgroundSize = 'cover';
    }
},2000);

setInterval(function(){
    
        
    if(window.innerWidth > 1080){

                //console.log(header.classList);
                header.classList.remove('anim');
                header.classList.add('anim2');

            // header.classList.remove('anim');
                setTimeout(() => {
                
                    header.classList.add('anim');
                if (i==tmp.length)
                    i=0;
                //console.log(i);
                header.style.background = 'url("img/'+tmp[i]+'")';
                header.style.backgroundRepeat = 'no-repeat';
                header.style.backgroundSize = 'cover';
                i++;
            }, 3000);

            header.classList.remove('anim2');
    
        }

},10000)



//get id modal


let modal = document.getElementById("modal_window");


open_modal_window = () => {
    modal.style.display = 'block';
    console.log("1");
}

close_modal_window = () => {

}

// jquery slow scroll to id

jQuery(document).ready(function($){
    //Код

    $('.js-scroll-trigger').click(function() {
        console.log("Тригер сработал");
    });

});