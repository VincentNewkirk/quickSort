var quickSort = function( arr ){
  var pivot = [];
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
  var completedSort = quickSort(partitionL).concat(pivot, quickSort(partitionR));
  return completedSort;

};

module.exports = quickSort;