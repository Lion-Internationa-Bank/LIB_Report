import {NgxUiLoaderConfig, PB_DIRECTION, POSITION, SPINNER} from 'ngx-ui-loader';

export const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#324e6c',
  bgsPosition: POSITION.bottomRight,
  bgsSize: 50,
  pbColor: '#324e6c',
  bgsType: SPINNER.ballSpinClockwise, // background spinner type
  fgsType: SPINNER.threeStrings,  // foreground spinner type
  fgsColor: '#2978cd',
  blur: 5,
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};





