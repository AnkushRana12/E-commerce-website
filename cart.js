const tablebody = document.getElementById('tablebody');
const totalPrice= document.getElementById('total');
const Subtotal= document.getElementById('subtotalPrice')
const basket = JSON.parse(localStorage.getItem('cart'))||[];
const removeItem = document.getElementById('remove');


// Display items into the Cart //
basket.forEach((item) => {
 const tbrow = document.createElement('tr');
 tbrow.setAttribute('id','items')
 const datat = document.createElement('td');
 datat.innerHTML= '<i class="far fa-times-circle"></i>';
 tbrow.appendChild(datat);
 console.log(tablebody)
 console.log(tbrow);
 tablebody.appendChild(tbrow);

 const img = document.createElement('td');
 img.innerHTML= `<img src="${item.img}">`;
 tbrow.appendChild(img);
 tablebody.appendChild(tbrow);

 const Name = document.createElement('td');
 Name.innerHTML= `${item.name}`
 tbrow.appendChild(Name);
 tablebody.appendChild(tbrow);

 const price = document.createElement('td');
 price.innerHTML=`$${item.price}`;
 tbrow.appendChild(price);
 tablebody.appendChild(tbrow);

 const quantity = document.createElement('td');
 quantity.innerHTML= '<input type="number" value="1">'
 tbrow.appendChild( quantity);
 tablebody.appendChild(tbrow);

 const subtotal = document.createElement('td');
 subtotal.innerHTML= `$${item.price}`;
 tbrow.appendChild( subtotal);
 tablebody.appendChild(tbrow);
 console.log(tbrow)
});

// Total Price of Items Added to Cart //
const total= basket.reduce(function(acc,itemadded){
    return acc+ itemadded.price;
 },234);
Subtotal.innerHTML=`$${total}`
totalPrice.innerHTML=`<strong>$${total}</strong>`;

// Remove item from Cart //
removeItem.addEventListener('click', () =>{
  console.log("jjnnkjn")
  const item = document.getElementById('cartItem');
  item.remove();
  
});
