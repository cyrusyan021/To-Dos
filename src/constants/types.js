const BUTTON_TYPE = {
  clear: 'clear',
  outlined: 'outlined',
  warning: 'warning',
  icon: 'icon',
  primary: 'primary',
}

const SIZE = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
}

/* --- props --- */
const BUTTON_TYPE_VALID_PROPS = Object.values(BUTTON_TYPE);

const SIZE_VALID_PROPS = Object.values(SIZE);

export {
  BUTTON_TYPE,
  BUTTON_TYPE_VALID_PROPS,
  SIZE,
  SIZE_VALID_PROPS,
}