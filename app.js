let menulist = document.querySelector(`#menu`);
let orderlist = document.querySelector(`#orders`);
let discount = document.getElementById(`#Discount`);
let subtotal = document.getElementById(`#Subtotal`);
let itemnumbers = document.getElementById(`#itemnumber`);

let menu = [{
    name: "Orange Jucie",
    image: "img/bevarage.jpg",
    price: 250.0,
    rest: "30 jugs available"
},
{
    name: "Chilli Burger",
    image: "img/burger.jpg",
    price: 300.0,
    rest: "50 Burgers available"
},
{
    name: "Brined Southern Fried Chicken",
    image: "img/chiken.jpg",
    price: 400.0,
    rest: "40 legs available"
},
{
    name: "cheese pasta",
    image: "img/pasta.jpg",
    price: 500.0,
    rest: "10 Boxes available"
},
{
    name: "Photato fries",
    image: "img/fries.jpg",
    price: 540.0,
    rest: "Unlimited available"
},
{
    name: "Chicken submarine",
    image: "img/submarine.jpg",
    price: 300.00,
    rest: "70 submarins available"
},
{
    name: "Cocacola Buddy",
    image: "img/cocacola.jpg",
    price: 150.0,
    rest: "100  Buddies available"
},
{
    name: "Choclate Muffin",
    image: "img/muffin.jpg",
    price: 250.0,
    rest: "50 Muffins available"
},
{
    name: "Devil Crab",
    image: "img/crab.jpg",
    price: 850.0,
    rest: "75 Plates available"
}
]

menu.forEach((element,index) => {
    let newelement = ``;
    newelement = `
                
                 <div class="col-md-4" id="foods">
                                    <div class="card bg-dark text-light mb-4">
                                        <img src="${element.image}" class="card-img-top" alt="One Pot Chicken Biryani">
                                        <div class="card-body">
                                            <h5 class="card-title">${element.name}</h5>
                                            <h3 id="icon">Rs.${element.price} <i class="bi bi-cart-plus" id="${index}" onclick="ordernow(this.id)"></i></h3>
                                            <p class="card-text">${element.rest} </p>
                                        </div>
                                    </div>
                                </div>
                                </div>


    `
    menulist.innerHTML += newelement;

})

let orders = [];
let number =0;
function ordernow(index){
    orders.push(menu[index]);
    orderlist.innerHTML="";
    orders.forEach((element,index) => {
        let neworder =``;
        neworder = `
              <a href="#" class="list-group-item list-group-item-action bg-dark text-light">
                            <div class="d-flex justify-content-between">
                                <span>${orders[index].name}</span>
                                <span id="delete">Rs.${orders[index].price} <i class="bi bi-x-circle" id="${index}" onclick="removeitem(this.id)"></i></span>
                            </div>
                        </a>

        `
        orderlist.innerHTML += neworder;
    })
    cashcalc();
}
function removeitem(index){
    orders.splice(index,1);
    orderlist.innerHTML="";
    orders.forEach((element,index) => {
        let neworder =``;
        neworder = `
              <a href="#" class="list-group-item list-group-item-action bg-dark text-light">
                            <div class="d-flex justify-content-between">
                                <span>${orders[index].name}</span>
                                <span id="delete">${orders[index].price} <i class="bi bi-x-circle" id="${index}" onclick="removeitem(this.id)"></i></span>
                            </div>
                        </a>

        `
        orderlist.innerHTML += neworder;
    })
    cashcalc();
}
function cashcalc(){
    let totalcash=0;
    orders.forEach(element =>{
        totalcash =totalcash+element.price;
    });
    Discount.innerHTML =`Rs.`+(totalcash*10/100)+`(10%)`;
    Subtotal.innerHTML =`Rs.`+(totalcash-(totalcash*10/100));
    itemnumber.innerHTML= (orders.length)+` items`;
}