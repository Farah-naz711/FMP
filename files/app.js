// function createBubble() {
//     let section = document.querySelector('section');
//     let createElement = document.createElement('span');
//     var size = Math.random() * 60;

//     createElement.style.width = 20 + size + 'px';
//     createElement.style.height = 20 + size + 'px';

//     createElement.style.left = Math.random() * innerWidth + 'px';
//     section.appendChild(createElement);

//     setTimeout(() => {
//         createElement.remove();
//     }, 3000)

// }
// setInterval(createBubble,50);

function toggle(){
    var forSearch = document.querySelector('.for-search');
    var forIcon = document.querySelector('.for-icon');
    forSearch.classList.toggle('active')
   }

function Clear()
{
    var inputSearch= document.getElementById('input-search');
    inputSearch.value = '';
}

var main = document.getElementById('mainBox');
function imgChange(file)
{

    if(file =='home')
    {


        main.style.background ='linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url(./images/1.jpg)';
        styling();
    }
    else if(file =='about')
    {
        main.style.background ='linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url(./images/rolex/rolex-milgauss-watches-pictures-p-os-images-311322-org.jpg)';
        styling();

    }
    else if(file =='contact')
    {
        main.style.background ='linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.75)), url(./images/breguet-watch-4-org.jpg)';
        styling();

    }
    else if(file =='products')
    {

        main.style.background ='linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url(./images/cartier-metiers-d-art-rotonde-de-cartier-watch-hpi00689-org.jpg)';
        styling();
    }
    else return;
// 

 }
 
 function styling()
 {

    main.style.transition = '0.5s'
    // main.style.backgroundAttachment = 'fixed';
    main.style.backgroundPosition = 'center center';
    main.style.backgroundSize = 'cover';
    main.style.backgroundRepeat = 'no-repeat';
    
 }
 

 //****************  MODAL ****************** */

 var productImg = document.getElementById('productImg');
 var productName   = document.getElementById('productName')
 var productDetail = document.getElementById('productDetail')
 function Details(e, img){
     


    productImg.src=img;

        productName.innerHTML= e.parentNode.firstElementChild.innerHTML;
    productDetail.innerHTML=e.parentNode.firstElementChild.nextElementSibling.innerHTML;
    console.log(productName.innerHTML);
    console.log(productDetail.innerHTML)
 }