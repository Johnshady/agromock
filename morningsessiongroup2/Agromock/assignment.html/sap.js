axios.get('https://tbhpwebdevapi.azurewebsites.net/api/Bonsai')

.then(res => {
    console.log(res.data); 
    document.getElementById("title").innerHTML = res.data[0].productTitle; 
    document.getElementById("price").innerHTML = "Price: N" + res.data[0].productPrice;
    document.getElementById("description").innerHTML = res.data[0].productDescription;


    document.getElementById("title2").innerHTML = res.data[1].productTitle; 
    document.getElementById("price2").innerHTML = "Price: N" + res.data[1].productPrice;
    document.getElementById("description2").innerHTML = res.data[1].productDescription;


    document.getElementById("title3").innerHTML = res.data[2].productTitle; 
    document.getElementById("price3").innerHTML = "Price: N" + res.data[2].productPrice;
    document.getElementById("description3").innerHTML = res.data[2].productDescription;
    
})
.then(err => console.log(err))