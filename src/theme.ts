export const theme = {
  color: {
    /* temporary color */
    background: '#f1f1f1',
    divider: '#dadada',
    primary: '#005B9A',
    red: '#E9B9B9',
    blue: '#B7CFE4',
    yellow: '#F2E5A0',
  },
};

type ThemeType = typeof theme;

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeType {}
}
