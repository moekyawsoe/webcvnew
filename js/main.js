$(document).ready(function() {
    $("#container").load("views/home.html");
});

function switchView(view) {
    $.get({
        url: view,
        cache: false,
    }).then(function(data) {
        $("#container").html(data);
    });
}