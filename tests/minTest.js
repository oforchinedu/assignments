(function() {
  'use strict';

  var findMinMax = require('../app/minmax.js').findMinMax;

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [2,10] for [10, 6, 8, 4, 2]', function () {
        expect(findMinMax([10, 6, 8, 4, 2])).toEqual([2, 10]);
      });

      it('should return [2,10] for [2,4,6,8,10]', function () {
        expect(findMinMax([2,4,6,8,10])).toEqual([2,10]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [1, 3] for [5, 10, 15, 1, 20, 25, 3]', function () {
        expect(findMinMax([5, 10, 15, 1, 20, 25, 3])).toEqual([1, 25]);
      });

      it('should return [10, 20] for [20, 10]', function () {
        expect(findMinMax([20, 10])).toEqual([10, 20]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [1, 100] for [2,99,55,100,56,76,1,66]', function () {
        expect(findMinMax([2,99,55,100,56,76,1,66])).toEqual([1, 100]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [11] for [11, 11, 11, 11]', function () {
        expect(findMinMax([11, 11, 11, 11])).toEqual([11]);
      });
    });

  });

})();