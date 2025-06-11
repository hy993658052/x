import { Bubble, Message } from '@ant-design/x';
import React from 'react';

const App = () => {
  const message1 = (
    <div style={{ display: 'flex' }}>
      use in message
      <Message type="sup" content={'1'} popoverTitle="Title" popoverContent={'Content'} />
    </div>
  );

  const message2 = (
    <Message
      type="markdown"
      content={'use in markdown[^1]'}
      supProps={{
        '1': {
          popoverTitle: 'Title',
          popoverContent: 'Content',
        },
      }}
    />
  );

  return (
    <>
      <Bubble variant="outlined" content={message1} />
      <br />
      <Bubble variant="outlined" content={message2} />
    </>
  );
};

export default App;
