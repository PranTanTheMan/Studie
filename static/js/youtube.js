searchbox = document.getElementById("search-input");
searchbox.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("search-button").click();
    }
}
);

function search() {
    // make a request to /search-youtube?query=<query>
    var query = document.getElementById("search-input").value;
    var url = "/search-youtube?query=" + query;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            var results = document.getElementById("results");
            results.innerHTML = "";
            doc = document.getElementById("results");
            doc.innerText = response
        }
    }
    xhr.send();
}