# 🎨 Nettalco Theme

Librería de tema personalizado de PrimeNG para aplicaciones Nettalco.

## 📦 Instalación

```bash
npm install @nettalco/nettalco-theme
```

## 🚀 Uso

### 1. Configurar en app.config.ts

```typescript
import { ApplicationConfig } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import MyPreset from '@nettalco/nettalco-theme';

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: false // Solo modo claro
        }
      }
    })
  ]
};
```

### 2. Importar estilos de PrimeNG

```typescript
// En main.ts o styles.scss
import 'primeng/resources/primeng.css';
import 'primeicons/primeicons.css';
```

## 🎨 Paleta de Colores

- **Primary**: `#082853` (Azul Navy)
- **Secondary**: `#3F8CF9` (Azul Cielo)
- **Success**: `#2BA5CD` (Cyan)
- **Info**: `#66A6FB` (Azul Info)
- **Warn**: `#D57952` (Naranja)
- **Error**: `#DC2626` (Rojo)

## 🧩 Componentes Incluidos

- Button
- Card
- DataTable
- InputText
- InputChips
- Menu
- MultiSelect
- Paginator
- Select
- Tag
- Toast

## 📚 Documentación

- [Quick Start](QUICKSTART.md) - Guía de publicación e instalación
- [Publish Guide](PUBLISH.md) - Proceso de publicación en GitHub Packages
- [PrimeNG Theming](https://primeng.org/theming/styled) - Documentación oficial

## 🔧 Desarrollo

### Build
```bash
ng build nettalco-theme
```

### Publicar
```bash
cd projects/nettalco-theme
.\publish.ps1 patch
```

## 📄 Licencia

Private - Uso interno Nettalco
