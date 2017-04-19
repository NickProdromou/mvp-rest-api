import compare from '../../../writeDb/methods/compare'

describe('Compare function', () => {

    it('should check to see if 2 arrays have the same values, regardless of order', () => {
        const arr1 = ['here', 'are', 'some', 'words'];
        const arr2 = ['some', 'words', 'here', 'are'];
        expect(compare(arr1, arr2)).to.equal(true);
    });

    it('should return false if the arrays are different', () => {
        const arr1 = ['here', 'are', 'some', 'words'];
        const arr2 = ['some', 'words', 'bike', 'cat'];
        expect(compare(arr1, arr2)).to.equal(false);
    });

    it('should return false if the arrays are of different length', () => {
        const arr1 = ['here', 'are', 'some', 'words'];
        const arr2 = ['some', 'words', 'here', 'are', 'another', 'one'];
        expect(compare(arr1, arr2)).to.equal(false);
    });

    it('should throw TypeError if one or both arrays are not Arrays', () => {
        const notAnArray = '124';
        const anArray = ['124'];

        expect(() => {
            compare(notAnArray, anArray)
        }).to.throw(TypeError, 'One or both of the arguments provided are not arrays');

    });



});

