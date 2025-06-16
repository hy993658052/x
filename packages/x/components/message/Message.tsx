import classnames from 'classnames';
import React from 'react';
import useXComponentConfig from '../_util/hooks/use-x-component-config';
import { useXProviderContext } from '../x-provider';
import Markdown, { MarkdownProps } from './components/Markdown';
import Source from './components/Source';
import Sup, { SupProps } from './components/Sup';
import System from './components/System';
import Think from './components/Think';
import useStyle from './style';

export type MessageProps = Omit<MarkdownProps & SupProps, 'content'> & {
  prefixCls?: string;
  style?: React.CSSProperties;
  className?: string;
  type?: 'markdown' | 'sup' | 'think' | 'source' | 'system';
  content?: React.ReactNode;

  // think props
  title?: React.ReactNode;
  logo?: React.ReactNode;

  // source props
  items?: Array<{
    label: string;
    src: string;
    key?: string;
  }>;

  // system props
  divider?: boolean | string;
};

const Message: React.FC<React.PropsWithChildren<MessageProps>> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    style,
    className,
    type,
    children,
    content,
    ...restProps
  } = props;

  const { direction, getPrefixCls } = useXProviderContext();
  const prefixCls = getPrefixCls('message', customizePrefixCls);
  const contextConfig = useXComponentConfig('bubble');

  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);

  const mergedCls = classnames(prefixCls, contextConfig.className, className, hashId, cssVarCls, {
    [`${prefixCls}-rtl`]: direction === 'rtl',
  });

  const ContentNode = () => {
    const childNode = content || children;
    if (type === 'markdown') {
      return <Markdown prefixCls={prefixCls} {...restProps} content={childNode as string} />;
    }
    if (type === 'sup') {
      return <Sup prefixCls={prefixCls} {...restProps} content={childNode} />;
    }
    if (type === 'think') {
      return <Think prefixCls={prefixCls} {...restProps} content={childNode} />;
    }
    if (type === 'source') {
      return <Source prefixCls={prefixCls} {...restProps} content={childNode} />;
    }
    if (type === 'system') {
      return <System prefixCls={prefixCls} {...restProps} content={childNode} />;
    }
    return childNode;
  };

  return wrapCSSVar(
    <div
      className={mergedCls}
      style={{
        ...contextConfig.style,
        ...style,
      }}
    >
      <ContentNode />
    </div>,
  );
};

export default Message;
