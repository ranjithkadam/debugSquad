      let items=[
    {
       img:"https://oasis.opstatics.com/content/dam/oasis/page/2024/global/product/avalon/gray.png",
        name:"OnePlus Nord 4",
        price:36000,
        stock:"available",
        rating:4.5
    },
    
    {   
       img:"https://m.media-amazon.com/images/I/31eApLPASUL._SX342_SY445_QL70_FMwebp_.jpg",
        name:"Iphone 17",
        price:70000,
        stock:"available",
        rating:4.3
    },
    {
        img:"https://m.media-amazon.com/images/I/41CDymsLqvL._SY300_SX300_QL70_FMwebp_.jpg",
        name:"Samsung S24 Ultra",
        price:100000,
        stock:"Unavailable",
        rating:4.5
    },

     {   
       img:"https://m.media-amazon.com/images/I/61cNdwti0QL._SL1500_.jpg",
        name:"OnePlus 15",
        price:60000,
        stock:"available",
        rating:4.4
    },

     {   
       img:"https://m.media-amazon.com/images/I/31EcQWj4asL._SY300_SX300_QL70_FMwebp_.jpg",
        name:"IQOO 9",
        price:20000,
        stock:"Unavailable",
        rating:3.8
    },

     {   
       img:"https://m.media-amazon.com/images/I/51zH+47SppL._SX679_.jpg",
        name:"Samsung S24 FE",
        price:18000,
        stock:"available",
        rating:3.9
    },

     {   
       img:"https://m.media-amazon.com/images/I/41ptrrQH0SL._SY300_SX300_QL70_FMwebp_.jpg",
        name:"Vivo V60e 5G",
        price:35000,
        stock:"available",
        rating:4.0
    },

        {   
       img:"https://m.media-amazon.com/images/I/71hox+BTuKL._SX679_.jpg",
        name:"HP 15 Laptop",
        price:60000,
        stock:"available",
        rating:4.5
    },

        {   
       img:"https://m.media-amazon.com/images/I/715P4YWFq7L._SL1500_.jpg",
        name:"Assus Vivobook 15",
        price:48000,
        stock:"available",
        rating:3.8
    }
]

let cards= document.getElementById("cards")
for(let i=0; i<items.length; i++){
cards.innerHTML+=`
           <div class="card">
                <div class="img-div">
                    <img src="${items[i].img}"> 
                </div>
                <div class="img-content">
                     <h4>${items[i].name}</h4>
                     <p>Rs.${items[i].price}</p>
                     <p>${items[i].stock}</p>
                     <h4>Rating: ${items[i].rating}</h4> 
        </div>
    `;
    }

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

  document.getElementById("timer").innerText=`${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
}


const timer = setInterval(updateTimer, 1000);