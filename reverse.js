let n = 12345
let reversed = 0

for(let i=n;i>0;i=Math.floor(i/10)){
       reversed = reversed*10 + i%10

}
console.log(reversed)