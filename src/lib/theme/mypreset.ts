// src/app/theme/mypreset.ts
/**
 * Preset de tema PrimeNG - Nettalco
 *
 * Extiende Aura con la paleta del manual de marca oficial (Nettalco_manual de marca.pdf, 2024).
 * Arquitectura de Design Tokens en dos niveles:
 *
 * 1. Primitive Tokens: rampas de color (nettalcoPrimary, nettalcoSecondary, ...)
 * 2. Semantic Tokens: mapean los primitivos a roles de interfaz (primary, success, ...)
 *
 * ---------------------------------------------------------------------------
 * PROCEDENCIA DE CADA COLOR
 * ---------------------------------------------------------------------------
 * Todo valor que viene del manual está marcado con   // MANUAL
 * Todo valor que NO está en el manual y se decidió
 * aquí por criterios de interfaz está marcado con    // DECISIÓN DE INTERFAZ
 *
 * Colores del manual y su papel en este tema:
 *
 *   #1C224D  Azul oscuro    PRINCIPAL Y DOMINANTE. El manual dice literalmente
 *                           que "su uso debe predominar sobre el resto".
 *                           -> nettalcoPrimary.500 = el primario de PrimeNG.
 *   #4A7AFF  Azul claro     Principal, segundo en jerarquía.
 *                           -> nettalcoSecondary.500. Sobre blanco da 3,81:1:
 *                              NO sirve como texto normal (tampoco sobre el azul
 *                              oscuro, 3,98:1). Sí sirve como elemento de interfaz
 *                              (>=3:1) sobre AMBOS fondos, y por eso es el color
 *                              del anillo de foco. Para texto se usa su nivel 600.
 *   #B7CAFF  Lavanda        Es exactamente el mismo tono y saturación que #4A7AFF
 *                           con más luminosidad -> encaja como nettalcoSecondary.200.
 *                           Es el color de texto sobre azul oscuro (9,32:1).
 *   #A2F0A1  Verde menta    Secundario. 1,35:1 sobre blanco: inservible como texto
 *                           y como anillo de foco sobre fondo claro.
 *                           -> nettalcoSuccess.200: fondos de badge en modo claro y
 *                              color de "éxito" en modo oscuro (13,02:1).
 *   #176973  Verde azulado  Secundario. 6,35:1 sobre blanco, sí aguanta texto.
 *                           -> nettalcoTeal.600, asignado a la severidad "help",
 *                              que en Aura venía en violeta (fuera de marca).
 *   #7A7A7A  Gris frío      Neutro. 4,29:1 sobre blanco: NO cumple como texto.
 *                           -> nettalcoGray.500: bordes de campo e iconos (>=3:1).
 *                              El texto atenuado usa el 600.
 *   #E6E6E6  Gris claro     Neutro. -> nettalcoGray.200.
 *   #FFFFFF  Blanco         -> nettalcoGray.0 / superficie base.
 *
 * Lo que el manual NO cubre y se decidió aquí (ver informe-tema.md):
 *   - Colores de error, aviso, éxito e información.
 *   - Estados de foco, hover, pulsado y deshabilitado.
 *   - La escala de grises de interfaz (el manual solo trae dos grises).
 *   - El modo oscuro como sistema.
 *
 * Tipografía: el manual indica Anek Latin para todo. Este preset no fija la
 * familia tipográfica (PrimeNG hereda la del host); se documenta en el informe.
 *
 * Todas las rampas oscurecen de forma monótona de 50 a 950 y los contrastes
 * están medidos con la fórmula WCAG 2.1. Tabla completa en informe-tema.md.
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

    // -----------------------------------------------------------------------
    // AZUL OSCURO #1C224D — MANUAL. Color principal y dominante de la marca.
    // Rampa monótona construida alrededor del valor de marca en el nivel 500,
    // conservando su tono (233°) y saturación (~47-60%).
    // Los niveles 50-300 (fondos suaves, bordes, selección) y 600-950 (hover,
    // pulsado, fondos oscuros) son DECISIÓN DE INTERFAZ: el manual solo define
    // el #1C224D. Verificado: primary.700 sobre primary.50 = 15,83:1.
    // -----------------------------------------------------------------------
    nettalcoPrimary: {
      50: '#F1F2FB',  // DECISIÓN DE INTERFAZ - fondo de fila/opción seleccionada
      100: '#DBDEF5', // DECISIÓN DE INTERFAZ - fondo de selección con foco, tag
      200: '#B7BDEB', // DECISIÓN DE INTERFAZ - bordes suaves, separadores
      300: '#818BDA', // DECISIÓN DE INTERFAZ - acento sobre fondo oscuro
      400: '#3542B6', // DECISIÓN DE INTERFAZ
      500: '#1C224D', // MANUAL - Azul oscuro, principal y dominante
      600: '#161A43', // DECISIÓN DE INTERFAZ - hover del primario
      700: '#121538', // DECISIÓN DE INTERFAZ - pulsado; texto sobre primary.50
      800: '#0D0F2D', // DECISIÓN DE INTERFAZ - texto sobre primary.100
      900: '#090B22', // DECISIÓN DE INTERFAZ
      950: '#060616', // DECISIÓN DE INTERFAZ
    },

    // -----------------------------------------------------------------------
    // AZUL CLARO #4A7AFF — MANUAL. Principal, segundo en jerarquía.
    // La lavanda #B7CAFF del manual resulta ser el mismo tono y saturación con
    // más luminosidad, así que ocupa el nivel 200 de esta misma rampa.
    // AVISO: el 500 da 3,81:1 sobre blanco y 3,98:1 sobre el azul oscuro. Sirve
    // como elemento de interfaz (>=3:1) y como texto grande, NO como texto
    // normal. Para texto se usa el 600 (5,84:1 sobre blanco).
    // -----------------------------------------------------------------------
    nettalcoSecondary: {
      50: '#F0F4FF',  // DECISIÓN DE INTERFAZ
      100: '#DBE5FF', // DECISIÓN DE INTERFAZ
      200: '#B7CAFF', // MANUAL - Lavanda; texto sobre azul oscuro (9,32:1)
      300: '#8FADFF', // DECISIÓN DE INTERFAZ - enlaces en modo oscuro
      400: '#6B93FF', // DECISIÓN DE INTERFAZ - primario en modo oscuro
      500: '#4A7AFF', // MANUAL - Azul claro; anillo de foco, bordes, acentos
      600: '#2558E4', // DECISIÓN DE INTERFAZ - enlaces y texto sobre blanco
      700: '#1A42BC', // DECISIÓN DE INTERFAZ
      800: '#183595', // DECISIÓN DE INTERFAZ
      900: '#1B2D74', // DECISIÓN DE INTERFAZ
      950: '#131A49', // DECISIÓN DE INTERFAZ
    },

    // -----------------------------------------------------------------------
    // VERDE — éxito. DECISIÓN DE INTERFAZ: el manual no asigna significado
    // semántico a ningún color. Se ancla en el verde menta #A2F0A1 del manual,
    // que por su luminosidad (1,35:1 sobre blanco) solo puede ocupar el nivel
    // 200: sirve de fondo de badge y de color de éxito en modo oscuro, nunca
    // de texto sobre blanco. El resto de la rampa conserva su tono (119-140°).
    // -----------------------------------------------------------------------
    nettalcoSuccess: {
      50: '#E9FBE9',  // DECISIÓN DE INTERFAZ
      100: '#CBF6CB', // DECISIÓN DE INTERFAZ
      200: '#A2F0A1', // MANUAL - Verde menta; badge claro / éxito en modo oscuro
      300: '#6ECF74', // DECISIÓN DE INTERFAZ
      400: '#3DAE4C', // DECISIÓN DE INTERFAZ
      500: '#228732', // DECISIÓN DE INTERFAZ - botón de éxito (blanco: 4,59:1)
      600: '#176D28', // DECISIÓN DE INTERFAZ - hover
      700: '#125923', // DECISIÓN DE INTERFAZ - texto de éxito (8,47:1)
      800: '#10461F', // DECISIÓN DE INTERFAZ
      900: '#0E3419', // DECISIÓN DE INTERFAZ - texto sobre verde menta
      950: '#071D0E', // DECISIÓN DE INTERFAZ
    },

    // -----------------------------------------------------------------------
    // VERDE AZULADO #176973 — MANUAL. Secundario de marca.
    // Es el único acento del manual que aguanta texto sobre blanco (6,35:1),
    // así que ancla el nivel 600. Se asigna a la severidad "help" de PrimeNG,
    // que en Aura venía en violeta, un color ajeno a la marca.
    // -----------------------------------------------------------------------
    nettalcoTeal: {
      50: '#EBF9FA',  // DECISIÓN DE INTERFAZ
      100: '#CFEFF2', // DECISIÓN DE INTERFAZ
      200: '#A2DBE2', // DECISIÓN DE INTERFAZ
      300: '#68C0CA', // DECISIÓN DE INTERFAZ - modo oscuro
      400: '#2E919E', // DECISIÓN DE INTERFAZ
      500: '#1F7884', // DECISIÓN DE INTERFAZ
      600: '#176973', // MANUAL - Verde azulado
      700: '#12545E', // DECISIÓN DE INTERFAZ
      800: '#10434C', // DECISIÓN DE INTERFAZ
      900: '#0E323A', // DECISIÓN DE INTERFAZ
      950: '#081C21', // DECISIÓN DE INTERFAZ
    },

    // -----------------------------------------------------------------------
    // GRISES DE INTERFAZ — DECISIÓN DE INTERFAZ.
    // El manual solo trae dos grises; son las anclas de esta escala:
    // #E6E6E6 en el 200 y #7A7A7A en el 500. Ambos son neutros puros
    // (R=G=B), así que la escala entera es neutra pura.
    // AVISO: #7A7A7A da 4,29:1 sobre blanco y NO cumple como texto normal.
    // Se usa donde sí cumple (bordes e iconos, >=3:1); el texto atenuado
    // baja al 600.
    // -----------------------------------------------------------------------
    nettalcoGray: {
      0: '#FFFFFF',   // MANUAL - Blanco
      50: '#FAFAFA',  // DECISIÓN DE INTERFAZ - fondo de fila alterna
      100: '#F2F2F2', // DECISIÓN DE INTERFAZ - cabeceras, hover de fila
      200: '#E6E6E6', // MANUAL - Gris claro; fondo deshabilitado
      300: '#D1D1D1', // DECISIÓN DE INTERFAZ - separadores (decorativos)
      400: '#A3A3A3', // DECISIÓN DE INTERFAZ - texto deshabilitado (exento WCAG)
      500: '#7A7A7A', // MANUAL - Gris frío; bordes de campo e iconos (4,29:1)
      600: '#616161', // DECISIÓN DE INTERFAZ - texto atenuado (6,19:1)
      700: '#4A4A4A', // DECISIÓN DE INTERFAZ
      800: '#333333', // DECISIÓN DE INTERFAZ - texto base (12,63:1)
      900: '#1F1F1F', // DECISIÓN DE INTERFAZ - severidad "contrast"
      950: '#121212', // DECISIÓN DE INTERFAZ
    },

    // -----------------------------------------------------------------------
    // SUPERFICIES DE MODO OSCURO — DECISIÓN DE INTERFAZ.
    // El manual no contempla modo oscuro. Tintadas con el azul de marca (215-220°)
    // pero con la distribución de luminancia que Aura espera: los niveles bajos
    // son claros (texto) y los altos oscuros (fondos). La rampa anterior no
    // cumplía esto y dejaba el texto atenuado (surface.400) ilegible.
    // -----------------------------------------------------------------------
    nettalcoSurfaceDark: {
      0: '#F1F4F9',   // DECISIÓN DE INTERFAZ - texto principal (15,98:1 sobre 900)
      50: '#E3E9F2',  // DECISIÓN DE INTERFAZ
      100: '#D1DAE6', // DECISIÓN DE INTERFAZ
      200: '#B9C5D5', // DECISIÓN DE INTERFAZ
      300: '#A2B0C3', // DECISIÓN DE INTERFAZ
      400: '#7C90AB', // DECISIÓN DE INTERFAZ - texto atenuado (5,40:1)
      500: '#566E8F', // DECISIÓN DE INTERFAZ - borde de campo (3,67:1)
      600: '#3D5271', // DECISIÓN DE INTERFAZ
      700: '#2A3B55', // DECISIÓN DE INTERFAZ - bordes de contenido
      800: '#1B283C', // DECISIÓN DE INTERFAZ - hover, superficie elevada
      900: '#101928', // DECISIÓN DE INTERFAZ - fondo de contenido
      950: '#090F1A', // DECISIÓN DE INTERFAZ - fondo de campos
    },

    // -----------------------------------------------------------------------
    // ERROR — DECISIÓN DE INTERFAZ. No está en el manual, y ningún color de
    // marca puede significar "error" sin confundirse con los azules. Rojo
    // elegido por accesibilidad: el 500 lleva texto blanco (5,31:1) y el 700
    // es el texto de error sobre blanco (8,92:1).
    // -----------------------------------------------------------------------
    nettalcoError: {
      50: '#FEF1F1',  // DECISIÓN DE INTERFAZ
      100: '#FCDEDE', // DECISIÓN DE INTERFAZ
      200: '#F9BEBE', // DECISIÓN DE INTERFAZ
      300: '#F28888', // DECISIÓN DE INTERFAZ - modo oscuro (7,26:1)
      400: '#E25050', // DECISIÓN DE INTERFAZ
      500: '#CE272F', // DECISIÓN DE INTERFAZ - botón y borde de campo inválido
      600: '#AF1D24', // DECISIÓN DE INTERFAZ - hover
      700: '#92161C', // DECISIÓN DE INTERFAZ - texto de error
      800: '#75151B', // DECISIÓN DE INTERFAZ
      900: '#5C141A', // DECISIÓN DE INTERFAZ
      950: '#330A0E', // DECISIÓN DE INTERFAZ
    },

    // -----------------------------------------------------------------------
    // AVISO — DECISIÓN DE INTERFAZ. No está en el manual. Ámbar.
    // AVISO IMPORTANTE: ningún ámbar lo bastante luminoso para leerse como
    // "aviso" admite texto blanco (blanco sobre el 500 = 3,23:1). Por eso el
    // botón de aviso lleva texto OSCURO (warn.950 sobre warn.500 = 5,20:1) y
    // su hover ACLARA en vez de oscurecer, para no perder ese contraste.
    // -----------------------------------------------------------------------
    nettalcoWarn: {
      50: '#FEFAEB',  // DECISIÓN DE INTERFAZ
      100: '#FDEFC9', // DECISIÓN DE INTERFAZ
      200: '#F9DD94', // DECISIÓN DE INTERFAZ
      300: '#F4C357', // DECISIÓN DE INTERFAZ - modo oscuro (10,73:1)
      400: '#F0A119', // DECISIÓN DE INTERFAZ - hover del botón (aclara)
      500: '#CE7C09', // DECISIÓN DE INTERFAZ - botón, con texto oscuro
      600: '#AB5F07', // DECISIÓN DE INTERFAZ
      700: '#8B4809', // DECISIÓN DE INTERFAZ - texto de aviso (6,93:1)
      800: '#6F370B', // DECISIÓN DE INTERFAZ
      900: '#55290C', // DECISIÓN DE INTERFAZ
      950: '#321606', // DECISIÓN DE INTERFAZ - texto sobre el botón de aviso
    },

    // -----------------------------------------------------------------------
    // ALIAS OBSOLETOS. Se mantienen para no romper a quien referencie las
    // variables CSS --p-nettalco-export-* / --p-nettalco-info-* de la v1.1.x.
    // Ya no los usa ningún token semántico de este preset. Retirar en la 2.0.
    // @deprecated usar nettalcoTeal y nettalcoSecondary.
    // -----------------------------------------------------------------------
    nettalcoExport: {
      50: '#EBF9FA', 100: '#CFEFF2', 200: '#A2DBE2', 300: '#68C0CA',
      400: '#2E919E', 500: '#1F7884', 600: '#176973', 700: '#12545E',
      800: '#10434C', 900: '#0E323A', 950: '#081C21',
    },
    nettalcoInfo: {
      50: '#F0F4FF', 100: '#DBE5FF', 200: '#B7CAFF', 300: '#8FADFF',
      400: '#6B93FF', 500: '#4A7AFF', 600: '#2558E4', 700: '#1A42BC',
      800: '#183595', 900: '#1B2D74', 950: '#131A49',
    },
  },
  semantic: {
    ...base.semantic,

    // -----------------------------------------------------------------------
    // ANILLO DE FOCO — DECISIÓN DE INTERFAZ. El manual no define estados.
    //
    // El problema: el anillo tiene que verse sobre fondo blanco (contenido) Y
    // sobre el azul oscuro (barra lateral, botones primarios). Los candidatos
    // de marca fallan en uno de los dos:
    //   - verde menta #A2F0A1: 11,20:1 sobre azul oscuro pero 1,35:1 sobre
    //     blanco, o sea invisible. Es lo que usa hoy el layout.
    //   - el propio primario: 15,16:1 sobre blanco pero 1:1 sobre sí mismo.
    // El azul claro #4A7AFF del manual es el único que cumple >=3:1 en ambos:
    //   3,81:1 sobre blanco, 3,98:1 sobre el azul oscuro, 4,63:1 sobre la
    //   superficie oscura. Por eso es el anillo de foco del sistema.
    // El grosor sube de 1px a 2px: con 3,8:1 el anillo necesita cuerpo.
    // -----------------------------------------------------------------------
    focusRing: {
      width: '2px',
      style: 'solid',
      color: '{nettalcoSecondary.500}',
      offset: '2px',
      shadow: 'none',
    },

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
    // INFORMACIÓN — DECISIÓN DE INTERFAZ en cuanto al significado; el color es
    // el azul claro del manual. Reutiliza la rampa secundaria en vez de
    // inventar un tercer azul, que competiría con los dos de la marca.
    info: {
      50: '{nettalcoSecondary.50}',
      100: '{nettalcoSecondary.100}',
      200: '{nettalcoSecondary.200}',
      300: '{nettalcoSecondary.300}',
      400: '{nettalcoSecondary.400}',
      500: '{nettalcoSecondary.500}',
      600: '{nettalcoSecondary.600}',
      700: '{nettalcoSecondary.700}',
      800: '{nettalcoSecondary.800}',
      900: '{nettalcoSecondary.900}',
      950: '{nettalcoSecondary.950}',
    },
    // AYUDA — DECISIÓN DE INTERFAZ en el significado; color del manual
    // (#176973). Aura referencia {help.*} desde el botón pero nunca define la
    // rampa: sin esto quedaban referencias colgando y un violeta fuera de marca.
    help: {
      50: '{nettalcoTeal.50}',
      100: '{nettalcoTeal.100}',
      200: '{nettalcoTeal.200}',
      300: '{nettalcoTeal.300}',
      400: '{nettalcoTeal.400}',
      500: '{nettalcoTeal.500}',
      600: '{nettalcoTeal.600}',
      700: '{nettalcoTeal.700}',
      800: '{nettalcoTeal.800}',
      900: '{nettalcoTeal.900}',
      950: '{nettalcoTeal.950}',
    },
    success: {
      50: '{nettalcoSuccess.50}',
      100: '{nettalcoSuccess.100}',
      200: '{nettalcoSuccess.200}',
      300: '{nettalcoSuccess.300}',
      400: '{nettalcoSuccess.400}',
      500: '{nettalcoSuccess.500}',
      600: '{nettalcoSuccess.600}',
      700: '{nettalcoSuccess.700}',
      800: '{nettalcoSuccess.800}',
      900: '{nettalcoSuccess.900}',
      950: '{nettalcoSuccess.950}',
    },
    warn: {
      50: '{nettalcoWarn.50}',
      100: '{nettalcoWarn.100}',
      200: '{nettalcoWarn.200}',
      300: '{nettalcoWarn.300}',
      400: '{nettalcoWarn.400}',
      500: '{nettalcoWarn.500}',
      600: '{nettalcoWarn.600}',
      700: '{nettalcoWarn.700}',
      800: '{nettalcoWarn.800}',
      900: '{nettalcoWarn.900}',
      950: '{nettalcoWarn.950}',
    },
    // ERROR — DECISIÓN DE INTERFAZ. Antes apuntaba al rojo genérico de Tailwind
    // que arrastra Aura; ahora a la rampa propia, verificada contra blanco.
    error: {
      50: '{nettalcoError.50}',
      100: '{nettalcoError.100}',
      200: '{nettalcoError.200}',
      300: '{nettalcoError.300}',
      400: '{nettalcoError.400}',
      500: '{nettalcoError.500}',
      600: '{nettalcoError.600}',
      700: '{nettalcoError.700}',
      800: '{nettalcoError.800}',
      900: '{nettalcoError.900}',
      950: '{nettalcoError.950}',
    },
    // Sobrescribir colorScheme con colores Nettalco
    colorScheme: {
      light: {
        // Superficies = escala de grises de interfaz anclada en los dos grises
        // del manual. Antes era el slate de Tailwind (gris azulado), que no
        // corresponde a ningún gris de marca.
        surface: {
          0: '{nettalcoGray.0}',
          50: '{nettalcoGray.50}',
          100: '{nettalcoGray.100}',
          200: '{nettalcoGray.200}',
          300: '{nettalcoGray.300}',
          400: '{nettalcoGray.400}',
          500: '{nettalcoGray.500}',
          600: '{nettalcoGray.600}',
          700: '{nettalcoGray.700}',
          800: '{nettalcoGray.800}',
          900: '{nettalcoGray.900}',
          950: '{nettalcoGray.950}',
        },
        // El hover y el pulsado del primario oscurecen de forma progresiva.
        // Antes iban 500 -> 900 -> 800, o sea el pulsado era MÁS CLARO que el
        // hover; con la rampa vieja además el 600 era más oscuro que el 700.
        primary: {
          color: '{primary.500}',       // MANUAL - #1C224D
          contrastColor: '#ffffff',     // 15,16:1
          hoverColor: '{primary.600}',  // DECISIÓN DE INTERFAZ
          activeColor: '{primary.700}', // DECISIÓN DE INTERFAZ
        },
        // DECISIÓN DE INTERFAZ: el azul claro de marca no cumple como texto ni
        // como fondo de texto en su valor puro (blanco sobre #4A7AFF = 3,81:1),
        // así que el relleno sólido usa el 600. El #4A7AFF sigue vivo como
        // anillo de foco, borde y acento, que es donde sí cumple.
        secondary: {
          color: '{nettalcoSecondary.600}',
          contrastColor: '#ffffff',
          hoverColor: '{nettalcoSecondary.700}',
          activeColor: '{nettalcoSecondary.800}',
        },
        success: {
          color: '{success.500}',
          contrastColor: '#ffffff',
          hoverColor: '{success.600}',
          activeColor: '{success.700}',
        },
        info: {
          color: '{info.600}',
          contrastColor: '#ffffff',
          hoverColor: '{info.700}',
          activeColor: '{info.800}',
        },
        // DECISIÓN DE INTERFAZ: texto OSCURO sobre el ámbar, y hover que
        // ACLARA. Un ámbar que admita texto blanco deja de leerse como aviso.
        warn: {
          color: '{warn.500}',
          contrastColor: '{warn.950}', // 5,20:1
          hoverColor: '{warn.400}',    // 7,83:1 con el mismo texto oscuro
          activeColor: '{warn.300}',   // 10,73:1
        },
        error: {
          color: '{error.500}',
          contrastColor: '#ffffff',
          hoverColor: '{error.600}',
          activeColor: '{error.700}',
        },
        // El violeta de Aura era ajeno a la marca; pasa al verde azulado.
        help: {
          color: '{help.600}',         // MANUAL - #176973
          contrastColor: '#ffffff',    // 6,35:1
          hoverColor: '{help.700}',
          activeColor: '{help.800}',
        },
        contrast: {
          color: '{surface.900}',
          contrastColor: '{surface.0}',
          hoverColor: '{surface.800}',
          activeColor: '{surface.700}',
        },
        highlight: {
          background: '{primary.50}',
          focusBackground: '{primary.100}',
          color: '{primary.700}',      // 15,83:1 sobre primary.50
          focusColor: '{primary.800}', // 14,05:1 sobre primary.100
        },
        // DECISIÓN DE INTERFAZ. Aura deja el borde del campo en surface.300 y
        // el icono en surface.400: con esta escala serían 1,53:1 y 2,52:1, por
        // debajo del 3:1 que exige WCAG 1.4.11 para elementos de interfaz.
        // Subidos al gris del manual (#7A7A7A, 4,29:1) y al 600.
        formField: {
          borderColor: '{surface.500}',
          hoverBorderColor: '{surface.600}',
          focusBorderColor: '{primary.color}',
          invalidBorderColor: '{error.500}',
          color: '{surface.800}',
          placeholderColor: '{surface.600}',
          invalidPlaceholderColor: '{error.700}',
          floatLabelColor: '{surface.600}',
          floatLabelFocusColor: '{primary.600}',
          floatLabelActiveColor: '{surface.600}',
          iconColor: '{surface.500}',
        },
        // DECISIÓN DE INTERFAZ. El texto atenuado de Aura es surface.500: con
        // esta escala sería el #7A7A7A del manual, 4,29:1, que no cumple.
        text: {
          color: '{surface.800}',        // 12,63:1
          hoverColor: '{surface.900}',
          mutedColor: '{surface.600}',   // 6,19:1
          hoverMutedColor: '{surface.700}',
        },
        content: {
          borderColor: '{surface.300}',  // separador decorativo, exento de 1.4.11
        },
        list: {
          option: {
            icon: { color: '{surface.500}', focusColor: '{surface.600}' },
          },
        },
        navigation: {
          item: {
            icon: {
              color: '{surface.500}',
              focusColor: '{surface.600}',
              activeColor: '{surface.600}',
            },
          },
          submenuIcon: {
            color: '{surface.500}',
            focusColor: '{surface.600}',
            activeColor: '{surface.600}',
          },
        },
      },
      // DECISIÓN DE INTERFAZ COMPLETA: el manual no contempla modo oscuro.
      // Regla general: en oscuro el relleno sólido lo pone un nivel CLARO de
      // cada rampa y la etiqueta va en oscuro. El azul oscuro de marca no
      // puede ser el primario aquí porque se confundiría con el fondo, así que
      // el papel de primario lo toma el azul claro del manual, que es el
      // segundo en la jerarquía de marca.
      dark: {
        surface: {
          0: '{nettalcoSurfaceDark.0}',
          50: '{nettalcoSurfaceDark.50}',
          100: '{nettalcoSurfaceDark.100}',
          200: '{nettalcoSurfaceDark.200}',
          300: '{nettalcoSurfaceDark.300}',
          400: '{nettalcoSurfaceDark.400}',
          500: '{nettalcoSurfaceDark.500}',
          600: '{nettalcoSurfaceDark.600}',
          700: '{nettalcoSurfaceDark.700}',
          800: '{nettalcoSurfaceDark.800}',
          900: '{nettalcoSurfaceDark.900}',
          950: '{nettalcoSurfaceDark.950}',
        },
        primary: {
          color: '{nettalcoSecondary.400}',   // 6,08:1 sobre surface.900
          contrastColor: '{primary.950}',     // 6,93:1
          hoverColor: '{nettalcoSecondary.300}',
          activeColor: '{nettalcoSecondary.200}',
        },
        secondary: {
          color: '{nettalcoSecondary.300}',
          contrastColor: '{primary.950}',
          hoverColor: '{nettalcoSecondary.200}',
          activeColor: '{nettalcoSecondary.100}',
        },
        // Aquí sí encaja el verde menta del manual: 13,02:1 sobre el fondo
        // oscuro, y con texto success.950 encima, 13,03:1.
        success: {
          color: '{success.200}',             // MANUAL - #A2F0A1
          contrastColor: '{success.950}',
          hoverColor: '{success.100}',
          activeColor: '{success.50}',
        },
        info: {
          color: '{info.300}',
          contrastColor: '{info.950}',
          hoverColor: '{info.200}',
          activeColor: '{info.100}',
        },
        warn: {
          color: '{warn.300}',
          contrastColor: '{warn.950}',
          hoverColor: '{warn.200}',
          activeColor: '{warn.100}',
        },
        error: {
          color: '{error.300}',
          contrastColor: '{error.950}',
          hoverColor: '{error.200}',
          activeColor: '{error.100}',
        },
        help: {
          color: '{help.300}',
          contrastColor: '{help.950}',
          hoverColor: '{help.200}',
          activeColor: '{help.100}',
        },
        contrast: {
          color: '{surface.0}',
          contrastColor: '{surface.950}',
          hoverColor: '{surface.100}',
          activeColor: '{surface.200}',
        },
        // Antes el fondo de selección era primary.900 sobre surface.900: dos
        // azules casi idénticos, la fila seleccionada no se distinguía. Ahora
        // es una mezcla translúcida del azul claro, como hace Aura.
        highlight: {
          background: 'color-mix(in srgb, {nettalcoSecondary.400}, transparent 84%)',
          focusBackground: 'color-mix(in srgb, {nettalcoSecondary.400}, transparent 76%)',
          color: '{nettalcoSecondary.200}',   // 8,42:1 sobre esa mezcla
          focusColor: '{nettalcoSecondary.100}',
        },
        // El borde de campo por defecto (surface.600) daba 2,41:1 sobre el
        // fondo del campo; sube al 500 para llegar a 3,67:1.
        formField: {
          borderColor: '{surface.500}',
          hoverBorderColor: '{surface.400}',
          focusBorderColor: '{primary.color}',
          // Aura deja estos dos en el rojo genérico de Tailwind ({red.*});
          // se traen a la rampa de error del tema.
          invalidBorderColor: '{error.400}',
          invalidPlaceholderColor: '{error.300}', // 7,26:1 sobre surface.900
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
