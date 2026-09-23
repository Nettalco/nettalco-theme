import { ExtendedCSS } from '@primeuix/themes/types';

const css = /*css*/ `
    li.p-autocomplete-option,
    div.p-cascadeselect-option-content,
    li.p-listbox-option,
    li.p-multiselect-option,
    li.p-select-option,
    li.p-listbox-option,
    div.p-tree-node-content,
    li.p-datatable-filter-constraint,
    .p-datatable .p-datatable-tbody > tr,
    .p-treetable .p-treetable-tbody > tr,
    div.p-menu-item-content,
    div.p-tieredmenu-item-content,
    div.p-contextmenu-item-content,
    div.p-menubar-item-content,
    div.p-megamenu-item-content,
    div.p-panelmenu-header-content,
    div.p-panelmenu-item-content,
    th.p-datatable-header-cell,
    th.p-treetable-header-cell,
    thead.p-datatable-thead > tr > th,
    .p-treetable thead.p-treetable-thead>tr>th {
        transition: none;
    }

    /*
     * DECISIÓN DE INTERFAZ — no es estética, es WCAG 1.4.1.
     * Aura solo subraya el botón de enlace al pasar el ratón, así que en reposo
     * lo único que lo distingue del texto es el color. Y ningún color lo
     * resuelve solo: cumplir 4,5:1 sobre blanco exige luminancia <= 0,1833 y
     * despegarse 3:1 del texto base exige >= 0,1993, que es incompatible. El
     * subrayado permanente aporta el indicio no cromático que falta.
     * Permanente también fuera de un párrafo: un botón de enlace suelto sin
     * subrayado se lee como texto y no invita al clic.
     * El offset despega la línea de las descendentes (g, j, p, y): es la
     * diferencia entre un subrayado cuidado y uno de procesador de textos.
     */
    .p-button-link .p-button-label {
        text-decoration: underline;
        text-underline-offset: 0.18em;
    }
`;

export default css satisfies ExtendedCSS;
