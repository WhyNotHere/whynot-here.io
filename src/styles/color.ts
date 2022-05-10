const color = {
  background: '#F1F1F1',
  divider: '#DADADA',
  primary: '#005B9A',
  red: '#E9B9B9',
  blue: '#B7CFE4',
  yellow: '#F2E5A0',
  grey: '#8C8C8C',
  white: '#FFFFFF',
  black: '#222222',
  post_info: '#94969B',
  placeholder: '#BCC0C4',
  grid_border: '#EEEEEE',
  jobs: {
    developer: '#3D9CD1',
    designer: '#EBB62D',
    planner: '#E05858',
    etc: '#9FA5A9',
  },
};

export const rgbaWithHex = (color: string, alpha: number) => {
  const [r, g, b] = color
    .substring(1)
    .match(/.{1,2}/g)!
    .map((e) => parseInt(e, 16));

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default color;
