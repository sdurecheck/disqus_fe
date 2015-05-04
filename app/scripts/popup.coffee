'use strict';

# this script is used in popup.html

add = () ->
	console.log('\'Allo \'Allo! Popup')
	new_comment = document.getElementById('comment').value


	if (new_comment != "")
		comment = document.createElement('div')
		textP = document.createElement('p')
		textP.innerHTML = new_comment	
		document.getElementById('comments').appendChild(textP)
	else
		alert('Please Enter Fill Comment')


console.log('Popup');

$.getJSON('http://127.0.0.1:8000/api/v1/comment', (data) ->
	for k in data.objects
		textP = document.createElement('p')
		textP.innerHTML = k.text
		document.getElementById('comments').appendChild(textP) 
		k	
);

window.onload = () ->
	document.getElementById('add').onclick = add     

