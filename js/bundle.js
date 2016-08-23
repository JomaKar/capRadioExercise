(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var load = function(url){


var elem = $('<link></link>',{
	rel:'stylesheet',
	type: 'text/css',
	href: url

})

$('head').append(elem);

}

module.exports = load;

},{}],2:[function(require,module,exports){
$(function(){

var load= require('./load.js');
var btnNav = $('.header-btn-nav');
var side = $('.side');
var conAv = $('.content-avion');
var cont = $('.content');
var list = $('ul.list-up li');
var head = $('.header');
var icon = $('i');
var w= $(window).width();
var link = $('a');
var watchImg = $('.imgWat img');
var numerText = $('<div class="text"><h1> <span class="number"> $200 </span> </br> 5 TICKET PACK</h1></div>');
var footer = $('<footer class="footer"><ul class="footList"><li class="footItem"><span></span><span class="share">SHARE</span>TO WIN</li><li class="footItem">PROCEEDS</li><li class="footItem">FAQ</li><li class="footItem mid">Ticket Sales Now Closed<li class="footItem midUp">Ticket Sales Now Closed</li></li><li class="footItem">RULES</li><li class="footItem">CONTACT</li></ul</footer>');

load("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css");
load('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Raleway:400,800')


console.log('just finish with 768 media. but still need to stylize the footer');

///taking ON and OFF the numberSpan on the content-head div

function participateNumText(t){
	var space = $('.content-head').find('.prices .text').last();

	if(t === 'on' && $('.content-head').find('.prices .text').last().text() != '  $200   5 TICKET PACK'){
		
		space.after(numerText);
		$('.content-head a').find('img').attr('width', '177px');
		side.after(footer)

	}else if(t==='off' && $('.content-head').find('.prices .text').last().text() === '  $200   5 TICKET PACK'){
		
		space.remove();
		$('.content-head a').find('img').attr('width', '100px');
		$('.footer').remove();

	}
}

////introducing symbols beside the second section's resume

	var sym = $('<div class="sym-wraper"><span class="fraction">33<span class="slash">/</span>25</span><span class="fraction-sub">MPG</span><span class="img-span"><img src="./img/infinite.png"></span><p class="infinite-sub">ADVENTURES</p></div>')
	var paragraph = $('section#G p').eq(1);

function par(rm){
	paragraph.after(sym);

	if(rm === 'rm'){
		if(paragraph.find(sym)){
			sym.remove();

		}
	}
}

////removing <br> from titles to make them a one line header text

function brRemove(ap){
	var br = $('section#T h2.title').find('br');
	br.remove();

	if(ap === 'ap'){
		if(!$('section#T h2.title').find('br')){
			$('.breakSpan').append('<br>');
		}
	}
}

function br2Remove(ap){
	var br2= $('section#G .group').find('h2.h22').find('br');
	br2.remove();

	if(ap === 'ap'){
		if(!$('section#G .group').find('h2.h22').find('br')){
			$('.breakSpan').append('<br>');
		}
	}
}

///watch's image size changing

function watchImgSize(size, type){

	watchImg.attr({width: size + type });
}

//// back to top button delete

function killBottomBut(){
	$('h5.back a').remove();
}

/////Setting initial components height

		if(w >=600 && w <=  660){
					par();
					brRemove();
					watchImgSize(470, 'px');

			}else if(w >=660 && w <=  760){

				brRemove();
				watchImgSize(520, 'px');

			}else if(w >=760 && w <=  768){

				brRemove();
				watchImgSize(83, '%');

			}else if(w >=768 && w <=  790){
				brRemove();
				watchImgSize(300, 'px');
				participateNumText('on');
				killBottomBut();

			}else if(w >= 790 && w <= 951){
				conAv.css({
					
					'background-position': '-400px -40px'	
				})
				watchImgSize(83, '%');
				br2Remove();
				brRemove();
				participateNumText('on');
				killBottomBut()

			}else if(w >=951){
				brRemove();
				br2Remove();
				participateNumText('on');
				killBottomBut()
			}
				

////Setting component's height according to the window resize


$(window).resize(function(){
	var wM= $(window).width();

	if (wM >= 320 && wM <= 599){
		
		par('rm');
		brRemove(ap);
		watchImgSize(95, '%');

	}else if(wM >=600 && wM <=  660){
		par();
		brRemove();
		br2Remove('ap');
		watchImgSize(470, 'px');
				
	}else if(wM >=660 && wM <=  760){

		brRemove();
		watchImgSize(520, 'px');

	}else if(wM >=760 && wM <=  768){

		brRemove();
		watchImgSize(83, '%');
		participateNumText('off');

	}else if(wM >=768 && wM <=  790){

		participateNumText('on');
		watchImgSize(300, 'px');
		killBottomBut();

	}else if(wM >= 790 && wM <= 951){
		
		br2Remove();

	}
				
})

// making smooth movement within the page for a link event

link.click(function(e){
	e.preventDefault();

	var dis = $($(this).attr('href')).offset().top - $(window).scrollTop();
	dis = Math.abs(dis);
	var speed;
	if(dis < 1000){
		speed = 500;
	}else if(dis > 1000 && dis < 2000){
		speed = 650;
	}else{
		speed = 750;
	}

	$('html, body').animate({
		scrollTop: $( $.attr(this,'href')).offset().top
	}, speed);
})

///Moving the page to the right when click in hidden menu

btnNav.click(function(){

	side.toggleClass('side-in');
	cont.toggleClass('content-out');
	head.toggleClass('header-out');
	icon.toggleClass('fa fa-bars').toggleClass('fa fa-times');
})

///Moving the page to its original position when hiding menu	

list.click(function(){
	var esto = $(this);
	side.toggleClass('side-in');	
	cont.toggleClass('content-out');	
	head.toggleClass('header-out');
	icon.toggleClass('fa fa-bars').toggleClass('fa fa-times');
	})
})

},{"./load.js":1}]},{},[2]);
