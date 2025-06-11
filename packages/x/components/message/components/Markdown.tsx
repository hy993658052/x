import { IMarkdownXProps, MarkdownX } from '@alipay/markdown-x';
import React from 'react';
import Sup, { SupProps } from './Sup';

export interface MarkdownProps extends IMarkdownXProps {
  content?: string;
  prefixCls?: string;
  supProps?: Record<string, SupProps>;
}

const Markdown: React.FC<MarkdownProps> = ({ content, prefixCls, supProps, ...restProps }) => {
  const compCls = `${prefixCls}-markdown`;

  const customSupExtension = {
    name: 'sup',
    level: 'inline',
    tokenizer(src: string) {
      const match = src.match(/^\[\^([^\]]+)\]/);
      if (match) {
        return {
          type: 'sup',
          raw: match[0],
          text: match[1],
          renderType: 'component',
        };
      }
    },
    renderer(token: { text: string }) {
      const props = supProps?.[token.text] || {};
      return <Sup prefixCls={prefixCls} {...props} content={token.text} />;
    },
  };
  // @ts-ignore
  const customPlugins: IMarkdownXProps['plugins'] = [{ extensions: [customSupExtension] }];

  return (
    <div className={compCls}>
      <MarkdownX content={content} {...restProps} plugins={customPlugins} />
    </div>
  );
};

export default Markdown;
