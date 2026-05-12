import type { MultiSelectDesignTokens, MultiSelectTokenSections } from '@primeuix/themes/types/multiselect';

export const root: MultiSelectTokenSections.Root = {
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

export const dropdown: MultiSelectTokenSections.Dropdown = {
    width: '2.5rem',
    color: '{form.field.icon.color}'
};

export const overlay: MultiSelectTokenSections.Overlay = {
    background: '{overlay.select.background}',
    borderColor: '{overlay.select.border.color}',
    borderRadius: '{overlay.select.border.radius}',
    color: '{overlay.select.color}',
    shadow: '{overlay.select.shadow}'
};

export const list: MultiSelectTokenSections.List = {
    padding: '{list.padding}',
    gap: '{list.gap}',
    header: {
        padding: '{list.header.padding}'
    }
};

export const option: MultiSelectTokenSections.Option = {
    focusBackground: '{list.option.focus.background}',
    selectedBackground: '{list.option.selected.background}',
    selectedFocusBackground: '{list.option.selected.focus.background}',
    color: '{list.option.color}',
    focusColor: '{list.option.focus.color}',
    selectedColor: '{list.option.selected.color}',
    selectedFocusColor: '{list.option.selected.focus.color}',
    padding: '{list.option.padding}',
    borderRadius: '{list.option.border.radius}',
    gap: '0.5rem'
};

export const optionGroup: MultiSelectTokenSections.OptionGroup = {
    background: '{list.option.group.background}',
    color: '{list.option.group.color}',
    fontWeight: '{list.option.group.font.weight}',
    padding: '{list.option.group.padding}'
};

export const clearIcon: MultiSelectTokenSections.ClearIcon = {
    color: '{form.field.icon.color}'
};

export const chip: MultiSelectTokenSections.Chip = {
    borderRadius: '{border.radius.sm}'
};

export const emptyMessage: MultiSelectTokenSections.EmptyMessage = {
    padding: '{list.option.padding}'
};

export const colorScheme: MultiSelectTokenSections.ColorScheme = {
    light: {
        root: {
            background: '{surface.0}',
            borderColor: '{surface.300}',
            color: '{surface.900}',
            placeholderColor: '{surface.500}',
            hoverBorderColor: '{secondary.500}',
            focusBorderColor: '{secondary.500}'
        },
        dropdown: {
            color: '{surface.500}'
        },
        overlay: {
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
            selectedFocusColor: '{surface.0}'
        }
    }
};

export default {
    root,
    dropdown,
    overlay,
    list,
    option,
    optionGroup,
    chip,
    clearIcon,
    emptyMessage,
    colorScheme
} satisfies MultiSelectDesignTokens;
