let arr=[1,4,1,6];
console.log(arr);
let emp=[];
org=[];
dupli=[];
for(i of arr){
    if(!(emp.includes(i))){
        emp.push(i);
    }
}
console.log(emp);
for(k of emp){
    let c=0;
    for(j of arr){
        if(k==j){
            c++;
        }
    }
    if(c==1){
        org.push(k);

    }
    else{
        dupli.push(k);
    }
}

let resorg=(org.length>1)?`unique values are: ${org}`:`unique value is: ${org}`;
let resdup=(dupli.length>1)?`duplicate values are: ${dupli}`:`duplicate value is: ${dupli}`;
console.log(resorg);
console.log(resdup);

