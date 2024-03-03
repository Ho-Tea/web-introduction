document.getElementById('submitButton').addEventListener('click', function () {
  var userName = document.getElementById('userName').value;
  var checkboxes = document.querySelectorAll('input[name="movie"]:checked');
  var count = checkboxes.length;
  alert(userName + '님, 저와 ' + count + '개의 취향이 같으시네요!');
});