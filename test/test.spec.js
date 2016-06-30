var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var mergeSort = require('./../js/script.js');

describe('Merge Sort', function () {
  it('Should exist', function () {
    expect(mergeSort).to.exist;
  });
  it('Should be a function', function () {
    expect(mergeSort).to.be.a('function');
  });

  describe('The Result', function(){
    var arr= [3,7,1,9,5,6,4,8,8,];
    it('Should sort the array', function () {
      expect(mergeSort(arr)).to.deep.equal([1,3,4,5,6,7,8,8,9]);
    });
  });
});