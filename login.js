(function(){
    var userName = window.localStorage.getItem('userName') || ''
    var passWord = window.localStorage.getItem('passWord') || ''
    $('#userName').val(userName)
    $('#passWord').val(passWord)
    if (userName !='' && passWord!='') {
      ajaxRequest()
    }
    $('#loginNetWork').on('click',function(){
      let userName = $('#userName').val()
      let passWord = $('#passWord').val()
      // 对代码进行校验
      if (userName == '') {
        $('.toast-wrap').show().find('.toast-text').text('账号不能为空')
        setTimeout(function () {
          $('.toast-wrap').hide()
        }, 2000)
      }
      if (passWord == '') {
        $('.toast-wrap').show().find('.toast-text').text('密码不能为空')
        setTimeout(function () {
          $('.toast-wrap').hide()
        }, 2000)
      }
      window.localStorage.setItem('userName', $('#userName').val())
      window.localStorage.setItem('passWord', $('#passWord').val())
      ajaxRequest()
    })
    function ajaxRequest () {
      $.ajax({
        url: "http://localhost:8080/login.php",
        type: 'post',
        data: {
          opr:'pwdLogin', //smsLogin表示短信认证登录,pwdLogin表示密码认证登录,
          userName: window.localStorage.getItem('userName'),
          pwd: window.localStorage.getItem('passWord'),
          rememberPwd: '1'
        },
        success: function (data) {
          $('.toast-wrap').show().find('.toast-text').text('登陆成功')
          setTimeout(function () {
            $('.toast-wrap').hide()
          }, 2000)
        },
        error: function () {
          $('.toast-wrap').show().find('.toast-text').text('登陆失败，请重新登陆')
          setTimeout(function () {
            $('.toast-wrap').hide()
          }, 2000)
        }
      })
    }
    //转换json
  function json_decode(str){
  	var json = null;
  	try{
  		json = eval("(" + str + ')');
  	}catch(e){}
  	return json;
  }
})()
