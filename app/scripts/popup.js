(function() {
  'use strict';
  var add;

  add = function() {
    var comment, new_comment, textP;
    console.log('\'Allo \'Allo! Popup');
    new_comment = document.getElementById('comment').value;
    if (new_comment !== "") {
      comment = document.createElement('div');
      textP = document.createElement('p');
      textP.innerHTML = new_comment;
      return document.getElementById('comments').appendChild(textP);
    } else {
      return alert('Please Enter Fill Comment');
    }
  };

  console.log('Popup');

  $.getJSON('http://127.0.0.1:8000/api/v1/comment', function(data) {
    var k, textP, _i, _len, _ref, _results;
    _ref = data.objects;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      k = _ref[_i];
      textP = document.createElement('p');
      textP.innerHTML = k.text;
      document.getElementById('comments').appendChild(textP);
      _results.push(k);
    }
    return _results;
  });

  window.onload = function() {
    return document.getElementById('add').onclick = add;
  };

}).call(this);
