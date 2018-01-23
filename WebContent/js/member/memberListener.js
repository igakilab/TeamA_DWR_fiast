memberListener.memberListen({
	callback: function(data){
		for(i of data){
			$("#member").append('<li><ul><li>名前:'+i.name+'</li><li>所属:'+i.org+'</li><li>役職:'+i.position+'</li><li>______</li></ul></li>')
		}
	}
});

