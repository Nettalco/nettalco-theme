import type { PaginatorDesignTokens, PaginatorTokenSections } from '@primeuix/themes/types/paginator';

/**
 * Configuración de Paginator - Nettalco
 *
 * Colores del preset usados:
 * - Root background: {surface.50} #f8fafc
 * - Nav button selected: {primary.500} #082853 (navy blue)
 * - Hover: {surface.100} #f1f5f9
 *
 * Solo light mode - sin dark mode.
 */

export const root: PaginatorTokenSections.Root = {
    padding: '0.5rem 1rem',
    gap: '0.25rem',
    borderRadius: '{content.border.radius}',
    background: '{content.background}',
    color: '{content.color}',
    transitionDuration: '{transition.duration}'
};

export const navButton: PaginatorTokenSections.NavButton = {
    background: 'transparent',
    hoverBackground: '{content.hover.background}',
    selectedBackground: '{highlight.background}',
    color: '{text.muted.color}',
    hoverColor: '{text.hover.muted.color}',
    selectedColor: '{highlight.color}',
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const currentPageReport: PaginatorTokenSections.CurrentPageReport = {
    color: '{text.muted.color}'
};

export const jumpToPageInput: PaginatorTokenSections.JumpToPageInput = {
    maxWidth: '2.5rem'
};

export const colorScheme: PaginatorTokenSections.ColorScheme = {
    light: {
        root: {
            background: '{surface.50}',
            color: '{surface.900}'
        },
        navButton: {
            background: '{surface.0}',
            hoverBackground: '{surface.100}',
            selectedBackground: '{primary.500}',
            color: '{surface.900}',
            hoverColor: '{surface.900}',
            selectedColor: '{surface.0}'
        }
    }
};

export default {
    root,
    navButton,
    currentPageReport,
    jumpToPageInput,
    colorScheme
} satisfies PaginatorDesignTokens;
