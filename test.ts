import m = require("./module");
class Personne {
    private nom;
    private prenom;
    constructor(nom:string,prenom:string) {
        this.nom=nom;
        this.prenom=prenom;
    }
    toString(){
        console.log("nom:"+this.nom+", prenom:"+this.prenom);
    }
}

class Etudiant extends Personne {
    private age;
    constructor(nom:string,prenom:string,age:number){
        super(nom,prenom);
        this.age=age;
    }
    toString(){
        super.toString();
        console.log("age:"+this.age);
    }
}

var etud=new Etudiant("AZIKI","Abdellatif",50);
etud.toString();

interface I1{
     a1:number;
     a2:string;
     f1(p1:string,p2:string);
}
interface I2{
    b1:number;
    b2:string;
    f2(p1:string,p2:string);
}

class A implements I1,I2 {
    b1: number;
    b2: string;
    f2(p1: string, p2: string) {
        throw new Error("Method not implemented.");
    }
    a1: number;
    a2: string;
    f1(p1: string, p2: string) {
        throw new Error("Method not implemented.");
    }
}

console.log(():string=>{
    return "abdellatif aziki";
});

console.log(m.y);

function f2<T>(p1:T,p2:T) {
    if (typeof(p1)=="string") {
        console.log("string :"+p1+","+p2);
    }else if(typeof(p1)=="number" && typeof(p2)=="number"){
        console.log("number :"+(p1+p2));
    }
}

f2<number>(5,7);
f2<string>("ab","az");