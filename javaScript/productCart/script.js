// Cart Item List
let items = [
  {
    img: "https://oasis.opstatics.com/content/dam/oasis/page/2024/global/product/avalon/gray.png",
    name: "OnePlus Nord 4",
    price: 36000,
    stock: "available",
    rating: 4.5,
    id: 1
  },

  {
    img: "https://m.media-amazon.com/images/I/31eApLPASUL._SX342_SY445_QL70_FMwebp_.jpg",
    name: "Iphone 17",
    price: 70000,
    stock: "available",
    rating: 4.3,
    id: 2
  },
  {
    img: "https://m.media-amazon.com/images/I/41CDymsLqvL._SY300_SX300_QL70_FMwebp_.jpg",
    name: "Samsung S24 Ultra",
    price: 100000,
    stock: "available",
    rating: 4.5,
    id: 3
  },

  {
    img: "https://m.media-amazon.com/images/I/61cNdwti0QL._SL1500_.jpg",
    name: "OnePlus 15",
    price: 60000,
    stock: "available",
    rating: 4.4,
    id: 4
  },

  {
    img: "https://m.media-amazon.com/images/I/31EcQWj4asL._SY300_SX300_QL70_FMwebp_.jpg",
    name: "IQOO 9",
    price: 20000,
    stock: "available",
    rating: 3.8,
    id: 5
  },

  {
    img: "https://m.media-amazon.com/images/I/51zH+47SppL._SX679_.jpg",
    name: "Samsung S24 FE",
    price: 18000,
    stock: "available",
    rating: 3.9,
    id: 6
  },

  {
    img: "https://m.media-amazon.com/images/I/41ptrrQH0SL._SY300_SX300_QL70_FMwebp_.jpg",
    name: "Vivo V60e 5G",
    price: 35000,
    stock: "unavailable",
    rating: 4.0,
    id: 7
  },

  {
    img: "https://m.media-amazon.com/images/I/71hox+BTuKL._SX679_.jpg",
    name: "HP 15 Laptop",
    price: 60000,
    stock: "available",
    rating: 4.5,
    id: 8
  },

  {
    img: "https://m.media-amazon.com/images/I/715P4YWFq7L._SL1500_.jpg",
    name: "Assus Vivobook 15",
    price: 48000,
    stock: "unavailable",
    rating: 3.8,
    id: 9
  }
];

// Retrieving the Products
let cards = document.getElementById("cards")
cards.innerHTML = ""
for (let i = 0; i < items.length; i++) {
  cards.innerHTML += `
           <div id="cart" class="card bg-white w-[30%] h-60 shadow rounded flex items-center hover:scale-105  transition-all">
                <div class="img-div w-[60%]">
                    <img src="${items[i].img}" alt="pic" class="w-[100%] h-[100%]"> 
                </div>

                <div class="img-content">
                     <h4 class= "font-semibold">${items[i].name}</h4>
                     <p>Rs.${items[i].price}</p>
                     <p>${items[i].stock}</p>
                
                    <div>
                     <i class="fa-solid fa-star text-stone-300" id="s1-${i}" onclick="rate(${i},1)"></i> 
                     <i class="fa-solid fa-star text-stone-300" id="s2-${i}" onclick="rate(${i},2)"></i> 
                     <i class="fa-solid fa-star text-stone-300" id="s3-${i}" onclick="rate(${i},3)"></i> 
                     <i class="fa-solid fa-star text-stone-300" id="s4-${i}" onclick="rate(${i},4)"></i> 
                     <i class="fa-solid fa-star text-stone-300" id="s5-${i}" onclick="rate(${i},5)"></i> 
                     </div> 
                     <br>
                     <button id="addCart" onclick="addToCart(${items[i].id})" class="bg-black text-white px-3 py-1 rounded active:bg-yellow-500 cursor-pointer">Add to Cart</button>
                </div> </div>` ;

}
// ================= Star Rating function ================

function rate(cardIndex, value) {
  for (let i = 1; i <= 5; i++) {
    document.getElementById(`s${i}-${cardIndex}`).style.color = "rgba(185, 180, 180, 1)";
  }

  for (let i = 1; i <= value; i++) {
    document.getElementById(`s${i}-${cardIndex}`).style.color = "gold";
  }
}

