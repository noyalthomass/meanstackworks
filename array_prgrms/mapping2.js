var arr=[1,2,3,4]  //sum=6 {2,4}  sum=5 {2,3}{1,4}   sum=7 {3,4}
var elem_pair=7;
for(let i=0;i<arr.length;i++){
    for (let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==elem_pair){
            console.log(`element pair ${arr[i]} ${arr[j]}`);
            break;
        }
    }
}