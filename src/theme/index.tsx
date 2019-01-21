import * as React from 'react';

import { componentFactory, ComponentProps, ThemeOptionT } from '@rmwc/base';
import { toDashCase } from '@rmwc/base/utils/to-dash-case';
import { getAutoColorsForTheme } from './utils';
import { parseThemeOptions } from '@rmwc/base/withTheme';

const ThemeRoot = componentFactory<{}>({
  displayName: 'ThemeRoot',
  tag: 'span'
});

export interface ThemeProps {
  /** A theme option as a string, a space separated string for multiple values, or an array of valid theme options. */
  use: ThemeOptionT | ThemeOptionT[];
  /** Collapse the styles directly onto the child component. This eliminates the need for a wrapping `span` element and may be required for applying things like background-colors.  */
  wrap?: boolean | any;
}

/**
 * A Theme Component.
 */
export const Theme = ({ use, wrap, ...rest }: ThemeProps & ComponentProps) => {
  if (wrap) {
    const child = React.Children.only(rest.children);

    return React.cloneElement(child, {
      ...child.props,
      className: [...parseThemeOptions(use), child.props.className]
        .filter(Boolean)
        .join(' ')
    });
  }
  return <ThemeRoot theme={use} {...rest} />;
};

Theme.displayName = 'Theme';

export interface ThemeProviderProps
  extends Pick<ComponentProps, Exclude<keyof ComponentProps, 'wrap'>> {
  /** Any theme option pointing to a valid CSS value. */
  options: { [key: string]: string };
  /** Additional standard inline styles that will be merged into the style tag. */
  style?: Object;
  /** Instead of injecting a div tag, wrap a child component by merging the theme styles directly onto it. Useful when you don't want to mess with layout. */
  wrap?: boolean;
  /** Children to render */
  children?: React.ReactNode;
}

/** A ThemeProvider. This sets theme colors for its child tree. */
export class ThemeProvider extends React.Component<ThemeProviderProps> {
  static displayName = 'ThemeProvider';

  prevOpts_ = '';
  colors_ = {};

  get colors() {
    // implement some caching to prevent the color checking from being called over and over again.
    const parsed = JSON.stringify(this.props.options);
    if (parsed !== this.prevOpts_) {
      this.prevOpts_ = parsed;

      const processedColors = Object.keys(this.props.options).reduce(
        (acc: any, key) => {
          const val = this.props.options[key];

          key = key.startsWith('--') ? key : `--mdc-theme-${toDashCase(key)}`;
          acc[key] = val;
          return acc;
        },
        {}
      );

      this.colors_ = getAutoColorsForTheme(processedColors);
    }

    return this.colors_;
  }

  render() {
    const { options, style = {}, wrap, ...rest } = this.props;
    // Casting styles to avoid TSX error
    // $FlowFixMe
    const tsxSafeStyle: React.CSSProperties = style;
    const themeStyles = {
      ...tsxSafeStyle,
      ...this.colors
    };

    if (wrap && rest.children) {
      const child = React.Children.only(rest.children);
      const childStyle = child.props.style || {};

      return React.cloneElement(child, {
        ...child.props,
        ...rest,
        style: { ...themeStyles, ...childStyle }
      });
    }

    return <div {...rest} style={themeStyles} />;
  }
}