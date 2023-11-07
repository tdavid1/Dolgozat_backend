import { Artwork } from "./Artwork.ts";

export class Statue  implements Artwork{
    //title : string ;
    //year : number ;
    //price : number;
    //heigt : number;
    
  constructor(public title: string,public year: number,public price : number,public heigt : number){
    //this.title = title;
    //this.year = year;
    //this.price = price;
    //this.heigt = heigt;
    let pattern = /[a-zA-Z, ]/;
    let pattern2 = /[1-9]/;
    let test = title.match(pattern);
    let test2 = year.toString().match(pattern2);
    let test3 = price.toString().match(pattern2);
    let test4 = heigt.toString().match(pattern2);
    if(title.trim()==''){
        throw new Error('Címet megadni kötelező');
    }
    else if(!test){
        throw new Error('Nem megfelelő a Cím');
    }
    else if(!test2){
        throw new Error('Az évnet megadni kötelező');
    }
    else if(year>2023){
        throw new Error('Az évnek kissebbnek kell lenni mint az aktuális évszámnak');
    }
    else if(!test3){
        throw new Error('Az árat megadni kötelező');
    }
    else if(price<1){
        throw new Error('Az árának nagyobbank kell lenni mint 1ft');
    }
    else if(!test4){
        throw new Error('A magaságot megadni kötelező');
    }
    else if(heigt<10){
        throw new Error('A magaságnak minimum 10cm kell hogy legyen');
    }
    }
}
