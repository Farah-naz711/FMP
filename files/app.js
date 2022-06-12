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

 function Details(e, img){
     
     
     
     
     var productImg = document.getElementById('productImg');
     var productName   = document.getElementById('productName')
     var productDetail = document.getElementById('productDetail')
     
     console.log('hello',img,e,productImg,productName,productDetail)
     
    productImg.src=img;

        productName.innerHTML= e.parentNode.firstElementChild.innerHTML;
    productDetail.innerHTML=e.parentNode.firstElementChild.nextElementSibling.innerHTML;
    console.log(productName.innerHTML);
    console.log(productDetail.innerHTML)
 }

 // Contact form Validation
 
 var userName = document.getElementById('name')
 var phNo    = document.getElementById('phNo');
 var email   = document.getElementById('email');
 var subject = document.getElementById('subject');
 var message = document.getElementById('message');
 
function CheckInfo(){

    if(userName.value.length<3 || userName.value.length>22)
    {
        alert('Please Fill Correct Name');
    }
     if(phNo.value.length != 11 )
    {
        alert('Please Enter Your Corrct Number');

    }
    if(subject.value.length <15)
    {
        alert('Please Write Subject');
    }
    if(!message.value )
    {
        alert("Please Write Your Message")
    }
    else { var flag = 0;
        for(var i =0 ; i <email.value.length; i++)
        {
            if(email.value[i] == '@')
            {
                flag = 1;
            }
        }
        if(flag==0)
        {
            alert('Enter Your Correct Email');
        }
    }

    userName.value = "";
    phNo.value = '';
    email.value = '';
    subject.value = '';
    message.value = ''
}
 