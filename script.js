var content = $("#content");

$( "#aboutMe" ).click(function() {
    $("#content").css('height', '70vw');
});

$( "#myWorks" ).click(function() {
    $("#content").css('height', '80vw');
});


var currentVideo;
$("video").hover(function() {
    $("#content").css('height', '80vw');
}, function() {
    $("#content").css('height', '80vw');
});
