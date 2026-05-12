import type { ListboxDesignTokens, ListboxTokenSections } from '@primeuix/themes/types/listbox';

/**
 * Configuración de Listbox - Nettalco
 *
 * Colores del preset usados:
 * - Background: {surface.0} #ffffff
 * - Border: {surface.300} #cbd5e1
 * - Text color: {surface.900} #0f172a
 * - Focus background: {surface.100} #f1f5f9
 * - Selected background: {secondary.600} #5398F8
 * - Selected color: {surface.0} #ffffff
 * - Striped background: {surface.50} #f8fafc
 *
 * Solo light mode - sin dark mode.
 */

export const root: ListboxTokenSections.Root = {
    background: '{form.field.background}',
    disabledBackground: '{form.field.disabled.background}',
    borderColor: '{form.field.border.color}',
    invalidBorderColor: '{form.field.invalid.border.color}',
    color: '{form.field.color}',
    disabledColor: '{form.field.disabled.color}',
    shadow: '{form.field.shadow}',
    borderRadius: '{form.field.border.radius}',
    transitionDuration: '{form.field.transition.duration}'
};

export const list: ListboxTokenSections.List = {
    padding: '{list.padding}',
    gap: '{list.gap}',
    header: {
        padding: '{list.header.padding}'
    }
};

export const option: ListboxTokenSections.Option = {
    focusBackground: '{list.option.focus.background}',
    selectedBackground: '{list.option.selected.background}',
    selectedFocusBackground: '{list.option.selected.focus.background}',
    color: '{list.option.color}',
    focusColor: '{list.option.focus.color}',
    selectedColor: '{list.option.selected.color}',
    selectedFocusColor: '{list.option.selected.focus.color}',
    padding: '{list.option.padding}',
    borderRadius: '{list.option.border.radius}'
};

export const optionGroup: ListboxTokenSections.OptionGroup = {
    background: '{list.option.group.background}',
    color: '{list.option.group.color}',
    fontWeight: '{list.option.group.font.weight}',
    padding: '{list.option.group.padding}'
};

export const checkmark: ListboxTokenSections.Checkmark = {
    color: '{list.option.color}',
    gutterStart: '-0.375rem',
    gutterEnd: '0.375rem'
};

export const emptyMessage: ListboxTokenSections.EmptyMessage = {
    padding: '{list.option.padding}'
};

export const colorScheme: ListboxTokenSections.ColorScheme = {
    light: {
        root: {
            background: '{surface.0}',
            borderColor: '{surface.300}',
            color: '{surface.900}'
        },
        option: {
            focusBackground: '{surface.100}',
            selectedBackground: '{secondary.600}',
            selectedFocusBackground: '{secondary.500}',
            color: '{surface.900}',
            focusColor: '{surface.900}',
            selectedColor: '{surface.0}',
            selectedFocusColor: '{surface.0}',
            stripedBackground: '{surface.50}'
        }
    }
};

export default {
    root,
    list,
    option,
    optionGroup,
    checkmark,
    emptyMessage,
    colorScheme
} satisfies ListboxDesignTokens;