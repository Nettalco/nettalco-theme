// src/app/theme/mypreset.ts
/**
 * Custom PrimeNG Theme Preset - Nettalco
 * 
 * Este preset extiende Aura de PrimeNG con la paleta de colores oficial de Nettalco.
 * Utiliza una arquitectura de Design Tokens en dos niveles:
 * 
 * 1. Primitive Tokens: Define paletas de colores personalizadas (nettalcoPrimary, nettalcoSecondary, etc.)
 * 2. Semantic Tokens: Referencias que mapean los primitivos a roles semánticos (primary, success, etc.)
 *
 * Paleta de colores oficial del branding Nettalco v2:
 * 
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
import dataview from './dataview';
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
import image from './image';
import imagecompare from './imagecompare';
import inlinemessage from './inlinemessage';
import inplace from './inplace';
import inputgroup from './inputgroup';
import inputnumber from './inputnumber';
import inputotp from './inputotp';
import knob from './knob';
import megamenu from './megamenu';
import message from './message';
import metergroup from './metergroup';
import orderlist from './orderlist';
import organizationchart from './organizationchart';
import overlaybadge from './overlaybadge';
import panelmenu from './panelmenu';
import password from './password';
import picklist from './picklist';
import popover from './popover';
import progressbar from './progressbar';
import progressspinner from './progressspinner';
import radiobutton from './radiobutton';
import rating from './rating';
import ripple from './ripple';
import scrollpanel from './scrollpanel';
import selectbutton from './selectbutton';
import skeleton from './skeleton';
import slider from './slider';
import speeddial from './speeddial';
import splitbutton from './splitbutton';
import splitter from './splitter';
import stepper from './stepper';
import steps from './steps';
import tabmenu from './tabmenu';
import tabs from './tabs';
import tabview from './tabview';
import terminal from './terminal';
import textarea from './textarea';
import tieredmenu from './tieredmenu';
import timeline from './timeline';
import togglebutton from './togglebutton';
import toggleswitch from './toggleswitch';
import toolbar from './toolbar';
import tooltip from './tooltip';
import tree from './tree';
import treetable from './treetable';
import virtualscroller from './virtualscroller';
import css from './css';

const MyPreset = definePreset(Aura, {
  primitive: {
    ...base.primitive,
    // Paleta personalizada Nettalco - Brand Primary v2 (#112A46)
    nettalcoPrimary: {
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
    // Paleta personalizada Nettalco - Brand Secondary v2 (#3F8CF9)
    nettalcoSecondary: {
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
    // Paleta personalizada Nettalco - Brand Success v2 (#2BA5CD)
    nettalcoSuccess: {
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
    // Paleta personalizada Nettalco - Brand Export/Cyan Dark (#09718A)
    nettalcoExport: {
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
    // Paleta personalizada Nettalco - Brand Info v2 (#66A6FB)
    nettalcoInfo: {
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
    // Paleta personalizada Nettalco - Brand Warning v2 (#D57952)
    nettalcoWarn: {
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
  },
  semantic: {
    ...base.semantic,
    // Tokens semánticos que apuntan a las paletas personalizadas
    primary: {
      50: '{nettalcoPrimary.50}',
      100: '{nettalcoPrimary.100}',
      200: '{nettalcoPrimary.200}',
      300: '{nettalcoPrimary.300}',
      400: '{nettalcoPrimary.400}',
      500: '{nettalcoPrimary.500}',
      600: '{nettalcoPrimary.600}',
      700: '{nettalcoPrimary.700}',
      800: '{nettalcoPrimary.800}',
      900: '{nettalcoPrimary.900}',
      950: '{nettalcoPrimary.950}',
    },
    // Sobrescribir colorScheme con colores Nettalco
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
          color: '{nettalcoPrimary.500}',
          contrastColor: '#ffffff',
          hoverColor: '{nettalcoPrimary.900}',
          activeColor: '{nettalcoPrimary.800}',
        },
        secondary: {
          color: '{nettalcoSecondary.500}',
          contrastColor: '#ffffff',
          hoverColor: '{nettalcoSecondary.400}',
          activeColor: '{nettalcoSecondary.600}',
        },
        success: {
          color: '{nettalcoSuccess.500}',
          contrastColor: '#ffffff',
          hoverColor: '{nettalcoSuccess.300}',
          activeColor: '{nettalcoSuccess.400}',
        },
        info: {
          color: '{nettalcoInfo.500}',
          contrastColor: '#ffffff',
          hoverColor: '{nettalcoInfo.300}',
          activeColor: '{nettalcoInfo.100}',
        },
        warn: {
          color: '{nettalcoWarn.500}',
          contrastColor: '#ffffff',
          hoverColor: '{nettalcoWarn.600}',
          activeColor: '{nettalcoWarn.400}',
        },
        error: {
          color: '{red.500}',
          contrastColor: '#ffffff',
          hoverColor: '{red.600}',
          activeColor: '{red.700}',
        },
        help: {
          color: '{violet.500}',
          contrastColor: '#ffffff',
          hoverColor: '{violet.600}',
          activeColor: '{violet.700}',
        },
        contrast: {
          color: '{slate.900}',
          contrastColor: '#ffffff',
          hoverColor: '{slate.800}',
          activeColor: '{slate.700}',
        },
        highlight: {
          background: '{nettalcoPrimary.50}',
          focusBackground: '{nettalcoPrimary.100}',
          color: '{nettalcoPrimary.700}',
          focusColor: '{nettalcoPrimary.800}',
        },
      },
      dark: {
        surface: {
          0: '#f0f5fb',
          50: '#c8d8ea',
          100: '#8fa8c4',
          200: '#5a7a9e',
          300: '#3d5a7e',
          400: '#2e476d',
          500: '#253a5e',
          600: '#1c2f50',
          700: '#152540',
          800: '#0f1e35',
          900: '#0a1628',
          950: '#060d1a',
        },
        primary: {
          color: '{nettalcoPrimary.50}',
          contrastColor: '{nettalcoPrimary.500}',
          hoverColor: '{nettalcoPrimary.100}',
          activeColor: '{nettalcoPrimary.400}',
        },
        secondary: {
          color: '{nettalcoSecondary.700}',
          contrastColor: '#ffffff',
          hoverColor: '{nettalcoSecondary.800}',
          activeColor: '{nettalcoSecondary.900}',
        },
        success: {
          color: '{nettalcoSuccess.200}',
          contrastColor: '{nettalcoSuccess.800}',
          hoverColor: '{nettalcoSuccess.600}',
          activeColor: '{nettalcoSuccess.700}',
        },
        info: {
          color: '{nettalcoInfo.400}',
          contrastColor: '#ffffff',
          hoverColor: '{nettalcoInfo.600}',
          activeColor: '{nettalcoInfo.700}',
        },
        warn: {
          color: '{nettalcoWarn.200}',
          contrastColor: '{orange.950}',
          hoverColor: '{nettalcoWarn.300}',
          activeColor: '{nettalcoWarn.700}',
        },
        error: {
          color: '{red.400}',
          contrastColor: '{red.900}',
          hoverColor: '{red.300}',
          activeColor: '{red.200}',
        },
        help: {
          color: '{violet.400}',
          contrastColor: '{violet.950}',
          hoverColor: '{violet.300}',
          activeColor: '{violet.200}',
        },
        contrast: {
          color: '{slate.50}',
          contrastColor: '{slate.900}',
          hoverColor: '{slate.100}',
          activeColor: '{slate.200}',
        },
        highlight: {
          background: '{nettalcoPrimary.900}',
          focusBackground: '{nettalcoPrimary.800}',
          color: '{nettalcoSecondary.300}',
          focusColor: '{nettalcoSecondary.200}',
        },
      },
    },
  },
  css,
  components: {
    accordion,
    autocomplete,
    avatar,
    badge,
    blockui,
    breadcrumb,
    button,
    card,
    carousel,
    cascadeselect,
    checkbox,
    chip,
    colorpicker,
    confirmdialog,
    confirmpopup,
    contextmenu,
    datatable,
    dataview,
    datepicker,
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
    image,
    imagecompare,
    inlinemessage,
    inplace,
    inputchips,
    inputgroup,
    inputnumber,
    inputotp,
    inputtext,
    knob,
    listbox,
    megamenu,
    menu,
    menubar,
    message,
    metergroup,
    multiselect,
    orderlist,
    organizationchart,
    overlaybadge,
    paginator,
    panel,
    panelmenu,
    password,
    picklist,
    popover,
    progressbar,
    progressspinner,
    radiobutton,
    rating,
    ripple,
    scrollpanel,
    select,
    selectbutton,
    skeleton,
    slider,
    speeddial,
    splitbutton,
    splitter,
    stepper,
    steps,
    tabmenu,
    tabs,
    tabview,
    tag,
    terminal,
    textarea,
    tieredmenu,
    timeline,
    toast,
    togglebutton,
    toggleswitch,
    toolbar,
    tooltip,
    tree,
    treeselect,
    treetable,
    virtualscroller,
  },
});

export default MyPreset;
