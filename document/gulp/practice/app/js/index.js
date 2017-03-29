/**
 * Created by 懒牛牛 on 2017/3/24.
 */
let currentTime = document.querySelector("#currentTime");
currentTime.addEventListener('touchstart',(startObj)=>{
    "use strict";
    let moveStart;
    moveStart = startObj.touches[0].clientX;
    currentTime.addEventListener('touchend',(endObj)=>{
        let move = endObj.changedTouches[0].clientX - moveStart;
        console.log(move)
    })
},false);


