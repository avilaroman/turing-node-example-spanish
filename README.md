## COMPAÑERO
front-end de un sistema de comercio electrónico que permite a los usuarios buscar, agregar artículos a su carrito de compras, crear pedidos y pagar con éxito.

## Crear evv
- `ROOT_ENDPOINT =`
- `DIRECTORIO_IMAGEN =`

## Configuración local
- `clonar repositorio`
- `npm install` o` yarn install` - Instala todas las dependencias
- `yarn build` - Ejecuta Next.js Build
- `yarn dev` o` npm dev`
- "prueba de hilo" para ejecutar la prueba

- `node server.js`
Ejecuta la aplicación en modo de desarrollo. <br>
Abra [http: // localhost: 3000] (http: // localhost: 3000) para verlo en el navegador.




## Estructura de carpetas
Todos los componentes se encuentran en "src / Components". Cada componente se coloca en su propia carpeta (por ejemplo, la carpeta `Inicio` para el componente` Inicio`). Todas las rutas se encuentran en `src / pages`. métodos de utilidad de ayuda en `src / helpers`.
<br>

Todos los puntos finales de la API se encuentran en `src / services` <br>

Cada archivo exporta SOLO UN componente. <br>
CamelCase es la convención de nomenclatura principal para los métodos, mientras que los guiones bajos se utilizan para los datos (variables) recuperados del servidor.

## Más información (paquetes)

### NEXT.JS
Marco web

### Bootstrap y SCSS
Utilizado para la presentación de la interfaz

### REDUX $ REDUX SAGA
Utilizado para la gestión estatal

### HELMET
Helmet lo ayuda a proteger sus aplicaciones Express.js configurando varios encabezados HTTP. No es una solución milagrosa, ¡pero puede ayudar!

### SUPERAGENTE
Manejo de solicitudes

### Caja de React Stripe
[Consulte aquí] (https://www.npmjs.com/package/react-stripe-checkout) para obtener más información. <br>
Este paquete proporciona una implementación "Checkout" de stripe. Otras opciones para la implementación de bandas fueron los elementos de bandas. El paquete requiere solo una clave pública (PK) y una función de devolución de llamada que acepta el token generado por la tarjeta.
### Detalles de la tarjeta para el pago
No de tarjeta: 4242424242424242 <br>
CVV: 123 <br>
Fecha: 23/12 <br>

### MomentJS
[Consulte aquí] (https://momentjs.com/) para obtener más información. <br>
Este paquete se utiliza para convertir las marcas de tiempo UNIX devueltas por el servidor a tiempo relativo (** hace minutos). También se utiliza para formatear las horas UNIX a formatos específicos (DD / MM / AAAA, etc.)

### React Router Dom
[Consulte aquí] (https://www.npmjs.com/package/react-router-dom) para obtener más información. <br>
Se utiliza principalmente para la navegación de aplicaciones. <br>


## Más información (API)

### API de Turing
[Consulte aquí] (https://backendapi.turing.com/docs/#/) para todos los puntos finales de la API.

### Almacenamiento local (primer enfoque sin conexión)
El almacenamiento local se utilizó para almacenar datos persistentes durante todo el ciclo de vida de la aplicación. Las elecciones de diseño se hicieron a favor del almacenamiento local sobre el acceso a los puntos finales cuando era posible. <br> <br>
