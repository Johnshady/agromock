axios.get('https://tbhpwebdevapi.azurewebsites.net/api/Bonsai')

.then(res => {
    console.log(res.data); 
    document.getElementById("title4").innerHTML = res.data[4].productTitle; 
    document.getElementById("price4").innerHTML = "Price: N" + res.data[4].productPrice;
    document.getElementById("description4").innerHTML = res.data[4].productDescription;


    document.getElementById("title5").innerHTML = res.data[5].productTitle; 
    document.getElementById("price5").innerHTML = "Price: N" + res.data[5].productPrice;
    document.getElementById("description5").innerHTML = res.data[5].productDescription;


    document.getElementById("title6").innerHTML = res.data[6].productTitle; 
    document.getElementById("price6").innerHTML = "Price: N" + res.data[6].productPrice;
    document.getElementById("description6").innerHTML = res.data[6].productDescription;

    document.getElementById("title7").innerHTML = res.data[7].productTitle; 
    document.getElementById("price7").innerHTML = "Price: N" + res.data[7].productPrice;
    document.getElementById("description7").innerHTML = res.data[7].productDescription;


    document.getElementById("title8").innerHTML = res.data[8].productTitle; 
    document.getElementById("price8").innerHTML = "Price: N" + res.data[8].productPrice;
    document.getElementById("description8").innerHTML = res.data[8].productDescription;


    document.getElementById("title9").innerHTML = res.data[9].productTitle; 
    document.getElementById("price9").innerHTML = "Price: N" + res.data[9].productPrice;
    document.getElementById("description9").innerHTML = res.data[9].productDescription;
    
})
.then(err => console.log(err))