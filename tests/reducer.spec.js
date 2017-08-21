import { expect } from 'chai';
import reducer from '../src/reducer';

describe('- Reducer', () => {
    it('should return the initial state', () => {
        const state = reducer({}, { type: '' });
        expect(state).to.eql({});
    });

    it('should have true when action type START', () => {
        const state = reducer({}, {
            type: '@@loadingAll/STARTED',
            payload: 'name',
        });

        const expectedState = {
            name: true,
        };

        expect(state).to.eql(expectedState);
    });

    it('should have false when action type FINISHED', () => {
        const state = reducer({}, {
            type: '@@loadingAll/FINISHED',
            payload: 'name',
        });

        const expectedState = {
            name: false,
        };

        expect(state).to.eql(expectedState);
    });
});
