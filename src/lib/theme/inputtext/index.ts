import type { InputTextDesignTokens, InputTextTokenSections } from '@primeuix/themes/types/inputtext';

/**
 * Configuración de InputText - Nettalco
 *
 * Colores del preset usados:
 * - Hover/Focus border: {primary.500} #082853 (navy blue)
 * - Invalid border: {error.500} #DC2626 (rojo)
 */

export const root: InputTextTokenSections.Root = {
    background: '{form.field.background}',
    disabledBackground: '{form.field.disabled.background}',
    filledBackground: '{form.field.filled.background}',
    filledHoverBackground: '{form.field.filled.hover.background}',
    filledFocusBackground: '{form.field.filled.focus.background}',
    borderColor: '{form.field.border.color}',
    hoverBorderColor: '{form.field.hover.border.color}',
    focusBorderColor: '{form.field.focus.border.color}',
    invalidBorderColor: '{form.field.invalid.border.color}',
    color: '{form.field.color}',
    disabledColor: '{form.field.disabled.color}',
    placeholderColor: '{form.field.placeholder.color}',
    invalidPlaceholderColor: '{form.field.invalid.placeholder.color}',
    shadow: '{form.field.shadow}',
    paddingX: '{form.field.padding.x}',
    paddingY: '{form.field.padding.y}',
    borderRadius: '{form.field.border.radius}',
    focusRing: {
        width: '{form.field.focus.ring.width}',
        style: '{form.field.focus.ring.style}',
        color: '{form.field.focus.ring.color}',
        offset: '{form.field.focus.ring.offset}',
        shadow: '{form.field.focus.ring.shadow}'
    },
    transitionDuration: '{form.field.transition.duration}',
    sm: {
        fontSize: '{form.field.sm.font.size}',
        paddingX: '{form.field.sm.padding.x}',
        paddingY: '{form.field.sm.padding.y}'
    },
    lg: {
        fontSize: '{form.field.lg.font.size}',
        paddingX: '{form.field.lg.padding.x}',
        paddingY: '{form.field.lg.padding.y}'
    }
};

export const colorScheme: InputTextTokenSections.ColorScheme = {
    light: {
        root: {
            background: '{surface.0}',
            borderColor: '{surface.300}',
            color: '{surface.900}',
            placeholderColor: '{surface.500}',
            hoverBorderColor: '{primary.500}',
            focusBorderColor: '{primary.500}',
            invalidBorderColor: '{error.500}',
            disabledBackground: '{surface.100}',
            disabledColor: '{surface.500}'
        }
    }
};

export default {
    root,
    colorScheme
} satisfies InputTextDesignTokens;
