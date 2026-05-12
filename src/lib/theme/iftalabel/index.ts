import type { IftaLabelDesignTokens, IftaLabelTokenSections } from '@primeuix/themes/types/iftalabel';

export const root: IftaLabelTokenSections.Root = {
    color: '{form.field.float.label.color}',
    focusColor: '{form.field.float.label.focus.color}',
    invalidColor: '{form.field.float.label.invalid.color}',
    transitionDuration: '0.2s',
    positionX: '{form.field.padding.x}',
    top: '0.5rem',
    fontSize: '0.75rem',
    fontWeight: '400'
};

export const input: IftaLabelTokenSections.Input = {
    paddingTop: '1.5rem',
    paddingBottom: '0.5rem'
};

export const colorScheme: IftaLabelTokenSections.ColorScheme = {
    light: {
        root: {
            color: '{surface.500}',
            focusColor: '{primary.color}',
            invalidColor: '{red.500}'
        }
    }
};

export default {
    root,
    input,
    colorScheme
} satisfies IftaLabelDesignTokens;
