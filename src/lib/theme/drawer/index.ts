import type { DrawerDesignTokens, DrawerTokenSections } from '@primeuix/themes/types/drawer';

export const root: DrawerTokenSections.Root = {
    background: '{overlay.modal.background}',
    borderColor: '{overlay.modal.border.color}',
    color: '{overlay.modal.color}',
    shadow: '{overlay.modal.shadow}'
};

export const header: DrawerTokenSections.Header = {
    padding: '{overlay.modal.padding}'
};

export const title: DrawerTokenSections.Title = {
    fontSize: '1.5rem',
    fontWeight: '600'
};

export const content: DrawerTokenSections.Content = {
    padding: '0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}'
};

export const footer: DrawerTokenSections.Footer = {
    padding: '{overlay.modal.padding}'
};

export const colorScheme: DrawerTokenSections.ColorScheme = {
    light: {
        root: {
            background: '{surface.0}',
            borderColor: '{surface.200}',
            color: '{surface.900}'
        }
    }
};

export const css: DrawerTokenSections.CSS = `
.p-drawer-header {
    background: var(--p-primary-color);
    color: var(--p-primary-contrast-color);
}
.p-drawer-title {
    color: var(--p-primary-contrast-color);
}
.p-drawer-header-icon {
    color: var(--p-primary-contrast-color);
}
.p-drawer-header-icon:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--p-primary-contrast-color);
}
`;

export default {
    root,
    header,
    title,
    content,
    footer,
    colorScheme,
    css
} satisfies DrawerDesignTokens;