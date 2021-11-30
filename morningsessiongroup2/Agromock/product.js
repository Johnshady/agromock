axios.get('https://tbhpwebdevapi.azurewebsites.net/api/Bonsai')

.then(res => {
    console.log(res.data); 
    document.getElementById("title7").innerHTML = res.data[6].productTitle; 
    document.getElementById("price7").innerHTML = "Price: N" + res.data[6].productPrice;
    document.getElementById("description7").innerHTML = res.data[6].productDescription;
    document.getElementById("image7").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[6].productImage;


    document.getElementById("title8").innerHTML = res.data[7].productTitle; 
    document.getElementById("price8").innerHTML = "Price: N" + res.data[7].productPrice;
    document.getElementById("description8").innerHTML = res.data[7].productDescription;
    document.getElementById("image8").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[7].productImage;

    document.getElementById("title20").innerHTML = res.data[19].productTitle;
    document.getElementById("price20").innerHTML = "Price: N" + res.data[19].productPrice;
    document.getElementById("description20").innerHTML = res.data[19].productDescription;
    document.getElementById("image20").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[19].productImage;

    document.getElementById("title21").innerHTML = res.data[20].productTitle;
    document.getElementById("price21").innerHTML = "Price: N" + res.data[20].productPrice;
    document.getElementById("description21").innerHTML = res.data[20].productDescription;
    document.getElementById("image21").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[20].productImage;

    document.getElementById("title9").innerHTML = res.data[8].productTitle; 
    document.getElementById("price9").innerHTML = "Price: N" + res.data[8].productPrice;
    document.getElementById("description9").innerHTML = res.data[8].productDescription;
    document.getElementById("image9").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[8].productImage;
    
    document.getElementById("title10").innerHTML = res.data[9].productTitle;
    document.getElementById("price10").innerHTML = "Price: N" + res.data[9].productPrice;
    document.getElementById("description10").innerHTML = res.data[9].productDescription;
    document.getElementById("image10").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[9].productImage;

    document.getElementById("title11").innerHTML = res.data[10].productTitle;
    document.getElementById("price11").innerHTML = "Price: N" + res.data[10].productPrice;
    document.getElementById("description11").innerHTML = res.data[10].productDescription;
    document.getElementById("image11").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[10].productImage;

    document.getElementById("title12").innerHTML = res.data[11].productTitle;
    document.getElementById("price12").innerHTML = "Price: N" + res.data[11].productPrice;
    document.getElementById("description12").innerHTML = res.data[11].productDescription;
    document.getElementById("image12").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[11].productImage;

    document.getElementById("title13").innerHTML = res.data[12].productTitle;
    document.getElementById("price13").innerHTML = "Price: N" + res.data[12].productPrice;
    document.getElementById("description13").innerHTML = res.data[12].productDescription;
    document.getElementById("image13").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[12].productImage;

    document.getElementById("title14").innerHTML = res.data[13].productTitle;
    document.getElementById("price14").innerHTML = "Price: N" + res.data[13].productPrice;
    document.getElementById("description14").innerHTML = res.data[13].productDescription;
    document.getElementById("image14").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[13].productImage;

    document.getElementById("title15").innerHTML = res.data[14].productTitle;
    document.getElementById("price15").innerHTML = "Price: N" + res.data[14].productPrice;
    document.getElementById("description15").innerHTML = res.data[14].productDescription;
    document.getElementById("image15").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[14].productImage;

    document.getElementById("title16").innerHTML = res.data[15].productTitle;
    document.getElementById("price16").innerHTML = "Price: N" + res.data[15].productPrice;
    document.getElementById("description16").innerHTML = res.data[15].productDescription;
    document.getElementById("image16").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[15].productImage;

    document.getElementById("title17").innerHTML = res.data[16].productTitle;
    document.getElementById("price17").innerHTML = "Price: N" + res.data[16].productPrice;
    document.getElementById("description17").innerHTML = res.data[16].productDescription;
    document.getElementById("image17").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[16].productImage;

    document.getElementById("title18").innerHTML = res.data[17].productTitle;
    document.getElementById("price18").innerHTML = "Price: N" + res.data[17].productPrice;
    document.getElementById("description18").innerHTML = res.data[17].productDescription;
    document.getElementById("image18").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[17].productImage;

    document.getElementById("title19").innerHTML = res.data[18].productTitle;
    document.getElementById("price19").innerHTML = "Price: N" + res.data[18].productPrice;
    document.getElementById("description19").innerHTML = res.data[18].productDescription;
    document.getElementById("image19").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[18].productImage;

})
.then(err => console.log(err))