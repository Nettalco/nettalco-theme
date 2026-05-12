// src/app/theme/mypreset.ts
/**
 * Custom PrimeNG Theme Preset - Nettalco
 *
 * Paleta de colores oficial del branding v2:
 * Light mode:
 * - Primary: #112A46 (Azul Navy Oscuro)
 * - Secondary: #3F8CF9 (Azul Cielo)
 * - Success: #2BA5CD (Cyan)
 * - Export: #09718A (Cyan Oscuro)
 * - Warning: #D57952 (Naranja)
 * - Info: #66A6FB (Azul Info)
 * 
 * Dark mode:
 * - Primary: #EDF4FF (Azul muy claro)
 * - Secondary: #3A72E0 (Azul medio)
 * - Success: #6ECBCD (Cyan claro)
 * - Export: #52B8D0 (Cyan medio)
 * - Warning: #F4B33C (Naranja claro)
 * - Info: #69A7ED (Azul Info claro)
 *
 * @see https://primeng.org/theming/styled
 */
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import base from './base';
import accordion from './accordion';
import autocomplete from './autocomplete';
import button from './button';
import inputchips from './inputchips';
import inputtext from './inputtext';
import card from './card';
import tag from './tag';
import toast from './toast';
import paginator from './paginator';
import datatable from './datatable';
import datepicker from './datepicker';
import select from './select';
import menu from './menu';
import multiselect from './multiselect';
import menubar from './menubar';
import listbox from './listbox';
import treeselect from './treeselect';
import panel from './panel';
import avatar from './avatar';
import badge from './badge';
import blockui from './blockui';
import breadcrumb from './breadcrumb';
import carousel from './carousel';
import cascadeselect from './cascadeselect';
import checkbox from './checkbox';
import chip from './chip';
import colorpicker from './colorpicker';
import confirmdialog from './confirmdialog';
import confirmpopup from './confirmpopup';
import contextmenu from './contextmenu';
import dialog from './dialog';
import divider from './divider';
import dock from './dock';
import drawer from './drawer';
import editor from './editor';
import fieldset from './fieldset';
import fileupload from './fileupload';
import floatlabel from './floatlabel';
import galleria from './galleria';
import iconfield from './iconfield';
import iftalabel from './iftalabel';
import css from './css';

