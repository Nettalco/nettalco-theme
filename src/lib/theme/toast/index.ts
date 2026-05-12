import type { ToastDesignTokens, ToastTokenSections } from '@primeuix/themes/types/toast';

/**
 * Configuración de Toast - Nettalco
 *
 * Colores del preset usados:
 * - Info: {info.50}/{info.500}/{info.900}
 * - Success: {success.50}/{success.500}/{success.900}
 * - Warn: {warn.50}/{warn.500}/{warn.900}
 * - Error: {error.50}/{error.500}/{error.900}
 * - Secondary: {secondary.50}/{secondary.500}/{secondary.900}
 * - Contrast: {primary.500} #082853 (navy blue)
 *
 * Solo light mode - sin dark mode.
 */

export const root: ToastTokenSections.Root = {
    width: '25rem',
    borderRadius: '{content.border.radius}',
    borderWidth: '1px',
    transitionDuration: '{transition.duration}'
};

export const icon: ToastTokenSections.Icon = {
    size: '1.125rem'
};

export const content: ToastTokenSections.Content = {
    padding: '{overlay.popover.padding}',
    gap: '0.5rem'
};

export const text: ToastTokenSections.Text = {
    gap: '0.5rem'
};

export const summary: ToastTokenSections.Summary = {
    fontWeight: '500',
    fontSize: '1rem'
};

export const detail: ToastTokenSections.Detail = {
    fontWeight: '500',
    fontSize: '0.875rem'
};

export const closeButton: ToastTokenSections.CloseButton = {
    width: '1.75rem',
    height: '1.75rem',
    borderRadius: '50%',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        offset: '{focus.ring.offset}'
    }
};

export const closeIcon: ToastTokenSections.CloseIcon = {
    size: '1rem'
};

export const colorScheme: ToastTokenSections.ColorScheme = {
    light: {
        root: {
            blur: '1.5px'
        },
        info: {
            background: '{info.50}',
            borderColor: '{info.500}',
            color: '{info.900}',
            detailColor: '{info.700}',
            shadow: '0px 4px 8px 0px rgba(102, 166, 251, 0.12)',
            closeButton: {
                hoverBackground: '{info.100}',
                focusRing: {
                    color: '{info.600}',
                    shadow: 'none'
                }
            }
        },
        success: {
            background: '{success.50}',
            borderColor: '{success.500}',
            color: '{success.900}',
            detailColor: '{success.700}',
            shadow: '0px 4px 8px 0px rgba(43, 165, 205, 0.12)',
            closeButton: {
                hoverBackground: '{success.100}',
                focusRing: {
                    color: '{success.600}',
                    shadow: 'none'
                }
            }
        },
        warn: {
            background: '{warn.50}',
            borderColor: '{warn.500}',
            color: '{warn.900}',
            detailColor: '{warn.700}',
            shadow: '0px 4px 8px 0px rgba(213, 121, 82, 0.12)',
            closeButton: {
                hoverBackground: '{warn.100}',
                focusRing: {
                    color: '{warn.600}',
                    shadow: 'none'
                }
            }
        },
        error: {
            background: '{error.50}',
            borderColor: '{error.500}',
            color: '{error.900}',
            detailColor: '{error.700}',
            shadow: '0px 4px 8px 0px rgba(220, 38, 38, 0.12)',
            closeButton: {
                hoverBackground: '{error.100}',
                focusRing: {
                    color: '{error.600}',
                    shadow: 'none'
                }
            }
        },
        secondary: {
            background: '{secondary.50}',
            borderColor: '{secondary.500}',
            color: '{secondary.900}',
            detailColor: '{secondary.700}',
            shadow: '0px 4px 8px 0px rgba(63, 140, 249, 0.12)',
            closeButton: {
                hoverBackground: '{secondary.100}',
                focusRing: {
                    color: '{secondary.600}',
                    shadow: 'none'
                }
            }
        },
        contrast: {
            background: '{primary.500}',
            borderColor: '{primary.900}',
            color: '{surface.0}',
            detailColor: '{surface.0}',
            shadow: '0px 4px 8px 0px rgba(8, 40, 83, 0.24)',
            closeButton: {
                hoverBackground: '{primary.900}',
                focusRing: {
                    color: '{surface.0}',
                    shadow: 'none'
                }
            }
        }
    }
};

export default {
    root,
    icon,
    content,
    text,
    summary,
    detail,
    closeButton,
    closeIcon,
    colorScheme
} satisfies ToastDesignTokens;
