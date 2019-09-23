import test from 'ava';
import { shallowMount } from '@vue/test-utils';
import HamburgerMenu from './hamburger-menu';

const hamburgerMenuFactory = (values={}) => {
  return shallowMount(HamburgerMenu, {
    data() {
      return {
        ...values
      }
    }
  });
};

test('it renders the correct initial markup', (t) => {
  // Check that the component is at least created in it's most basic sense
  const hamburgerMenuWrapper = hamburgerMenuFactory();
  t.true(hamburgerMenuWrapper.is('button'));
});

test('calling triggerMenu will raise the correct events when the menu is initially closed', (t) => {
  // Set the menu to be initially closed
  const hamburgerMenuWrapper = hamburgerMenuFactory({menuOpen: false});
  const buttonEvent = 'trigger-menu';
  const buttonOpenEvent = 'trigger-menu-opened';
  const buttonCloseEvent = 'trigger-menu-closed';

  const hamburgerButton = hamburgerMenuWrapper.find('button');
  hamburgerButton.trigger('click');

  // Test that the correct event is raised for the general change
  t.is(hamburgerMenuWrapper.emitted()[buttonEvent].length, 1);

  // Test that an event is raised for the specfic open change (and not one for close)
  t.is(hamburgerMenuWrapper.emitted()[buttonOpenEvent].length, 1);
  t.falsy(hamburgerMenuWrapper.emitted()[buttonCloseEvent]);
});

test('calling triggerMenu will raise the correct events when the menu is initially open', (t) => {
  // Set the menu to be initially open
  const hamburgerMenuWrapper = hamburgerMenuFactory({menuOpen: true});
  const buttonEvent = 'trigger-menu';
  const buttonOpenEvent = 'trigger-menu-opened';
  const buttonCloseEvent = 'trigger-menu-closed';

  const hamburgerButton = hamburgerMenuWrapper.find('button');
  hamburgerButton.trigger('click');

  // Test that the correct event is raised for the general change
  t.is(hamburgerMenuWrapper.emitted()[buttonEvent].length, 1);

  // Test that an event is raised for the specfic close change (and not one for open)
  t.is(hamburgerMenuWrapper.emitted()[buttonCloseEvent].length, 1);
  t.falsy(hamburgerMenuWrapper.emitted()[buttonOpenEvent]);
});

test('calling triggerMenu will set the local data up correctly when the menu is initally closed', (t) => {
  // Set the menu to be initially closed
  const hamburgerMenuWrapper = hamburgerMenuFactory({menuOpen: false});
  const hamburgerButton = hamburgerMenuWrapper.find('button');

  // Trigger the menu to be opened
  hamburgerButton.trigger('click');

  t.is(hamburgerMenuWrapper.vm.$data.menuOpen, true);
});

test('calling triggerMenu will set the local data up correctly when the menu is initally open', (t) => {
  // Set the menu to be initially closed
  const hamburgerMenuWrapper = hamburgerMenuFactory({menuOpen: true});
  const hamburgerButton = hamburgerMenuWrapper.find('button');

  // Trigger the menu to be opened
  hamburgerButton.trigger('click');

  t.is(hamburgerMenuWrapper.vm.$data.menuOpen, false);
});

test('when the menu is open the aria-expanded attribute is correctly set on the component', (t) => {
  // Set the menu to be initially closed
  const hamburgerMenuWrapper = hamburgerMenuFactory({menuOpen: true});

  const hamburgerButton = hamburgerMenuWrapper.find('button');
  t.is(hamburgerButton.attributes('aria-expanded'), 'true');
});

test('when the menu is closed the aria-expanded attribute is correctly set on the component', (t) => {
  // Set the menu to be initially closed
  const hamburgerMenuWrapper = hamburgerMenuFactory({menuOpen: false});

  const hamburgerButton = hamburgerMenuWrapper.find('button');
  t.is(hamburgerButton.attributes('aria-expanded'), 'false');
});

test('when the menu is open the hamburger--close class is correctly set on the component', (t) => {
  // Set the menu to be initially open
  const hamburgerMenuWrapper = hamburgerMenuFactory({menuOpen: true});

  const hamburgerButton = hamburgerMenuWrapper.find('button');

  t.true(hamburgerButton.classes('hamburger--close'));
});

test('when the menu is closed the hamburger--close class is not present on the component', (t) => {
  // Set the menu to be initially closed
  const hamburgerMenuWrapper = hamburgerMenuFactory({menuOpen: false});

  const hamburgerButton = hamburgerMenuWrapper.find('button');

  t.false(hamburgerButton.classes('hamburger--close'));
});

test('Hamburger menu snapshot test', (t) => {
  const hamburgerMenuWrapper = hamburgerMenuFactory({menuOpen: false});
  t.snapshot({ html: hamburgerMenuWrapper.html() })
})
