const images = document.querySelectorAll('.img');
const containerImgShow = document.querySelector('.container-show')
const imageShow = document.querySelector('.image-show')
const equis = document.querySelector('.bx-x')
const textShow = document.querySelector('.text')


images.forEach( image =>{ 

    image.addEventListener('click',()=>{
    
        addImage(image.getAttribute('src'),image.getAttribute('alt'))

    })
})

const addImage = (srcImg, altImage) => {
 
    containerImgShow.classList.toggle('move')
    imageShow.classList.add('show')
    imageShow.src=srcImg;
    textShow.innerHTML = altImage;
    document.body.classList.add('no-scroll')
}


containerImgShow.addEventListener('click', function(){
    imageShow.classList.remove('show')
    containerImgShow.classList.remove('move')
    document.body.classList.remove('no-scroll')
    
})
equis.addEventListener('click', () => {
    imageShow.classList.remove('show')
    containerImgShow.classList.remove('move')
    document.body.classList.remove('no-scroll')
})

const selectors = document.querySelectorAll('.selectores')
let selectId = document.getElementById('active')
let dataSelect = selectId.getAttribute('data-select-category')
const selecPrincipal = document.querySelector('.principal')
const containerImages = document.querySelectorAll('.container-img')

selectors.forEach( selector=>{
    selector.addEventListener('click',()=>{
        
        if (selector !== selectId) {
            selector.setAttribute('id','active')
            selectId.removeAttribute('id')
            selectId = document.getElementById('active')
        }
        dataSelect = selectId.getAttribute('data-select-category')

        if (selecPrincipal == selectId) {

            for (var i=0; i<containerImages.length; i++) {
            
                containerImages[i].classList.remove('visible')
                containerImages[i].classList.add('remove')
                containerImages[i].classList.remove('remove')
                containerImages[i].classList.add('visible')
                containerImages[i].classList.add('animate__animated','animate__slideInUp')
            }

        } else{
           
            for(var i=0 ; i<containerImages.length ; i++){

                var containerData = containerImages[i].getAttribute('data-category')
                containerImages[i].classList.remove('animate__animated','animate__slideInUp')
            
                if(containerData != dataSelect){
                    containerImages[i].classList.add('remove')
                    containerImages[i].classList.remove('visible')
                } else {
                    containerImages[i].classList.add('visible')
                    containerImages[i].classList.remove('remove')
                }
            }

        }
        
    })
})


