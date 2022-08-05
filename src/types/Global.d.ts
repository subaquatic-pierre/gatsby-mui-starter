export {};

declare global {
  interface Window {
    webkitRequestAnimationFrame: any;
    mozRequestAnimationFrame: any;
    oRequestAnimationFrame: any;
    msRequestAnimationFrame: any;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    white;
  }
}
