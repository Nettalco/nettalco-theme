import type { ButtonDesignTokens, ButtonTokenSections } from '@primeuix/themes/types/button';

/**
 * Configuración de Botones - Nettalco
 *
 * Branding v2 - Los tokens se adaptan automáticamente según el modo:
 * 
 * Light mode:
 * - Primary: #112A46 (Navy Oscuro) → #22436F → #2B5DA1
 * - Secondary: #3F8CF9 (Azul Cielo) → #5A9FFC → #5398F8
 * - Success: #2BA5CD (Cyan) → #45B1CE → #3CAAC8
 * - Export: #09718A (Cyan Oscuro) → #258FA6 → #1A859D
 * - Warning: #D57952 → #D78158 → #DE956A
 * - Info: #66A6FB → #7CB2FA → #B4D3FD
 * - Help: #8B5CF6 (Púrpura) → #7C3AED → #6D28D9
 * - Contrast: #1F2937 (Gris Oscuro) → #374151 → #4B5563
 * 
 * Dark mode:
 * - Primary: #EDF4FF (Azul muy claro) → #EEF4FF → #336DD9
 * - Secondary: #3A72E0 → #2B5FBC → #1F498E
 * - Success: #6ECBCD → #19819D → #0C566F
 * - Export: #52B8D0 → #3C9EB5 → #248297
 * - Warning: #F4B33C → #F2A61E → #CA8825
 * - Info: #69A7ED → #5389DB → #4775BF
 * - Help: #A78BFA (Púrpura Claro) → #C4B5FD → #DDD6FE
 * - Contrast: #F9FAFB (Gris Claro) → #F3F4F6 → #E5E7EB
 * 
 * Los tokens semánticos ({primary.color}, etc.) se resuelven automáticamente
 * según el colorScheme activo definido en mypreset.ts
 */

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
                hoverBackground: '{primary.hoverColor}',
                activeBackground: '{primary.activeColor}',
                borderColor: '{primary.color}',
                hoverBorderColor: '{primary.hoverColor}',
                activeBorderColor: '{primary.activeColor}',
                color: '{primary.contrastColor}',
                hoverColor: '{primary.contrastColor}',
                activeColor: '{primary.contrastColor}',
                focusRing: {
                    color: '{primary.color}',
                    shadow: 'none'
                }
            },
            secondary: {
                background: '{secondary.color}',
                hoverBackground: '{secondary.hoverColor}',
                activeBackground: '{secondary.activeColor}',
                borderColor: '{secondary.color}',
                hoverBorderColor: '{secondary.hoverColor}',
                activeBorderColor: '{secondary.activeColor}',
                color: '{secondary.contrastColor}',
                hoverColor: '{secondary.contrastColor}',
                activeColor: '{secondary.contrastColor}',
                focusRing: {
                    color: '{secondary.color}',
                    shadow: 'none'
                }
            },
            info: {
                background: '{info.color}',
                hoverBackground: '{info.hoverColor}',
                activeBackground: '{info.activeColor}',
                borderColor: '{info.color}',
                hoverBorderColor: '{info.hoverColor}',
                activeBorderColor: '{info.activeColor}',
                color: '{info.contrastColor}',
                hoverColor: '{info.contrastColor}',
                activeColor: '{info.contrastColor}',
                focusRing: {
                    color: '{info.color}',
                    shadow: 'none'
                }
            },
            success: {
                background: '{success.color}',
                hoverBackground: '{success.hoverColor}',
                activeBackground: '{success.activeColor}',
                borderColor: '{success.color}',
                hoverBorderColor: '{success.hoverColor}',
                activeBorderColor: '{success.activeColor}',
                color: '{success.contrastColor}',
                hoverColor: '{success.contrastColor}',
                activeColor: '{success.contrastColor}',
                focusRing: {
                    color: '{success.color}',
                    shadow: 'none'
                }
            },
            warn: {
                background: '{warn.color}',
                hoverBackground: '{warn.hoverColor}',
                activeBackground: '{warn.activeColor}',
                borderColor: '{warn.color}',
                hoverBorderColor: '{warn.hoverColor}',
                activeBorderColor: '{warn.activeColor}',
                color: '{warn.contrastColor}',
                hoverColor: '{warn.contrastColor}',
                activeColor: '{warn.contrastColor}',
                focusRing: {
                    color: '{warn.color}',
                    shadow: 'none'
                }
            },
            help: {
                background: '{help.color}',
                hoverBackground: '{help.hoverColor}',
                activeBackground: '{help.activeColor}',
                borderColor: '{help.color}',
                hoverBorderColor: '{help.hoverColor}',
                activeBorderColor: '{help.activeColor}',
                color: '{help.contrastColor}',
                hoverColor: '{help.contrastColor}',
                activeColor: '{help.contrastColor}',
                focusRing: {
                    color: '{help.color}',
                    shadow: 'none'
                }
            },
            danger: {
                background: '{error.color}',
                hoverBackground: '{error.hoverColor}',
                activeBackground: '{error.activeColor}',
                borderColor: '{error.color}',
                hoverBorderColor: '{error.hoverColor}',
                activeBorderColor: '{error.activeColor}',
                color: '{error.contrastColor}',
                hoverColor: '{error.contrastColor}',
                activeColor: '{error.contrastColor}',
                focusRing: {
                    color: '{error.color}',
                    shadow: 'none'
                }
            },
            contrast: {
                background: '{contrast.color}',
                hoverBackground: '{contrast.hoverColor}',
                activeBackground: '{contrast.activeColor}',
                borderColor: '{contrast.color}',
                hoverBorderColor: '{contrast.hoverColor}',
                activeBorderColor: '{contrast.activeColor}',
                color: '{contrast.contrastColor}',
                hoverColor: '{contrast.contrastColor}',
                activeColor: '{contrast.contrastColor}',
                focusRing: {
                    color: '{contrast.color}',
                    shadow: 'none'
                }
            }
        },
        outlined: {
            primary: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                borderColor: '{primary.color}',
                color: '{primary.color}'
            },
            secondary: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                borderColor: '{secondary.color}',
                color: '{secondary.color}'
            },
            success: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                borderColor: '{success.color}',
                color: '{success.color}'
            },
            info: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                borderColor: '{info.color}',
                color: '{info.color}'
            },
            warn: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                borderColor: '{warn.color}',
                color: '{warn.color}'
            },
            help: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                borderColor: '{help.color}',
                color: '{help.color}'
            },
            danger: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                borderColor: '{error.color}',
                color: '{error.color}'
            },
            contrast: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                borderColor: '{contrast.color}',
                color: '{contrast.color}'
            },
            plain: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                borderColor: '{surface.border}',
                color: '{text.color}'
            }
        },
        text: {
            primary: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                color: '{primary.color}'
            },
            secondary: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                color: '{secondary.color}'
            },
            success: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                color: '{success.color}'
            },
            info: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                color: '{info.color}'
            },
            warn: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                color: '{warn.color}'
            },
            help: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                color: '{help.color}'
            },
            danger: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                color: '{error.color}'
            },
            contrast: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                color: '{contrast.color}'
            },
            plain: {
                hoverBackground: '{surface.50}',
                activeBackground: '{surface.100}',
                color: '{text.color}'
            }
        },
        link: {
            color: '{primary.color}',
            hoverColor: '{primary.hoverColor}',
            activeColor: '{primary.activeColor}'
        }
    },
    dark: {
        root: {
            primary: {
                background: '{primary.color}',
                hoverBackground: '{primary.hoverColor}',
                activeBackground: '{primary.activeColor}',
                borderColor: '{primary.color}',
                hoverBorderColor: '{primary.hoverColor}',
                activeBorderColor: '{primary.activeColor}',
                color: '{primary.contrastColor}',
                hoverColor: '{primary.contrastColor}',
                activeColor: '{primary.contrastColor}',
                focusRing: {
                    color: '{primary.color}',
                    shadow: 'none'
                }
            },
            secondary: {
                background: '{secondary.color}',
                hoverBackground: '{secondary.hoverColor}',
                activeBackground: '{secondary.activeColor}',
                borderColor: '{secondary.color}',
                hoverBorderColor: '{secondary.hoverColor}',
                activeBorderColor: '{secondary.activeColor}',
                color: '{secondary.contrastColor}',
                hoverColor: '{secondary.contrastColor}',
                activeColor: '{secondary.contrastColor}',
                focusRing: {
                    color: '{secondary.color}',
                    shadow: 'none'
                }
            },
            info: {
                background: '{info.color}',
                hoverBackground: '{info.hoverColor}',
                activeBackground: '{info.activeColor}',
                borderColor: '{info.color}',
                hoverBorderColor: '{info.hoverColor}',
                activeBorderColor: '{info.activeColor}',
                color: '{info.contrastColor}',
                hoverColor: '{info.contrastColor}',
                activeColor: '{info.contrastColor}',
                focusRing: {
                    color: '{info.color}',
                    shadow: 'none'
                }
            },
            success: {
                background: '{success.color}',
                hoverBackground: '{success.hoverColor}',
                activeBackground: '{success.activeColor}',
                borderColor: '{success.color}',
                hoverBorderColor: '{success.hoverColor}',
                activeBorderColor: '{success.activeColor}',
                color: '{success.contrastColor}',
                hoverColor: '{success.contrastColor}',
                activeColor: '{success.contrastColor}',
                focusRing: {
                    color: '{success.color}',
                    shadow: 'none'
                }
            },
            warn: {
                background: '{warn.color}',
                hoverBackground: '{warn.hoverColor}',
                activeBackground: '{warn.activeColor}',
                borderColor: '{warn.color}',
                hoverBorderColor: '{warn.hoverColor}',
                activeBorderColor: '{warn.activeColor}',
                color: '{warn.contrastColor}',
                hoverColor: '{warn.contrastColor}',
                activeColor: '{warn.contrastColor}',
                focusRing: {
                    color: '{warn.color}',
                    shadow: 'none'
                }
            },
            help: {
                background: '{help.color}',
                hoverBackground: '{help.hoverColor}',
                activeBackground: '{help.activeColor}',
                borderColor: '{help.color}',
                hoverBorderColor: '{help.hoverColor}',
                activeBorderColor: '{help.activeColor}',
                color: '{help.contrastColor}',
                hoverColor: '{help.contrastColor}',
                activeColor: '{help.contrastColor}',
                focusRing: {
                    color: '{help.color}',
                    shadow: 'none'
                }
            },
            danger: {
                background: '{error.color}',
                hoverBackground: '{error.hoverColor}',
                activeBackground: '{error.activeColor}',
                borderColor: '{error.color}',
                hoverBorderColor: '{error.hoverColor}',
                activeBorderColor: '{error.activeColor}',
                color: '{error.contrastColor}',
                hoverColor: '{error.contrastColor}',
                activeColor: '{error.contrastColor}',
                focusRing: {
                    color: '{error.color}',
                    shadow: 'none'
                }
            },
            contrast: {
                background: '{contrast.color}',
                hoverBackground: '{contrast.hoverColor}',
                activeBackground: '{contrast.activeColor}',
                borderColor: '{contrast.color}',
                hoverBorderColor: '{contrast.hoverColor}',
                activeBorderColor: '{contrast.activeColor}',
                color: '{contrast.contrastColor}',
                hoverColor: '{contrast.contrastColor}',
                activeColor: '{contrast.contrastColor}',
                focusRing: {
                    color: '{contrast.color}',
                    shadow: 'none'
                }
            }
        },
        outlined: {
            primary: {
                hoverBackground: '{surface.300}',
                activeBackground: '{surface.400}',
                borderColor: '{primary.color}',
                color: '{primary.color}'
            },
            secondary: {
                hoverBackground: '{surface.300}',
                activeBackground: '{surface.400}',
                borderColor: '{secondary.color}',
                color: '{secondary.color}'
            },
            success: {
                hoverBackground: '{surface.300}',
                activeBackground: '{surface.400}',
                borderColor: '{success.color}',
                color: '{success.color}'
            },
            info: {
                hoverBackground: '{surface.300}',
                activeBackground: '{surface.400}',
                borderColor: '{info.color}',
                color: '{info.color}'
            },
            warn: {
                hoverBackground: '{surface.300}',
                activeBackground: '{surface.400}',
                borderColor: '{warn.color}',
                color: '{warn.color}'
            },
            help: {
                hoverBackground: '{surface.300}',
                activeBackground: '{surface.400}',
                borderColor: '{help.color}',
                color: '{help.color}'
            },
            danger: {
                hoverBackground: '{surface.300}',
                activeBackground: '{surface.400}',
                borderColor: '{error.color}',
                color: '{error.color}'
            },
            contrast: {
                hoverBackground: '{surface.300}',
                activeBackground: '{surface.400}',
                borderColor: '{contrast.color}',
                color: '{contrast.color}'
            },
            plain: {
                hoverBackground: '{surface.300}',
                activeBackground: '{surface.400}',
                borderColor: '{surface.border}',
                color: '{text.color}'
            }
        },
        text: {
            primary: {
                hoverBackground: '{surface.300}',
                activeBackground: '{surface.400}',
                color: '{primary.color}'
            },
            secondary: {
                hoverBackground: '{surface.300}',
                activeBackground: '{surface.400}',
                color: '{secondary.color}'
            },
            success: {
                hoverBackground: '{surface.300}',
                activeBackground: '{surface.400}',
                color: '{success.color}'
            },
            info: {
                hoverBackground: '{surface.300}',
                activeBackground: '{surface.400}',
                color: '{info.color}'
            },
            warn: {
                hoverBackground: '{surface.300}',
                activeBackground: '{surface.400}',
                color: '{warn.color}'
            },
            help: {
                hoverBackground: '{surface.300}',
                activeBackground: '{surface.400}',
                color: '{help.color}'
            },
            danger: {
                hoverBackground: '{surface.300}',
                activeBackground: '{surface.400}',
                color: '{error.color}'
            },
            contrast: {
                hoverBackground: '{surface.300}',
                activeBackground: '{surface.400}',
                color: '{contrast.color}'
            },
            plain: {
                hoverBackground: '{surface.300}',
                activeBackground: '{surface.400}',
                color: '{text.color}'
            }
        },
        link: {
            color: '{primary.color}',
            hoverColor: '{primary.hoverColor}',
            activeColor: '{primary.activeColor}'
        }
    }
};

export default {
    root,
    colorScheme
} satisfies ButtonDesignTokens;
