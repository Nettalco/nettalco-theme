import type { ToastDesignTokens, ToastTokenSections } from '@primeuix/themes/types/toast';

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
            background: 'color-mix(in srgb, {info.50}, transparent 5%)',
            borderColor: '{info.200}',
            color: '{info.600}',
            detailColor: '{surface.700}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {info.500}, transparent 96%)',
            closeButton: {
                hoverBackground: '{info.100}',
                focusRing: {
                    color: '{info.600}',
                    shadow: 'none'
                }
            }
        },
        success: {
            background: 'color-mix(in srgb, {success.50}, transparent 5%)',
            borderColor: '{success.200}',
            color: '{success.600}',
            detailColor: '{surface.700}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {success.500}, transparent 96%)',
            closeButton: {
                hoverBackground: '{success.100}',
                focusRing: {
                    color: '{success.600}',
                    shadow: 'none'
                }
            }
        },
        warn: {
            background: 'color-mix(in srgb,{warn.50}, transparent 5%)',
            borderColor: '{warn.200}',
            color: '{warn.600}',
            detailColor: '{surface.700}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {warn.500}, transparent 96%)',
            closeButton: {
                hoverBackground: '{warn.100}',
                focusRing: {
                    color: '{warn.600}',
                    shadow: 'none'
                }
            }
        },
        error: {
            background: 'color-mix(in srgb, {error.50}, transparent 5%)',
            borderColor: '{error.200}',
            color: '{error.600}',
            detailColor: '{surface.700}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {error.500}, transparent 96%)',
            closeButton: {
                hoverBackground: '{error.100}',
                focusRing: {
                    color: '{error.600}',
                    shadow: 'none'
                }
            }
        },
        secondary: {
            background: '{surface.100}',
            borderColor: '{surface.200}',
            color: '{surface.600}',
            detailColor: '{surface.700}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)',
            closeButton: {
                hoverBackground: '{surface.200}',
                focusRing: {
                    color: '{surface.600}',
                    shadow: 'none'
                }
            }
        },
        contrast: {
            background: '{surface.900}',
            borderColor: '{surface.950}',
            color: '{surface.50}',
            detailColor: '{surface.0}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)',
            closeButton: {
                hoverBackground: '{surface.800}',
                focusRing: {
                    color: '{surface.50}',
                    shadow: 'none'
                }
            }
        }
    },
    dark: {
        root: {
            blur: '10px'
        },
        info: {
            background: 'color-mix(in srgb, {info.500}, transparent 84%)',
            borderColor: 'color-mix(in srgb, {info.700}, transparent 64%)',
            color: '{info.500}',
            detailColor: '{surface.0}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {info.500}, transparent 96%)',
            closeButton: {
                hoverBackground: 'rgba(255, 255, 255, 0.05)',
                focusRing: {
                    color: '{info.500}',
                    shadow: 'none'
                }
            }
        },
        success: {
            background: 'color-mix(in srgb, {success.500}, transparent 84%)',
            borderColor: 'color-mix(in srgb, {success.700}, transparent 64%)',
            color: '{success.500}',
            detailColor: '{surface.0}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {success.500}, transparent 96%)',
            closeButton: {
                hoverBackground: 'rgba(255, 255, 255, 0.05)',
                focusRing: {
                    color: '{success.500}',
                    shadow: 'none'
                }
            }
        },
        warn: {
            background: 'color-mix(in srgb, {warn.500}, transparent 84%)',
            borderColor: 'color-mix(in srgb, {warn.700}, transparent 64%)',
            color: '{warn.500}',
            detailColor: '{surface.0}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {warn.500}, transparent 96%)',
            closeButton: {
                hoverBackground: 'rgba(255, 255, 255, 0.05)',
                focusRing: {
                    color: '{warn.500}',
                    shadow: 'none'
                }
            }
        },
        error: {
            background: 'color-mix(in srgb, {error.500}, transparent 84%)',
            borderColor: 'color-mix(in srgb, {error.700}, transparent 64%)',
            color: '{error.500}',
            detailColor: '{surface.0}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {error.500}, transparent 96%)',
            closeButton: {
                hoverBackground: 'rgba(255, 255, 255, 0.05)',
                focusRing: {
                    color: '{error.500}',
                    shadow: 'none'
                }
            }
        },
        secondary: {
            background: '{surface.800}',
            borderColor: '{surface.700}',
            color: '{surface.300}',
            detailColor: '{surface.0}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)',
            closeButton: {
                hoverBackground: '{surface.700}',
                focusRing: {
                    color: '{surface.300}',
                    shadow: 'none'
                }
            }
        },
        contrast: {
            background: '{surface.0}',
            borderColor: '{surface.100}',
            color: '{surface.950}',
            detailColor: '{surface.950}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)',
            closeButton: {
                hoverBackground: '{surface.100}',
                focusRing: {
                    color: '{surface.950}',
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
