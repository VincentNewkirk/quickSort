var partition = function( arr ){
  var pivot = [];
  var counter;
  var partitionL;
  var partitionR;
  if(arr.length <= 1){
    return arr;
  }
  pivot.push(arr.pop());

  partitionL = arr.filter( function( element ) {
    return element <= pivot;
  });
  partitionR = arr.filter( function( element ) {
    return element > pivot;
  });
  var completedSort = partition(partitionL).concat(pivot, partition(partitionR));
  return completedSort;

};

module.exports = partition;