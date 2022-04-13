import React from 'react';
import App from './App';
import AccountBalance from './components/AccountBalance';
import Notification from './components/Notification';
import { shallow, mount } from 'enzyme';

const userBalance = {
  balance: '1100',
  savingsBallance: '103',
};

describe('rendering components', () => {
  it('renders App component without crashing', () => {
    shallow(<App />);
  });

  it('renders App component header without crashing', () => {
    const wrapper = shallow(<App />);
    const header = (
      <h1 className="has-text-centered title is-1">
        Welcome in the personal finance app!
      </h1>
    );
    expect(wrapper.contains(header).toEqual(true));
  });

  it('renders Notification component without crashing', () => {
    shallow(<Notification />);
  });

  it('renders button', () => {
    const wrapper = mount(<AccountBalance accounts={userBalance} />);
    const label = wrapper.find('#balance-button').text();
    expect(label).toEqual('Send 100$');
  });
});

describe('passing props', () => {
  const accountWrapper = mount(<AccountBalance accounts={userBalance} />);
  const notificationWrapper = mount(
    <notification balance={userBalance.balance} />
  );

  it('accepsts user account props', () => {
    expect(accountWrapper.props().accounts).toEqual(userBalance);
  });

  it('contains savingsBalance value', () => {
    const value = accountWrapper.find('.savings').text();
    const expectedValue = userBalance.savingsBallance + '$';
    expect(value).toEqual(expectedValue);
  });

  it('notification accepts props', ( => {
    expect(notificationWrapper.props().balance).toEqual(userBalance.balance);
  }))
});
