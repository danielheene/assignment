import { FontName, FontWeight } from './GoogleFontLoader.types';

/* text with most common glyphs for measurement */
const MEASURING_TEXT = 'abcdefghijklmnopqrstuvwxyz0123456789';
/* base url for loadig google fonts */
const FONTS_BASE_URL = 'https://fonts.googleapis.com/css2';

/**
 * check if a font family is missing by measuring canvas sizes
 * adapted from: https://gist.github.com/alloyking/4154494
 */
export const fontIsInstalled = (fontName: FontName): boolean => {
  /* determine document availability */
  if (!document) return false;

  /* create a 2d canvas for measuring font sizes */
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  /* determine canvas context availability */
  if (!context) return false;

  /* measure systems default monospace font size */
  context.font = '72px monospace';
  const baselineSize = context.measureText(MEASURING_TEXT).width;

  /* measure requested font size with system fallback */
  context.font = `72px "${fontName}", monospace`;
  const requestedSize = context.measureText(MEASURING_TEXT).width;

  /* font is already available if requested and baseline sizes differ */
  return requestedSize !== baselineSize;
};

/**
 * create font name parameter from font name according to google fonts
 */
const createFontNameParameter = (fontName: FontName): string =>
  fontName.replace(/\s+/g, '+');

/**
 * create font weight parameter from font weight(s) according to google fonts
 */
const createFontWeightParameter = (fontWeight: FontWeight): string =>
  `wght@${Array.isArray(fontWeight) ? fontWeight.join(';') : fontWeight}`;

/**
 * create the correct url to request font
 */
export const createGoogleFontUrl = (
  fontName: FontName,
  fontWeight: FontWeight
): string => {
  const fontNameParam = createFontNameParameter(fontName);
  const fontWeightParam = createFontWeightParameter(fontWeight);

  return `${FONTS_BASE_URL}?family=${fontNameParam}:${fontWeightParam}&display=swap`;
};
