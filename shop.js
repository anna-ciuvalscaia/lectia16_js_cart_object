// Object of a product

/*let product = {
    name: "Pacman III Ultra",
    rate: 4.5,
    price: 50.00
}*/

// Array of products

let products = [
    {
    name: "Pacman WORLD III",
    images: `<img src="images/pacman2.jpg">`,
    rate: 4.5,
    price: {
        amount: 50.00,
        unit: "USD"
    } 
  }, // 0

    {
    name: "The Witcher",
    images:`<img src="images/witcher.jpg">`,
    rate: 5.0,
    price:  {
        amount: 200.00,
        unit: "USD"
    }
  }, // 1

    {
    name: "Snake, The Beginnings",
    images: `<img src="images/snake.jpg">`,
    rate: 3.5,
    price: {
        amount: 10.00,
        unit: "USD"
    } 
  }, // 2

    {
    name: "Dark souls III",
    images: `<img src="images/dark.jpg">`,
    rate: 1.5,
    price: {
        amount: 15.00,
        unit: "USD"
    } 
  }, // 3 

    {
    name: "World of Tanks VIII",
    images: `<img src="images/tanks.jpg">`,
    rate: 0.5,
    price: {
        amount: 5.00,
        unit: "USD"
    }
  } // 4
]

let cart = []



function addToCart(i){


  // let selected = products[i]
   let q = prompt(`enter quantity: "${products[i].name}"`)
   

   eCart.innerHTML += `
   
<table>
        <tr>
          <th>name:</th>
          <th>price:</th>
          <th>cantitatea:</th>
          <th>Total Cost:</th>
        </tr>
         <tr>
    <td>${products[i].name}</td>
    <td>${products[i].price.amount} ${products[i].price.unit}</td>
    <td>${q}</td>
    <td>${q * products[i].price.amount}</td>
  </tr>
      </table>
 
  `
 
}

let open = false
function showCart() {
 
      eCart.innerHTML = ``
      
}

function showProducts( list ){
    for(let i = 0; i < list.length; i++) {
        catalog.innerHTML += `
        <div class="product">
            <h2>${list[i].name}</h2>
            <div>${list[i].images}</div>
            <div>rate: ${list[i].rate}</div>
            <div>price: ${list[i].price.amount} ${list[i].price.unit} </div>
            <button onclick="addToCart(${i})">ADD to CART</button>
        </div>
        `
    }
}




showProducts( products )
