import type { MessageDesignTokens, MessageTokenSections } from '@primeuix/themes/types/message';

export const root: MessageTokenSections.Root = {
    borderRadius: '{content.border.radius}',
    borderWidth: '1px',
    transitionDuration: '{transition.duration}'
};

export const content: MessageTokenSections.Content = {
    padding: '0.5rem 0.75rem',
    gap: '0.5rem',
    sm: {
        padding: '0.375rem 0.625rem'
    },
    lg: {
        padding: '0.625rem 0.875rem'
    }
};

export const text: MessageTokenSections.Text = {
    fontSize: '1rem',
    fontWeight: '500',
    sm: {
        fontSize: '0.875rem'
    },
    lg: {
        fontSize: '1.125rem'
    }
};

export const icon: MessageTokenSections.Icon = {
    size: '1.125rem',
    sm: {
        size: '1rem'
    },
    lg: {
        size: '1.25rem'
    }
};

export const closeButton: MessageTokenSections.CloseButton = {
    width: '1.75rem',
    height: '1.75rem',
    borderRadius: '50%',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        offset: '{focus.ring.offset}'
    }
};

export const closeIcon: MessageTokenSections.CloseIcon = {
    size: '1rem',
    sm: {
        size: '0.875rem'
    },
    lg: {
        size: '1.125rem'
    }
};

export const outlined: MessageTokenSections.Outlined = {
    root: {
        borderWidth: '1px'
    }
};

export const simple: MessageTokenSections.Simple = {
    content: {
        padding: '0'
    }
};

