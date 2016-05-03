$(function(){
  function alertMessage(message) {
    var insert =
    "<div class='suspend' style='width: 100%;height: 100%;display: none;z-index: 2;background-color: rgba(0,0,0,.6);position: fixed;top: 0;left: 0;'>" +
     "<div class='suspend-content' style='text-align:right;padding: 30px 40px;width: 400px;height: 200px;background-color: #fff;border-radius: 4px;position: fixed;top: 26%;left: 36%;'>" +
        "<p class='alertMessage' style='text-align:left;font-size: 22px;height: 80px;color: #000;font-weight: bold;margin-bottom: 30px;'></p>" +
       " <button type='button' class='btn btn-success'>确定</button>" +
      "</div>" +
    "</div>";
    $('body').append(insert);
    $('.alertMessage').html(message);
    $('.suspend').css('display','block');
    $('.btn').on('click',function(){
      $('.suspend').css('display','none');
    });
  }
});
