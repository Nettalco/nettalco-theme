# Informe — tema PrimeNG de Nettalco v1.2.0

Alineación del preset con el manual de marca oficial (`Nettalco_manual de marca.pdf`, 2024)
y decisión razonada de todo lo que el manual no cubre.

Lo usan 13 sistemas, así que cada decisión de aquí se multiplica por trece. Por eso: todo
contraste de este informe está **medido** con la fórmula WCAG 2.1, no estimado, y los valores
críticos están además **verificados en navegador** sobre componentes PrimeNG reales, en los dos
modos. El alcance exacto de esa verificación —qué diez componentes cubre y qué queda fuera—
está enumerado al principio de §7.2, y la nota de método de §11 explica por qué.

---

## 1. Resumen de lo que cambió

| | Antes (1.1.1) | Ahora (1.2.0) |
|---|---|---|
| Primario | `#112A46` — **no figura en el manual** | `#1C224D` — azul oscuro del manual |
| Rampa del primario | irregular (el 600 era más oscuro que el 700) | monótona 50→950, verificada |
| Anillo de foco | el propio primario (1:1 sobre la barra lateral) | `#4A7AFF`, cumple sobre blanco y sobre azul oscuro |
| Grises de interfaz | `slate` de Tailwind (gris azulado, ajeno a la marca) | escala neutra anclada en `#E6E6E6` y `#7A7A7A` |
| Error | rojo genérico de Tailwind | rampa propia accesible |
| Éxito / aviso / info | cianes y naranjas que no están en el manual | derivados del manual donde tiene sentido |
| Severidad "help" | **violeta** `#8B5CF6` | verde azulado `#176973` del manual |
| Modo oscuro | rampa de superficies invertida: el texto atenuado era ilegible | rampa corregida, texto atenuado a 5,40:1 |
| Color de enlace | el primario: 1,20:1 contra el texto que lo rodea | `#2558E4` + subrayado permanente |
| Hover/pulsado del primario | oscurecían: 1,10:1 y 1,16:1, imperceptibles | aclaran: 1,35:1 y 1,49:1 |
| Bordes `outlined` en oscuro | `{X.700}`, entre 1,00:1 y 2,54:1 | `{X.color}`, entre 6,08:1 y 13,02:1 |
| Texto de Message/Toast en oscuro | `{X.500}`, entre 2,95:1 y 4,47:1 | `{X.color}`, entre 5,60:1 y 8,69:1 |

---

## 2. Jerarquía de marca y su traducción a PrimeNG

El manual es explícito: *"El color azul oscuro simboliza la herencia sólida de Nettalco y es
el color principal a utilizarse. **Su uso debe predominar sobre el resto de los colores**.
Mientras que el color azul claro refleja cercanía y modernidad."*

Traducción al vocabulario de PrimeNG:

| Rol en PrimeNG | Color | Por qué |
|---|---|---|
| **`primary`** (botones principales, selección, cabeceras, enlaces de acción) | **#1C224D** azul oscuro | Es el dominante por mandato del manual. 15,16:1 sobre blanco: sirve para todo, incluido texto. |
| **Anillo de foco** | **#4A7AFF** azul claro | Es el único color del manual que cumple ≥3:1 **sobre los dos fondos** del sistema. Ver §4. |
| **Acento / `info` / enlaces** | familia de **#4A7AFF** | Segundo en jerarquía. Ojo: el valor puro no vale como texto (§3). Para texto se usa su nivel 600, `#2558E4`. |
| **Texto sobre azul oscuro** | **#B7CAFF** lavanda | 9,32:1 sobre el navy. Resulta ser el mismo tono y saturación que #4A7AFF, solo más claro: encaja como nivel 200 de esa misma rampa. |
| **`success`** | familia del **verde menta #A2F0A1** | El menta solo puede ser el nivel 200 (§5). |
| **`help`** | **#176973** verde azulado | Único acento del manual que aguanta texto sobre blanco (6,35:1). Sustituye al violeta `#8B5CF6` que traía este preset (Aura no define `help`). |
| **Neutros** | **#E6E6E6** y **#7A7A7A** | Anclas de la escala de grises (§6). |

### Decisión que tomé y conviene saber

El manual lista el azul claro como **principal**, segundo en jerarquía. La lectura literal
sería usarlo como color de relleno de botones secundarios y como color de enlaces. **No lo
hice en su valor puro**, porque no cumple contraste (3,81:1 sobre blanco). Lo que hice:

- **`#4A7AFF` exacto** se conserva donde sí cumple y donde más se nota: el **anillo de foco de
  todo el sistema**, bordes, iconos y texto grande (≥24px).
- Para rellenos sólidos y texto normal se usa **`#2558E4`** (nivel 600 de su misma rampa:
  mismo tono, 5,84:1).

Es la lectura que respeta la jerarquía sin romper accesibilidad. Si marca prefiere la lectura
literal, está en la lista de §9.

---

## 3. La rampa del primario

`#1C224D` es hsl(233°, 47%, 20,6%) — un color **oscuro**. En una escala tipo Tailwind viviría
en el 800-900. Ponerlo en el 500, como pide el encargo, comprime la mitad oscura de la rampa.
Está construida así a propósito:

| Nivel | Hex | Para qué lo usa PrimeNG |
|---|---|---|
| 50 | `#F1F2FB` | fondo de fila/opción seleccionada (`highlight.background`) |
| 100 | `#DBDEF5` | selección con foco, fondo de `tag` |
| 200 | `#B7BDEB` | bordes suaves |
| 300 | `#818BDA` | acento sobre fondo oscuro |
| 400 | `#3542B6` | intermedio |
| **500** | **`#1C224D`** | **el color de marca**: botón primario, borde, `primary.color` |
| 600 | `#161A43` | tintes oscuros; ya NO es el hover (ver abajo) |
| 700 | `#121538` | **texto sobre el 50** (15,83:1) |
| 800 | `#0D0F2D` | **texto sobre el 100** (14,05:1) |
| 900 | `#090B22` | fondos oscuros |
| 950 | `#060616` | fondos oscuros |

Oscurece de forma monótona en los 11 niveles (comprobado calculando la luminancia relativa de
cada uno). La mitad clara lleva pasos grandes porque tiene que cubrir de 96% a 21% de
luminosidad; la mitad oscura lleva pasos de ~3 puntos.

**Lo que la mitad oscura NO puede dar es el hover.** Con el 500 ya en luminancia 0,019, bajar
al 600 o al 700 produce cambios de 1,10:1 y 1,16:1: el usuario no percibe respuesta al pasar el
ratón ni al pulsar (Aura llega a 1,49:1 y 1,46:1 porque su primario es un verde medio). Por eso
el hover y el pulsado **aclaran** mezclando hacia el 400: `#293282` (1,35:1) y `#2C3791`
(1,49:1), ambos con el texto blanco por encima de 9:1. Está en la lista de §9.

---

## 4. El anillo de foco: el problema con trampa

El componente de layout usa el **verde menta** del manual como anillo de foco. Sobre el azul
oscuro funciona de sobra (11,20:1). **Sobre blanco da 1,1:1 — es invisible.** Y el valor por
defecto de Aura (`focusRing.color = {primary.color}`) tiene el problema simétrico: 15:1 sobre
blanco pero **1:1 sobre la barra lateral azul**, porque el anillo es del mismo color que el fondo.

Hace falta un color que cumpla ≥3:1 **contra los dos**. Resolviendo la desigualdad de WCAG, ese
color tiene que tener luminancia relativa entre 0,18 y 0,30. **El azul claro `#4A7AFF` del manual
cae justo dentro**:

| Fondo | Ratio | ¿Cumple 3:1? |
|---|---|---|
| Blanco `#FFFFFF` | **3,81:1** | Sí |
| Azul oscuro `#1C224D` (barra lateral, botón primario) | **3,98:1** | Sí |
| Superficie oscura `#101928` (modo oscuro) | **4,63:1** | Sí |
| Gris de cabecera `#F2F2F2` | **3,40:1** | Sí |

Un solo color, los cuatro fondos. Es un resultado afortunado: el color del manual que **no**
sirve para texto es exactamente el que sí sirve para señalar el foco.

Se subió además el grosor de **1px a 2px** (`offset` 2px): con 3,8:1 el anillo necesita cuerpo
para leerse con claridad.

**Verificado en navegador**: con Tab real sobre un botón dentro de la barra lateral azul, el
anillo sale `rgb(74,122,255)` = `#4A7AFF`, 2px sólido, offset 2px, 3,98:1 contra el fondo.

También se corrigió que el botón de PrimeNG traía **16 anillos de foco propios** (uno por
severidad y modo) que se pintaban del color del propio botón. Ahora todos apuntan al token
global `{focus.ring.color}`.

---

## 5. Colores semánticos (el manual no los cubre)

Todos marcados en el código con `// DECISIÓN DE INTERFAZ`.

- **Éxito** — derivado del **verde menta `#A2F0A1`**, conservando su tono (119-140°). El menta
  ocupa el **nivel 200**: con 1,35:1 sobre blanco no puede ser texto ni relleno de botón, pero
  es perfecto como **fondo de badge** (texto oscuro encima: 10,18:1) y como **color de éxito en
  modo oscuro** (13,02:1). El botón sólido usa el 500 `#228732`.
- **Error** — **no hay derivación posible**: ningún color de marca puede significar "error" sin
  confundirse con los azules. Rojo elegido por accesibilidad: `#CE272F` con texto blanco
  (5,31:1); texto de error `#92161C` (8,92:1).
- **Aviso** — tampoco hay derivación. Ámbar. El relleno del botón es el **600 `#AB5F07`** con
  **texto blanco** (4,80:1), y el hover oscurece al 700 (6,93:1) como el resto de severidades.
  El nivel 500 `#CE7C09` **no** admite texto blanco (3,23:1), así que el relleno no puede ser
  ese; el 500 sí vale como borde (3,23:1 ≥ 3) y el 700 como texto sobre blanco (6,93:1).
  El precio es un ámbar más apagado que el amarillo-naranja brillante habitual en avisos;
  está en la lista de §9 por si diseño prefiere el brillo al convenio.

  *Corrección respecto a la primera versión de este informe*: allí escribí que "ningún ámbar lo
  bastante luminoso para leerse como aviso admite texto blanco". **Era falso** y lo desmiente
  la propia rampa: `warn.600` da 4,80:1 con blanco y `warn.700` da 6,93:1. La versión anterior
  ponía texto oscuro sobre el 500 y hacía que el hover aclarase; se ha revertido a la
  convención normal.
- **Información** — reutiliza la rampa del azul claro del manual en vez de inventar un tercer
  azul que competiría con los dos de la marca.
- **Ayuda** — `#176973`, el verde azulado del manual, que antes no se usaba en ningún sitio.

### El color de enlace, y por qué va subrayado

El botón de enlace usaba `{primary.color}`. Contra el texto base `#333333` eso da **1,20:1**:
un enlace dentro de un párrafo solo se reconocía por su posición, que es exactamente lo que
WCAG 1.4.1 no permite. Es consecuencia directa de que el primario de marca sea un navy casi
negro, muy parecido al color del texto.

Ahora el enlace es **`#2558E4`** (el azul claro de marca oscurecido hasta cumplir sobre blanco:
5,84:1) y en oscuro `#8FADFF` (8,05:1).

Eso no basta por sí solo, y conviene entender por qué: para que el color distinga al enlace sin
más ayuda haría falta 3:1 **contra el texto que lo rodea**, y a la vez 4,5:1 **contra el fondo**.
Las dos condiciones son incompatibles: la primera exige luminancia ≥ 0,1993 y la segunda
≤ 0,1833. **Ningún color existe en ese hueco.** Por eso el enlace lleva **subrayado permanente**,
añadido en `css/index.ts`: Aura solo subraya al pasar el ratón, lo que deja el estado de reposo
dependiendo únicamente del color. El subrayado es el indicio no cromático que exige la norma,
no un adorno.

---

## 6. Escala de grises de interfaz (el manual solo trae dos)

Anclada en los dos grises del manual, que son **neutros puros** (R=G=B), de modo que la escala
entera es neutra pura: `#E6E6E6` → nivel **200**, `#7A7A7A` → nivel **500**.

Antes las superficies usaban el `slate` de Tailwind, un gris azulado que no corresponde a
ningún gris de marca.

**El aviso sobre `#7A7A7A` se confirma: 4,29:1, no cumple como texto normal.** La solución no
fue descartarlo sino colocarlo donde sí cumple:

- `#7A7A7A` (500) → **bordes de campo e iconos** (elementos de interfaz, mínimo 3:1). Cumple.
- `#616161` (600) → **texto atenuado y placeholders**. 6,19:1.
- `#333333` (800) → **texto base**. 12,63:1.

Aura dejaba el borde del campo en `surface.300` (1,53:1) y el icono en `surface.400` (2,52:1),
ambos por debajo del 3:1 que exige WCAG 1.4.11. Corregido.

---

## 7. Tabla de contrastes

Mínimos aplicados: **4,5:1** texto normal · **3:1** texto grande y elementos de interfaz
(bordes, iconos, anillos de foco) · las filas marcadas **n/a** o **informativo** son elementos
decorativos o comparaciones que se documentan pero no son criterio de conformidad.

Las filas que empiezan por **NO:** o **HOY:** están puestas a propósito para documentar un uso
que **no** hay que hacer (o lo que fallaba antes); su "No cumple" es el resultado esperado.

### 7.1 Pares de la paleta, calculados

