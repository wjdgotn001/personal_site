// tab.js
(function($){

var headContent = [ 
    {'divTitle':'icon', 'link':'#about', 'spanTitle':'about me', 'img':{'src':'aboutme.png', 'alt':'aboutMe'}},
    {'liTitle':'tab', 'link':'#process', 'divTitle':'icon','spanTitle':'process', 'img':{'src':'process.png', 'alt':'process'}},
    {'liTitle':'tab', 'link':'#project', 'divTitle':'icon','spanTitle':'project',  'img':{'src':'project.png', 'alt':'project'}},
    {'liTitle':'tab', 'link':'#contact', 'divTitle':'icon','spanTitle':'contact',  'img':{'src':'contact.png', 'alt':'contact'}} ];
var headlist = '<li><a href="main.html"><div><img></div><span></span></a></li>';

var wrap = $('#wrap');
var headBox = $('#headBox');
var headUl = headBox.find('ul');

var headConLen = headContent.length;
var i;
var menuArea = headBox.children('.menu_area');
var aboutWrap = wrap.children('.about_wrap');


var win = $(window);
var menuAreaOffset = menuArea.offset().top;
var headBoxOffset = headBox.offset().top;
var aboutOffset = aboutWrap.offset().top;
var headUlList;
var imgUrl = '../img/icon/';

for(i=0; i<headConLen; i+=1){
    headUl.append(headlist);
    // console.log(!!headContent[i].liTitle);

    headUlList = headBox.find('li').eq(i);
    if(!!headContent[i].liTitle){ //liTitle의 값이 있거나 없을때
        headUlList.addClass(headContent[i].liTitle);
    }
    headUlList.find('div').addClass(headContent[i].divTitle);
    headUlList.find('span').html(headContent[i].spanTitle);
    headUlList.find('img').attr({
        'src' :imgUrl + headContent[i].img.src, 
        'alt' : headContent[i].img.alt 
    });
    headUlList.find('a').attr({
        'href': headContent[i].link
    });
    
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
        aboutWrap.before(navContent);
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
});//win.on


//메인 ======================================
var mainAction = $('.action');
var p = mainAction.children('p');
var pSplit = p.eq(0).text().split('');
// console.log(pSplit);
p.eq(0).empty();
var SplitLen = pSplit.length;
var i = 0;
var setI;
var Go = function(){
    setI = setInterval(function(){
        p.eq(0).append('<span></span>');//p의 순서값
        p.eq(0).children('span').eq(i).text(pSplit[i]);//spapn의 eq(i)번째
        i++;

        if(i >= SplitLen){ clearInterval(setI) };
    }, 400);
};//Go
Go();


setInterval(function(){
    var pEq = p.eq(0);
    var p1has = pEq.hasClass('on');
    if(p1has){
        pEq.removeClass('on');
    }else{
        pEq.addClass('on');
    }
}, 500); //setInterval




})(jQuery);
