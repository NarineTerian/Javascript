//1.сделать функцию, которая принимает массив чисел, возвращает массив, где каждый элемент умножен на 10
//2.сделать функцию, которая принимает массив числел и возвращает массив числе,
// но при этом фильтрует их по четности. Возвращает только четные числа

let arr1 = [10, 20, 30, 40, 50]
arr1.forEach((elem) => console.log(elem * 10))

/*
const mapFn = (arr) => {
  let result = []

  for (let i = 0; i <= arr.length - 1; i++) {
    const current = arr(i)
    resultArr.push(current * 10)
  }
  return 
}
console.log(mapFn(1, 5))
*/

/*
const arr = [1, 2, 3, 4]
let result = arr.filter(elem => elem % 2 == 0);
  console.log(result);

  
  let result = arr.filter(function(elem) {
  	if (elem % 2 == 0) {
  		return true;
  	} else {
  		return false;
  	}
  });
  

   for (let i = 0; i < arr.length; i++;) {
      if((arr[i] % 2) === 0){
          arr[i];
        }
  };
*/
