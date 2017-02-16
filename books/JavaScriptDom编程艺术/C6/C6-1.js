/**
 * Created by 懒牛牛 on 2016/10/31.
 */
window.onload = prefunction;
function prefunction() {//getElementById直接返回的元素节点  getElementsByClassName返回的是dom数组
    var image = document.getElementsByClassName("show");
    // console.log(show.length);return false;
    for(var i = 0; i<image.length; i++){
        image[i].onclick = function () {
            // console.log(this);return false;
            return show(this);
        };
    }
    var deleteImg = document.getElementsByClassName("unshow")[0];
    deleteImg.onclick = function () {
        var image = document.getElementById("public");
        image.setAttribute("src","  ");
    }
}

function show(href) {
    var src = href.getAttribute("href");
    var image = document.getElementById("public");
    image.setAttribute("src",src);
    return false;
}

