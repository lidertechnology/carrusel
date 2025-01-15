# Carrusel reusable con data en Firestore.
Hemos elaborado un carrusel reusable standalone de angular con Swiperjs que leerá la data de una coleccion en Firestore llamada "Carruseles".

  *** La idea es que el usuario administrador pueda cambiar los banners desde un administrador general de la app. ***

#  Pasos: 
  Requerimientos:
  * En nuestra base de datos Firestore debemos crear una colección de primer nivel llamada "Banners"
    que contendrá documentos que representan nuestros banners por separado,
    dichos banners tendrán la siguiente estructura de datos:
      - id: string; //que será autogenerado por firestoe de manera automatica al agregar nuevos banners.
      - alt: string;
      - seccion: string;
      - url: string;
      
  * Tomaremos en cuenta que ya la app esta conectada a un proyecto de Firebase.
  * Debemos instalar la biblioteca de swiperjs con el comando: npm install swiper ( para poder usarlas en nuestro componente)

  1. Crear una colección de primer nivel en Firestore por ejemplo " Carruseles ".
  2. Crear un componente en la carpeta componentes llamado "carrusel", se hace co el comando "ng g c components/carrusel"
  3. Agrega el código .HTML de este repositorio.
  4. Agrega el código .ts de de este repositorio.
  5. (opcional), si deseas personalizar tu carrusel puede usar los demos de SwiperJs en su página oficial.

#  USO DEL CARRUSEL EN OTRO COMPONENTE: 

 1. Importamos el componente "CarruselComponent" en el componente donde usaremos el carrusel reusable.
 2. Agregamos el selector del carrusel en el HTML del componente padre:

        <app-carrusel [conector]="carruseles()"></app-carrusel>

Importante: 
El contenido que colocamos en "carrusel()" es porque usamos signals de Angular, 
y es importante crear la variable donde se almacenará la coleccion de banners del carrusel y
conectarla a una colección de firestore que podemos llamar como "Banners" ó "Carruseles".
