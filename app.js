 const newConfirm = document.querySelector('.new-Conf-data');
 const newDeath = document.querySelector('.new-death-data');
 const totalConfirm = document.querySelector('.total-conf-data');
 const TotalDeath = document.querySelector('.total-death-data');

const api ='https://api.covid19api.com/summary';
fetch(api)
.then (Response =>{
     return Response.json();
})
.then(data=>{
    console.log(data);
    const{NewConfirmed ,NewDeaths,TotalConfirmed,TotalDeaths} = data.Global;
       newConfirm.textContent=NewConfirmed;
       newDeath.textContent =NewDeaths;
       totalConfirm.textContent=TotalConfirmed;
       TotalDeath.textContent=TotalDeaths;

    

})