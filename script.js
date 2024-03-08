let CartData = JSON.parse(localStorage.getItem("productdata"));
    if(CartData===null){
     CartData= []
    }
  
  
    displaycart(CartData);

    function displaycart(CartData) {
      document.getElementById("cont").innerHTML = null;
      

      for (let i = 0; i < CartData.length; i++) {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let img = document.createElement("img");
        img.setAttribute("src", CartData[i].images[0]);
        let title = document.createElement("h1");
        title.innerText = CartData[i].title;

        let price = document.createElement("h2");
        price.innerText = `${CartData[i].price} $`;

        let cat = document.createElement("p");
        cat.innerText = CartData[i].category;

        let des = document.createElement("p");
        des.innerText = CartData[i].description;

        let bra = document.createElement("p");
        bra.innerText = CartData[i].brand;
        let increament= document.createElement("button")
        increament.innerText ="+" 
        increament.addEventListener("click", function(){
            quantity.innerText++
            updatePrice(CartData[i].price, quantity)
            
        })
        let quantity= document.createElement("p")
        quantity.innerText= 0;
        

        let decrement= document.createElement("button")
        decrement.innerText ="-" 
        decrement.addEventListener("click", function(){
            if (quantity.innerText > 1) {
                quantity.innerText--
                updatePrice(CartData[i].price, quantity)
            }
    
        })

        let delbtn= document.createElement("button")
        delbtn.innerText= "Delete"
        delbtn.addEventListener("click", function(){
          let delcard=[]
          let newCart=[]
          for(let j=0; j < CartData.length; j++){
              if(i===j){
                delcard.push(CartData[j])
              }else{
                newCart.push(CartData[j])

              }

          }

         CartData = newCart
         displaycart(newCart)
         localStorage.setItem("productdata",JSON.stringify(CartData))

         console.log(newCart)

        })

        card.append(img, title, price, cat, des, bra, increament, quantity, decrement, delbtn);
        document.getElementById("cont").append(card);


        function updatePrice(){
        let totalPrice= Number(quantity.innerText) * CartData[i].price
        price.innerText = `${totalPrice} $`
        
        
       }
        
      }
       
     
    }