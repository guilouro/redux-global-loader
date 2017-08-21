import reducer from '../src/reducer';
import { expect } from 'chai';

describe('- Reducer', () => {
    it('should have true when action type START', () => {
        const state = reducer({}, {
            type: '@@loadingAll/STARTED',
            payload: 'name',
        });

        const expectedState = {
            name: true
        }

        expect(state).to.eql(expectedState);
    });
    
    it('should have false when action type FINISHED', () => {
        const state = reducer({}, {
            type: '@@loadingAll/FINISHED',
            payload: 'name',
        });

        const expectedState = {
            name: false
        }

        expect(state).to.eql(expectedState);
    });
})