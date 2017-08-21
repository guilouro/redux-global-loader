import React from 'react';
import Loading from '../src/container';
import { mountConnected, mockStore } from './utils/helper';
import { expect } from 'chai';

describe('<Loading /> - Loading', () => {
    it('should render when there is true in global store', () => {
        const loadingAll = { name1: true, name2: true };        
        const wrapper = mountConnected(<Loading><div>Lorem</div></Loading>, mockStore({ loadingAll }));
        expect(wrapper.find('div')).to.have.length(1);
    });

    it('should render when there is any true in global store', () => {
        const loadingAll = { name1: true, name2: false };        
        const wrapper = mountConnected(<Loading><div>Lorem</div></Loading>, mockStore({ loadingAll }));
        expect(wrapper.find('div')).to.have.length(1);
    });
    
    it('should not render when there isn`t any true in global store', () => {
        const loadingAll = { name1: false, name2: false };        
        const wrapper = mountConnected(<Loading><div>Lorem</div></Loading>, mockStore({ loadingAll }));
        expect(wrapper.find('div')).to.have.length(0);
    });
});