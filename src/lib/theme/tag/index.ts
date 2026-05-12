import type { TagDesignTokens, TagTokenSections } from '@primeuix/themes/types/tag';

/**
 * Configuración de Tag - Nettalco
 *
 * Colores del preset usados:
 * - Primary: {primary.500} #082853
 * - Secondary: {secondary.500} #3F8CF9
 * - Success: {success.500} #2BA5CD
 * - Info: {info.500} #66A6FB
 * - Warn: {warn.500} #D57952
 * - Danger: {error.500} #DC2626
 * - Contrast: {primary.500} #082853 (navy blue)
 *
 * Solo light mode - sin dark mode.
 */

export const root: TagTokenSections.Root = {
    fontSize: '0.875rem',
    fontWeight: '700',
    padding: '0.25rem 0.5rem',
    gap: '0.25rem',
    borderRadius: '{content.border.radius}',
    roundedBorderRadius: '{border.radius.xl}'
};

export const icon: TagTokenSections.Icon = {
    size: '0.75rem'
};

export const colorScheme: TagTokenSections.ColorScheme = {
    light: {
        primary: {
            background: '{primary.500}',
            color: '{surface.0}'
        },
        secondary: {
            background: '{secondary.500}',
            color: '{surface.0}'
        },
        success: {
            background: '{success.500}',
            color: '{surface.0}'
        },
        info: {
            background: '{info.500}',
            color: '{surface.0}'
        },
        warn: {
            background: '{warn.500}',
            color: '{surface.0}'
        },
        danger: {
            background: '{error.500}',
            color: '{surface.0}'
        },
        contrast: {
            background: '{primary.500}',
            color: '{surface.0}'
        }
    }
};

export default {
    root,
    icon,
    colorScheme
} satisfies TagDesignTokens;
