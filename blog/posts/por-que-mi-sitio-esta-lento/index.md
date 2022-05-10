---
title: ¿Por qué mi sitio está lento?
date: 2022-05-06
language: spanish
---

## Mi sitio está _lento_

Ok, lento, pero con respecto a qué? La mejor forma de entender (y mejorar) el rendimiento de un sitio depende de qué línea base estemos usando al momento de la medición. Necesitamos entender qué medir y qué áreas requieren mejora antes de hacer cualquier cambio.

## ¿Qué medir?

Existen características habitualmente relacionadas con la velocidad _percibida_ de un sitio. Tomemos por ejemplo el **tiempo de carga de la página principal**, y siendo más específicos, el tiempo total desde que ingresamos la URL en el navegador hasta que la primera página termina de verse por completo. Aquí ya tenemos varios procesos en cascada que necesitan completarse:

- El servicio de DNS del usuario encuentra la URL y a qué servidor/IP está asociada
- Nuestro servidor web recibe la solicitud de contenido y ejecuta las acciones necesarias para conseguir los elementos necesarios para desplegar la página inicial
- Se ejecutan uno o más procesos para identificar y resolver todo el contenido que debe aparecer en la página
- Se retorna el documento HTML solicitado con todas las referencias necesarias a imágenes, videos, recursos de estilos y funcionalidad que deben cargarse desde el navegador
- El navegador del usuario busca las referencias del documento y descarga lo necesario para visualizar finalmente la página principal del sitio (se repite el proceso de búsqueda de contenido para cada referencia)
- Una vez que se terminan de cargar en el navegador todos los contenidos, el usuario finalmente es capaz de visualizar la página principal del sitio como estaba dispuesto.

Además de todos estos pasos, existen varios procesos que ocurren internamente al momento de navegar a una URL y que intervienen en cómo y cuándo se despliega un sitio en el navegador del usuario. Tareas que ocurren en paralelo, mecanismos de validación y preservación de caché, controles de acceso, etc., lo que hace cada vez más complejo asociar el tiempo de carga de un sitio a solo un aspecto.
