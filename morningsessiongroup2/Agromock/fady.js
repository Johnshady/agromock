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

    document.getElementById("title4").innerHTML = res.data[3].productTitle; 
    document.getElementById("price4").innerHTML = "Price: N" + res.data[3].productPrice;
    document.getElementById("description4").innerHTML = res.data[3].productDescription;

    document.getElementById("title5").innerHTML = res.data[4].productTitle; 
    document.getElementById("price5").innerHTML = "Price: N" + res.data[4].productPrice;
    document.getElementById("description5").innerHTML = res.data[4].productDescription;

    document.getElementById("title6").innerHTML = res.data[5].productTitle; 
    document.getElementById("price6").innerHTML = "Price: N" + res.data[5].productPrice;
    document.getElementById("description6").innerHTML = res.data[5].productDescription;

    document.getElementById("title7").innerHTML = res.data[6].productTitle; 
    document.getElementById("price7").innerHTML = "Price: N" + res.data[6].productPrice;
    document.getElementById("description7").innerHTML = res.data[6].productDescription;

    document.getElementById("title8").innerHTML = res.data[7].productTitle; 
    document.getElementById("price8").innerHTML = "Price: N" + res.data[7].productPrice;
    document.getElementById("description8").innerHTML = res.data[7].productDescription;

    document.getElementById("title9").innerHTML = res.data[8].productTitle; 
    document.getElementById("price9").innerHTML = "Price: N" + res.data[8].productPrice;
    document.getElementById("description9").innerHTML = res.data[8].productDescription;

    document.getElementById("title10").innerHTML = res.data[9].productTitle; 
    document.getElementById("price10").innerHTML = "Price: N" + res.data[9].productPrice;
    document.getElementById("description10").innerHTML = res.data[9].productDescription;

    document.getElementById("title11").innerHTML = res.data[10].productTitle; 
    document.getElementById("price11").innerHTML = "Price: N" + res.data[10].productPrice;
    document.getElementById("description11").innerHTML = res.data[10].productDescription;

    document.getElementById("title12").innerHTML = res.data[11].productTitle; 
    document.getElementById("price12").innerHTML = "Price: N" + res.data[11].productPrice;
    document.getElementById("description12").innerHTML = res.data[11].productDescription;

    document.getElementById("title13").innerHTML = res.data[12].productTitle; 
    document.getElementById("price13").innerHTML = "Price: N" + res.data[12].productPrice;
    document.getElementById("description13").innerHTML = res.data[12].productDescription;

    document.getElementById("title14").innerHTML = res.data[13].productTitle; 
    document.getElementById("price14").innerHTML = "Price: N" + res.data[13].productPrice;
    document.getElementById("description14").innerHTML = res.data[13].productDescription;

    document.getElementById("title15").innerHTML = res.data[14].productTitle; 
    document.getElementById("price15").innerHTML = "Price: N" + res.data[14].productPrice;
    document.getElementById("description15").innerHTML = res.data[14].productDescription;

    document.getElementById("title16").innerHTML = res.data[15].productTitle; 
    document.getElementById("price16").innerHTML = "Price: N" + res.data[15].productPrice;
    document.getElementById("description16").innerHTML = res.data[15].productDescription;

    document.getElementById("title17").innerHTML = res.data[16].productTitle; 
    document.getElementById("price17").innerHTML = "Price: N" + res.data[16].productPrice;
    document.getElementById("description17").innerHTML = res.data[16].productDescription;

    document.getElementById("title18").innerHTML = res.data[17].productTitle; 
    document.getElementById("price18").innerHTML = "Price: N" + res.data[17].productPrice;
    document.getElementById("description18").innerHTML = res.data[17].productDescription;

    document.getElementById("title19").innerHTML = res.data[18].productTitle; 
    document.getElementById("price19").innerHTML = "Price: N" + res.data[18].productPrice;
    document.getElementById("description19").innerHTML = res.data[18].productDescription;

    document.getElementById("title20").innerHTML = res.data[19].productTitle; 
    document.getElementById("price20").innerHTML = "Price: N" + res.data[19].productPrice;
    document.getElementById("description20").innerHTML = res.data[19].productDescription;

    document.getElementById("title21").innerHTML = res.data[20].productTitle; 
    document.getElementById("price21").innerHTML = "Price: N" + res.data[20].productPrice;
    document.getElementById("description21").innerHTML = res.data[20].productDescription;

    document.getElementById("title22").innerHTML = res.data[21].productTitle; 
    document.getElementById("price22").innerHTML = "Price: N" + res.data[21].productPrice;
    document.getElementById("description22").innerHTML = res.data[21].productDescription;

    document.getElementById("title23").innerHTML = res.data[22].productTitle; 
    document.getElementById("price23").innerHTML = "Price: N" + res.data[22].productPrice;
    document.getElementById("description23").innerHTML = res.data[22].productDescription;

    document.getElementById("title24").innerHTML = res.data[23].productTitle; 
    document.getElementById("price24").innerHTML = "Price: N" + res.data[23].productPrice;
    document.getElementById("description24").innerHTML = res.data[23].productDescription;

    document.getElementById("title25").innerHTML = res.data[24].productTitle; 
    document.getElementById("price25").innerHTML = "Price: N" + res.data[24].productPrice;
    document.getElementById("description25").innerHTML = res.data[24].productDescription;

    document.getElementById("title26").innerHTML = res.data[25].productTitle; 
    document.getElementById("price26").innerHTML = "Price: N" + res.data[25].productPrice;
    document.getElementById("description26").innerHTML = res.data[25].productDescription;

    document.getElementById("title27").innerHTML = res.data[26].productTitle; 
    document.getElementById("price27").innerHTML = "Price: N" + res.data[26].productPrice;
    document.getElementById("description27").innerHTML = res.data[26].productDescription;
    
})
.then(err => console.log(err))