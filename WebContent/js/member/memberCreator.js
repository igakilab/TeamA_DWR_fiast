function memberInsert(){
	var name = $('#insertName').val();
	var org = $('#insertTeam').val();
	var position = $('#insertPosition').val();
	var age = $('#age').val();
	memberCreator.memberInsert(name,org,position,age,{
		callback:function(){
			location.reload();
		}
	});
	function todoInsert(){
		var title = $('#insertTitle').val();
		var overview = $('#insertOverview').val();
		todoCreator.todoCreate(title,overview,{
		callback:function(){
		location.reload();
		}
		});
		}
}
