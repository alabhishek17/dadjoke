let tellBtn=document.getElementById("tellmeBtn")
let addjoke=document.getElementById("joke")
 
tellBtn.addEventListener("click",displayJoke);


//  function displayJoke(){
//     addjoke.innerText="";
//     async function ajay(){
//         let res=await fetch("https://api.api-ninjas.com/v1/dadjokes ",{
//             method:'GET',
//             headers: { 'X-Api-Key': 'l+o5ntpQnPnG+MICaGedhA==OZB7KwbAvGGoyllK' },
//             ContentType:"application/json"
    
//         });
        
//         let data=await  res.json();
//         console.log(data);
//         const p=document.createElement("p");
//         p=data[0].joke;
//         console.log(p);
//         // let p=data.data[0].joke;
//         addjoke.innerText=p;
      
// }

// // console.log(p);
// // async function jokeget(){
// //     let joke1=await fetch(`https://api.api-ninjas.com/v1/dadjokes`);
// //     let answ= await joke1.json();
// //     addjoke.innerHTML=answ[0].joke;
// // }
// // jokeget();
// ajay();
//  }


async function displayJoke(){
    try{

         addjoke.innerText="updating..."
         tellBtn.disabled=true;
         tellBtn.innerText="loading...!!!"

        let response=await fetch(`https://api.api-ninjas.com/v1/dadjokes`,{
            method:'GET',
            headers:{'X-Api-Key': 'l+o5ntpQnPnG+MICaGedhA==OZB7KwbAvGGoyllK'},
           contentType:'application/json'
        });
        let data=await response.json();
        addjoke.innerText=data[0].joke;
        tellBtn.disabled=false;
        tellBtn.innerText="tell me joke";
    }
    catch(error){
        addjoke.innerText=`Error${error}`;
        tellBtn.innerText="tell me joke";
    }
}


 