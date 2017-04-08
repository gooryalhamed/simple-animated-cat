var btns = $('.buttons button');
btns.click(function(){
	if(this.innerHTML=="blue-eyes"){
		$('.cat .eye-color').addClass('blue-eyes')
	}
	if(this.innerHTML=="green-eyes"){
		$('.cat .eye-color').removeClass('blue-eyes')
	}
})
