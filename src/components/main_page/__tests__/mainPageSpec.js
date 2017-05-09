import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';

import {MainPage} from '../MainPage';
import * as Actions from '../mainPageActions';

describe('Test', () => {
    let wrapper;

    beforeEach(() => {

    });

    afterEach(() => {

    });

    it ('testy', () => {
        wrapper = mount(<MainPage />);
        expect(wrapper.find('p').node.props.text).toEqual('sausages')
    });
})