let num=prompt("enter number:");
let arr=num.split("").map(Number);
// console.log(arr);
let emp=[];
org=[];
dupli=[];
for(i of arr){
    if(!(emp.includes(i))){
        emp.push(i);
    }
}
// console.log(emp);
for(k of emp){
    let c=0;
    for(j of arr){
        if(k==j){
            c++;
        }
    }
    if(c==1){
        console.log(`${k}->${c}`);

    }
    else{
        console.log(`${k}->${c}`);
    }
}



