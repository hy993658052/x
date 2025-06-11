import { Bubble, Message } from '@ant-design/x';
import React from 'react';

const App = () => {
  const message = (
    <Message type="think" content={'This is deep thinking content.'} title={'deep thinking'} />
  );

  return (
    <>
      <Bubble content={message} variant="borderless" />
    </>
  );
};

export default App;
