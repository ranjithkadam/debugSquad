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
    stock: "Unavailable",
    rating: 4.5,
    id:3
  },

  {
    img: "https://m.media-amazon.com/images/I/61cNdwti0QL._SL1500_.jpg",
    name: "OnePlus 15",
    price: 60000,
    stock: "available",
    rating: 4.4,
    id:4
  },

  {
    img: "https://m.media-amazon.com/images/I/31EcQWj4asL._SY300_SX300_QL70_FMwebp_.jpg",
    name: "IQOO 9",
    price: 20000,
    stock: "Unavailable",
    rating: 3.8,
    id:5
  },

  {
    img: "https://m.media-amazon.com/images/I/51zH+47SppL._SX679_.jpg",
    name: "Samsung S24 FE",
    price: 18000,
    stock: "available",
    rating: 3.9,
    id:6
  },

  {
    img: "https://m.media-amazon.com/images/I/41ptrrQH0SL._SY300_SX300_QL70_FMwebp_.jpg",
    name: "Vivo V60e 5G",
    price: 35000,
    stock: "available",
    rating: 4.0,
    id:7
  },

  {
    img: "https://m.media-amazon.com/images/I/71hox+BTuKL._SX679_.jpg",
    name: "HP 15 Laptop",
    price: 60000,
    stock: "available",
    rating: 4.5,
    id:8
  },

  {
    img: "https://m.media-amazon.com/images/I/715P4YWFq7L._SL1500_.jpg",
    name: "Assus Vivobook 15",
    price: 48000,
    stock: "available",
    rating: 3.8,
    id:9
  }
];

let cards = document.getElementById("cards")
cards.innerHTML=""
for (let i = 0; i < items.length; i++) {
  cards.innerHTML += `
           <div class="card">
                <div class="img-div">
                    <img src="${items[i].img}"> 
                </div>
                <div class="img-content">
                     <h4>${items[i].name}</h4>
                     <p>Rs.${items[i].price}</p>
                     <p>${items[i].stock}</p>
                    <div>
                     <i class="fa-solid fa-star" id="s1" onclick="rate(1)"></i> 
                     <i class="fa-solid fa-star" id="s2" onclick="rate(2)"></i> 
                     <i class="fa-solid fa-star" id="s3" onclick="rate(3)"></i> 
                     <i class="fa-solid fa-star" id="s4" onclick="rate(4)"></i> 
                     <i class="fa-solid fa-star" id="s5" onclick="rate(5)"></i> 
                     </div> 
                     
                     <button id="addCart" onclick="addToCart(${items[i].id})">Add to Cart</button>
        </div> `;
}
// star rating...

     function rate(value){
             for(let i=1;i<=5;i++){
            document.getElementById("s"+i).style.color="rgb(104, 102, 102)";
            }

            for(let i=1; i<=value; i++){
               document.getElementById("s"+i).style.color="gold";
            }
               }
               

// =================

//Timing banner
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
//========================================================================

// Add to Cart Function

let addCartArr = [];
function addToCart(id) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id == id) {
      addCartArr.push(items[i].name);
      addCartArr.push(items[i].price);
    }
  }
console.log(addCartArr);
   document.getElementById("table").innerHTML+=`<tr>
  <td>${addCartArr[0]}</td>
  <td>${addCartArr[1]}</td>
   
   </tr>`;

  // document.getElementById("table").innerText+=addCartArr;

  // let c=document.getElementById("table");
  //  for(let i=0;i<=addCartArr.length;i++){
  // c.innerHTML= `
  // <tr>
  // <td>${addCartArr[0]}</td>
  // <td>${addCartArr[1]}</td>
   
  // </tr>
  // `;

  // }
}

 