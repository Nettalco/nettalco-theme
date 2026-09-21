import type { InputGroupDesignTokens, InputGroupTokenSections } from '@primeuix/themes/types/inputgroup';

export const addon: InputGroupTokenSections.Addon = {
    background: '{form.field.background}',
    borderColor: '{form.field.border.color}',
    // DECISIÓN DE INTERFAZ: el addon lleva TEXTO (unidades, símbolos), no solo
    // iconos, así que necesita 4,5:1 y no vale {form.field.icon.color} (4,29:1).
    // Tiene que ser un token que ya distinga claro de oscuro: este archivo no
    // tiene sección colorScheme, así que el valor sirve a los DOS modos.
    // {surface.600} arreglaría el claro y rompería el oscuro (2,41:1), porque
    // la rampa de superficies oscuras corre invertida.
    // {text.muted.color} resuelve a #616161 en claro (6,19:1) y #7C90AB en
    // oscuro (5,88:1): los dos cumplen.
    color: '{text.muted.color}',
    borderRadius: '{form.field.border.radius}',
    padding: '0.5rem',
    minWidth: '2.5rem'
};

export default {
    addon
} satisfies InputGroupDesignTokens;
