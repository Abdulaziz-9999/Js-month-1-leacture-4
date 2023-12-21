  // task 1

// function get(a) {
//   if (a === 1) {
//     return 1;
//   } else {
//     return a % 2 === 1 ? a + get(a - 2) : get(a - 1);
//   }
// }
// console.log(get(5));
// console.log(get(8));
// console.log(get(1));

// task 2

// function get(m, n) {
//     if (m < n) {
//       return false;
//     } else if (m === n) {
//       return true;
//     } else {
//       return get(m - n, n);
//     }
//   }
//   console.log(get(10, 5));
//   console.log(get(15, 4));
//   console.log(get(12, 3));

// task 3

// task fibonacci

      //  function get(n){
      //   if(n<2){
      //     return n;
      //   }
      //   return get(n-1)+get(n-2)+1;
      // }
      // console.log(get(6));

// task 4

// function get(a){

// }
// console.log(get());


// function task5(a){
//     if(a == 0){
//         return 0
//     }
//     return a%10 + Math.floor(task(a/10))
// }
// console.log(task5(1101));
// console.log(task5(101));
// console.log(task5(1111));




// function task6(){
//     let cnt  = 0
//     return (b)=>{
//         return cnt += b
//     }
// }
// let result = task6()
// console.log(result(3));
// console.log(result(5));

// task 7

// function get(a){
// return function (b){
//   return (a+=b)/2;
// }
// }
// let c=get(0)
// console.log(c(10));
// console.log(c(15));


// function task8(a){
//     let i = 0
//     return ()=>{
//        return i+=a
//     }
// }
// let while = task8(2)
// console.log(while());
// console.log(while());


// task 9

// function get() {
//   let b = 0;
  
//   return function(a) {
//     if (a > b) {
//       b = a;
//     }
//     return b;
//   };
// }

// let  set = get();
// console.log(set(10));
// console.log(set(5));

  

// task 10

// function get(a) {
//     return function(b) {
//       return b % a === 0;
//     };
//   }
//   let  d = get(3);
//   console.log(d(9));
//   console.log(d(10));  

  

// let str = "my name is abdulaziz"
// let ret = str.split(" ")
// let res = str.toUpperCase(0);
// console.log(ret);


// function get(str) {
//   return str.at(0).toUpperCase() + str.slice(1);
// }
// console.log(get("hello my name"));




// function get(g) {
//   let a = g.split(" ");
//   for (let i = 0; i < a.length; i++) {
//     let w = a[i];
//     a[i] = w.charAt(0).toUpperCase() + w.slice(1);
//   }
//   return a.join(" ");
// }
// console.log(get("hello world"));
// console.log(get("my name is abdulaziz"));




// Task 1

// function concatHello(str) {
//     return "Hello".concat(' ', str)
// }
// console.log(concatHello("Gerald"));
// console.log(concatHello("Tiffany"));
// console.log(concatHello("Ed"));


// // Task 2

// function booling(str){

// return str.includes(' ')
// }
// console.log(booling("hello"));
// console.log(booling('hello, world'));
// console.log(booling(" "));

// // Task 4

// function tire(str){
//  let result = str.split("-")
//  return result.length
// }
// console.log(tire("buf-let"));
// console.log(tire("bue-tr-da"));
// console.log(tire("bu-ff-dsda-a-c-d"));


//    Task 5
// function joinDigtis(n) {
//         let res = ""
//         for (let i = 1; i <= n; i++) {
//             res+=i
//         }
    
//         return res.split("").join("-")
        
//     }
    
//     console.log(joinDigtis(4));
//     console.log(joinDigtis(11));
//     console.log(joinDigtis(15));


// function rev(a)
// {
//     let cnt="";
//     for (let i = a; i > 0; i = Math.floor(i / 10)) {
//         cnt += i % 10;
//     }
//     return cnt + a;
// }
// console.log(rev(123));
// console.log(rev(152));
// console.log(rev(123456789));

// let a = isNaN;

// console.log(typeof(a));