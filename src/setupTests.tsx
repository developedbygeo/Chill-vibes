import { ReactElement } from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, RenderOptions, RenderResult } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { myTheme } from './utils/theme';
import GlobalStyle from './utils/globalStyle';

type AllProvidersType = {
    children: React.ReactNode;
};

const AllProviders = ({ children }: AllProvidersType) => {
    return (
        <>
            <Provider store={store}>
                <ThemeProvider theme={myTheme}>
                    <GlobalStyle />
                    {children}
                </ThemeProvider>
            </Provider>
        </>
    );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult =>
    render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export * from '@testing-library/jest-dom';

export { customRender as render };
