// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
if (bar){
    bar.addEventListener('click' , () =>{
        nav.classList.add('active')
    })
}
// Script to Additem To cart
const Cartto = document.querySelectorAll('#Cart');
function addtocart(id,img,Name,price,quantity){
  const cart = JSON.parse(localStorage.getItem('cart'))||[];
  cart.push({id:id ,img:img, name:Name,price:price});

  localStorage.setItem('cart',JSON.stringify(cart));
  alert('Item added to cart');
};
