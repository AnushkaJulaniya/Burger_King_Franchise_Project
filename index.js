const menu = document.getElementsByName("order");
const button = document.getElementById("orderButton");

const orderIdDiv = document.querySelector(".orderIdDiv");

function randomNum(){
    return Math.floor(Math.random() * 1000);
 }
function getRandomTime() {
    return Math.floor(Math.random() * 5000) + 2000;  
}

 button.addEventListener("click",()=>{
    const selectedItems = [];
   
    menu.forEach((menuItems)=>{
    if(menuItems.checked){
        selectedItems.push(menuItems.value);
    }
    });

    if(selectedItems.length === 0){
        alert("Please Chooose Food Item from Menu");
        return;
    }

const orderFoodImgDiv = document.querySelector(".orderFoodImgDiv");
const paraId = document.createElement("p");
paraId.classList.add("paraId");

button.disabled = true;
orderFoodImgDiv.style.display ="none";

 const promise = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve();
    } , getRandomTime());
})
//chaining
promise.then(() => {
    orderIdDiv.innerHTML = "";
    selectedItems.forEach((item) =>{
        switch (item) {
            case 'Burger':
                orderFoodImgDiv.src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60';
               
                orderFoodImgDiv.style.width = "300px";
                 orderFoodImgDiv.style.height = "300px";
               
                 paraId.innerText = `Order ID : ${randomNum()}`;
                orderIdDiv.append(paraId);
               
                break;
            case 'Fries':
                orderFoodImgDiv.src = 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60';
                
                orderFoodImgDiv.style.width = "300px";
                 orderFoodImgDiv.style.height = "300px";
                
                 paraId.innerText = `Order ID : ${randomNum()}`;
                orderIdDiv.append(paraId);
               
                break;
            case 'Drink':
                orderFoodImgDiv.src = 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60';
                
                orderFoodImgDiv.style.width = "300px";
                orderFoodImgDiv.style.height = "300px";

                paraId.innerText = `Order ID : ${randomNum()}`;
                orderIdDiv.append(paraId);
               
                break;
        }
        orderFoodImgDiv.style.display ="block";
    })
    button.disabled = "false";
   
})

});

 