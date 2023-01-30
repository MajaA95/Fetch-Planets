const url = "https://swapi.dev/api/planets/?page=1"
let x = "";

addEventListener("click", function(){
    fetch(url)             
    .then(data =>{          
        data.json()         
        .then(parsedData=>{            
            console.log(parsedData);

            for(let element of parsedData.results){
              x+=`<tr><td> ${element.name}</td>`
              x+=`<td> ${element.population}</td>`
              x+=`<td> ${element.climate}</td>`
              x+=`<td> ${element.gravity}</td>`
            }
            x += `</tr>`

           document.getElementById("main").innerHTML=x;
          
                    })       
})
})
function myfunction(){    
  document.getElementById("displaytable").style.display = "none";   
}



