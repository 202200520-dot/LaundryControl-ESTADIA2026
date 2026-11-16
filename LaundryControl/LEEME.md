# LaundryControl — proyecto listo para abrir

## Ver el diseño sin instalar programas
1. Extrae TODO el ZIP (clic derecho → Extraer todo).
2. Abre `ABRIR-LaundryControl.html` con Chrome, Edge o Firefox.
No requiere Node.js ni un servidor para esta vista. La fuente Inter se carga desde Google Fonts; sin Internet se usa la fuente de respaldo del navegador.

## Ejecutar y editar el proyecto React en Windows
Instala Node.js 22.12 o superior con npm. Abre `INICIAR-WINDOWS.bat`.
La primera ejecución instala las dependencias (requiere Internet) y abre http://localhost:5173.
Mantén la ventana de consola abierta. Para detenerlo, presiona Ctrl+C.
Si el puerto está ocupado, consulta la dirección que muestra Vite en la consola.

También puedes abrir esta carpeta en Visual Studio Code y ejecutar:

```sh
npm ci
npm run dev
```

## Compilar
```sh
npm run build
npm run preview
```
`dist` contiene la versión compilada para un servidor web. Para regenerar el HTML de doble clic después de editar:

```sh
npm run build:portable
```

## Archivos principales
- src/App.tsx: dashboard, datos de ejemplo, iconos, formularios y panel de maquinaria.
- src/index.css: diseño y estilos responsivos originales.
- vite.config.ts: configuración local sin dependencia del entorno Figma.
- package-lock.json: versiones de dependencias para npm ci.

## Alcance real del ZIP original
Se conserva el diseño original y sus datos de demostración, incluidas las fechas de mayo de 2025.
Contiene un dashboard con sus secciones, panel de detalle de máquinas, notificaciones y formularios de producción y fallas. El buscador de producción filtra los registros. El menú se colapsa y tiene presentación móvil.

No hay pantallas independientes de Producción, Compras, Usuarios ni los otros módulos del menú en el archivo recibido. Sus botones, la exportación y varios accesos son elementos visuales sin implementación. Los selectores de fecha y turno no recalculan indicadores.
Los formularios muestran confirmaciones de demostración; NO guardan información ni envían notificaciones reales. No incluye backend, base de datos ni autenticación.

## Ajustes realizados
- Configuración portable para ejecutar fuera de Figma.
- Título y lenguaje español en el documento HTML.
- Corrección del acceso a la propiedad opcional badge para validar TypeScript.
- Scripts de inicio, compilación, versión HTML autónoma y estas instrucciones.
El diseño y las vistas existentes se han conservado.

## Verificación de esta entrega
TypeScript y compilación Vite completados correctamente. Se comprobó que los estilos coinciden con el ZIP original y que el HTML contiene el JavaScript y CSS incorporados. La prueba automatizada en navegador no pudo ejecutarse porque falló la descarga del navegador de pruebas.
