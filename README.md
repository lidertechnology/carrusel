# Carrusel reusable con data en Firestore.
Hemos elaborado un carrusel reusable standalone de angular con Swiperjs que leerá la data de una coleccion en Firestore llamada "Carruseles".

La idea es que el usuario administrador pueda cambiar los banners desde un administrador general de la app.

#  Pasos: 

  * Tomaremos en cuenta que ya la app esta conectada a un proyecto de Firebase.
  * Debemos instalar la biblioteca de swiperjs con el comando: npm install swiper ( para poder usarlas en nuestro componente)

  1. Crear una colección de primer nivel en Firestore llamada " Carruseles ".
  2. Crear un componente en la carpeta componentes llamado "carrusel", se hace co el comando "ng g c components/carrusel"
  3. Agrega el código .HTML de este repositorio.
  4. Agrega el código .ts de de este repositorio.
  5. (opcional), si deseas personalizar tu carrusel puede usar los demos de SwiperJs en su página oficial.
