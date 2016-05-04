$('#loginForm').on('submit', function() {
  var username = $('#username').val();
  var password = $('#password').val();
  $(this).ajaxSubmit({
      type: 'post',
      url: 'yourServlet',    //  填进你要处理表单信息的Servlet
      data: {
          'username': username,
          'password': password
      },
      success: function(responseJSON) {
        var loginMsg = JSON.parse(responseJSON);
        if( loginMsg.status ) {
          alertMessage('登陆成功');
          location.href='index.html';    //  路径不对的话改一下
          return true;
        }
        else {
          $('.errorMsg').html(loginMsg.message);
        }
      },
      error: function(){
        alert('提交失败！');
      }
  });
  $(this).resetForm();
  return false;
});
