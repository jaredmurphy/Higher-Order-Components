import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a header', () => {
    expect(component.find('.navbar')).to.exist;
  });

  describe('signing in and clicking resources', () => {
    beforeEach(() => {
      component.find('.auth-button').simulate('click', null);
      component.find('.resources-link').simulate('click', null);
    });

    it('shows a list of resources to users who are signed in', () => {
      expect(component.find('.resources-link')).to.exist;
      expect(component).to.contain('Home');

      /////////////////////////////////////////////////
      // the expect statements below are both failing//
      /////////////////////////////////////////////////
      
     expect(component).to.contain('Super Special Recipe');
     expect(component.find('.recipe-list')).to.exist;
    });

  }); // ends describe signing in  and clicking resources
}); // ends describe app
