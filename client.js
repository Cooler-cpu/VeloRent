let header=document.getElementsByClassName("header")[0],
time_complexity = 0;
tmp = ['b3.png', 'b2.png', 'b1.png'],
i=0;

//connected slider if user has width below 742


window.onload

window.addEventListener('resize', function(){

        if(window.innerWidth <= 1080 && window.innerWidth >= 520 ){

                header.style.background = 'url("img/'+"bg_adapt.png"+'")';
                header.style.backgroundRepeat = 'no-repeat';
                header.style.backgroundSize = 'cover';

        }

});

setInterval(function(){
    
        
    if(window.innerWidth > 1080){

                
                header.classList.remove('anim');
                header.classList.add('anim2');

            
                setTimeout(() => {
                
                    header.classList.add('anim');
                if (i==tmp.length)
                    i=0;
              
                header.style.background = 'url("img/'+tmp[i]+'")';
                header.style.backgroundRepeat = 'no-repeat';
                header.style.backgroundSize = 'cover';
                i++;
            }, 3000);

            header.classList.remove('anim2');
    
        }

},10000)



//get id modal


let modal = document.getElementById("modal_window"),




open_modal_window = () => {
    modal.style.display = 'block';
    
    
}

close_modal_window = () => {
    modal.style.display = 'none';


}


//slider for mobile


// slide on left site
slide_left = () => {
    console.log("1");
    $("one-time").slickPrev();
    
}

// slide on right side 

slide_right = () => {

    $('one-time').slick('slickNext');
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



window.addEventListener('resize', function(){
        let width = $(window).width();
        
        slider_connect(width);

});

slider_connect = (width) => {
    if(width < 790 ){
        slider_on();
    }

    if(width < 1000){
        slider_2_one();
    }



    if (width > 790){
        slider_off();
        
    }

    if(width > 1000){
        slider_2_off();
    }

}

//single-item

window.slider_on = () => { 

    $('.one-time').slick({ 
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        adaptiveHeight: true
      }); 

    fix_size();
      
}

window.slider_2_one = () => {
    $('.single-item').slick();

}


window.slider_off = () => {

    $('.one-time').slick('unslick');

}

window.slider_2_off = () => {

    $('.single-item').slick('unslick');

}

    
// fix slick js slick js

window.fix_size = () => {
    var items = $(".slick-list");

    items[0].style="height: 400px";
}


//get cards_wraper::after (button)

var content = window.getComputedStyle(document.querySelector('.cards_wraper'),':after');




