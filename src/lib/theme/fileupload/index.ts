import type { FileUploadDesignTokens, FileUploadTokenSections } from '@primeuix/themes/types/fileupload';

export const root: FileUploadTokenSections.Root = {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    color: '{content.color}',
    borderRadius: '{content.border.radius}',
    transitionDuration: '{transition.duration}'
};

export const header: FileUploadTokenSections.Header = {
    background: 'transparent',
    color: '{text.color}',
    padding: '1.125rem',
    borderColor: 'unset',
    borderWidth: '0',
    borderRadius: '0',
    gap: '0.5rem'
};

export const content: FileUploadTokenSections.Content = {
    highlightBorderColor: '{primary.color}',
    padding: '0 1.125rem 1.125rem 1.125rem',
    gap: '1rem'
};

export const file: FileUploadTokenSections.File = {
    padding: '1rem',
    gap: '1rem',
    borderColor: '{content.border.color}',
    info: {
        gap: '0.5rem'
    }
};

export const fileList: FileUploadTokenSections.FileList = {
    gap: '0.5rem'
};

export const progressbar: FileUploadTokenSections.Progressbar = {
    height: '0.25rem'
};

export const basic: FileUploadTokenSections.Basic = {
    gap: '0.5rem'
};

export const colorScheme: FileUploadTokenSections.ColorScheme = {
    light: {
        root: {
            background: '{surface.0}',
            borderColor: '{surface.200}',
            color: '{surface.700}'
        },
        header: {
            color: '{surface.700}'
        },
        file: {
            borderColor: '{surface.200}'
        }
    }
};

export default {
    root,
    header,
    content,
    file,
    fileList,
    progressbar,
    basic,
    colorScheme
} satisfies FileUploadDesignTokens;