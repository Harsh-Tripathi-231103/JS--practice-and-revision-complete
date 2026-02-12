// let arr =[1, 2,3, 4]
// arr.forEach((a, b, c) => {    console.log(a, b, c)
// })


let obj={
    name:'zhangsan',
    age: 20,    
    class: '1'
}

for(let key in obj){
    console.log(key, obj[key])
}