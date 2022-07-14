import { ChakraProvider } from '@chakra-ui/react';
import { cleanup, render } from '@testing-library/react';
import React, { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { afterEach } from 'vitest';

const DefaultWrapper: FC<{ children: ReactNode }> = ({ children }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </QueryClientProvider>

    );
};

const OnlyThemeWrapper: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <ChakraProvider>{children}</ChakraProvider>
    );
};

afterEach(() => {
    cleanup();
});

const customRender = (ui: React.ReactElement, withQueryProvider = true, options = {}) => {
    render(ui, {
        wrapper: withQueryProvider ? DefaultWrapper : OnlyThemeWrapper,
        ...options,
    });
};

export * from '@testing-library/react';
// export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };
