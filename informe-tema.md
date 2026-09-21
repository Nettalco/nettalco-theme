# Informe — tema PrimeNG de Nettalco v1.2.0

Alineación del preset con el manual de marca oficial (`Nettalco_manual de marca.pdf`, 2024)
y decisión razonada de todo lo que el manual no cubre.

Lo usan 13 sistemas, así que cada decisión de aquí se multiplica por trece. Por eso: todo
contraste de este informe está **medido** con la fórmula WCAG 2.1, no estimado, y los
valores críticos están además **verificados en navegador** sobre componentes PrimeNG reales.

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
| **`help`** | **#176973** verde azulado | Único acento del manual que aguanta texto sobre blanco (6,35:1). Sustituye al violeta de Aura, ajeno a la marca. |
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
| 600 | `#161A43` | hover del primario |
| 700 | `#121538` | pulsado; **texto sobre el 50** (15,83:1) |
| 800 | `#0D0F2D` | **texto sobre el 100** (14,05:1) |
| 900 | `#090B22` | fondos oscuros |
| 950 | `#060616` | fondos oscuros |

Oscurece de forma monótona en los 11 niveles (comprobado calculando la luminancia relativa de
cada uno). La mitad clara lleva pasos grandes porque tiene que cubrir de 96% a 21% de
luminosidad; la mitad oscura lleva pasos de ~3 puntos, suficientes para que hover y pulsado se
distingan sin salirse del azul de marca.

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
- **Aviso** — tampoco hay derivación. Ámbar `#CE7C09`. **Aviso importante**: ningún ámbar lo
  bastante luminoso para leerse como "aviso" admite texto blanco (blanco sobre él da 3,23:1).
  Por eso el botón de aviso lleva **texto oscuro** (`#321606`, 5,20:1) y su **hover aclara** en
  vez de oscurecer, para no perder ese contraste. Es deliberado.
- **Información** — reutiliza la rampa del azul claro del manual en vez de inventar un tercer
  azul que competiría con los dos de la marca.
- **Ayuda** — `#176973`, el verde azulado del manual, que antes no se usaba en ningún sitio.

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
(bordes, iconos, anillos de foco) · las filas marcadas **n/a** son elementos decorativos,
exentos del criterio 1.4.11.

Las filas que empiezan por **NO:** o **HOY:** están puestas a propósito para documentar un uso
que **no** hay que hacer (o lo que falla hoy); su "No cumple" es el resultado esperado.

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
| Texto warn.950 sobre warn.500 (boton aviso lleva texto oscuro) | `#321606` sobre `#CE7C09` | **5.20:1** | 4.5 | Cumple |
| NO: blanco sobre warn.500 (por eso el texto del boton es oscuro) | `#FFFFFF` sobre `#CE7C09` | **3.23:1** | 4.5 | No cumple |
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

**Fallos no esperados: 0.**

### Verificación en navegador

No me quedé en el cálculo. Se generó una página con el **CSS real de PrimeNG**
(`@primeuix/styles`) resuelto contra este preset — botones de las 8 severidades en sus 3
variantes, campos de formulario (normal, con foco, inválido, deshabilitado), mensajes, tabla
con fila seleccionada y etiquetas, y menú — y se midieron los colores **efectivamente
renderizados** con Playwright, en modo claro, sobre el azul oscuro y en modo oscuro.

Los valores medidos coinciden exactamente con los calculados. Muestra:

| Medido en navegador | Color / fondo | Ratio |
|---|---|---|
| Botón primario (claro) | `#FFFFFF` sobre `#1C224D` | 15,16:1 |
| Botón de aviso (claro) | `#321606` sobre `#CE7C09` | 5,20:1 |
| Botón "help" (claro) | `#FFFFFF` sobre `#176973` | 6,35:1 |
| Texto de celda de tabla | `#333333` sobre `#FFFFFF` | 12,63:1 |
| Fila seleccionada | `#121538` sobre `#F1F2FB` | 15,83:1 |
| Etiqueta atenuada | `#616161` sobre `#FFFFFF` | 6,19:1 |
| Enlace en barra lateral azul | `#B7CAFF` sobre `#1C224D` | 9,32:1 |
| Botón de éxito (oscuro) | `#071D0E` sobre `#A2F0A1` | 13,03:1 |
| Anillo de foco sobre azul oscuro (Tab real) | `#4A7AFF` sobre `#1C224D` | 3,98:1 |

Nota de método: el modo oscuro se verificó con `.p-dark` en el **elemento raíz**, que es como
lo documenta la propia librería (`document.documentElement.classList.toggle('p-dark')`).
Aplicado a un `div` intermedio no funciona, porque las variables de componente se declaran en
`:root` y el navegador sustituye ahí los `var()` anidados. No es un defecto del tema, pero
conviene saberlo si alguien intenta previsualizar los dos modos en la misma página.

---

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

**`button/index.ts`**

12. **16 anillos de foco** pasan a `{focus.ring.color}` (§4).
13. **Botones outlined y de texto**: Aura pinta el borde con el nivel 200 (1,5-1,8:1 sobre
    blanco) y la etiqueta con el 500. El borde es lo único que identifica al botón, así que
    necesita 3:1 y sube al 500; la etiqueta necesita 4,5:1 y baja al 600. Sin esto, el outlined
    de "info" quedaba en **3,81:1** y el de "warn" en **3,23:1**, ambos ilegibles.

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
3. **El botón de aviso lleva texto oscuro y su hover aclara** en vez de oscurecer. Rompe la
   convención visual del resto de botones. La alternativa era un ámbar oscuro casi marrón.
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
| `--p-secondary-color: #4a7aff` | **Revisar.** El tema ahora sirve `#2558E4` en `--p-secondary-color` precisamente porque `#4A7AFF` no cumple como relleno con texto blanco. |

**Un defecto encontrado de paso, ajeno a este cambio**: en `nes-frontend-angular-develop/src/styles.css`
la barra lateral combina `--layout-sidebar-bg: #f5f8fc` (casi blanco) con
`--texto-sidebar-color: #ffffff` (blanco). Es texto blanco sobre fondo blanco. Merece un vistazo
en ese repo.

---

## 11. Estado

- Versión: **1.2.0** (`package.json` y `package-lock.json`).
- `npm run build` (ng-packagr): **correcto**.
- Resolución de tokens con el motor real de PrimeNG: **981 variables CSS, 0 referencias sin resolver**.
- Contrastes: **0 fallos no esperados**.
- **Sin publicar y sin push**, a la espera de revisión.