**1. Primario de marca (#1C224D)**

| Par color / fondo | Muestra | Ratio | Mínimo | Resultado |
|---|---|---|---|---|
| Texto blanco sobre boton primario (primary.500 = #1C224D) | `#FFFFFF` sobre `#1C224D` | **15.16:1** | 4.5 | Cumple |
| Texto blanco sobre hover primario (primary.600) | `#FFFFFF` sobre `#161A43` | **16.63:1** | 4.5 | Cumple |
| Texto blanco sobre pulsado primario (primary.700) | `#FFFFFF` sobre `#121538` | **17.65:1** | 4.5 | Cumple |
| highlight.color (primary.700) sobre highlight.background (primary.50) | `#121538` sobre `#F1F2FB` | **15.83:1** | 4.5 | Cumple |
| highlight.focusColor (primary.800) sobre focusBackground (primary.100) | `#0D0F2D` sobre `#DBDEF5` | **14.05:1** | 4.5 | Cumple |
| Tag primario: texto primary.700 sobre fondo primary.100 | `#121538` sobre `#DBDEF5` | **13.26:1** | 4.5 | Cumple |
| Borde de boton outlined primario (primary.500) sobre blanco | `#1C224D` sobre `#FFFFFF` | **15.16:1** | 3 | Cumple |
| primary.500 como texto sobre blanco (enlace/label) | `#1C224D` sobre `#FFFFFF` | **15.16:1** | 4.5 | Cumple |
| primary.500 como texto sobre gray.50 (fila alterna) | `#1C224D` sobre `#FAFAFA` | **14.52:1** | 4.5 | Cumple |

**2. Anillo de foco (#4A7AFF) - tiene que servir sobre AMBOS fondos**

| Par color / fondo | Muestra | Ratio | Mínimo | Resultado |
|---|---|---|---|---|
| Anillo #4A7AFF sobre blanco (fondo de pagina) | `#4A7AFF` sobre `#FFFFFF` | **3.81:1** | 3 | Cumple |
| Anillo #4A7AFF sobre navy #1C224D (sidebar / boton primario) | `#4A7AFF` sobre `#1C224D` | **3.98:1** | 3 | Cumple |
| Anillo #4A7AFF sobre superficie oscura (dark surface.900) | `#4A7AFF` sobre `#101928` | **4.63:1** | 3 | Cumple |
| Anillo #4A7AFF sobre gray.100 (toolbar) | `#4A7AFF` sobre `#F2F2F2` | **3.40:1** | 3 | Cumple |
| HOY: verde menta como anillo sobre blanco -> INVISIBLE | `#A2F0A1` sobre `#FFFFFF` | **1.35:1** | 3 | No cumple |
| HOY: verde menta como anillo sobre navy -> si funciona | `#A2F0A1` sobre `#1C224D` | **11.20:1** | 3 | Cumple |
| HOY: primary.color como anillo sobre navy -> INVISIBLE | `#1C224D` sobre `#1C224D` | **1.00:1** | 3 | No cumple |

**3. Azul claro de marca #4A7AFF: donde SI y donde NO**

| Par color / fondo | Muestra | Ratio | Mínimo | Resultado |
|---|---|---|---|---|
| NO: #4A7AFF como texto normal sobre blanco | `#4A7AFF` sobre `#FFFFFF` | **3.81:1** | 4.5 | No cumple |
| SI: #4A7AFF como texto grande (>=24px, o >=18.66px bold) sobre blanco | `#4A7AFF` sobre `#FFFFFF` | **3.81:1** | 3 | Cumple |
| SI: enlace / texto = secondary.600 sobre blanco | `#2558E4` sobre `#FFFFFF` | **5.84:1** | 4.5 | Cumple |
| SI: boton secundario solido, blanco sobre secondary.600 | `#FFFFFF` sobre `#2558E4` | **5.84:1** | 4.5 | Cumple |
| NO: #4A7AFF como texto normal sobre navy (tampoco cumple) | `#4A7AFF` sobre `#1C224D` | **3.98:1** | 4.5 | No cumple |
| SI: texto sobre navy = lavanda #B7CAFF (secondary.200) | `#B7CAFF` sobre `#1C224D` | **9.32:1** | 4.5 | Cumple |
| SI: #4A7AFF como borde/icono sobre navy (elemento de UI) | `#4A7AFF` sobre `#1C224D` | **3.98:1** | 3 | Cumple |

**4. Gris de interfaz (anclado en #E6E6E6 y #7A7A7A)**

| Par color / fondo | Muestra | Ratio | Mínimo | Resultado |
|---|---|---|---|---|
| NO: #7A7A7A (gray.500) como texto sobre blanco | `#7A7A7A` sobre `#FFFFFF` | **4.29:1** | 4.5 | No cumple |
| SI: texto base gray.800 sobre blanco | `#333333` sobre `#FFFFFF` | **12.63:1** | 4.5 | Cumple |
| SI: texto atenuado gray.600 sobre blanco | `#616161` sobre `#FFFFFF` | **6.19:1** | 4.5 | Cumple |
| SI: placeholder gray.600 sobre blanco | `#616161` sobre `#FFFFFF` | **6.19:1** | 4.5 | Cumple |
| Texto base gray.800 sobre gray.100 (cabecera de tabla) | `#333333` sobre `#F2F2F2` | **11.29:1** | 4.5 | Cumple |
| SI: borde de campo gray.500 (#7A7A7A) sobre blanco | `#7A7A7A` sobre `#FFFFFF` | **4.29:1** | 3 | Cumple |
| SI: borde de campo hover gray.600 sobre blanco | `#616161` sobre `#FFFFFF` | **6.19:1** | 3 | Cumple |
| SI: icono de campo gray.500 sobre blanco | `#7A7A7A` sobre `#FFFFFF` | **4.29:1** | 3 | Cumple |
| Separador gray.300 sobre blanco (decorativo, exento de 1.4.11) | `#D1D1D1` sobre `#FFFFFF` | **1.53:1** | — | n/a |
| Deshabilitado: texto gray.500 sobre gray.200 #E6E6E6 (exento) | `#7A7A7A` sobre `#E6E6E6` | **3.44:1** | — | n/a |

**5. Semanticos - modo claro**

| Par color / fondo | Muestra | Ratio | Mínimo | Resultado |
|---|---|---|---|---|
| Blanco sobre error.500 (boton peligro) | `#FFFFFF` sobre `#CE272F` | **5.31:1** | 4.5 | Cumple |
| Blanco sobre error.600 (hover) | `#FFFFFF` sobre `#AF1D24` | **6.94:1** | 4.5 | Cumple |
| Texto de error: error.700 sobre blanco | `#92161C` sobre `#FFFFFF` | **8.92:1** | 4.5 | Cumple |
| Mensaje de error: error.700 sobre error.50 | `#92161C` sobre `#FEF1F1` | **8.10:1** | 4.5 | Cumple |
| Borde de campo invalido error.500 sobre blanco | `#CE272F` sobre `#FFFFFF` | **5.31:1** | 3 | Cumple |
| NO: blanco sobre warn.500 (por eso el relleno NO es el 500) | `#FFFFFF` sobre `#CE7C09` | **3.23:1** | 4.5 | No cumple |
| SI: blanco sobre warn.600 = el boton de aviso | `#FFFFFF` sobre `#AB5F07` | **4.80:1** | 4.5 | Cumple |
| Blanco sobre warn.700 (hover, oscurece como el resto) | `#FFFFFF` sobre `#8B4809` | **6.93:1** | 4.5 | Cumple |
| Blanco sobre warn.800 (pulsado) | `#FFFFFF` sobre `#6F370B` | **9.43:1** | 4.5 | Cumple |
| Texto de aviso: warn.700 sobre blanco | `#8B4809` sobre `#FFFFFF` | **6.93:1** | 4.5 | Cumple |
| Mensaje de aviso: warn.700 sobre warn.50 | `#8B4809` sobre `#FEFAEB` | **6.63:1** | 4.5 | Cumple |
| Blanco sobre success.500 (boton exito) | `#FFFFFF` sobre `#228732` | **4.59:1** | 4.5 | Cumple |
| Blanco sobre success.600 (hover) | `#FFFFFF` sobre `#176D28` | **6.45:1** | 4.5 | Cumple |
| Texto de exito: success.700 sobre blanco | `#125923` sobre `#FFFFFF` | **8.47:1** | 4.5 | Cumple |
| Mensaje de exito: success.700 sobre success.50 | `#125923` sobre `#E9FBE9` | **7.84:1** | 4.5 | Cumple |
| NO: verde menta #A2F0A1 como texto de exito sobre blanco | `#A2F0A1` sobre `#FFFFFF` | **1.35:1** | 4.5 | No cumple |
| SI: badge de exito, texto success.900 sobre verde menta #A2F0A1 | `#0E3419` sobre `#A2F0A1` | **10.18:1** | 4.5 | Cumple |
| Blanco sobre info = secondary.600 (boton info) | `#FFFFFF` sobre `#2558E4` | **5.84:1** | 4.5 | Cumple |
| Mensaje info: secondary.700 sobre secondary.50 | `#1A42BC` sobre `#F0F4FF` | **7.49:1** | 4.5 | Cumple |
| Blanco sobre help = teal.600 (#176973) | `#FFFFFF` sobre `#176973` | **6.35:1** | 4.5 | Cumple |
| Texto #176973 (teal.600) sobre blanco | `#176973` sobre `#FFFFFF` | **6.35:1** | 4.5 | Cumple |
| Mensaje help: teal.700 sobre teal.50 | `#12545E` sobre `#EBF9FA` | **7.93:1** | 4.5 | Cumple |

**6. Modo oscuro**

| Par color / fondo | Muestra | Ratio | Mínimo | Resultado |
|---|---|---|---|---|
| Texto surface.0 sobre fondo surface.900 | `#F1F4F9` sobre `#101928` | **15.98:1** | 4.5 | Cumple |
| Texto atenuado surface.400 sobre surface.900 | `#7C90AB` sobre `#101928` | **5.40:1** | 4.5 | Cumple |
| Placeholder surface.400 sobre campo surface.950 | `#7C90AB` sobre `#090F1A` | **5.88:1** | 4.5 | Cumple |
| Borde de campo surface.500 sobre campo surface.950 | `#566E8F` sobre `#090F1A` | **3.67:1** | 3 | Cumple |
| Borde de contenido surface.700 sobre surface.900 (decorativo) | `#2A3B55` sobre `#101928` | **1.56:1** | — | n/a |
| Primario oscuro = secondary.400 sobre surface.900 | `#6B93FF` sobre `#101928` | **6.08:1** | 3 | Cumple |
| Texto primary.950 sobre boton secondary.400 | `#060616` sobre `#6B93FF` | **6.93:1** | 4.5 | Cumple |
| Enlace secondary.300 sobre surface.900 | `#8FADFF` sobre `#101928` | **8.05:1** | 4.5 | Cumple |
| Exito = verde menta #A2F0A1 (success.200) sobre surface.900 | `#A2F0A1` sobre `#101928` | **13.02:1** | 4.5 | Cumple |
| Texto success.950 sobre boton verde menta | `#071D0E` sobre `#A2F0A1` | **13.03:1** | 4.5 | Cumple |
| Error = error.300 sobre surface.900 | `#F28888` sobre `#101928` | **7.26:1** | 4.5 | Cumple |
| Aviso = warn.300 sobre surface.900 | `#F4C357` sobre `#101928` | **10.73:1** | 4.5 | Cumple |
| Help = teal.300 sobre surface.900 | `#68C0CA` sobre `#101928` | **8.38:1** | 4.5 | Cumple |
| Hover de fila surface.800 vs surface.900 (perceptible) | `#1B283C` sobre `#101928` | **1.19:1** | — | n/a |
| Fila seleccionada #1F2D4A (secondary.400 al 16%) vs surface.900 | `#1F2D4A` sobre `#101928` | **1.29:1** | — | n/a |
| Texto secondary.200 sobre fila seleccionada #1F2D4A | `#B7CAFF` sobre `#1F2D4A` | **8.42:1** | 4.5 | Cumple |
| Texto secondary.100 sobre fila seleccionada+foco #26365C | `#DBE5FF` sobre `#26365C` | **9.44:1** | 4.5 | Cumple |

**7. Enlaces y estados del primario**

| Par color / fondo | Muestra | Ratio | Mínimo | Resultado |
|---|---|---|---|---|
| NO: enlace {primary.color} frente al texto base (indistinguible) | `#1C224D` sobre `#333333` | **1.20:1** | 3 | No cumple |
| SI: enlace secondary.600 sobre blanco | `#2558E4` sobre `#FFFFFF` | **5.84:1** | 4.5 | Cumple |
| Enlace secondary.600 frente al texto base: ningun color llega a 3:1 aqui, por eso el subrayado | `#2558E4` sobre `#333333` | **2.16:1** | — | n/a |
| Enlace en oscuro: secondary.300 sobre surface.900 | `#8FADFF` sobre `#101928` | **8.05:1** | 4.5 | Cumple |
| NO: hover oscureciendo al 600 (imperceptible) | `#161A43` sobre `#1C224D` | **1.10:1** | 1.4 | No cumple |
| NO: pulsado oscureciendo al 700 (imperceptible) | `#121538` sobre `#1C224D` | **1.16:1** | 1.4 | No cumple |
| SI: hover aclarando #293282 frente al 500 | `#293282` sobre `#1C224D` | **1.35:1** | 1.3 | Cumple |
| SI: pulsado aclarando #2C3791 frente al 500 | `#2C3791` sobre `#1C224D` | **1.49:1** | 1.45 | Cumple |
| Blanco sobre el hover #293282 | `#FFFFFF` sobre `#293282` | **11.21:1** | 4.5 | Cumple |
| Blanco sobre el pulsado #2C3791 | `#FFFFFF` sobre `#2C3791` | **10.18:1** | 4.5 | Cumple |

**Fallos no esperados: 0.**

### 7.2 Medido en el navegador, sobre componentes PrimeNG reales

#### Alcance exacto de esta verificación

**Lo que se mide** (10 componentes, los dos modos):

`button` (8 severidades × sólido/outlined/texto, más el botón de enlace) · `inputtext`
(normal, foco, inválido, deshabilitado) · `inputgroup` (addon) · `togglebutton` · `datatable`
(celda, cabecera, fila seleccionada) · `menu` · `message` (6 severidades, normal y `outlined`) ·
`inlinemessage` · `toast` (resumen y detalle) · `tag`. Más la capa semántica que todos
comparten: superficies, texto, texto atenuado, bordes de campo, resaltado y anillo de foco.

**Lo que NO se mide**: los otros ~75 archivos de componente del preset (`select`, `checkbox`,
`datepicker`, `dialog`, `paginator`, `tree`, `stepper`…). Todos referencian los mismos tokens
semánticos que sí están medidos, así que heredan las correcciones —pero eso es una **inferencia,
no una medición**, y así hay que leerlo.

#### Cómo está montada, para que se pueda repetir

- Se resuelve el preset compilado con el motor real de PrimeNG y se extrae el **CSS real de los
  componentes** (`@primeuix/styles`), sus variables por componente y el bloque `css` del preset.
- Se mide con Playwright el color **realmente pintado**, componiendo la transparencia de los
  `color-mix` contra el fondo efectivo de cada ancestro.
- El modo oscuro se activa con `.p-dark` en el **elemento raíz** y **se mide en una llamada
  aparte**: hacerlo en el mismo turno que el cambio de clase devuelve valores del modo claro.
- Cada medición comprueba además que el elemento está **realmente tematizado**: que su color
  computado coincide con la variable del componente (`--p-inputgroup-addon-color`,
  `--p-togglebutton-color`, `--p-toast-*-detail-color`, `--p-tag-*-color`). Si un elemento
  hereda el color en vez de recibirlo del tema, la medición no prueba nada sobre el tema y se
  marca. **154 de 154 dan tematizado correcto.** Esta comprobación se añadió porque una versión
  anterior de la página usaba la clase inexistente `p-inputgroup-addon` (la real es
  `p-inputgroupaddon`): el addon no se pintaba con el tema y la medición parecía correcta sin
  serlo.

#### Modo claro — 77 comprobaciones

| Elemento | Medido en el navegador | Ratio | Mín | |
|---|---|---|---|---|
| boton solido · primary | `#FFFFFF` sobre `#1C224D` | **15.16:1** | 4.5 | Cumple |
| boton outlined · primary | `#1C224D` sobre `#FFFFFF` | **15.16:1** | 4.5 | Cumple |
| BORDE outlined · primary | `#1C224D` sobre `#FFFFFF` | **15.16:1** | 3 | Cumple |
| boton texto · primary | `#1C224D` sobre `#FFFFFF` | **15.16:1** | 4.5 | Cumple |
| boton solido · secondary | `#616161` sobre `#F2F2F2` | **5.53:1** | 4.5 | Cumple |
| boton outlined · secondary | `#616161` sobre `#FFFFFF` | **6.19:1** | 4.5 | Cumple |
| BORDE outlined · secondary | `#7A7A7A` sobre `#FFFFFF` | **4.29:1** | 3 | Cumple |
| boton texto · secondary | `#616161` sobre `#FFFFFF` | **6.19:1** | 4.5 | Cumple |
| boton solido · success | `#FFFFFF` sobre `#228732` | **4.59:1** | 4.5 | Cumple |
| boton outlined · success | `#176D28` sobre `#FFFFFF` | **6.45:1** | 4.5 | Cumple |
| BORDE outlined · success | `#228732` sobre `#FFFFFF` | **4.59:1** | 3 | Cumple |
| boton texto · success | `#176D28` sobre `#FFFFFF` | **6.45:1** | 4.5 | Cumple |
| boton solido · info | `#FFFFFF` sobre `#2558E4` | **5.84:1** | 4.5 | Cumple |
| boton outlined · info | `#2558E4` sobre `#FFFFFF` | **5.84:1** | 4.5 | Cumple |
| BORDE outlined · info | `#4A7AFF` sobre `#FFFFFF` | **3.81:1** | 3 | Cumple |
| boton texto · info | `#2558E4` sobre `#FFFFFF` | **5.84:1** | 4.5 | Cumple |
| boton solido · warn | `#FFFFFF` sobre `#AB5F07` | **4.8:1** | 4.5 | Cumple |
| boton outlined · warn | `#AB5F07` sobre `#FFFFFF` | **4.8:1** | 4.5 | Cumple |
| BORDE outlined · warn | `#CE7C09` sobre `#FFFFFF` | **3.23:1** | 3 | Cumple |
| boton texto · warn | `#AB5F07` sobre `#FFFFFF` | **4.8:1** | 4.5 | Cumple |
| boton solido · help | `#FFFFFF` sobre `#176973` | **6.35:1** | 4.5 | Cumple |
| boton outlined · help | `#176973` sobre `#FFFFFF` | **6.35:1** | 4.5 | Cumple |
| BORDE outlined · help | `#1F7884` sobre `#FFFFFF` | **5.15:1** | 3 | Cumple |
| boton texto · help | `#176973` sobre `#FFFFFF` | **6.35:1** | 4.5 | Cumple |
| boton solido · danger | `#FFFFFF` sobre `#CE272F` | **5.31:1** | 4.5 | Cumple |
| boton outlined · danger | `#AF1D24` sobre `#FFFFFF` | **6.94:1** | 4.5 | Cumple |
| BORDE outlined · danger | `#CE272F` sobre `#FFFFFF` | **5.31:1** | 3 | Cumple |
| boton texto · danger | `#AF1D24` sobre `#FFFFFF` | **6.94:1** | 4.5 | Cumple |
| boton solido · contrast | `#FFFFFF` sobre `#121212` | **18.73:1** | 4.5 | Cumple |
| boton outlined · contrast | `#121212` sobre `#FFFFFF` | **18.73:1** | 4.5 | Cumple |
| BORDE outlined · contrast | `#4A4A4A` sobre `#FFFFFF` | **8.86:1** | 3 | Cumple |
| boton texto · contrast | `#121212` sobre `#FFFFFF` | **18.73:1** | 4.5 | Cumple |
| message · error | `#AF1D24` sobre `#FEF2F2` | **6.34:1** | 4.5 | Cumple |
| message outlined · error | `#AF1D24` sobre `#FFFFFF` | **6.94:1** | 4.5 | Cumple |
| tag · danger | `#92161C` sobre `#FCDEDE` | **7.07:1** | 4.5 | Cumple |
| message · warn | `#AB5F07` sobre `#FEFAEC` | **4.61:1** | 4.5 | Cumple |
| message outlined · warn | `#AB5F07` sobre `#FFFFFF` | **4.8:1** | 4.5 | Cumple |
| tag · warn | `#8B4809` sobre `#FDEFC9` | **6.06:1** | 4.5 | Cumple |
| message · success | `#176D28` sobre `#EAFBEA` | **6:1** | 4.5 | Cumple |
| message outlined · success | `#176D28` sobre `#FFFFFF` | **6.45:1** | 4.5 | Cumple |
| tag · success | `#125923` sobre `#CBF6CB` | **7.09:1** | 4.5 | Cumple |
| message · info | `#2558E4` sobre `#F1F5FF` | **5.34:1** | 4.5 | Cumple |
| message outlined · info | `#2558E4` sobre `#FFFFFF` | **5.84:1** | 4.5 | Cumple |
| tag · info | `#1A42BC` sobre `#DBE5FF` | **6.54:1** | 4.5 | Cumple |
| message · secondary | `#616161` sobre `#F2F2F2` | **5.53:1** | 4.5 | Cumple |
| message outlined · secondary | `#616161` sobre `#FFFFFF` | **6.19:1** | 4.5 | Cumple |
| tag · secondary | `#616161` sobre `#F2F2F2` | **5.53:1** | 4.5 | Cumple |
| message · contrast | `#FAFAFA` sobre `#1F1F1F` | **15.79:1** | 4.5 | Cumple |
| message outlined · contrast | `#121212` sobre `#FFFFFF` | **18.73:1** | 4.5 | Cumple |
| tag · contrast | `#FFFFFF` sobre `#121212` | **18.73:1** | 4.5 | Cumple |
| inlinemessage · error | `#AF1D24` sobre `#FEF2F2` | **6.34:1** | 4.5 | Cumple |
| toast · error resumen | `#AF1D24` sobre `#FEF2F2` | **6.34:1** | 4.5 | Cumple |
| toast · error detalle | `#4A4A4A` sobre `#FEF2F2` | **8.09:1** | 4.5 | Cumple |
| inlinemessage · warn | `#AB5F07` sobre `#FEFAEC` | **4.61:1** | 4.5 | Cumple |
| toast · warn resumen | `#AB5F07` sobre `#FEFAEC` | **4.61:1** | 4.5 | Cumple |
| toast · warn detalle | `#4A4A4A` sobre `#FEFAEC` | **8.5:1** | 4.5 | Cumple |
| inlinemessage · success | `#176D28` sobre `#EAFBEA` | **6:1** | 4.5 | Cumple |
| toast · success resumen | `#176D28` sobre `#EAFBEA` | **6:1** | 4.5 | Cumple |
| toast · success detalle | `#4A4A4A` sobre `#EAFBEA` | **8.24:1** | 4.5 | Cumple |
| inlinemessage · info | `#2558E4` sobre `#F1F5FF` | **5.34:1** | 4.5 | Cumple |
| toast · info resumen | `#2558E4` sobre `#F1F5FF` | **5.34:1** | 4.5 | Cumple |
| toast · info detalle | `#4A4A4A` sobre `#F1F5FF` | **8.1:1** | 4.5 | Cumple |
| tabla · celda | `#333333` sobre `#FFFFFF` | **12.63:1** | 4.5 | Cumple |
| tabla · cabecera | `#333333` sobre `#FFFFFF` | **12.63:1** | 4.5 | Cumple |
| tabla · fila seleccionada | `#121538` sobre `#F1F2FB` | **15.83:1** | 4.5 | Cumple |
| formulario · input | `#333333` sobre `#FFFFFF` | **12.63:1** | 4.5 | Cumple |
| formulario · etiqueta atenuada | `#616161` sobre `#FFFFFF` | **6.19:1** | 4.5 | Cumple |
| formulario · texto de error | `#92161C` sobre `#FFFFFF` | **8.92:1** | 4.5 | Cumple |
| formulario · addon inputgroup | `#616161` sobre `#FFFFFF` | **6.19:1** | 4.5 | Cumple |
| formulario · togglebutton | `#616161` sobre `#F2F2F2` | **5.53:1** | 4.5 | Cumple |
| BORDE campo · input | `#7A7A7A` sobre `#FFFFFF` | **4.29:1** | 3 | Cumple |
| BORDE campo · invalido | `#CE272F` sobre `#FFFFFF` | **5.31:1** | 3 | Cumple |
| BORDE addon · inputgroup | `#7A7A7A` sobre `#FFFFFF` | **4.29:1** | 3 | Cumple |
| menu · item | `#333333` sobre `#FFFFFF` | **12.63:1** | 4.5 | Cumple |
| enlace · sobre el fondo | `#2558E4` sobre `#FFFFFF` | **5.84:1** | 4.5 | Cumple |
| enlace · frente al texto que lo rodea (informativo) | `#2558E4` sobre `#333333` | **2.16:1** | 3 | informativo |
| enlace · subrayado en reposo | `text-decoration: underline` | — | requerido | Cumple |

#### Modo oscuro — 77 comprobaciones

| Elemento | Medido en el navegador | Ratio | Mín | |
|---|---|---|---|---|
| boton solido · primary | `#060616` sobre `#6B93FF` | **6.93:1** | 4.5 | Cumple |
| boton outlined · primary | `#6B93FF` sobre `#101928` | **6.08:1** | 4.5 | Cumple |
| BORDE outlined · primary | `#6B93FF` sobre `#101928` | **6.08:1** | 3 | Cumple |
| boton texto · primary | `#6B93FF` sobre `#101928` | **6.08:1** | 4.5 | Cumple |
| boton solido · secondary | `#A2B0C3` sobre `#1B283C` | **6.74:1** | 4.5 | Cumple |
| boton outlined · secondary | `#7C90AB` sobre `#101928` | **5.4:1** | 4.5 | Cumple |
| BORDE outlined · secondary | `#7C90AB` sobre `#101928` | **5.4:1** | 3 | Cumple |
| boton texto · secondary | `#7C90AB` sobre `#101928` | **5.4:1** | 4.5 | Cumple |
| boton solido · success | `#071D0E` sobre `#A2F0A1` | **13.03:1** | 4.5 | Cumple |
| boton outlined · success | `#A2F0A1` sobre `#101928` | **13.02:1** | 4.5 | Cumple |
| BORDE outlined · success | `#A2F0A1` sobre `#101928` | **13.02:1** | 3 | Cumple |
| boton texto · success | `#A2F0A1` sobre `#101928` | **13.02:1** | 4.5 | Cumple |
| boton solido · info | `#131A49` sobre `#8FADFF` | **7.54:1** | 4.5 | Cumple |
| boton outlined · info | `#8FADFF` sobre `#101928` | **8.05:1** | 4.5 | Cumple |
| BORDE outlined · info | `#8FADFF` sobre `#101928` | **8.05:1** | 3 | Cumple |
| boton texto · info | `#8FADFF` sobre `#101928` | **8.05:1** | 4.5 | Cumple |
| boton solido · warn | `#321606` sobre `#F4C357` | **10.21:1** | 4.5 | Cumple |
| boton outlined · warn | `#F4C357` sobre `#101928` | **10.73:1** | 4.5 | Cumple |
| BORDE outlined · warn | `#F4C357` sobre `#101928` | **10.73:1** | 3 | Cumple |
| boton texto · warn | `#F4C357` sobre `#101928` | **10.73:1** | 4.5 | Cumple |
| boton solido · help | `#081C21` sobre `#68C0CA` | **8.33:1** | 4.5 | Cumple |
| boton outlined · help | `#68C0CA` sobre `#101928` | **8.38:1** | 4.5 | Cumple |
| BORDE outlined · help | `#68C0CA` sobre `#101928` | **8.38:1** | 3 | Cumple |
| boton texto · help | `#68C0CA` sobre `#101928` | **8.38:1** | 4.5 | Cumple |
| boton solido · danger | `#330A0E` sobre `#F28888` | **7.27:1** | 4.5 | Cumple |
| boton outlined · danger | `#F28888` sobre `#101928` | **7.26:1** | 4.5 | Cumple |
| BORDE outlined · danger | `#F28888` sobre `#101928` | **7.26:1** | 3 | Cumple |
| boton texto · danger | `#F28888` sobre `#101928` | **7.26:1** | 4.5 | Cumple |
| boton solido · contrast | `#090F1A` sobre `#F1F4F9` | **17.4:1** | 4.5 | Cumple |
| boton outlined · contrast | `#F1F4F9` sobre `#101928` | **15.98:1** | 4.5 | Cumple |
| BORDE outlined · contrast | `#566E8F` sobre `#101928` | **3.38:1** | 3 | Cumple |
| boton texto · contrast | `#F1F4F9` sobre `#101928` | **15.98:1** | 4.5 | Cumple |
| message · error | `#F28888` sobre `#342B37` | **5.6:1** | 4.5 | Cumple |
| message outlined · error | `#F28888` sobre `#101928` | **7.26:1** | 4.5 | Cumple |
| tag · danger | `#F28888` sobre `#2E1B29` | **6.61:1** | 4.5 | Cumple |
| message · warn | `#F4C357` sobre `#343430` | **7.59:1** | 4.5 | Cumple |
| message outlined · warn | `#F4C357` sobre `#101928` | **10.73:1** | 4.5 | Cumple |
| tag · warn | `#F4C357` sobre `#2E2923` | **8.78:1** | 4.5 | Cumple |
| message · success | `#A2F0A1` sobre `#273B3B` | **8.69:1** | 4.5 | Cumple |
| message outlined · success | `#A2F0A1` sobre `#101928` | **13.02:1** | 4.5 | Cumple |
| tag · success | `#6ECF74` sobre `#132B2A` | **7.74:1** | 4.5 | Cumple |
| message · info | `#8FADFF` sobre `#24314A` | **5.96:1** | 4.5 | Cumple |
| message outlined · info | `#8FADFF` sobre `#101928` | **8.05:1** | 4.5 | Cumple |
| tag · info | `#8FADFF` sobre `#19294A` | **6.6:1** | 4.5 | Cumple |
| message · secondary | `#A2B0C3` sobre `#1B283C` | **6.74:1** | 4.5 | Cumple |
| message outlined · secondary | `#7C90AB` sobre `#101928` | **5.4:1** | 4.5 | Cumple |
| tag · secondary | `#A2B0C3` sobre `#1B283C` | **6.74:1** | 4.5 | Cumple |
| message · contrast | `#090F1A` sobre `#F1F4F9` | **17.4:1** | 4.5 | Cumple |
| message outlined · contrast | `#F1F4F9` sobre `#101928` | **15.98:1** | 4.5 | Cumple |
| tag · contrast | `#090F1A` sobre `#F1F4F9` | **17.4:1** | 4.5 | Cumple |
| inlinemessage · error | `#F28888` sobre `#342B37` | **5.6:1** | 4.5 | Cumple |
| toast · error resumen | `#F28888` sobre `#342B37` | **5.6:1** | 4.5 | Cumple |
| toast · error detalle | `#F1F4F9` sobre `#342B37` | **12.33:1** | 4.5 | Cumple |
| inlinemessage · warn | `#F4C357` sobre `#343430` | **7.59:1** | 4.5 | Cumple |
| toast · warn resumen | `#F4C357` sobre `#343430` | **7.59:1** | 4.5 | Cumple |
| toast · warn detalle | `#F1F4F9` sobre `#343430` | **11.3:1** | 4.5 | Cumple |
| inlinemessage · success | `#A2F0A1` sobre `#273B3B` | **8.69:1** | 4.5 | Cumple |
| toast · success resumen | `#A2F0A1` sobre `#273B3B` | **8.69:1** | 4.5 | Cumple |
| toast · success detalle | `#F1F4F9` sobre `#273B3B` | **10.67:1** | 4.5 | Cumple |
| inlinemessage · info | `#8FADFF` sobre `#24314A` | **5.96:1** | 4.5 | Cumple |
| toast · info resumen | `#8FADFF` sobre `#24314A` | **5.96:1** | 4.5 | Cumple |
| toast · info detalle | `#F1F4F9` sobre `#24314A` | **11.83:1** | 4.5 | Cumple |
| tabla · celda | `#F1F4F9` sobre `#101928` | **15.98:1** | 4.5 | Cumple |
| tabla · cabecera | `#F1F4F9` sobre `#101928` | **15.98:1** | 4.5 | Cumple |
| tabla · fila seleccionada | `#B7CAFF` sobre `#1F2D4A` | **8.46:1** | 4.5 | Cumple |
| formulario · input | `#F1F4F9` sobre `#090F1A` | **17.4:1** | 4.5 | Cumple |
| formulario · etiqueta atenuada | `#7C90AB` sobre `#101928` | **5.4:1** | 4.5 | Cumple |
| formulario · texto de error | `#F28888` sobre `#101928` | **7.26:1** | 4.5 | Cumple |
| formulario · addon inputgroup | `#7C90AB` sobre `#090F1A` | **5.88:1** | 4.5 | Cumple |
| formulario · togglebutton | `#7C90AB` sobre `#090F1A` | **5.88:1** | 4.5 | Cumple |
| BORDE campo · input | `#566E8F` sobre `#101928` | **3.38:1** | 3 | Cumple |
| BORDE campo · invalido | `#E25050` sobre `#101928` | **4.61:1** | 3 | Cumple |
| BORDE addon · inputgroup | `#566E8F` sobre `#101928` | **3.38:1** | 3 | Cumple |
| menu · item | `#F1F4F9` sobre `#101928` | **15.98:1** | 4.5 | Cumple |
| enlace · sobre el fondo | `#8FADFF` sobre `#101928` | **8.05:1** | 4.5 | Cumple |
| enlace · frente al texto que lo rodea (informativo) | `#8FADFF` sobre `#F1F4F9` | **1.99:1** | 3 | informativo |
| enlace · subrayado en reposo | `text-decoration: underline` | — | requerido | Cumple |

**154 comprobaciones, 77 por modo, 0 fallos y 0 elementos sin tematizar.** Las dos filas
"informativo" son la comparación del enlace contra el texto que lo rodea: ningún color puede
cumplir 4,5:1 sobre el fondo y 3:1 contra el texto a la vez, y por eso va subrayado (§5).

## 8. Qué se cambió fuera del primario, y por qué

Todo en `src/lib/theme/`.

**`mypreset.ts`**

1. **Rampas nuevas**: `nettalcoPrimary`, `nettalcoSecondary`, `nettalcoSuccess`, `nettalcoTeal`,
   `nettalcoGray`, `nettalcoSurfaceDark`, `nettalcoError`, `nettalcoWarn`. Cada nivel lleva
   comentario `// MANUAL` o `// DECISIÓN DE INTERFAZ`.
2. **`focusRing`**: token nuevo a nivel semántico (§4).
3. **`help`**: Aura **referencia** `{help.50}`…`{help.500}` desde el botón pero **nunca define
   la rampa**. Eran referencias colgando. Ahora existe, y apunta al verde azulado del manual.
4. **`error`**: dejaba de apuntar al rojo genérico de Tailwind.
5. **Superficies en claro**: pasan del `slate` de Tailwind a la escala de grises de marca.
6. **`text` / `formField` en claro**: texto atenuado de `surface.500` (4,29:1, no cumple) a
   `surface.600`; borde de campo de `surface.300` (1,53:1) a `surface.500`; icono de campo de
   `surface.400` (2,52:1) a `surface.500`. Todo por WCAG 1.4.11.
7. **Hover/pulsado del primario**: iban `500 → 900 → 800`, o sea **el pulsado era más claro que
   el hover**. Ahora `500 → 600 → 700`.
8. **Modo oscuro — corrección de fondo**: la rampa de superficies anterior era una rampa de
   *fondos* (oscura ya desde el nivel 400: `#2e476d`). Pero Aura usa los niveles 300-500 para
   **texto atenuado, iconos y bordes sobre fondo oscuro**, y espera que sean claros. Con la
   rampa vieja el texto atenuado del modo oscuro era prácticamente ilegible. La nueva mantiene
   el tinte azul de marca pero con la distribución de luminancia correcta (`surface.400` ahora
   da 5,40:1).
9. **Modo oscuro — primario**: el azul oscuro no puede ser el primario sobre fondo oscuro
   porque se confunde con el fondo. Ese papel lo toma el azul claro del manual, que es
   justamente el segundo en la jerarquía de marca.
10. **Modo oscuro — fila seleccionada**: era `primary.900` sobre `surface.900`, dos azules casi
    idénticos; la fila seleccionada no se distinguía. Ahora es una mezcla translúcida del azul
    claro, como hace Aura.
11. **`nettalcoExport` y `nettalcoInfo`**: se conservan como **alias obsoletos** con los valores
    nuevos, para no romper a quien referencie las variables CSS `--p-nettalco-export-*` /
    `--p-nettalco-info-*` de la 1.1.x. Ya no los usa ningún token semántico. Retirar en la 2.0.

12. **Hover y pulsado del primario**: ver §9, punto 5. Aclaran en vez de oscurecer.
13. **Aviso**: relleno en `warn.600` con texto blanco y hover que oscurece (§5).

**`button/index.ts`**

14. **16 anillos de foco** pasan a `{focus.ring.color}` (§4).
15. **Botones outlined y de texto en claro**: Aura pinta el borde con el nivel 200 (1,5-1,8:1
    sobre blanco) y la etiqueta con el 500. El borde es lo único que identifica al botón, así
    que necesita 3:1 y sube al 500; la etiqueta necesita 4,5:1 y baja al 600. Sin esto, el
    outlined de "info" quedaba en **3,81:1** y el de "warn" en **3,23:1**, ambos ilegibles.
16. **Bordes de outlined en OSCURO**: venían del extremo oscuro de cada rampa (`{X.700}`), que
    sobre `surface.900` daba entre **1,00:1** (el primario: un borde literalmente invisible, un
    `outlined` sin contorno) y 2,54:1. En modo oscuro el borde tiene que salir del extremo
    **claro**, así que ahora usan `{X.color}`: entre 6,08:1 y 13,02:1.
17. **Color de enlace** en ambos modos (§5).

**`message/index.ts`, `toast/index.ts`, `inlinemessage/index.ts`**

18. **Texto e indicadores en OSCURO**: usaban `{X.500}`, un nivel pensado para llevar texto
    blanco encima en modo claro, no para ser texto sobre fondo oscuro. Resultado: entre
    **2,95:1 y 4,47:1** en las cuatro severidades. Ahora usan `{X.color}`, que en oscuro ya
    apunta al extremo claro de cada rampa: entre **5,60:1 y 8,69:1**.
19. `message` en claro: el texto de la severidad `secondary` estaba en `{surface.500}`
    (`#7A7A7A`, 4,29:1). Baja al 600.

**`css/index.ts`**

20. **Subrayado permanente del botón de enlace** (§5). Aura solo subraya al pasar el ratón.

**`togglebutton/index.ts` y `inputgroup/index.ts`**

21. `togglebutton` en claro: etiqueta de `{surface.500}` sobre `{surface.100}` = **3,83:1**.
    Baja al 600 (5,53:1).
22. `inputgroup`: el addon usaba el color de icono (`{surface.500}`, 4,29:1), pero **lleva
    texto** (unidades, símbolos), no solo iconos, así que necesita 4,5:1. Pasa a
    **`{text.muted.color}`**: `#616161` en claro (6,19:1) y `#7C90AB` en oscuro (5,88:1).

    Aquí caí en el mismo error que este cambio venía a corregir. Lo puse primero en
    `{surface.600}`, que arregla el claro y **rompe el oscuro**: la rampa de superficies oscuras
    corre invertida, así que `surface.600` en oscuro es `#3D5271`, un pizarra oscuro sobre el
    fondo de campo `#090F1A` → **2,41:1**, peor que el 5,88 que había antes y que el 7,76 de
    Aura. Y este archivo **no tiene sección `colorScheme`**, así que ese único valor sirve a los
    dos modos: cualquier token que se ponga aquí tiene que distinguir claro de oscuro por sí
    mismo, y eso lo hace `{text.muted.color}`, no un nivel fijo de la rampa.

    **Regla general que sale de aquí**: en un archivo de componente sin `colorScheme`, nunca un
    nivel crudo de `surface`; siempre un token semántico que ya esté definido por esquema.

**Lo que NO se tocó**: los 80 y pico archivos de componente restantes. Se revisaron uno por uno
buscando valores hex fijos o dependencias del primario viejo — **no hay ninguno**, todos
referencian tokens semánticos, así que heredan la corrección solos. `base/index.ts` es una
copia de Aura y se deja intacta: todo lo que hacía falta corregir de ahí está sobrescrito desde
`mypreset.ts`, que es el sitio correcto.

---

## 9. Para que lo revise un diseñador

Esto es lo que decidí yo y que marca podría querer distinto. Ninguna de estas decisiones está
en el manual.

1. **El azul claro `#4A7AFF` no se usa como relleno de botón ni como texto normal** — solo como
   anillo de foco, borde, icono y texto grande. Es lo que permite el contraste. Si marca quiere
   el azul claro puro como botón secundario, hay que aceptar 3,81:1 (no cumple para texto
   normal) o poner texto oscuro encima.
2. **El verde menta `#A2F0A1` solo aparece como fondo de badge y como color de éxito en modo
   oscuro.** En modo claro no se ve casi. Es inevitable con ese nivel de luminosidad, pero es
   un color muy identificable de la marca que queda poco presente.
3. **El ámbar de aviso es el `#AB5F07`, más apagado que un amarillo-naranja de aviso clásico.**
   Es lo que hace falta para que el botón lleve texto blanco como los demás (4,80:1). La
   alternativa —ámbar brillante `#CE7C09` con texto oscuro— se ve más como un aviso pero obliga
   a invertir el hover y deja ese botón fuera del patrón de todos los demás. **Elegí la
   convención sobre el brillo**; es reversible con dos líneas si diseño prefiere lo contrario.
4. **El verde azulado `#176973` se asignó a la severidad "help"**, que es poco usada. Fue el
   hueco que quedaba; si tiene un papel mejor en el sistema (por ejemplo "exportar", que es como
   lo usaban algunas plantillas), conviene moverlo.
5. **Error y aviso son colores inventados** (rojo y ámbar). No hay nada en el manual de donde
   derivarlos. Los tonos exactos son discutibles; los niveles de contraste no.
6. **El borde de los botones outlined es ahora el color pleno (nivel 500), no un tono suave.**
   Se ven más pesados que en Aura. Es requisito de accesibilidad, pero cambia bastante el
   aspecto de los formularios.
7. **El borde de los campos de formulario es `#7A7A7A`**, el gris del manual. Es el mínimo que
   cumple 3:1 y se ve más marcado que el gris claro al que estaban acostumbrados.
8. **Todo el modo oscuro** es decisión de interfaz: el manual no lo contempla. Tinte azul de
   marca en las superficies y regla general de "relleno claro con etiqueta oscura".
9. **Tipografía: el preset no fija `Anek Latin`.** PrimeNG hereda la familia del host, y las
   plantillas ya la declaran. **Recomendación**: unificarla en el tema para no repetirla 13
   veces. Y un aviso: el manual sugiere **Thin y Light para cuerpo de texto**; a tamaños de
   interfaz (13-16px) esos pesos tienen trazos demasiado finos para leerse con comodidad y
   penalizan a quien tenga baja visión. **Sugiero Regular (400) como mínimo para cuerpo**, y
   reservar Thin/Light para titulares grandes. No es una contradicción frontal con el manual
   —que dice "recomendamos", no "obliga"— pero conviene decidirlo explícitamente.
10. **Escala tipográfica e interlineados**: siguen sin definirse. El manual no los cubre y este
    cambio no los toca. Es el siguiente hueco a cerrar si se quiere un sistema completo.
11. **Los enlaces van subrayados siempre**, no solo al pasar el ratón. Cambia el aspecto de
    cualquier texto con enlaces en los trece sistemas. No es negociable por accesibilidad
    mientras el enlace se distinga solo por color (§5), pero **sí lo sería** si se acompañara de
    otro indicio no cromático —un icono, negrita— que diseño prefiera.
12. **El hover y el pulsado del botón primario ahora ACLARAN en vez de oscurecer.** Con un
    primario tan oscuro, oscurecer más daba 1,10:1 y 1,16:1: el usuario no veía respuesta al
    pasar el ratón ni al pulsar. Aclarando se recuperan 1,35:1 y 1,49:1 (Aura logra 1,49 y
    1,46). Visualmente el botón "se enciende" en vez de "hundirse", que es lo contrario de la
    convención habitual, pero es la única forma de que el estado se perciba.
13. **El color de enlace ya no es el primario de marca** sino el azul claro oscurecido
    (`#2558E4`). Un enlace navy sobre texto casi negro era indistinguible (1,20:1).

---

## 10. Nota para los consumidores (otros repos — no tocados)

Se localizaron plantillas Angular que consumen este tema. **No se modificó ninguna.** Lo que se
encontró es relevante:

**Las plantillas ya habían corregido el primario a mano.** `nes-frontend-angular-develop/src/styles.css`
declara `--p-primary-color: #1c224d` y `--color-navy-dark: #1c224d`, es decir **el color correcto
del manual**, sobrescribiendo el `#112A46` que servía el tema. Lo mismo en las otras plantillas.
El tema y las plantillas llevaban tiempo desincronizados, y este cambio los pone de acuerdo.

Qué deja de hacer falta con el primario correcto:

| Corrección en la plantilla | ¿Sigue haciendo falta? |
|---|---|
| `--p-primary-color: #1c224d` y `--color-navy-dark: #1c224d` | **No.** El tema ya sirve `#1C224D` en `--p-primary-500`. Se puede volver a `var(--p-primary-500)` o borrarlas. |
| `--color-gray-medium: #000000` (en `prerecepcionapt`, sustituyendo el `#7a7a7a` del manual por negro puro) | **No.** Era una corrección de contraste hecha a mano porque `#7a7a7a` no cumple como texto. El tema ahora da `--p-text-muted-color` = `#616161` (6,19:1). |
| `.p-field label { color: var(--color-navy-dark) !important }` | **No por contraste.** El color de etiqueta del tema ya cumple (6,19:1). Si se mantiene, que sea por decisión estética, no por legibilidad. |
| `--color-success: var(--color-mint-light)` (menta como éxito) | **Conviene quitarla.** El menta no cumple como texto ni como relleno; el tema ya trae una rampa de éxito correcta con el menta en su sitio. |
| Anillo de foco en verde menta en el componente de layout | **Quitarla.** El tema ya resuelve el foco sobre los dos fondos con `#4A7AFF`. |
| Cualquier override del color de enlace hacia el navy | **Quitarla.** El navy como enlace es justamente el problema (1,20:1 contra el texto); el tema ya sirve `#2558E4` subrayado. |
| `--p-secondary-color: #4a7aff` | **Revisar.** El tema ahora sirve `#2558E4` en `--p-secondary-color` precisamente porque `#4A7AFF` no cumple como relleno con texto blanco. |

**Un defecto encontrado de paso, ajeno a este cambio**: en `nes-frontend-angular-develop/src/styles.css`
la barra lateral combina `--layout-sidebar-bg: #f5f8fc` (casi blanco) con
`--texto-sidebar-color: #ffffff` (blanco). Es texto blanco sobre fondo blanco. Merece un vistazo
en ese repo.

---

## 11. Estado

- Versión: **1.2.0** (`package.json` y `package-lock.json`).
- `npm run build` (ng-packagr): **correcto**.
- Resolución de tokens con el motor real de PrimeNG: **0 referencias sin resolver**.
- Contrastes calculados (§7.1): **0 fallos no esperados**.
- Contrastes medidos en navegador (§7.2): **154 comprobaciones sobre 10 componentes, 77 por
  modo, 0 fallos, 0 elementos sin tematizar**. El alcance exacto —y lo que queda fuera— está
  al principio de §7.2.
- **Sin publicar y sin push**, a la espera de revisión.

### Nota de método

Dos veces en este trabajo la afirmación fue más amplia que la medición, y las dos veces lo
detectó la revisión y no yo:

1. La primera versión decía "modo oscuro verificado" con una página que **no contenía mensajes
   ni botones `outlined` en oscuro**. Al añadirlos aparecieron cuatro regresiones reales.
2. La segunda decía "0 fallos" cuando la página **no renderizaba un addon de InputGroup** —el
   componente que ese mismo commit tocaba—, porque usaba la clase inexistente
   `p-inputgroup-addon` en vez de `p-inputgroupaddon`. La medición existía, pero medía un
   elemento sin tematizar.

De ahí las dos defensas que ahora lleva §7.2: **el alcance se enumera** en vez de decir "0
fallos" a secas, y **cada medición comprueba que el elemento está realmente tematizado** antes
de contar como aprobada. Un elemento que hereda el color no prueba nada sobre el tema.
