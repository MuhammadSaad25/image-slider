function changeImage(){
    let displayImage = document.querySelector(`#img1`)
    if(displayImage.src.match('./img/image1.jpg')){
        displayImage.src = './img/image2.jpg'
    }
    else if(displayImage.src.match('./img/image2.jpg')){
        displayImage.src = './img/image3.jpg'
    }else{
        displayImage.src = './img/image1.jpg'
    }
}