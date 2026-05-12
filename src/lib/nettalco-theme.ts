/**
 * Nettalco Theme - PrimeNG Custom Preset
 * 
 * Este módulo exporta el preset personalizado de PrimeNG para Nettalco.
 * Para usar el tema, importa MyPreset desde '@analistas-sistemas/nettalco-theme':
 * 
 * @example
 * // Configuración básica (solo light mode)
 * import MyPreset from '@analistas-sistemas/nettalco-theme';
 * import { providePrimeNG } from 'primeng/config';
 * 
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     providePrimeNG({
 *       theme: {
 *         preset: MyPreset,
 *         options: {
 *           darkModeSelector: false
 *         }
 *       }
 *     })
 *   ]
 * };
 * 
 * @example
 * // Configuración con dark mode habilitado
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     providePrimeNG({
 *       theme: {
 *         preset: MyPreset,
 *         options: {
 *           darkModeSelector: '.p-dark',  // Clase CSS para activar dark mode
 *           cssLayer: false
 *         }
 *       }
 *     })
 *   ]
 * };
 * 
 * // Para cambiar entre modos:
 * document.documentElement.classList.toggle('p-dark');
 */

// Re-exportar el preset para facilitar el uso
export { default as MyPreset } from './theme/mypreset';
