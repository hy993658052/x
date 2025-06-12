import React from 'react';

import Message from '..';
import mountTest from '../../../tests/shared/mountTest';
import rtlTest from '../../../tests/shared/rtlTest';
import { render } from '../../../tests/utils';

describe('message', () => {
  mountTest(() => <Message content="test" />);
  rtlTest(() => <Message content="test" />);
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('Message component work', () => {
    const { container } = render(<Message content="test" />);
    const element = container.querySelector<HTMLDivElement>('.ant-message');
    expect(element).toBeTruthy();
    expect(element).toMatchSnapshot();
  });

  it('Message support content', () => {
    const { container } = render(<Message content="hello world" />);
    const element = container.querySelector<HTMLDivElement>('.ant-message');
    expect(element?.textContent).toBe('hello world');
  });

  it('Message support content with ReactNode', () => {
    const { container } = render(
      <Message content={<span className="test-content">hello world</span>} />,
    );
    const element = container.querySelector<HTMLDivElement>('.ant-message .test-content');
    expect(element?.textContent).toBe('hello world');
  });

  it('Message Should support className & style', () => {
    const { container } = render(
      <Message content="test" className="test-className" style={{ backgroundColor: 'green' }} />,
    );
    const element = container.querySelector<HTMLDivElement>('.ant-message');
    expect(element).toHaveClass('test-className');
    expect(element).toHaveStyle({ backgroundColor: 'green' });
  });

  it('Message support type markdown', () => {
    const { container } = render(<Message content="# hello world" type="markdown" />);
    const element = container.querySelector<HTMLDivElement>(
      '.ant-message .ant-message-markdown h1',
    );
    expect(element?.textContent).toBe('hello world');
  });

  it('Message support type sup', () => {
    const { container } = render(<Message content="1" type="sup" />);
    const element = container.querySelector<HTMLDivElement>('.ant-message .ant-message-sup');
    expect(element?.textContent).toBe('1');
  });

  it('Message support type think', () => {
    const { container } = render(
      <Message type="think" content={'hello world'} title={'thinking'} />,
    );
    const elementTitle = container.querySelector<HTMLDivElement>(
      '.ant-message .ant-message-think-title',
    );
    const element = container.querySelector<HTMLDivElement>(
      '.ant-message .ant-message-think-content',
    );
    expect(elementTitle?.textContent).toBe('thinking');
    expect(element?.textContent).toBe('hello world');
  });
});
