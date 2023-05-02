document.querySelector('.button1').onclick = function myImg(){
    document.getElementById('img2').style.display='none';
    document.getElementById('img3').style.display='none';
    document.getElementById('img1').style.display='flex';
}

document.querySelector('.button2').onclick = function myImgd(){
    document.getElementById('img1').style.display='none';
    document.getElementById('img3').style.display='none';
    document.getElementById('img2').style.display='flex';
}

document.querySelector('.button3').onclick = function myImgt(){
    document.getElementById('img1').style.display='none';
    document.getElementById('img2').style.display='none';
    document.getElementById('img3').style.display='flex';
}