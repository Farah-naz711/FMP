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
 

 //****************  MODAL ****************** */

 var productImg = document.getElementById('productImg');
 var productName   = document.getElementById('productName')
 var productDetail = document.getElementById('productDetail')
 function Details(e, img){
     
console.log('hello',img)

    productImg.src=img;

        productName.innerHTML= e.parentNode.firstElementChild.innerHTML;
    productDetail.innerHTML=e.parentNode.firstElementChild.nextElementSibling.innerHTML;
    console.log(productName.innerHTML);
    console.log(productDetail.innerHTML)
 }