const MyPreset = definePreset(Aura, {
  primitive: base.primitive,
  semantic: {
    ...base.semantic,
    ...base.semantic,
    primary: {
      // Brand Primary v2 (#112A46)
      50: '#EDF4FF',
      100: '#D7E3FB',
      200: '#B4D3FD',
      300: '#5A9FFC',
      400: '#336DD9',
      500: '#112A46',
      600: '#0A1D49',
      700: '#1F498E',
      800: '#2B5DA1',
      900: '#22436F',
      950: '#0C3D5C',
    },
    secondary: {
      // Brand Secondary v2 (#3F8CF9)
      50: '#EEF4FF',
      100: '#CAD8F1',
      200: '#ABC9F9',
      300: '#7CB2FA',
      400: '#5A9FFC',
      500: '#3F8CF9',
      600: '#5398F8',
      700: '#3A72E0',
      800: '#2B5FBC',
      900: '#1F498E',
      950: '#0C3D5C',
    },
    success: {
      // Brand Success v2 (#2BA5CD)
      50: '#D6E5FA',
      100: '#8CC3D7',
      200: '#6ECBCD',
      300: '#45B1CE',
      400: '#3CAAC8',
      500: '#2BA5CD',
      600: '#19819D',
      700: '#0C566F',
      800: '#0C3D5C',
      900: '#09718A',
      950: '#0A1D49',
    },
    export: {
      // Brand Export/Cyan Dark (#09718A)
      50: '#D6E5FA',
      100: '#8CC3D7',
      200: '#52B8D0',
      300: '#3C9EB5',
      400: '#258FA6',
      500: '#09718A',
      600: '#1A859D',
      700: '#248297',
      800: '#113F4D',
      900: '#0C3D5C',
      950: '#0A1D49',
    },
    info: {
      // Brand Info v2 (#66A6FB)
      50: '#EDF4FF',
      100: '#B4D3FD',
      200: '#ABC9F9',
      300: '#7CB2FA',
      400: '#69A7ED',
      500: '#66A6FB',
      600: '#5389DB',
      700: '#4775BF',
      800: '#40609B',
      900: '#336DD9',
      950: '#0C3D5C',
    },
    warn: {
      // Brand Warning v2 (#D57952)
      50: '#FEF3E2',
      100: '#E4DBE7',
      200: '#F4B33C',
      300: '#F2A61E',
      400: '#DE956A',
      500: '#D57952',
      600: '#D78158',
      700: '#CA8825',
      800: '#9D6A2D',
      900: '#7D5423',
      950: '#5C3E1A',
    },
    error: {
      // Error/Danger (mantiene rojo estándar)
      50: '#FEF2F2',
      100: '#FECACA',
      200: '#FCA5A5',
      300: '#F87171',
      400: '#EF4444',
      500: '#DC2626',
      600: '#B91C1C',
      700: '#991B1B',
      800: '#7F1D1D',
      900: '#6B1C1C',
      950: '#450A0A',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        primary: {
          color: '#112A46',
          contrastColor: '#ffffff',
          hoverColor: '#22436F',
          activeColor: '#2B5DA1',
        },
        secondary: {
          color: '#3F8CF9',
          contrastColor: '#ffffff',
          hoverColor: '#5A9FFC',
          activeColor: '#5398F8',
        },
        success: {
          color: '#2BA5CD',
          contrastColor: '#ffffff',
          hoverColor: '#45B1CE',
          activeColor: '#3CAAC8',
        },
        export: {
          color: '#09718A',
          contrastColor: '#ffffff',
          hoverColor: '#258FA6',
          activeColor: '#1A859D',
        },
        info: {
          color: '#66A6FB',
          contrastColor: '#ffffff',
          hoverColor: '#7CB2FA',
          activeColor: '#B4D3FD',
        },
        warn: {
          color: '#D57952',
          contrastColor: '#ffffff',
          hoverColor: '#D78158',
          activeColor: '#DE956A',
        },
        error: {
          color: '#DC2626',
          contrastColor: '#ffffff',
          hoverColor: '#B91C1C',
          activeColor: '#991B1B',
        },
        help: {
          color: '#8B5CF6',
          contrastColor: '#ffffff',
          hoverColor: '#7C3AED',
          activeColor: '#6D28D9',
        },
        contrast: {
          color: '#1F2937',
          contrastColor: '#ffffff',
          hoverColor: '#374151',
          activeColor: '#4B5563',
        },
        highlight: {
          background: '#EDF4FF',
          focusBackground: '#D7E3FB',
          color: '#1F498E',
          focusColor: '#2B5DA1',
        },
      },
      dark: {
        surface: {
          0:   '#f0f5fb',   // texto principal
          50:  '#c8d8ea',
          100: '#8fa8c4',
          200: '#5a7a9e',
          300: '#3d5a7e',   // hover bg
          400: '#2e476d',   // border
          500: '#253a5e',   // panel / input bg
          600: '#1c2f50',   // card bg
          700: '#152540',   // sidebar
          800: '#0f1e35',   // app background
          900: '#0a1628',   // base background
          950: '#060d1a',   // más profundo
        },
        primary: {
          color:         '#EDF4FF',   // Azul muy claro como primario en dark
          contrastColor: '#112A46',   // Navy oscuro para contraste sobre fondo claro
          hoverColor:    '#EEF4FF',
          activeColor:   '#336DD9',
        },
        secondary: {
          color:         '#3A72E0',
          contrastColor: '#ffffff',
          hoverColor:    '#2B5FBC',
          activeColor:   '#1F498E',
        },
        success: {
          color:         '#6ECBCD',
          contrastColor: '#0C3D5C',
          hoverColor:    '#19819D',
          activeColor:   '#0C566F',
        },
        export: {
          color:         '#52B8D0',
          contrastColor: '#ffffff',
          hoverColor:    '#3C9EB5',
          activeColor:   '#248297',
        },
        info: {
          color:         '#69A7ED',
          contrastColor: '#ffffff',
          hoverColor:    '#5389DB',
          activeColor:   '#4775BF',
        },
        warn: {
          color:         '#F4B33C',
          contrastColor: '#7C2D12',
          hoverColor:    '#F2A61E',
          activeColor:   '#CA8825',
        },
        error: {
          color:         '#F87171',
          contrastColor: '#7F1D1D',
          hoverColor:    '#FCA5A5',
          activeColor:   '#FECACA',
        },
        help: {
          color:         '#A78BFA',
          contrastColor: '#4C1D95',
          hoverColor:    '#C4B5FD',
          activeColor:   '#DDD6FE',
        },
        contrast: {
          color:         '#F9FAFB',
          contrastColor: '#1F2937',
          hoverColor:    '#F3F4F6',
          activeColor:   '#E5E7EB',
        },
        highlight: {
          background:      '#1F498E',   // primary.900
          focusBackground: '#2B5DA1',   // primary.800
          color:           '#7CB2FA',   // secondary.300
          focusColor:      '#ABC9F9',   // secondary.200
        },
      },
    },
  },
  css,
  components: {
    accordion,
    autocomplete,
    button,
    inputchips,
    inputtext,
    card,
    tag,
    toast,
    paginator,
    datatable,
    datepicker,
    select,
    menu,
    multiselect,
    menubar,
    listbox,
    treeselect,
    panel,
    avatar,
    badge,
    blockui,
    breadcrumb,
    carousel,
    cascadeselect,
    checkbox,
    chip,
    colorpicker,
    confirmdialog,
    confirmpopup,
    contextmenu,
    dialog,
    divider,
    dock,
    drawer,
    editor,
    fieldset,
    fileupload,
    floatlabel,
    galleria,
    iconfield,
    iftalabel,
  },
});

export default MyPreset;
