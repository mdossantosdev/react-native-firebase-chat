import {
  COLOR_PRIMARY,
  DARK_COLOR_PRIMARY,
  COLOR_BLACK_TEXT,
  COLOR_WHITE_TEXT,
  COLOR_BACKGROUND,
  DARK_COLOR_BACKGROUND,
  COLOR_INPUT_BACKGROUND,
  DARK_COLOR_INPUT_BACKGROUND,
  COLOR_ACTIVE_TINT,
  DARK_COLOR_ACTIVE_TINT,
  COLOR_INACTIVE_TINT,
  DARK_COLOR_INACTIVE_TINT,
  COLOR_INPUT_TOOLBAR,
  DARK_COLOR_INPUT_TOOLBAR,
  COLOR_COMPOSER_BACKGROUND,
  DARK_COLOR_COMPOSER_BACKGROUND,
} from '../constants/Colors';

export const lightTheme = {
  colors: {
    primary: COLOR_PRIMARY,
    background: COLOR_BACKGROUND,
    inputBackground: COLOR_INPUT_BACKGROUND,
    activeTintColor: COLOR_ACTIVE_TINT,
    inactiveTintColor: COLOR_INACTIVE_TINT,
    inputToolbarColor: COLOR_INPUT_TOOLBAR,
    composerBackgroundColor: COLOR_COMPOSER_BACKGROUND,
    composerTextColor: COLOR_BLACK_TEXT,
  },
};

export const darkTheme = {
  colors: {
    primary: DARK_COLOR_PRIMARY,
    background: DARK_COLOR_BACKGROUND,
    inputBackground: DARK_COLOR_INPUT_BACKGROUND,
    activeTintColor: DARK_COLOR_ACTIVE_TINT,
    inactiveTintColor: DARK_COLOR_INACTIVE_TINT,
    inputToolbarColor: DARK_COLOR_INPUT_TOOLBAR,
    composerBackgroundColor: DARK_COLOR_COMPOSER_BACKGROUND,
    composerTextColor: COLOR_WHITE_TEXT,
  },
};
