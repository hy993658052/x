import { mergeToken } from '@ant-design/cssinjs-utils';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/cssinjs-utils';
import { genStyleHooks } from '../../theme/genStyleUtils';

// biome-ignore lint/suspicious/noEmptyInterface: ComponentToken need to be empty by default
export interface ComponentToken {}

export interface MessageToken extends FullToken<'Message'> {}

const genMessageStyle: GenerateStyle<MessageToken> = (token) => {
  const {
    componentCls,
    colorFillSecondary,
    fontSizeSM,
    controlHeightXS,
    paddingXXS,
    paddingXS,
    marginXXS,
    colorTextSecondary,
    colorTextDescription,
    fontSize,
    fontSizeHeading4,
    lineHeight,
    colorBorder,
    calc,
  } = token;

  return {
    [componentCls]: {
      display: 'block',

      [`${componentCls}-sup`]: {
        display: 'inline-block',
        background: colorFillSecondary,
        borderRadius: calc(controlHeightXS).div(2).equal(),
        height: controlHeightXS,
        lineHeight: controlHeightXS,
        fontSize: calc(fontSizeSM).sub(2).equal(),
        color: colorTextSecondary,
        fontWeight: 400,
        padding: `0 ${calc(paddingXXS).add(2).equal()}`,
        margin: `0 ${marginXXS}`,
      },

      [`${componentCls}-think`]: {
        '&-title-wrapper': {
          width: 'fit-content',
          display: 'flex',
          flexDirection: 'row',
          gridGap: paddingXS,
          alignItems: 'center',
          fontSize: fontSize,
          color: colorTextSecondary,
          lineHeight: lineHeight,
          cursor: 'pointer',
        },

        '&-logo': {
          fontSize: fontSizeHeading4,
        },

        '&-content': {
          marginTop: '12px',
          width: '100%',
          color: colorTextDescription,
          whiteSpace: 'pre-wrap',
          paddingLeft: '12px',
          borderLeft: `2px solid ${colorBorder}`,
        },
      },
    },
  };
};

export const prepareComponentToken: GetDefaultToken<'Message'> = () => ({});

export default genStyleHooks<'Message'>(
  'Message',
  (token) => {
    const MessageToken = mergeToken<MessageToken>(token, {});
    return [genMessageStyle(MessageToken)];
  },
  prepareComponentToken,
);
