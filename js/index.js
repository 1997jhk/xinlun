window.addEventListener('load',function(){
	var isFirefox = typeof document.body.style.MozUserSelect != 'undefined',
	now = 0,
	active = true,
	all = document.getElementsByClassName('wrapper')[0],
	obj = $('.wrapper > li'),
	
	cri = document.getElementsByClassName('two')[0],
	on = cri.getElementsByTagName('i');
//绑定滚轮事件
window.addEventListener(isFirefox ? 'DOMMouseScroll' : "mousewheel", fn, false);

function fn(e) { //滚轮触发函数
	e = e || event;
	//调整滚轮返回值兼容
	a = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail % 3 == 0 ? e.detail / 3 : e.detail);
	if(active) {
		active = false;
		setTimeout(one,1500)
		two(a)
	}
}

function one() { //滚轮开关
	active = true;
}

function two(a) { //加载函数
	now += a
	if(now < -5) {
		now =0
	} else if(now > 0) {
		now = -5
	}
	all.style.top = (now * 100) + 'vh';
	var now1 = Math.abs(now);
	for(var i = 0, len = obj.length; i <= len - 1; i++) {
		if(i == now1) {
			obj[i].className= 'active ';
			on[i].style.background='white';
		} else {
			obj[i].className = '';
			on[i].style.background='';
			
		}
	}
}
two(0);
cri.addEventListener("click", fn2, false);

function fn2(e) {
	var num = e.target,
		str = num.getAttribute('date-url');
	now = parseInt(str);
	two(0);
}
},false)
