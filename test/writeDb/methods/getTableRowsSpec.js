import getTableRows from  '../../../writeDb/methods/getTableRows';
import showTablesMock from '../../mocks/showTables'

describe('getTableRows function', () => {

    it('should return an array of filtered tables based on a mapping', () => {
        const expected = ['description','category', 'win_key', 'mac_key', 'program_id'];
        expect(getTableRows(showTablesMock.keyboard_shortcuts, 'keyboard_shortcuts')).to.deep.equal(expected)
    });

    it('should not return the filtered values', () => {
        const expected = ['id','created_at', 'updated_at'];
        expected.forEach( (val) => {
            expect(getTableRows(showTablesMock.keyboard_shortcuts, 'keyboard_shortcuts')).not.to.be.containing(val);
        });
    });

});
