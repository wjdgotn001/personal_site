// tab.js
(function($){

var headContent = [ 
    {'divTitle':'icon','spanTitle':'about me'},
    {'liTitle':'tab', 'divTitle':'icon','spanTitle':'process'},
    {'liTitle':'tab','divTitle':'icon','spanTitle':'project'},
    {'liTitle':'tab','divTitle':'icon','spanTitle':'contact'} ];
var headlist = '<li><a href="./main.html"><div></div><span></span></a></li>';

var wrap = $('#wrap');
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



// 탭메뉴 ==================================
var tab = headUl.find('.tab');
var headNav = $('#headNav');
var navTab = headNav.find('.tab');
var conWrap = wrap.children('.con_wrap');

tab.on('click',['a'],function(e){
    e.preventDefault();

    about.hide();
    skill.hide();
    conWrap.show();
});
navTab.on('click',['a'],function(e){
    e.preventDefault();

    about.hide();
    skill.hide();
    conWrap.show();
});

// skill========================================
// var canvas = document.querySelector('.paper');
// var ctx = canvas.getContext('2d');

// var baseColor = "#07a";
// ctx.lineWidth = 15;
// ctx.lineCap = 'round';
// ctx.strokeStyle = baseColor;
// ctx.font = "40px sans-serif";
// ctx.textAlign = 'center';
// ctx.fillStyle = baseColor;
// // var moveInterval2;
// // var SetGo2 = function(){
// // 	var i = 0;
// // 	moveInterval2 = function(){
// // 		i += 1;
// // 		ctx.clearRect(0,0,canvas.width, canvas.height);
// // 		MyGraph(2,1, i, 'HTML');
// // 		console.log(i);
// // 		(i < 90)?requestAnimationFrame(moveInterval2):
// // 						 cancelAnimationFrame(moveInterval2);
// // 	}
// // 	moveInterval2();
// // };
// // SetGo2();
// 	var MyGraph = function(x, y, p, s){		
// 		var posX = x * 250 - 100;
// 		var posY = y * 250 - 100;
// 		var percent = p ; 
// 		var skill = s || 'program';
// 		// var 
		
// 		var animationCircle;
// 		var i = 0;
// 		var CircleGraph = function(){
// 			animationCircle = function(percent){

// 				var lineWidth = 15;
// 				var r    = 100;
// 				var rect = (r + lineWidth) * 2 + 10;
// 				ctx.lineWidth = lineWidth;
			
// 			var myP = function(percent){
// 				// percent  :  값 / 기준 * 100 -> 값 / 100 * 기준
// 				var p = (percent / 100 * 2) + 1.5;
// 				return Math.PI * p;
// 			};
// 			// 240은 (반지름 100과, 선두께 15) * 2 계산값보다 10큰 영역으로 설정
// 			ctx.clearRect(posX - (rect/2), posY - (rect/2), rect, rect);

// 			ctx.beginPath();
// 			ctx.arc(posX, posY, r , Math.PI * 1.5 , myP(percent), false);
// 			ctx.stroke();		
// 			ctx.textAlign = 'center';
// 			ctx.fillStyle = baseColor;
// 			ctx.font = "normal 35px sans-serif";
// 			ctx.fillText(skill, posX, posY-15);
// 			ctx.font = "bold 40px sans-serif";
// 			ctx.fillText(percent+ '%', posX, posY + 40);
// 		};

// 		i += 1;
// 		animationCircle( i );
// 		(i < percent) ? requestAnimationFrame(CircleGraph): 
// 										cancelAnimationFrame(CircleGraph);
// 	};
// 	CircleGraph();
// }// MyGraph(x좌표, y좌표, percent, 스킬명);

// MyGraph(1,1, 90, 'HTML');
// MyGraph(2,1, 95, 'CSS');
// MyGraph(3,1, 95, 'SCSS');
// MyGraph(1,2, 85, 'Js');
// MyGraph(2,2, 85, 'jQuery');
// // MyGraph(1,3, 70, 'Photoshop');
// // MyGraph(2,3, 70, 'Illustrator');
// // MyGraph(3,3, 70, 'Indesign');






})(jQuery);
