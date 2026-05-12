import type { MenuDesignTokens, MenuTokenSections } from '@primeuix/themes/types/menu';

export const root: MenuTokenSections.Root = {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    color: '{content.color}',
    borderRadius: '{content.border.radius}',
    shadow: '{overlay.navigation.shadow}',
    transitionDuration: '{transition.duration}'
};

export const list: MenuTokenSections.List = {
    padding: '{navigation.list.padding}',
    gap: '{navigation.list.gap}'
};

export const item: MenuTokenSections.Item = {
    focusBackground: '{navigation.item.focus.background}',
    color: '{navigation.item.color}',
    focusColor: '{navigation.item.focus.color}',
    padding: '{navigation.item.padding}',
    borderRadius: '{navigation.item.border.radius}',
    gap: '{navigation.item.gap}',
    icon: {
        color: '{navigation.item.icon.color}',
        focusColor: '{navigation.item.icon.focus.color}'
    }
};

export const submenuLabel: MenuTokenSections.SubmenuLabel = {
    padding: '{navigation.submenu.label.padding}',
    fontWeight: '{navigation.submenu.label.font.weight}',
    background: '{navigation.submenu.label.background}',
    color: '{navigation.submenu.label.color}'
};

export const separator: MenuTokenSections.Separator = {
    borderColor: '{content.border.color}'
};

export const colorScheme: MenuTokenSections.ColorScheme = {
    light: {
        root: {
            background: '{surface.0}',
            borderColor: '{surface.200}',
            color: '{surface.900}'
        },
        item: {
            focusBackground: '{surface.100}',
            color: '{surface.800}',
            focusColor: '{primary.500}',
            icon: {
                color: '{surface.600}',
                focusColor: '{primary.500}'
            }
        },
        submenuLabel: {
            background: '{surface.50}',
            color: '{surface.700}'
        },
        separator: {
            borderColor: '{surface.200}'
        }
    }
};

export default {
    root,
    list,
    item,
    submenuLabel,
    separator,
    colorScheme
} satisfies MenuDesignTokens;
