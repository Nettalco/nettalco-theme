import type { MenubarDesignTokens, MenubarTokenSections } from '@primeuix/themes/types/menubar';

/**
 * Configuración de Menubar - Nettalco
 *
 * Colores del preset usados:
 * - Background: {surface.0} #ffffff
 * - Border: {surface.300} #cbd5e1
 * - Text color: {surface.900} #0f172a
 * - Focus background: {surface.100} #f1f5f9
 * - Active background: {primary.50} #EDF4FF
 * - Active color: {primary.500} #082853
 *
 * Solo light mode - sin dark mode.
 */

export const root: MenubarTokenSections.Root = {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    borderRadius: '{content.border.radius}',
    color: '{content.color}',
    gap: '0.5rem',
    padding: '0.5rem 0.75rem',
    transitionDuration: '{transition.duration}'
};

export const baseItem: MenubarTokenSections.BaseItem = {
    borderRadius: '{content.border.radius}',
    padding: '{navigation.item.padding}'
};

export const item: MenubarTokenSections.Item = {
    focusBackground: '{navigation.item.focus.background}',
    activeBackground: '{navigation.item.active.background}',
    color: '{navigation.item.color}',
    focusColor: '{navigation.item.focus.color}',
    activeColor: '{navigation.item.active.color}',
    padding: '{navigation.item.padding}',
    borderRadius: '{navigation.item.border.radius}',
    gap: '{navigation.item.gap}',
    icon: {
        color: '{navigation.item.icon.color}',
        focusColor: '{navigation.item.icon.focus.color}',
        activeColor: '{navigation.item.icon.active.color}'
    }
};

export const submenu: MenubarTokenSections.Submenu = {
    padding: '{navigation.list.padding}',
    gap: '{navigation.list.gap}',
    background: '{content.background}',
    borderColor: '{content.border.color}',
    borderRadius: '{content.border.radius}',
    shadow: '{overlay.navigation.shadow}',
    mobileIndent: '1rem',
    icon: {
        size: '{navigation.submenu.icon.size}',
        color: '{navigation.submenu.icon.color}',
        focusColor: '{navigation.submenu.icon.focus.color}',
        activeColor: '{navigation.submenu.icon.active.color}'
    }
};

export const separator: MenubarTokenSections.Separator = {
    borderColor: '{content.border.color}'
};

export const mobileButton: MenubarTokenSections.MobileButton = {
    borderRadius: '50%',
    size: '1.75rem',
    color: '{text.muted.color}',
    hoverColor: '{text.hover.muted.color}',
    hoverBackground: '{content.hover.background}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const colorScheme: MenubarTokenSections.ColorScheme = {
    light: {
        root: {
            background: '{surface.0}',
            borderColor: '{surface.300}',
            color: '{surface.900}'
        },
        item: {
            focusBackground: '{surface.100}',
            activeBackground: '{primary.50}',
            color: '{surface.900}',
            focusColor: '{surface.900}',
            activeColor: '{primary.500}'
        }
    }
};

export default {
    root,
    baseItem,
    item,
    submenu,
    separator,
    mobileButton,
    colorScheme
} satisfies MenubarDesignTokens;