// =================Timing banner Function ===============

function timer() {
  const offerStartTime = new Date();
  offerStartTime.setDate(offerStartTime.getDate() + 3);
  function updateTimer() {
    const now = new Date();
    const diff = offerStartTime - now;
    if (diff <= 0) {
      clearInterval(timer);
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById("timer").innerText = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
  }
  const timer = setInterval(updateTimer, 1000);
}
timer();

//============== Add toCart Function ====================
var addCartArr = [];
var total = 0;
var quantity = 0;
function addToCart(id) {

  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      if (items[i].stock != "unavailable") {
        selectedItem = items[i];
        if (!(addCartArr.includes(selectedItem))) {
          addCartArr.push(selectedItem);
          console.log(selectedItem);
          total += items[i].price;
          displayAddedCarts();

        }
        else if(addCartArr.includes(selectedItem)) {
          alert("This Product Already Added !");
          addCartArr.push(selectedItem);
          console.log(selectedItem);
          total += items[i].price;
          displayAddedCarts();
        }
      }
      else {
        alert("Product Unavailable..!");
      }

    }

    document.getElementById("total").innerText = `Total : ${total} /-`;
  }
}

//================ Dispaly cart items:==================
let count=1;
function displayAddedCarts() {
  c = document.getElementById("table");
  c.onload=function(){
    alert("please wait");
  }
 
  c.innerHTML += `
        <tr class="border mx-100 w-100 text-center uniqueCart" id="uniqueCart-${count}">
          
          <td>${selectedItem.name}</td>
          <td>${selectedItem.price}</td>
          <td><button onclick="removeProduct(${count}, ${selectedItem.price})" class="border px-1 my-1 bg-yellow-500 text-black rounded hover:cursor-pointer"> remove </button></td>

        </tr>`;
        count++;
}

//==========Delete Item From Cart Function===========

function removeProduct(count, price) {

   document.getElementById(`uniqueCart-${count}`).style.display="none";
   total-=price;
   document.getElementById("total").innerText = `Total : ${total} /-`;
}

//======= Courosole===========
function courosole() {
  let c_imgs = [
    { img: "https://static.vecteezy.com/system/resources/thumbnails/001/925/528/small_2x/black-friday-sale-banner-or-promotion-on-dark-background-online-shopping-store-with-mobile-credit-cards-and-shop-elements-illustration-vector.jpg" },
    { img: "https://img.freepik.com/free-psd/new-smartphone-social-media-cover-design-template_47987-25433.jpg?semt=ais_hybrid&w=740&q=80" },
    { img: "https://img.freepik.com/premium-psd/banner-black-friday-portuguese-3d-render-marketing-campaign-brazil_363450-5709.jpg?semt=ais_hybrid&w=740&q=80" }]
  let courosole = document.getElementById("courosole");

  let count = 0;
  setInterval(function inc() {
    
    if (count <= 2) {
      courosole.innerHTML = `<img src="${c_imgs[count].img}" class="h-[100%] w-[100%]">`;
      count += 1;
    }
    else {
      count = 0;
    }
  }, 2000);
}
courosole();

// ===========Greeting Funtion==========
function greet() {
  let date = new Date();
  let session = date.getHours();
  let morning = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let afternoon = [12, 13, 14, 15, 16];
  // let evening = [17, 18, 19, 20, 21, 22,23];

  let name = localStorage.getItem("name").toUpperCase();

  if (morning.includes(session)) {
    console.log("Morning");
    document.getElementById("helloGreet").innerText = `Good Morning ${name} !`;
  }

  else if (afternoon.includes(session)) {
    console.log("Afternoon");
    document.getElementById("helloGreet").innerText = `Good Afternoon ${name} !`;
  }

  else {
    // else if (evening.includes(session)) {
    console.log("evening");
    document.getElementById("helloGreet").innerText = `Good Evening ${name} !`;
  }
}
greet();

//========== Dark / white Theme Function +===========

function theme() {
  let body = document.getElementById("body");
  body.classList.toggle("bg-stone-100");
  body.classList.toggle("bg-black");
  body.classList.toggle("text-white");
  document.getElementById("header").classList.toggle("bg-white");
}