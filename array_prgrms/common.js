//print common elem [20,21]
arr1 = [10, 20, 21, 22]
arr2 = [11, 12, 20, 21]
//for (let num1 of arr1){
//  for(let num2 of arr2){
//      if (num1==num2){
//          console.log("common elements:",num1);
//      }
//   }
//}

//or

arr1.sort((no1, no2) => no1 - no2)
arr2.sort((no1, no2) => no1 - no2)

var pos1=0,pos2=0;

while((pos1<arr1.length) & (pos2<arr2.length)){
    if(arr1[pos1]==arr2[pos2]){
        console.log(arr1[pos1]);
        pos1++;
        pos2++
    }
    else if(arr1[pos1]<arr2[pos2]){
        pos1++
    }
    else  if(arr1[pos1]>arr2[pos2]){
        pos2++
    }
}
