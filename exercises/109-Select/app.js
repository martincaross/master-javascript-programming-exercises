// Write your function here
function select(arr,obj){

    let obj1 = {}
  
      for (let i = 0; i < arr.length ; i ++){
          if (obj[arr[i]] != undefined){
            obj1[arr[i]] = obj[arr[i]]
          }
      }
  
      return obj1
  
  }
  
  let arr = ['a', 'c', 'e'];
  let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
  let output = select(arr, obj);
  console.log(output); // --> { a: 1, c: 3 }