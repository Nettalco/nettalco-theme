import type { ButtonDesignTokens, ButtonTokenSections } from '@primeuix/themes/types/button';

export const root: ButtonTokenSections.Root = {
    borderRadius: '{form.field.border.radius}',
    roundedBorderRadius: '2rem',
    gap: '0.5rem',
    paddingX: '{form.field.padding.x}',
    paddingY: '{form.field.padding.y}',
    iconOnlyWidth: '2.5rem',
    sm: {
        fontSize: '{form.field.sm.font.size}',
        paddingX: '{form.field.sm.padding.x}',
        paddingY: '{form.field.sm.padding.y}',
        iconOnlyWidth: '2rem'
    },
    lg: {
        fontSize: '{form.field.lg.font.size}',
        paddingX: '{form.field.lg.padding.x}',
        paddingY: '{form.field.lg.padding.y}',
        iconOnlyWidth: '3rem'
    },
    label: {
        fontWeight: '500'
    },
    raisedShadow: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        offset: '{focus.ring.offset}'
    },
    badgeSize: '1rem',
    transitionDuration: '{form.field.transition.duration}'
};

export const colorScheme: ButtonTokenSections.ColorScheme = {
    light: {
        root: {
            primary: {
                background: '{primary.color}',
                hoverBackground: '{primary.hover.color}',
                activeBackground: '{primary.active.color}',
                borderColor: '{primary.color}',
                hoverBorderColor: '{primary.hover.color}',
                activeBorderColor: '{primary.active.color}',
                color: '{primary.contrast.color}',
                hoverColor: '{primary.contrast.color}',
                activeColor: '{primary.contrast.color}',
                focusRing: {
                    color: '{focus.ring.color}',
                    shadow: 'none'
                }
            },
            secondary: {
                background: '{surface.100}',
                hoverBackground: '{surface.200}',
                activeBackground: '{surface.300}',
                borderColor: '{surface.100}',
                hoverBorderColor: '{surface.200}',
                activeBorderColor: '{surface.300}',
                color: '{surface.600}',
                hoverColor: '{surface.700}',
                activeColor: '{surface.800}',
                focusRing: {
                    color: '{focus.ring.color}',
                    shadow: 'none'
                }
            },
            info: {
                background: '{info.color}',
                hoverBackground: '{info.hover.color}',
                activeBackground: '{info.active.color}',
                borderColor: '{info.color}',
                hoverBorderColor: '{info.hover.color}',
                activeBorderColor: '{info.active.color}',
                color: '{info.contrast.color}',
                hoverColor: '{info.contrast.color}',
                activeColor: '{info.contrast.color}',
                focusRing: {
                    color: '{focus.ring.color}',
                    shadow: 'none'
                }
            },
            success: {
                background: '{success.color}',
                hoverBackground: '{success.hover.color}',
                activeBackground: '{success.active.color}',
                borderColor: '{success.color}',
                hoverBorderColor: '{success.hover.color}',
                activeBorderColor: '{success.active.color}',
                color: '{success.contrast.color}',
                hoverColor: '{success.contrast.color}',
                activeColor: '{success.contrast.color}',
                focusRing: {
                    color: '{focus.ring.color}',
                    shadow: 'none'
                }
            },
            warn: {
                background: '{warn.color}',
                hoverBackground: '{warn.hover.color}',
                activeBackground: '{warn.active.color}',
                borderColor: '{warn.color}',
                hoverBorderColor: '{warn.hover.color}',
                activeBorderColor: '{warn.active.color}',
                color: '{warn.contrast.color}',
                hoverColor: '{warn.contrast.color}',
                activeColor: '{warn.contrast.color}',
                focusRing: {
                    color: '{focus.ring.color}',
                    shadow: 'none'
                }
            },
            help: {
                background: '{help.color}',
                hoverBackground: '{help.hover.color}',
                activeBackground: '{help.active.color}',
                borderColor: '{help.color}',
                hoverBorderColor: '{help.hover.color}',
                activeBorderColor: '{help.active.color}',
                color: '{help.contrast.color}',
                hoverColor: '{help.contrast.color}',
                activeColor: '{help.contrast.color}',
                focusRing: {
                    color: '{focus.ring.color}',
                    shadow: 'none'
                }
            },
            danger: {
                background: '{error.color}',
                hoverBackground: '{error.hover.color}',
                activeBackground: '{error.active.color}',
                borderColor: '{error.color}',
                hoverBorderColor: '{error.hover.color}',
                activeBorderColor: '{error.active.color}',
                color: '{error.contrast.color}',
                hoverColor: '{error.contrast.color}',
                activeColor: '{error.contrast.color}',
                focusRing: {
                    color: '{focus.ring.color}',
                    shadow: 'none'
                }
            },
            contrast: {
                background: '{surface.950}',
                hoverBackground: '{surface.900}',
                activeBackground: '{surface.800}',
                borderColor: '{surface.950}',
                hoverBorderColor: '{surface.900}',
                activeBorderColor: '{surface.800}',
                color: '{surface.0}',
                hoverColor: '{surface.0}',
                activeColor: '{surface.0}',
                focusRing: {
                    color: '{focus.ring.color}',
                    shadow: 'none'
                }
            }
        },
        // DECISIÓN DE INTERFAZ. Aura pinta el borde del botón outlined con el
        // nivel 200 (1,5-1,8:1 sobre blanco) y la etiqueta con el 500. El borde
        // es lo único que identifica al botón, así que necesita 3:1 (WCAG
        // 1.4.11) y sube al 500; la etiqueta necesita 4,5:1 y baja al 600.
        // Sin esto, el outlined de "info" quedaba en 3,81:1 y el de "warn" en
        // 3,23:1, ambos por debajo del mínimo para texto.
        outlined: {
            primary: {
                hoverBackground: '{primary.50}',
                activeBackground: '{primary.100}',
                borderColor: '{primary.500}',
                color: '{primary.color}'
            },
            secondary: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                borderColor: '{surface.500}',
                color: '{surface.600}'
            },
            success: {
                hoverBackground: '{success.50}',
                activeBackground: '{success.100}',
                borderColor: '{success.500}',
                color: '{success.600}'
            },
            info: {
                hoverBackground: '{info.50}',
                activeBackground: '{info.100}',
                borderColor: '{info.500}',
                color: '{info.600}'
            },
            warn: {
                hoverBackground: '{warn.50}',
                activeBackground: '{warn.100}',
                borderColor: '{warn.500}',
                color: '{warn.600}'
            },
            help: {
                hoverBackground: '{help.50}',
                activeBackground: '{help.100}',
                borderColor: '{help.500}',
                color: '{help.600}'
            },
            danger: {
                hoverBackground: '{error.50}',
                activeBackground: '{error.100}',
                borderColor: '{error.500}',
                color: '{error.600}'
            },
            contrast: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                borderColor: '{surface.700}',
                color: '{surface.950}'
            },
            plain: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                borderColor: '{surface.500}',
                color: '{surface.700}'
            }
        },
        text: {
            primary: {
                hoverBackground: '{primary.50}',
                activeBackground: '{primary.100}',
                color: '{primary.color}'
            },
            // DECISIÓN DE INTERFAZ: mismo motivo que en outlined, la etiqueta
            // del botón de texto baja del nivel 500 al 600 para llegar a 4,5:1.
            secondary: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                color: '{surface.600}'
            },
            success: {
                hoverBackground: '{success.50}',
                activeBackground: '{success.100}',
                color: '{success.600}'
            },
            info: {
                hoverBackground: '{info.50}',
                activeBackground: '{info.100}',
                color: '{info.600}'
            },
            warn: {
                hoverBackground: '{warn.50}',
                activeBackground: '{warn.100}',
                color: '{warn.600}'
            },
            help: {
                hoverBackground: '{help.50}',
                activeBackground: '{help.100}',
                color: '{help.600}'
            },
            danger: {
                hoverBackground: '{error.50}',
                activeBackground: '{error.100}',
                color: '{error.600}'
            },
            contrast: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                color: '{surface.950}'
            },
            plain: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                color: '{surface.700}'
            }
        },
        link: {
            color: '{primary.color}',
            hoverColor: '{primary.color}',
            activeColor: '{primary.color}'
        }
    },
    dark: {
        root: {
            primary: {
                background: '{primary.color}',
                hoverBackground: '{primary.hover.color}',
                activeBackground: '{primary.active.color}',
                borderColor: '{primary.color}',
                hoverBorderColor: '{primary.hover.color}',
                activeBorderColor: '{primary.active.color}',
                color: '{primary.contrast.color}',
                hoverColor: '{primary.contrast.color}',
                activeColor: '{primary.contrast.color}',
                focusRing: {
                    color: '{focus.ring.color}',
                    shadow: 'none'
                }
            },
            secondary: {
                background: '{surface.800}',
                hoverBackground: '{surface.700}',
                activeBackground: '{surface.600}',
                borderColor: '{surface.800}',
                hoverBorderColor: '{surface.700}',
                activeBorderColor: '{surface.600}',
                color: '{surface.300}',
                hoverColor: '{surface.200}',
                activeColor: '{surface.100}',
                focusRing: {
                    color: '{focus.ring.color}',
                    shadow: 'none'
                }
            },
            info: {
                background: '{info.color}',
                hoverBackground: '{info.hover.color}',
                activeBackground: '{info.active.color}',
                borderColor: '{info.color}',
                hoverBorderColor: '{info.hover.color}',
                activeBorderColor: '{info.active.color}',
                color: '{info.contrast.color}',
                hoverColor: '{info.contrast.color}',
                activeColor: '{info.contrast.color}',
                focusRing: {
                    color: '{focus.ring.color}',
                    shadow: 'none'
                }
            },
            success: {
                background: '{success.color}',
                hoverBackground: '{success.hover.color}',
                activeBackground: '{success.active.color}',
                borderColor: '{success.color}',
                hoverBorderColor: '{success.hover.color}',
                activeBorderColor: '{success.active.color}',
                color: '{success.contrast.color}',
                hoverColor: '{success.contrast.color}',
                activeColor: '{success.contrast.color}',
                focusRing: {
                    color: '{focus.ring.color}',
                    shadow: 'none'
                }
            },
            warn: {
                background: '{warn.color}',
                hoverBackground: '{warn.hover.color}',
                activeBackground: '{warn.active.color}',
                borderColor: '{warn.color}',
                hoverBorderColor: '{warn.hover.color}',
                activeBorderColor: '{warn.active.color}',
                color: '{warn.contrast.color}',
                hoverColor: '{warn.contrast.color}',
                activeColor: '{warn.contrast.color}',
                focusRing: {
                    color: '{focus.ring.color}',
                    shadow: 'none'
                }
            },
            help: {
                background: '{help.color}',
                hoverBackground: '{help.hover.color}',
                activeBackground: '{help.active.color}',
                borderColor: '{help.color}',
                hoverBorderColor: '{help.hover.color}',
                activeBorderColor: '{help.active.color}',
                color: '{help.contrast.color}',
                hoverColor: '{help.contrast.color}',
                activeColor: '{help.contrast.color}',
                focusRing: {
                    color: '{focus.ring.color}',
                    shadow: 'none'
                }
            },
            danger: {
                background: '{error.color}',
                hoverBackground: '{error.hover.color}',
                activeBackground: '{error.active.color}',
                borderColor: '{error.color}',
                hoverBorderColor: '{error.hover.color}',
                activeBorderColor: '{error.active.color}',
                color: '{error.contrast.color}',
                hoverColor: '{error.contrast.color}',
                activeColor: '{error.contrast.color}',
                focusRing: {
                    color: '{focus.ring.color}',
                    shadow: 'none'
                }
            },
            contrast: {
                background: '{surface.0}',
                hoverBackground: '{surface.100}',
                activeBackground: '{surface.200}',
                borderColor: '{surface.0}',
                hoverBorderColor: '{surface.100}',
                activeBorderColor: '{surface.200}',
                color: '{surface.950}',
                hoverColor: '{surface.950}',
                activeColor: '{surface.950}',
                focusRing: {
                    color: '{focus.ring.color}',
                    shadow: 'none'
                }
            }
        },
        outlined: {
            primary: {
                hoverBackground: 'color-mix(in srgb, {primary.color}, transparent 96%)',
                activeBackground: 'color-mix(in srgb, {primary.color}, transparent 84%)',
                borderColor: '{primary.700}',
                color: '{primary.color}'
            },
            secondary: {
                hoverBackground: 'rgba(255,255,255,0.04)',
                activeBackground: 'rgba(255,255,255,0.16)',
                borderColor: '{surface.700}',
                color: '{surface.400}'
            },
            success: {
                hoverBackground: 'color-mix(in srgb, {success.color}, transparent 96%)',
                activeBackground: 'color-mix(in srgb, {success.color}, transparent 84%)',
                borderColor: '{success.700}',
                color: '{success.color}'
            },
            info: {
                hoverBackground: 'color-mix(in srgb, {info.color}, transparent 96%)',
                activeBackground: 'color-mix(in srgb, {info.color}, transparent 84%)',
                borderColor: '{info.700}',
                color: '{info.color}'
            },
            warn: {
                hoverBackground: 'color-mix(in srgb, {warn.color}, transparent 96%)',
                activeBackground: 'color-mix(in srgb, {warn.color}, transparent 84%)',
                borderColor: '{warn.700}',
                color: '{warn.color}'
            },
            help: {
                hoverBackground: 'color-mix(in srgb, {help.color}, transparent 96%)',
                activeBackground: 'color-mix(in srgb, {help.color}, transparent 84%)',
                borderColor: '{help.700}',
                color: '{help.color}'
            },
            danger: {
                hoverBackground: 'color-mix(in srgb, {error.color}, transparent 96%)',
                activeBackground: 'color-mix(in srgb, {error.color}, transparent 84%)',
                borderColor: '{error.700}',
                color: '{error.color}'
            },
            contrast: {
                hoverBackground: '{surface.800}',
                activeBackground: '{surface.700}',
                borderColor: '{surface.500}',
                color: '{surface.0}'
            },
            plain: {
                hoverBackground: '{surface.800}',
                activeBackground: '{surface.700}',
                borderColor: '{surface.600}',
                color: '{surface.0}'
            }
        },
        text: {
            primary: {
                hoverBackground: 'color-mix(in srgb, {primary.color}, transparent 96%)',
                activeBackground: 'color-mix(in srgb, {primary.color}, transparent 84%)',
                color: '{primary.color}'
            },
            secondary: {
                hoverBackground: '{surface.800}',
                activeBackground: '{surface.700}',
                color: '{surface.400}'
            },
            success: {
                hoverBackground: 'color-mix(in srgb, {success.color}, transparent 96%)',
                activeBackground: 'color-mix(in srgb, {success.color}, transparent 84%)',
                color: '{success.color}'
            },
            info: {
                hoverBackground: 'color-mix(in srgb, {info.color}, transparent 96%)',
                activeBackground: 'color-mix(in srgb, {info.color}, transparent 84%)',
                color: '{info.color}'
            },
            warn: {
                hoverBackground: 'color-mix(in srgb, {warn.color}, transparent 96%)',
                activeBackground: 'color-mix(in srgb, {warn.color}, transparent 84%)',
                color: '{warn.color}'
            },
            help: {
                hoverBackground: 'color-mix(in srgb, {help.color}, transparent 96%)',
                activeBackground: 'color-mix(in srgb, {help.color}, transparent 84%)',
                color: '{help.color}'
            },
            danger: {
                hoverBackground: 'color-mix(in srgb, {error.color}, transparent 96%)',
                activeBackground: 'color-mix(in srgb, {error.color}, transparent 84%)',
                color: '{error.color}'
            },
            contrast: {
                hoverBackground: '{surface.800}',
                activeBackground: '{surface.700}',
                color: '{surface.0}'
            },
            plain: {
                hoverBackground: '{surface.800}',
                activeBackground: '{surface.700}',
                color: '{surface.0}'
            }
        },
        link: {
            color: '{primary.color}',
            hoverColor: '{primary.color}',
            activeColor: '{primary.color}'
        }
    }
};

export default {
    root,
    colorScheme
} satisfies ButtonDesignTokens;
