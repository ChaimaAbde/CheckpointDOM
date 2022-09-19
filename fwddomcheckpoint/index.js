//love
const like=document.getElementsByClassName("like");
//create table 
for(let i=0;i<like.length;i++){
    let oneLike=like[i];
    oneLike.addEventListener("click",()=>
    {
        if(oneLike.firstElementChild.style.color=="black"){
            oneLike.firstElementChild.style.color="red";
        }
        else{
                        oneLike.firstElementChild.style.color="black";

        }
    });
}
//button minus
const minus=document.getElementsByClassName("minus-btn");
for(let i=0;i<minus.length;i++){
    let oneminus=minus[i];
    oneminus.addEventListener("click",()=>{
        if( oneminus.nextElementSibling.value>0)
        oneminus.nextElementSibling.value--;
        total_one();
        total_three();
        total_tow();
        
        somme();

    }

)};
//button add
const ad=document.getElementsByClassName("plus-btn");
for(let i=0;i<ad.length;i++){
    let onead=ad[i];
    onead.addEventListener("click",()=>{
        onead.previousElementSibling.value++; 
        total_one();
        total_three();
        total_tow();
        somme();
        

    }
)};
//price
/*
var qua=document.getElementsByClassName("Quant");
var prix=document.getElementsByClassName("price");
for(let j=0;j<qua.length;j++){
for(let i=0;i<prix.length;i++){
   let oneprix=prix[i];
   oneprix.setAttribute("value",oneprix[i]*qua[j]);
}
}*/
function total_one(){
    let q_one=document.getElementById("q1");
let prix=document.getElementById("p1");
prix.innerText=Number(q_one.value)*1379;


}
function total_tow(){
    let q_one=document.getElementById("q2");
let prix=document.getElementById("p2");
prix.innerText=Number(q_one.value)*126;

}
function total_three(){
    let q_one=document.getElementById("q3");
let prix=document.getElementById("p3");
prix.innerText=Number(q_one.value)*500;


}

//delet
var ele=document.getElementsByClassName("Item");
var element=document.getElementsByClassName("delete");
for(let j=0;j<ele.length;j++){
for(let i=0;i<element.length;i++){
    let oneelement=element[i];
    oneelement.addEventListener("click",()=>{
        ele[j].remove();
        total_one();
        total_three();
        total_tow();
         somme();
        
    }
)};
}
//total 

function somme(){
var elem_1 = document.getElementById("p1").innerText;
var elem_2 = document.getElementById("p2").innerText;
var elem_3 = document.getElementById("p3").innerText;

let total=document.getElementById("finalPrice");
total.value=parseInt(elem_1)+parseInt(elem_2)+parseInt(elem_3);


}