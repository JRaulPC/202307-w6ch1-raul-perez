# Pelis (w6ch1)

Tendrás que desarrollar, en React, una aplicación para un listado de películas. La aplicación tendrá dos páginas, una para el listado de películas y otra para el formulario de crear película.

Se te proporciona una aplicación ya componentizada y con rutas.

La API REST está en https://films-api-l2b4.onrender.com/films/

Pasos:

1. Dedícale un rato a mirar el código proporcionado.
2. Crea el context y su provider para almacenar las películas en el store.
3. Crea un custom hook con una función para obtener las películas de la API REST.
4. Añade al context la función para volcar películas en el store.
5. En la página de listado, haz una llamada a la API para obtener las películas, y vuélcalas en el store.
6. En el componente listado, haz que se renderice una card por cada película del store.
7. Haz que el componente listado pida una película y muestre sus datos.
8. En el componente contador, cambia el 4 por el número de películas que haya en el store.
9. En el componente formulario, crea un estado para la nueva película y vincula los controles de formulario con el estado.
10. Programa el formulario para que el botón de enviar sólo esté activo cuando no hay ningún campo vacío.
11. En el custom hook, crea una función para crear una nueva película en la API REST.
12. En el context, crea una función para añadir una nueva película al store.
13. En la página de nueva película, crea una función para enviarle al formulario y que la invoque en el submit. La función debe:

- Enviar los datos de la nueva película a la API.
- Añadir al store la nueva película recibida de la API.
- Redirigir a la página del listado.

14. En el custom hook, crea una función para eliminar una nueva película de la API REST.
15. En el context, crea una función para eliminar una película del store.
16. En el componente de la card, crea una función para enviarle al button y que la invoque en el click. La función debe:

- Borrar la película de la API.
- Borrar la película del store.
