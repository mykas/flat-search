import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mountApp } from '../../../test/test-common';
import Card from './Card';
import { CardDriver } from './Card.driver';

const mockData = {
  img: 'img',
  rooms: 'bla',
  price: '450',
  address: 'Naujamiestis, Aguonu g.',
};

describe('Card', () => {
  let wrapper;

  afterEach(() => wrapper.detach());

  it('should render with given parameters', () => {
    wrapper = mountApp(<Card ad={mockData} />);
    const CardComp = CardDriver(wrapper);
    expect(CardComp.getImage()).to.equal(mockData.img);
    expect(CardComp.getAddress()).to.equal(mockData.address);
    expect(CardComp.getRooms()).to.equal(mockData.rooms);
    expect(CardComp.getPrice()).to.equal(mockData.price);
  });
});
