
const md1 = document.createElement("div");
document.body.append(md1);
md1.id='maindiv';
const p1=document.createElement("p");
const h1 =document.createElement('h1');
const h2 =document.createElement('h2');

const d1 =document.createElement("div");
md1.append(d1);
md1.append(p1,h1,h2);
var newd=[];
d1.id="div1";
// api url
const api_url = 
'https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json';
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
     data = await response.json();
     show (data);
}

getapi(api_url);


function show(data)
{
 newd=data;
 newd.push(data);
 
 newd.forEach(pg=>{
    const p0=document.createElement("a");
    p0.innerHTML=pg.id;
    p0.setAttribute('href','#');
    p0.setAttribute('data-nuj',pg.id);
    p0.addEventListener('click',setnum);
    d1.append(p0);
    
   })

}

function setnum()
 {
   
   theNum = this.getAttribute("data-nuj");
   p1.innerText="ID:" + newd[theNum-1].id;
   h1.innerText="Name:"+newd[theNum-1].name;
   h2.innerText="email:"+newd[theNum-1].email;
  

 }



