ind=0;
function slider(){
var arr=["./assets/images/img1.webp","./assets/images/img2.avif","./assets/images/img3.jpeg",
"./assets/images/img4.jpeg"];
var imageId=document.getElementById("myimage");
imageId.src=arr[ind];
ind++;
if(ind==4){
ind=0;
}
}

var start=document.getElementById("start");
var stop=document.getElementById("stop");
//setInterval(slider,4000);

start.addEventListener("click",function(){
    interval=setInterval(slider,4000)
})
stop.addEventListener("click",function(){
    clearInterval(interval)
})

// //ind=0;
// function slider(){
//     var arr=["./assets/images/building-img-1.jpg","./assets/images/building-img-3.jpg","./assets/images/building-img-4.jpg","./assets/images/building-img-2.jpg"];
//     var imageId=document.getElementById("myimage");
//     imageId.src=arr[ind];
//     ind++;
//     if(ind==4){
//     ind=0;
//     }
//     }
//     setInterval(slider,4000);