export const colorScheme: MessageTokenSections.ColorScheme = {
    light: {
        info: {
            background: 'color-mix(in srgb, {info.50}, transparent 5%)',
            borderColor: '{info.200}',
            color: '{info.600}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {info.500}, transparent 96%)',
            closeButton: {
                hoverBackground: '{info.100}',
                focusRing: {
                    color: '{info.600}',
                    shadow: 'none'
                }
            },
            outlined: {
                color: '{info.600}',
                borderColor: '{info.600}'
            },
            simple: {
                color: '{info.600}'
            }
        },
        success: {
            background: 'color-mix(in srgb, {success.50}, transparent 5%)',
            borderColor: '{success.200}',
            color: '{success.600}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {success.500}, transparent 96%)',
            closeButton: {
                hoverBackground: '{success.100}',
                focusRing: {
                    color: '{success.600}',
                    shadow: 'none'
                }
            },
            outlined: {
                color: '{success.600}',
                borderColor: '{success.600}'
            },
            simple: {
                color: '{success.600}'
            }
        },
        warn: {
            background: 'color-mix(in srgb,{warn.50}, transparent 5%)',
            borderColor: '{warn.200}',
            color: '{warn.600}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {warn.500}, transparent 96%)',
            closeButton: {
                hoverBackground: '{warn.100}',
                focusRing: {
                    color: '{warn.600}',
                    shadow: 'none'
                }
            },
            outlined: {
                color: '{warn.600}',
                borderColor: '{warn.600}'
            },
            simple: {
                color: '{warn.600}'
            }
        },
        error: {
            background: 'color-mix(in srgb, {error.50}, transparent 5%)',
            borderColor: '{error.200}',
            color: '{error.600}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {error.500}, transparent 96%)',
            closeButton: {
                hoverBackground: '{error.100}',
                focusRing: {
                    color: '{error.600}',
                    shadow: 'none'
                }
            },
            outlined: {
                color: '{error.600}',
                borderColor: '{error.600}'
            },
            simple: {
                color: '{error.600}'
            }
        },
        secondary: {
            background: '{surface.100}',
            borderColor: '{surface.200}',
            color: '{surface.600}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)',
            closeButton: {
                hoverBackground: '{surface.200}',
                focusRing: {
                    color: '{surface.600}',
                    shadow: 'none'
                }
            },
            outlined: {
                color: '{surface.500}',
                borderColor: '{surface.500}'
            },
            simple: {
                color: '{surface.500}'
            }
        },
        contrast: {
            background: '{surface.900}',
            borderColor: '{surface.950}',
            color: '{surface.50}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)',
            closeButton: {
                hoverBackground: '{surface.800}',
                focusRing: {
                    color: '{surface.50}',
                    shadow: 'none'
                }
            },
            outlined: {
                color: '{surface.950}',
                borderColor: '{surface.950}'
            },
            simple: {
                color: '{surface.950}'
            }
        }
    },
    dark: {
        info: {
            background: 'color-mix(in srgb, {info.500}, transparent 84%)',
            borderColor: 'color-mix(in srgb, {info.700}, transparent 64%)',
            color: '{info.500}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {info.500}, transparent 96%)',
            closeButton: {
                hoverBackground: 'rgba(255, 255, 255, 0.05)',
                focusRing: {
                    color: '{info.500}',
                    shadow: 'none'
                }
            },
            outlined: {
                color: '{info.500}',
                borderColor: '{info.500}'
            },
            simple: {
                color: '{info.500}'
            }
        },
        success: {
            background: 'color-mix(in srgb, {success.500}, transparent 84%)',
            borderColor: 'color-mix(in srgb, {success.700}, transparent 64%)',
            color: '{success.500}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {success.500}, transparent 96%)',
            closeButton: {
                hoverBackground: 'rgba(255, 255, 255, 0.05)',
                focusRing: {
                    color: '{success.500}',
                    shadow: 'none'
                }
            },
            outlined: {
                color: '{success.500}',
                borderColor: '{success.500}'
            },
            simple: {
                color: '{success.500}'
            }
        },
        warn: {
            background: 'color-mix(in srgb, {warn.500}, transparent 84%)',
            borderColor: 'color-mix(in srgb, {warn.700}, transparent 64%)',
            color: '{warn.500}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {warn.500}, transparent 96%)',
            closeButton: {
                hoverBackground: 'rgba(255, 255, 255, 0.05)',
                focusRing: {
                    color: '{warn.500}',
                    shadow: 'none'
                }
            },
            outlined: {
                color: '{warn.500}',
                borderColor: '{warn.500}'
            },
            simple: {
                color: '{warn.500}'
            }
        },
        error: {
            background: 'color-mix(in srgb, {error.500}, transparent 84%)',
            borderColor: 'color-mix(in srgb, {error.700}, transparent 64%)',
            color: '{error.500}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {error.500}, transparent 96%)',
            closeButton: {
                hoverBackground: 'rgba(255, 255, 255, 0.05)',
                focusRing: {
                    color: '{error.500}',
                    shadow: 'none'
                }
            },
            outlined: {
                color: '{error.500}',
                borderColor: '{error.500}'
            },
            simple: {
                color: '{error.500}'
            }
        },
        secondary: {
            background: '{surface.800}',
            borderColor: '{surface.700}',
            color: '{surface.300}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)',
            closeButton: {
                hoverBackground: '{surface.700}',
                focusRing: {
                    color: '{surface.300}',
                    shadow: 'none'
                }
            },
            outlined: {
                color: '{surface.400}',
                borderColor: '{surface.400}'
            },
            simple: {
                color: '{surface.400}'
            }
        },
        contrast: {
            background: '{surface.0}',
            borderColor: '{surface.100}',
            color: '{surface.950}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)',
            closeButton: {
                hoverBackground: '{surface.100}',
                focusRing: {
                    color: '{surface.950}',
                    shadow: 'none'
                }
            },
            outlined: {
                color: '{surface.0}',
                borderColor: '{surface.0}'
            },
            simple: {
                color: '{surface.0}'
            }
        }
    }
};

export default {
    root,
    content,
    text,
    icon,
    closeButton,
    closeIcon,
    outlined,
    simple,
    colorScheme
} satisfies MessageDesignTokens;
