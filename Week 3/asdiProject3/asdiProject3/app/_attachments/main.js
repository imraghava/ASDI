$(document).ready(function(){
	$.ajax({
		"url": '/asdip3/_design/app/_view/divisions',
		"dataType": "json",
		"success": function(data){
			$.each(data.rows, function(index, division){
				var acronym = division.value.acronym;
				var title =   division.value.title;
				$("#divisionList").append(
						$("<li>").append(
								$("<a>").attr("href", "#")
									.text(title)
						)
				);
			});
			$("#divisionList").listview("refresh");
		}
		
	});
	
	$('#membersPage').on('pageinit', function(){
		getMembers();
	});	
	
	var getMembers = function(){
		$.ajax({
			"url": "/asdip3/_design/app/_view/members",
			"dataType": "json",
			"success": function(data){
				$.each(data.rows, function(index, member){
					var alias = member.value.alias[0] + " " + member.value.alias[1];
					var fname = member.value.fName[0] + " " + member.value.fName[1];
					var lname = member.value.lName[0] + " " + member.value.lName[1];
					var eMail = member.value.eMail[0] + " " + member.value.eMail[1];
					var bDay = member.value.bDay[0] + " " + member.value.bDay[1];
					var language = member.value.language[0] + " " + member.value.language[1];
					var skill = member.value.skill[0] + " " + member.value.skill[1];
					var sex = member.value.sex[0] + " " + member.value.sex[1];
					var pro = member.value.pro[0] + " " + member.value.pro[1];
					var division = member.value.division[0] + " " + member.value.division[1];
					var league = member.value.league[0] + " " + member.value.league[1];
					var notes = member.value.notes[0] + " " + member.value.notes[1];
					$("#membersList").append(
							$("<li>").append(
									$("<a>").attr("href", "#")
										.html(
												alias + "<br />" + 
												fname + "<br />" + 
												lname + "<br />" + 
												eMail + "<br />" + 
												bDay + "<br />" + 
												language + "<br />" + 
												skill + "<br />" + 
												sex + "<br />" + 
												pro + "<br />" + 
												division + "<br />" + 
												league + "<br />" + 
												notes + "<br />"
										)
									
							)
					);
				});
				$("#membersList").listview("refresh");
			}
		});
	};
	
	
	
});