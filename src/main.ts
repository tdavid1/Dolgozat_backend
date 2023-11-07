import {Statue} from './Statue.ts'

const szobrok: Statue[] =[];
let osszar = 0;
function adatfelvetel(){
  try{
    const title =(document.getElementById("title") as HTMLInputElement).value;
    const year = parseInt((document.getElementById("year") as HTMLInputElement).value);
    const price = parseInt((document.getElementById("price") as HTMLInputElement).value);
    const heigt = parseInt((document.getElementById("heigt") as HTMLInputElement).value);
    const Szobor = new Statue(title,year,price,heigt);
    szobrok.push(Szobor);

    document.getElementById("errormessage")!.textContent ="";
    (document.getElementById("title") as HTMLInputElement).value = "";
    (document.getElementById("year") as HTMLInputElement).value = "";
    (document.getElementById("price") as HTMLInputElement).value = "";
    (document.getElementById("heigt") as HTMLInputElement).value = "";
  }
  catch(e){
    if(e instanceof Error){
      document.getElementById("errormessage")!.textContent = e.message;
    }
  }
  for(let item of szobrok){
    osszar= osszar+item.price;
  }
  document.getElementById("osszar")!.textContent = osszar.toString()+"FT";
  document.getElementById("darabszam")!.textContent = szobrok.length.toString()+"DB";
  console.log(szobrok);
}
function init(){
  document.getElementById("gomb")!.addEventListener("click",adatfelvetel);
}
document.addEventListener("DOMContentLoaded",init);