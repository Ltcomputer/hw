$('.tab .menus li').each(function(){
    $('.tab .menus li').mouseover(function(){
        $('.tab .menus li').removeClass('bg');
        $(this).addClass('bg');
        var index = $(this).index();
        $('.tab .scroll').css('margin-top',-index*484+'px');
        $('.category-box').css('display','block');
    })


    $('.box').on('mouseleave',function(){
        $('.category-box').css('display','none');   
    })

},

)