import queryFactory from '../../lib/app/methods/queryFactory';
import { keyboard_shortcuts, programs, comments } from '../mocks/models';

describe('queryFactory method', () => {

    it('should call the method on the model and return a promise', () => {
        const result = queryFactory(keyboard_shortcuts, {}, {type: 'multiple'});
        expect(result).to.be.a('promise');

    });

    it('The promise should resolve to a value based on the action passed and method called', () => {

        const result = queryFactory(programs, {}, {type: 'single'});
        result.then((data) => {
            expect(data.to.equal('A single value'));
        });

        result.then( (data) => {
            expect(data.not.to.equal('A result of multiple'));
        });

    });

    it('should error if an invalid action is passed', () => {
        try {
            queryFactory(comments, {}, {type: 'jhgfdz'})
        }
        catch (err) {
            expect(err).to.equal('Error');
        }
    });

});
