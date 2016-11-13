import { renderComponent , expect } from '../test_helper';
import Header from '../../src/components/header';

describe('Header' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Header);
  });

  it('shows the resources link', () => {
    expect(component.find('.resources-link')).to.exist;
  });

  it('shows the home link', () => {
    expect(component.find('.home-link')).to.exist;
  });

  it('shows the auth button with the text "Sign In"', () => {
    expect(component.find('.auth-button')).to.exist;
    expect(component.find('.auth-button')).to.contain("Sign In");
  });

  describe('clicking sign in', () => {
    beforeEach(() => {
      component.find('.auth-button').simulate('click', null);
    });

    it('shows the auth button with the text "Sign Out"', () => {
      expect(component.find('.auth-button')).to.contain("Sign Out");
    });

    describe('clicking sign out', () => {
      beforeEach(() => {
        component.find('.auth-button').simulate('click', null);
      });

      it('shows the auth button with the text "Sign In"', () => {
        expect(component.find('.auth-button')).to.contain("Sign In");
      });
    }); // ends describe clicking sign out
  }); // ends describe clicking sign in
}); // ends describe header
