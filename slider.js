
var myImage =document.getElementById("myphoto");

var imagearray= ['images/004.jpg','images/005.jpg','images/006.jpg'];

var imageIndex=[0];
function changeimage() {

  myphoto.setAttribute("src",imagearray[imageIndex]);

  imageIndex++;
  if(imageIndex>=imagearray.length){
imageIndex=0;

  }
}

var intervalHandle=setInterval(changeimage,2000);

myphoto.onclick=function() {
clearInterval(intervalHandle);

}