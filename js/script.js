

$(document).ready(function () {
    // navbar
    $('#navbarId').on('hide.bs.collapse ',function(){$('#navbarId').slideUp()})
    $('#navbarId').on('show.bs.collapse ',function(){$('#navbarId').slideDown()})


    window.onscroll = function(){
        if($('.navbar').offset().top<=50){
            $('.navbar').removeClass(' bg-light').addClass('navbar-dark')
            $('#navbarId .nav-item .nav-link ,.navbar-brand').css('color','white')

        }
        else{
            $('.navbar').addClass('navbar-light bg-light').removeClass('navbar-dark')
            $('#navbarId .nav-item .nav-link,.navbar .navbar-brand').css('color','#06BCC1')
        }
    }

    // blog slider
    $('#blog-slider').slick({
        infinite:true,
        slidesToShow:3,
        responsive:[
            {
                breakpoint:768,
                settings:{
                slidesToShow:1

                }
            }
        ]    })


        // scroll to top
        $(".scroll-to-top").click(function(){
            window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth'
              });
            
        })
        $('.intro').slick({
            slidesToShow:1,
            asNavFor:'.users-img'
        })

        $('.users-img').slick({
            slidesToShow:4,
            draggable:false,
            
            swipe:false,
            asNavFor:'.intro',
            centerMode: true,
            focusOnSelect: true
        })
        

});