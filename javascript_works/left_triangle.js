let n=5;
let str="";
for(let i=1;i<=n;i++) {

    for (let j=0;j<n-i;j++ ){
        str+="";
    }

    for(let k=0;k<i;k++) {
        str+="*";
    }
    str+="\n";
}
console.log(str);