import middleware from '../src/middleware';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('- Middleware', () => {
    let store;
    let next;

    beforeEach(() => {
        store = { dispatch: sinon.spy() }
        next = sinon.spy();
    });

    it('should have dispatch STARTED when contains _PENDING in action', () => {
        const action = { type: 'NAME_PENDING' };
        const expected = { payload: 'NAME', type: '@@loadingAll/STARTED' }
        middleware(store)(next)(action);
        expect(store.dispatch).to.be.calledWith(expected);
    });

    it('should have dispatch FINISHED when contains _FULFILLED in action', () => {
        const action = { type: 'NAME_FULFILLED' };
        const expected = { payload: 'NAME', type: '@@loadingAll/FINISHED' }
        middleware(store)(next)(action);
        expect(store.dispatch).to.be.calledWith(expected);
    });

    it('should have dispatch FINISHED when contains _REJECTED in action', () => {
        const action = { type: 'NAME_REJECTED' };
        const expected = { payload: 'NAME', type: '@@loadingAll/FINISHED' }
        middleware(store)(next)(action);
        expect(store.dispatch).to.be.calledWith(expected);
    });
    
})