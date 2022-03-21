import 'styled-components';
import {} from 'styled-components/cssprop';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            brand: string;
            dark: string;
            darkRGB: string;
            lowerDark: string;
            mid: string;
            light: string;
            lightRGB: string;
            eerieBlack: string;
            gray: string;
            greenCta: string;
        };
    }
}
