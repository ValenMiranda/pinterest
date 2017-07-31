$(document).ready(function() {
	data.forEach(function(e){
		var id = e.id;
		var title = e.title;
		var description = e.description;
		var user = e.user;
		var hash = e.hashtag;
		var image = '<img src="assets/img/' + id + '.jpg">';
		var div1 = $('<div/>');
	

		div1.append('<div class="contenedor">' +						
									image +
									'<div class="caja">' +
										'<h6>' + title + '</h6>' +
										'<p>' + description + '</p>' +
										'<h5><i class="fa fa-user-circle"></i>' + ' '+ user + ' #' + hash + '</h5>' +
									'</div>' +
							'</div>');
		$('#pictures').append(div1);

		
	});
});
