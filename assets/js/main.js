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

		div1.click(function(){
			var contenido = $('<div/>',{'class':'modal-content'});
			var titulo = $('<h6/>', {'text':title});
			var imagenMod = $('<img/>',{'src':'assets/img/' + id + '.jpg','class':'imagenMod'});
			var userMod = $('<h5/>',{'class':'fa fa-user-circle','text': user + ' ' + '#' + hash});
			var descrMod = $('<p/>',{'text':description});
			var cierre = $('<span/>',{'text':'X', 'class':'close'});
			//Agregamos cada variable al contenedor
			contenido.append(cierre);
			contenido.append(titulo);
			contenido.append(imagenMod);
			contenido.append(userMod);
			contenido.append(descrMod);


			$('#myModal').append(contenido);
			$('#myModal').show();
			cierre.click(function(){
				$('#myModal').hide();
				contenido.hide();

			})
		});
	});
});
