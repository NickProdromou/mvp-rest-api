import setBaseQuery from '../../lib/app/methods/setBaseQuery';

describe('setBaseQuery method', () => {

    it('should set the query for the route based on the routeName and params passed', () => {
        const expectedResult = { short_name: 'webstorm' };
        expect(setBaseQuery('programs',{program: 'webstorm'})).to.deep.equal(expectedResult);
    });

     it('should return undefined if the params.program is "all" ', () => {
        const expectedResult = undefined;
        expect(setBaseQuery('programs',{program: 'all'})).to.deep.equal(expectedResult);
    });

});
