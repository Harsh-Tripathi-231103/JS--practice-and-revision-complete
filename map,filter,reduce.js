let arr =[1,2,3,4,5,6,7,8]
// filter
let filterArr = arr.filter((item)=>{
    return item%2==0
})
console.log(filterArr)

//reduce
let reduceArr = arr.reduce((pre,cur)=>{
    return pre+cur
},0)
console.log(reduceArr)

//map
let mapArr = arr.map((item)=>{
    return item*2
})
console.log(mapArr)
