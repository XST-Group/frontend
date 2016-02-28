var cg={};
function getFlashHtml(playUrl,replaceObj){
	var config = {};
	config.vars = {};
	config.vars.http = {};

	config.mode = 'vod';
	config.player = 'flash';
	config.id = 'VJTVPlayer';
	config.width = '100%';
	config.height = '100%';
	config.swfUrl = '/dist/player/VJTVPlayer.swf';
	config.vars.src = playUrl;
	config.vars.speedurl = '/assets/download/VJOcx3-ch-full-setup.exe';
	config.vars.point = '/xmlurl/marks?id='+213;
	cg.src = playUrl;
	var regex = /^\d{1,}$/;
	if((typeof stime != 'undefined')&&regex.test(stime)){
		 config.vars.startTime=stime;
	}
    var player = new Player(config);
    var flashhtml = player.showflashplayer();

	console.log(flashhtml);
    cg.player=flashhtml;
    console.log(replaceObj);
	replaceObj.replaceWith(flashhtml);
}

