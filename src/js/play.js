function qiehuan(value){
	if(value==0){//相关
		$("#xg").show();
		$("#ph").hide();
		$("#xgclass").removeClass("object_tab").addClass("object_tab");
		$("#phclass").removeClass("object_tab");
	}else{//片花
		$("#ph").show();
		$("#xg").hide();
		$("#phclass").removeClass("object_tab").addClass("object_tab");
		$("#xgclass").removeClass("object_tab");
	}
}

function playVideo(vid){
   var href = window.location.href;
   var rowId=0;
   var vbId=0;
   var rowIdIndex = href.indexOf("rowId=");
   var vbIdIndex = href.indexOf("vbId=");
   if(rowIdIndex!=-1){
	   var r=href.substring(rowIdIndex,href.length);
	   rowId = r.split("=")[1];
	   if(rowId.indexOf("&")!=-1){
		   rowId = rowId.split("&")[0];
	   }
   }
   if(vbIdIndex!=-1){
	   var v=href.substring(vbIdIndex,href.length);
	   vbId = v.split("=")[1];
	   if(vbId.indexOf("&")!=-1){
		   vbId = vbId.split("&")[0];
	   }
   }
   $.getJSON("/dist/test.json",{videoId:vid,rowId:rowId,vbId:vbId},function(data){
	   var replaceImg = $("#replaceImg");
         if(data.status==1){
        	 getFlashHtml(data.playurl,replaceImg);
         }else{
        	 var error = data.error;
        	 if(error=="未登陆"){
        		 getError(replaceImg,'您未登陆，确定要去登陆吗?','/session/new');
        	 }else if(error=="未付费"){
        		 getError(replaceImg,'此视频需要付费观看，确定将扣除相应点数，确定要付费吗?','needPoints');
        	 }else if(error=="inlinenetonly"){
        		 getError(replaceImg,'该视频只能内网观看，点击确定跳转到首页','/');
        	 }else if(error=="encoding"){
        		 getError(replaceImg,'该视频正在转码','/');
        	 }else if(error=="cutting"){
        		 getError(replaceImg,'该视频正在切割','/');
        	 }else{
        		 alert(data.error);
        	 }
         }
   });
}
var cg={};
function getFlashHtml(playObj,replaceObj){
	var config = {};
	config.vars = {};
	config.vars.http = {};

	config.mode = 'vod';
	config.player = 'flash';
	config.id = 'VJTVPlayer';
	config.width = '100%';
	config.height = '100%';
	config.swfUrl = '/dist/player/VJTVPlayer.swf';
	config.vars[playObj.type]=playObj.playUrl;
	config.vars.speedurl = '/assets/download/VJOcx3-ch-full-setup.exe';
	config.vars.point = '/xmlurl/marks?id='+213;
	cg[playObj.type]=playObj.playUrl;
	var regex = /^\d{1,}$/;
	if((typeof stime != 'undefined')&&regex.test(stime)){
		 config.vars.startTime=stime;
	}
    var player = new Player(config);
    var flashhtml = player.showflashplayer();
    cg.player=flashhtml;
    replaceObj.replaceWith(flashhtml);
    checkDownLoad(playObj.downUrl);
}

function checkDownLoad(downurl){
	if(downurl.length==0){
		$(".xz").click(function(){
			alert("抱歉，您没权限下载");
			return false;
		});
	}else{
		//表示可以下载
		$(".xz").attr("download",downurl);
	}
}

function getError(replaceObj,msg,url){
	$(".deduction_sure").find("p:first").text(msg);
	var atagObj = $(".deduction_sure").find("a");
	var replaceImg = $("#replaceImg");
	if(url=="needPoints"){
		atagObj.on('click',function(){
			$.ajax({
		        url : "/vod/deducting.json",
		        data : {"videoId":vid},
		        dataType : "json",
		        type : "POST",
		        async:"false",
		        success : function(data) {
		        	if(data.status==1){
		        		playVideo(vid);
		        	}else if(data.status==0){
		        		 getError(replaceImg,'余额不足，请先去充值?','/person/pay/recharge');
		        	}else{
		        		alert("扣费出错==>"+data.error);
		        	}
		        }
		    });
        });
	}else{
		atagObj.attr("href",url+"?back_url="+window.location.href);
	}
	replaceObj.replaceWith($(".deduction"));
	$(".deduction").show();
	$(".deduction").attr("id","replaceImg");
	checkDownLoad("");
}

function statistics(){
	$.getJSON('/common/statistics.json',{id:vid},function(data){});
}

function _downLoad(type){
	var permstr=$(".xz").attr("download");
	$.getJSON('/vod/download.json'
			,{videoId:vid,type:type,permstr:permstr}
			,function(data){
			var _url = data.url;
			if(_url.length == 0){
				alert("未找到下载路径");
			}else{
				window.open(_url);
				$.getJSON('/vod/updDownLoadNum.json',{videoId:vid},function(data){});
			}
	});
}