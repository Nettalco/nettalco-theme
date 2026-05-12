import type { CardDesignTokens, CardTokenSections } from '@primeuix/themes/types/card';

/**
 * Configuración de Card - Nettalco
 *
 * Colores del preset usados:
 * - Background: {surface.0} #ffffff
 * - Text color: {surface.900} #0f172a
 * - Subtitle: {surface.500} #64748b
 *
 * Solo light mode - sin dark mode.
 */

export const root: CardTokenSections.Root = {
    background: '{content.background}',
    borderRadius: '{border.radius.xl}',
    color: '{content.color}',
    shadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)'
};

export const body: CardTokenSections.Body = {
    padding: '1.25rem',
    gap: '0.5rem'
};

export const caption: CardTokenSections.Caption = {
    gap: '0.5rem'
};

export const title: CardTokenSections.Title = {
    fontSize: '1.25rem',
    fontWeight: '500'
};

export const subtitle: CardTokenSections.Subtitle = {
    color: '{text.muted.color}'
};

export const colorScheme: CardTokenSections.ColorScheme = {
    light: {
        root: {
            background: '{surface.0}',
            color: '{surface.900}'
        },
        subtitle: {
            color: '{surface.500}'
        }
    }
};

export default {
    root,
    body,
    caption,
    title,
    subtitle,
    colorScheme
} satisfies CardDesignTokens;
