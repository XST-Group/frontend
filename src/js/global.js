function showLoginBox(){
	login_box_template = '<div id="login-modal"><div style="width:100%;height:100%;position:fixed;z-index:2000;top:0;left:0;overflow:hidden" onclick="hideLoginBox()"><div style="height:100%;opacity:.4;background:#000"></div></div><div class="modal"><div class="modal-header clearfix"><h2 class="l">登录</h2><div class="register pull-right">      没有账号？<a href="${rootPath}/register"><strong>立即注册</strong></a></div></div><div class="modal-body"><form id="loginForm"><div class="control-group"><div class="user-id"><input type="text" placeholder="请输入邮箱/用户名" name="email" onfocus="loginInputFocus(this)" onblur="loginInputBlur(this)" /></div></div><div class="control-group"><div class="user-pw"><input type="password" name="password" placeholder="请输入密码" onfocus="loginInputFocus(this)" onblur="loginInputBlur(this)" /></div></div><div class="errorMsg" "=""></div><div class="control-group"><div class="r"><button type="button" onclick="userLogin()" class="btn btn-primary btn-login">登录</button></div></div></form></div></div></div>'
	$("body").append(login_box_template);
}


function loginInputFocus(input){
	$(input).parent().parent().addClass("active");
}

function loginInputBlur(input){
	$(input).parent().parent().removeClass("active");
}

function hideLoginBox(){
	$("#login-modal").remove();
}


$('#loginButton').click(function() {
	showLoginBox();
})