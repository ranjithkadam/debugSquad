
// const input=document.getElementById("input").value;
fetch("https://dummyjson.com/products")
.then( contant => contant.json())
.then(data => displayCarts(data.products) /*console.log(data)*/)
.catch(error => console.log("unable to fetch the api"))
const container = document.getElementById("container");


function displayCarts(data){
 data.forEach(value =>{
    container.innerHTML+=`
    <div id="allCarts${value.id}" class="h-70 w-100 py-3 border-stone-500 m-2 p-2 flex-shrink-1 rounded bg-stone-200 shadow flex justify-space-between align-center hover:translate-y-1 transition-all">
    <img src="${value.images}" alt="No Img" class="bg-white rounded w-30 ">
    <div class="ml-5"> 
    <h3 class="text-2xl font-bold">${value.title}</h3>
    <p class="font-bold">$ ${value.price}</p>
    <p class="text-xs mt-2">${value.description}</p><br>
    <p>Rating: ${value.rating}</p>
    </div>
    </div>
    `;
 })
}
