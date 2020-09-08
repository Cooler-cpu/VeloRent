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
    
    fix_arrows_open();
    
}

close_modal_window = () => {
    modal.style.display = 'none';

    fix_arrows_back()

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


$(fix_arrows = () =>{
    
    window.fix_arrows_open = () => {

        
        $('.arrows_img').each(function(index){
            
        
            $(this).css("display", "none" );
        });

        $('arrows_img_2').each(function(index){

            $(this).css("display", "none" );

        });
    }

    window.fix_arrows_back = () => {
        
        $('.arrows_img').each(function(index){
            
        
            $(this).css("display", "flex" );
        });

        $('arrows_img_2').each(function(index){

            $(this).css("display", "flex" );

        });

    }

});

window.addEventListener('resize', function(){
        let width = $(window).width();
        
        slider_connect(width);

});

slider_connect = (width) => {
    if(width < 742 ){
        slider_on();
    }

    if (width > 742){
        slider_off();
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

    $('.single-item').slick();

    fix_size();
      
}

window.slider_off = () => {

    $('.one-time').slick('unslick');

    $('.single-item').slick('unslick');

}
    
// Исправляем недостаток slick js

window.fix_size = () => {
    var items = $(".slick-list");

    items[0].style="height: 400px";
}


// fix slick-list size bag




    //class="slick-next slick-arrow"