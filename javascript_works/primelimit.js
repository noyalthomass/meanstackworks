var low=5,upp=17;
for(let i=low;i<=upp;i++){
    let flag=0;

    for (let j=2;j<i;j++) {

        if(i%j==0) {
            flag=1;
            break;
        }
    }
    if (flag==0 && i>1) {
        console.log(i);
    }
}