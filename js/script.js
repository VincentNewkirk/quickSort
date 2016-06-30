var partition = function( arr ){
  var pivot;
  var counter;
  var partitionL;
  var partitionR;
  if(arr.length <= 1){
    return arr;
  }
  pivot = arr.pop();

  partitionL = arr.filter( function( element ) {
    return element <= pivot;
  });
  partitionR = arr.filter( function( element ) {
    return element > pivot;
  });
  console.log(partitionL, 'L');
  console.log(partitionR, 'R');
  var completedSort = partition(partitionL) + pivot + partition(partitionR);
  var answer = completedSort.split();
  return answer;

};
var someArr = [3,7,1,9,5,8,6,4,7,8,9,2,5,7,3,2];
console.log(partition(someArr));

module.exports = quickSort;