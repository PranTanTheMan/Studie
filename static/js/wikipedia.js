function search(query, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xhttp.open("GET", "/search-wikipedia?query=" + query, true);
    xhttp.send();
}


var typingTimer;
var doneTypingInterval = 500;
var $input = $('#myInput');

$input.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

$input.on('keydown', function () {
  clearTimeout(typingTimer);
});

function doneTyping () {
    var query = $input.val();
    search(query, (response) => {
        document.getElementById("result").innerHTML = response;
        function valuePrint(response) {
            for (var i in response) {
              if (response[i].title instanceof Object) {
                valuePrint(response[i].title);
              } else {
                document.getElementById('result').innerHTML(response[i]);
              }
            }
          }
        valuePrint(response);
    })
}

//