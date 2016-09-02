//Your array of images goes here
var images = ["c1.jpg", "c2.png", "c3.jpg","c4.jpg"];

//Count will keep track of the index of the currently displaying picture
var count = 0;

//Use jQuery to run "startSlideshow" when you click the "start" button
$("#start").on('click', startSlideshow);
//Use jQuery to run "stopSlideshow" when you click the "stop" button
$(".stop").on('click', stopSlideshow);



function displayImage (){
    $('#image-holder').html('<img src='+images[count]+ ' width="400px">');
}

function nextImage (){
    //increment the count by 1
    count++;

    //show the loading gif in the "image-holder" div
    $("#image-holder").html("<img src='loading.gif' alt='loading'>")

    //Use a setTimeout to run displayImage after 1 second
    var newImage = setTimeout(displayImage, 1000);

    //if the count is the same as the length of the image array, reset the count to 0
    if (count == images.length) {
    	count = 0;
    }

}
function startSlideshow (){
    //use a setInterval to run nextImage
    setInterval(nextImage, 3000);

}
function stopSlideshow () {
    //put your clearInterval here:
    clearInterval(count == images.length);


}


displayImage();
