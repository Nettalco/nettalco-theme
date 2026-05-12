import type { AccordionDesignTokens, AccordionTokenSections } from '@primeuix/themes/types/accordion';

export const root: AccordionTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const panel: AccordionTokenSections.Panel = {
    borderWidth: '0 0 1px 0',
    borderColor: '{surface.border}'
};

export const header: AccordionTokenSections.Header = {
    color: '{primary.color}',
    hoverColor: '{primary.color}',
    activeColor: '{primary.color}',
    activeHoverColor: '{primary.color}',
    padding: '1.125rem',
    fontWeight: '600',
    borderRadius: '0',
    borderWidth: '0',
    borderColor: '{surface.border}',
    background: '{content.background}',
    hoverBackground: '{highlight.background}',
    activeBackground: '{highlight.background}',
    activeHoverBackground: '{highlight.background}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '-1px',
        shadow: '{focus.ring.shadow}'
    },
    toggleIcon: {
        color: '{primary.color}',
        hoverColor: '{primary.color}',
        activeColor: '{primary.color}',
        activeHoverColor: '{primary.color}'
    },
    first: {
        topBorderRadius: '{content.border.radius}',
        borderWidth: '0'
    },
    last: {
        bottomBorderRadius: '{content.border.radius}',
        activeBottomBorderRadius: '0'
    }
};

export const content: AccordionTokenSections.Content = {
    borderWidth: '0',
    borderColor: '{surface.border}',
    background: '{highlight.background}',
    color: '{text.color}',
    padding: '0 1.125rem 1.125rem 1.125rem'
};

export default {
    root,
    panel,
    header,
    content
} satisfies AccordionDesignTokens;