const product = [
    {
        id: 0,
        image: 'images/product1.jpg',
        title: 'Futbolka',
        price: 120,
    },
    {
        id: 1,
        image: 'images/product2.jpg',
        title: 'Air Pots pro',
        price: 100,
    },
    {
        id: 2,
        image: 'images/product3.jpg',
        title: 'Kurtka',
        price: 150,
    },
    {
        id: 3,
        image: 'images/product4.jpg',
        title: 'Butlka',
        price: 55,
    },
    {
        id: 4,
        image: 'images/product5.jpg',
        title: 'Achki',
        price: 80,
    },
    {
        id: 5,
        image: 'images/product6.jpg',
        title: 'Kepka',
        price: 25,
    },
    {
        id: 6,
        image: 'images/product7.jpg',
        title: 'Sumka',
        price: 120,
    },
    {
        id: 7,
        image: 'images/product8.jpg',
        title: 'Krasovka',
        price: 150,
    },
];

const categories = [...new Set(product.map((item)=>
     {return item}))]
     let i=0;
document.getElementById('root').innerHTML = categories.map((item) =>
{
    var {image, title, price} = item;
    return(
        `<div class="box">
            <div class="img-box">
                <img class="images" src=${image}></img>
            </div>
        <div class="bottom">
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart("+(i++)+")'>Add to cart </button>"+
        `</div>
        </div>`
    )
}).join('')


var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML = "$"+0+".00";
    }else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px'>$ ${price}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></div>"
            );
        }).join('');
    }
}