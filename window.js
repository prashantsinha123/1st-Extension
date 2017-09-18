$(function(){
	$('#name').keyup(function(){
		$('#hell').text('Hello' + $('#name').val());
	})
})
