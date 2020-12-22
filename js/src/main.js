// tab.js
(function($){

var headContent = [ 
    {'divTitle':'icon','spanTitle':'about me'},
    {'liTitle':'tab', 'divTitle':'icon','spanTitle':'process'},
    {'liTitle':'tab','divTitle':'icon','spanTitle':'project'},
    {'liTitle':'tab','divTitle':'icon','spanTitle':'contact'} ];
var headlist = '<li><a href="./main.html"><div></div><span></span></a></li>';

var wrap = ('#wrap');
var headBox = $('#headBox');
var headUl = headBox.find('ul');

var headConLen = headContent.length;
var i;

var about = $('#about');
var skill = $('#skill');
var menuArea = headBox.children('.menu_area');

var win = $(window);
var menuAreaOffset = menuArea.offset().top;
var headBoxOffset = headBox.offset().top;
var aboutOffset = about.offset().top;


for(i=0; i<headConLen; i+=1){
    headUl.append(headlist);
    // console.log(!!headContent[i].liTitle);

    if(!!headContent[i].liTitle){ //liTitle의 값이 있거나 없을때
        headBox.find('li').eq(i).addClass(headContent[i].liTitle);
    }
    headUl.find('div').eq(i).addClass(headContent[i].divTitle);
    headUl.find('span').eq(i).html(headContent[i].spanTitle);
}

var headLi = headUl.children('li');
var headDiv = headLi.find('.icon');



// 헤더고정 ===================================
var scr = true;
var headNav;
var navContent = '<nav id="headNav"></nav>';

win.on('scroll',function(e){
    var winScrollTop = win.scrollTop();
    // console.log(winScrollTop);
    
    // 스크롤값이 about offset값보다 크거나 같고, 승인되면(scr == true);
    if( winScrollTop >= aboutOffset && scr){ 
        scr = false;        
        about.before(navContent);
        headNav = $('#headNav');
        headNav.append(headUl);
        headNav.addClass('action');  

        
    // 스크롤값이 about offset값보다 작고, 승인이 되지 않은 상태이면(scr == false)        
    }else if(winScrollTop < aboutOffset && !scr){
        //before안에 들어있는 내용을 삭제해라.
        scr = true;
        headNav.remove();
        menuArea.append(headUl);
        
    }
});



// 탭메뉴 ==================================
// var tab = headUl.find('.tab');
// var conWrap = wrap.children('.con_wrap');

// tab.on('click',['a'],function(e){
//     e.preventDefault();

//     about.hide();
//     skill.hide();
//     conWrap.show();
// });









})(jQuery);
