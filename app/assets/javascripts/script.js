$(document).ready(function() {
    $('#quotes').cycle({
		fx: 'fade', // others fade, scrollUp, shuffle
		after: onAfter,
		delay:  -5000

	});
});

captionArray = [

    "<h3>No Prosecution over drug death of man at Phoenix Park.</h3><br /> Irish Independent",
    "<h3>Woman loses legal challenge to home birth ruling.</h3><br /> The Times",
    "<h3>Egypt police vow to use live ammunition against attacks.</h3><br />The Guardian",
    "<h3>Conspiracy: Scores suspected of cheating on Leaving Cert.</h3><br /> Irish Examiner"


];

captionIndex = 0;

function onAfter(curr,next,opts) {
    var caption = captionArray[captionIndex];

    $('#line').html(caption);
    captionIndex++;

    if (captionIndex >= captionArray.length) {
        captionIndex = 0;
    }
}
