# refundex-web

Web estática de Refundex (refundex.es) en Astro con Tailwind. Sirve para captar técnicos para la lista de espera y las entrevistas, y para posicionar artículos sobre la Directriz de autoprotección (Orden INT/1068/2026).

## Comandos

- `npm run dev`: servidor local
- `npm run build`: compila en `dist/`

## Reglas

- Antes de cambiar nada, inspecciona y presenta un plan. Espera a que Diego lo apruebe.
- Una rama por tarea y un commit por cambio. Sin push ni despliegues salvo que Diego lo pida.
- La web no se publica hasta que Diego lo diga.
- Sin credenciales en el repositorio: variables de entorno y `.env.example`.
- Textos en español, escritos como los escribiría una persona: sin coletillas, tono promocional ni vocabulario de IA.

## Contenido

- Refundex vende una herramienta a quien firma los planes. No se ofrece redacción ni firma de planes.
- Ningún texto público menciona que Diego es bombero ni su puesto. Quien está detrás se presenta por su formación técnica en emergencias, PRL y sistemas.
- No se ofrecen precios ni se vende nada todavía.
- Los datos del titular se configuran con las variables `PUBLIC_TITULAR_*`, nunca en git. Si falta alguno, las páginas legales muestran que están pendientes.
- La lista de espera guarda los datos en la UE y usa doble confirmación. Analítica sin cookies, por ejemplo Umami autoalojado (sin instalar aún).
- No se usa Formspree ni un correo de ninguna administración.
