import type { InputGroupDesignTokens, InputGroupTokenSections } from '@primeuix/themes/types/inputgroup';

export const addon: InputGroupTokenSections.Addon = {
    background: '{form.field.background}',
    borderColor: '{form.field.border.color}',
    // DECISIÓN DE INTERFAZ: el addon lleva TEXTO (unidades, símbolos), no solo
    // iconos, así que necesita 4,5:1. El color de icono da 4,29:1.
    color: '{surface.600}',
    borderRadius: '{form.field.border.radius}',
    padding: '0.5rem',
    minWidth: '2.5rem'
};

export default {
    addon
} satisfies InputGroupDesignTokens;
