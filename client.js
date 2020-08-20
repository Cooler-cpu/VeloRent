let header=document.getElementsByClassName("header")[0],
time_complexity = 0;
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


//slider for mobile

slide_left =() => {
    console.log("left");
}

slide_right = () => {
    console.log("right");
}




// jquery slow scroll to id

jQuery(document).ready(function($){
    //Код

    $('.js-scroll-trigger').click(function() {
        var scrollName = $(this).attr('data-scroll')
        scrollElem = $(scrollName); // find this id in the dom tree

        scrollTop = scrollElem.offset().top; // value to id distance


        if(scrollTop < 1100){
            time_complexity = 700 // for the first two section
        }
        else{
            time_complexity = 4000 // for the last two section
        }


        $('html, body').animate({
            scrollTop: scrollTop  // add animation
          }, time_complexity);


    });

});