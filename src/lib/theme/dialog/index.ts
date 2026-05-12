import type { DialogDesignTokens, DialogTokenSections } from '@primeuix/themes/types/dialog';

export const root: DialogTokenSections.Root = {
    background: '{overlay.modal.background}',
    borderColor: '{overlay.modal.border.color}',
    color: '{overlay.modal.color}',
    borderRadius: '{overlay.modal.border.radius}',
    shadow: '{overlay.modal.shadow}'
};

export const header: DialogTokenSections.Header = {
    padding: '{overlay.modal.padding}',
    gap: '0.5rem'
};

export const title: DialogTokenSections.Title = {
    fontSize: '1.25rem',
    fontWeight: '600'
};

export const content: DialogTokenSections.Content = {
    padding: '0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}'
};

export const footer: DialogTokenSections.Footer = {
    padding: '0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}',
    gap: '0.5rem'
};

export const colorScheme: DialogTokenSections.ColorScheme = {
    light: {
        root: {
            background: '{surface.0}',
            borderColor: '{surface.200}',
            color: '{surface.900}'
        }
    }
};

export const css: DialogTokenSections.CSS = `
.p-dialog-header {
    background: #D7E3FB;
    color: #112A46;
}
.p-dialog-title {
    color: #112A46;
}
.p-dialog-header-icon {
    color: #112A46;
}
.p-dialog-header-icon:hover {
    background: #B4D3FD;
    color: #112A46;
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
} satisfies DialogDesignTokens;