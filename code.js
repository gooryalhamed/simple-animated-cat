var btns = $('.buttons button');
btns.click(function(){
	if(this.innerHTML=="blue-eyes"){
		$('.cat .eye-color').addClass('blue-eyes')
	}
	if(this.innerHTML=="green-eyes"){
		$('.cat .eye-color').removeClass('blue-eyes')
	}
	if(this.innerHTML=="sad"){
		$('.cat .mouth').addClass('sad')
	}
	if(this.innerHTML=="happy"){
		$('.cat .mouth').removeClass('sad')
	}
	if(this.innerHTML=="move-around"){
		$('.cat .inner-eye-group').addClass('move-around')
		$('.cat .left-whiskers').addClass('leftwhiskers')
		$('.cat .right-whiskers').addClass('rightwhiskers')
	}
	if(this.innerHTML=="stay-still"){
		$('.cat .inner-eye-group').removeClass('move-around')
		$('.cat .left-whiskers').removeClass('leftwhiskers')
		$('.cat .right-whiskers').removeClass('rightwhiskers')
	}
})
