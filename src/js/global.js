function showLoginBox(){
	$("#login-modal").css('display','block');
}


function loginInputFocus(input){
	$(input).parent().parent().addClass("active");
}

function loginInputBlur(input){
	$(input).parent().parent().removeClass("active");
}

function hideLoginBox(){
	$("#login-modal").css('display','none');
}


$('#loginButton').click(function() {
	showLoginBox();
})
