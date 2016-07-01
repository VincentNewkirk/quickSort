var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var quickSort = require('./../js/script.js');

describe('Quick Sort', function () {
  it('Should exist', function () {
    expect(quickSort).to.exist;
  });
  it('Should be a function', function () {
    expect(quickSort).to.be.a('function');
  });

  describe('The Result', function(){
    var arr= [3,7,1,9,5,6,4,8,8,];
    var arr2 = [5,0,0,4,4,5,5,6,6,1,1,29,20,3,65];
    it('Should sort the array', function () {
      expect(quickSort(arr)).to.deep.equal([1,3,4,5,6,7,8,8,9]);
      expect(quickSort(arr2)).to.deep.equal([0,0,1,1,3,4,4,5,5,5,6,6,20,29,65]);
      console.log(arr2);
      console.log(quickSort(arr2));
    });
  });
});