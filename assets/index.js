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
            ] // 背景图片  不需要注释即可
        // $('.tab .scroll').css('margin-top',-index*800+'px');
        $('.tab .scroll').css('margin-top',-index*484+'px');
        $('.right').css('display','block');
        $('.tab .menus li').css('width','600px');
        // $('.tab').css('background-image','url('+arr[index]+')')// 背景图片  不需要注释即可
        $('.tab .category-box').mouseout(function(){

            // $('.tab .menus li').removeClass('bg');
            // $(this).addClass('bg');
            // var index = $(this).index();
          
            
            // $('.right').css('display','none');
            // $('.tab').css('background-image','url('+arr[index]+')')// 背景图片  不需要注释即可
        })
    
    })
},

)