import { useEffect } from 'react';

import { FontName, FontWeight } from './GoogleFontLoader.types';
import { createGoogleFontUrl, fontIsInstalled } from './GoogleFontLoader.utils';

interface GoogleFontLoaderProps {
  fontName: FontName;
  fontWeight?: FontWeight;
}

/**
 * Load fonts from google only if requested font will not be available
 * @param fontName - Name of a font family which should be loaded
 * @param fontWeights - Font weight(s) which should be loaded
 * @constructor
 */
export const GoogleFontLoader = ({
  fontName,
  fontWeight = [400, 700],
}: GoogleFontLoaderProps): null => {
  /* detect if font should get loaded or not and append its link tag to the head */
  useEffect(() => {
    /* exit if no document is available or font is already installed or loaded */
    if (!document || fontIsInstalled(fontName)) return;

    /* create a link element with its necessary attributes */
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('type', 'text/css');
    linkElement.setAttribute('href', createGoogleFontUrl(fontName, fontWeight));

    /* add link tag element when component is mounted */
    document.head.appendChild(linkElement);

    return () => {
      /* remove link tag element when component is unmounted */
      document.head.removeChild(linkElement);
    };
  }, [fontName, fontWeight]);

  return null;
};
