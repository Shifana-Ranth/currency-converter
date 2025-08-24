const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1";

const dropdowns =document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromcurr=document.querySelector(".from select");
const tocurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");


for(let select of dropdowns){
    for(currcode in countryList){
        let newoption=document.createElement("option");
        newoption.innerText=currcode;
        newoption.value=currcode;
        if(select.name === "from" && currcode === "USD"){
            newoption.selected="selected";
        }
        else if(select.name === "to" && currcode === "INR"){
            newoption.selected="selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    });
}

const updateExchangeRate = async() =>{
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    if(amtval=== "" || amtval < 1){
        amtval=1;
        amount.value="1";
    }
    const endpoint = `currencies/${fromcurr.value.toLowerCase()}.json`;
    const urlPrimary = `${BASE_URL}/${endpoint}`;
    const urlFallback = `https://latest.currency-api.pages.dev/v1/${endpoint}`;

    try {
        let response = await fetch(urlPrimary);
        if (!response.ok) throw new Error("Primary API failed");
        var data = await response.json();
    } catch (e) {
        let response = await fetch(urlFallback);
        data = await response.json();
    }

    let rate = data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];
    let finalamount = amtval * rate;

    msg.innerText = `${amtval} ${fromcurr.value}  =  ${finalamount.toFixed(2)} ${tocurr.value}`;
}

const updateflag=(element)=>{
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;
};


btn.addEventListener("click",(evt) =>{
    evt.preventDefault();             //prevent page refresh
    updateExchangeRate();
});

window.addEventListener("load",()=>{
    updateExchangeRate();
})