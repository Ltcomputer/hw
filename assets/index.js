$('.tab .menus li').each(function(){
    $('.tab .menus li').mouseover(function(){
        $('.tab .menus li').removeClass('bg');
        $(this).addClass('bg');
        var index = $(this).index();
        var arr = [
                // 'assets/bg1.png',
                // 'assets/bg2.png',
                // 'assets/bg3.png',
                // 'assets/bg4.png',
                // 'assets/bg5.png',
                // 'assets/bg6.png',
                // 'assets/bg7.png',
            ] // 背景图片  
        // $('.tab .scroll').css('margin-top',-index*800+'px');
        $('.tab .scroll').css('margin-top',-index*484+'px');
        $('.category-box').css('display','block');
        // $('.tab .menus li').css('width','1200px');
        // $('.tab').css('background-image','url('+arr[index]+')')// 背景图片  
        
    })
    
    
    
    
    $('.box').on('mouseleave',function(){

        // $('.tab .menus li').removeClass('bg');
        // $(this).addClass('bg');
        // var index = $(this).index();
      
        // $('.tab .menus li').css('width','1200px');
        // $('.right').css('opacity','0');
        // $('.category-box').css('display','none');
       
    })



},

)