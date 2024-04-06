let bcrypt=require("bcryptjs")
let con=require("./config")
let hashPassword=(value)=>{
    let salt=10
    return new Promise((resolve,reject)=>{
        bcrypt.genSalt(salt).then(hash=>{
            bcrypt.hash(value,hash).then(hashValue=>{
                resolve(hashValue)
            })
        })
    })
}

const  findName=(arr,start,end,target)=>{
    let mid=Math.floor((start+end)/2)
    
      if(arr[arr.length-1].name===target){
         return (arr.length-1)
      }
      for(let i=mid;start<end;mid=Math.floor((start+end)/2)){
        if(arr[i].name===target){
          return  (i)
        }else if(target>arr[i]){
          start=mid
        }else{
          end=mid
        }
      }
    return  (-1)
  }

module.exports={hashPassword,findName}