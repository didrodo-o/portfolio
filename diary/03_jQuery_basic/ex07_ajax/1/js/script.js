jQuery(document).ready(function(){
	var tbody = $('#tbody');
	$.getJSON('data.json',function(people){
		$.each(people, function(i, person){
			var textNo = person.no;
			var textName = person.name;
			var textMail = person.mail;
			var tr = $('<tr />');
			var no = $('<td />').text(textNo);
			var name = $('<td />').text(textName);
			var mail = $('<td />').text(textMail);
			tr.append(no);
			tr.append(name);
			tr.append(mail);
			tbody.append(tr);
		});
	});
});


