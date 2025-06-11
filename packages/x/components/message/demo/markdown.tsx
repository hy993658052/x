import { Bubble, Message } from '@ant-design/x';
import React from 'react';

const text = `
> Render as markdown content to show rich text!

Link: [Ant Design X](https://x.ant.design)
`;

const App = () => {
  const message = <Message type="markdown" content={text} typing={true} />;

  return (
    <>
      <Bubble content={message} />
    </>
  );
};

export default App;
