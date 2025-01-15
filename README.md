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
      - categoria: Categoria;  // Usamos un enum como tipo en categoria.
      - url: string;
      - alt: string;
      
  * Tomaremos en cuenta que ya la app esta conectada a un proyecto de Firebase.
  * Debemos instalar la biblioteca de swiperjs con el comando: npm install swiper ( para poder usarlas en nuestro componente)

 1. Crear una colección de primer nivel en Firestore llamada " Banners ". Eso es en la consola de firestore.

    ![image](https://github.com/user-attachments/assets/c6807c44-c9bb-46a7-a575-99409dae2dca)

 3. Crea una interface llamada bannerInterface.ts con el comando: ng g i interfaces/bannerInterface. Esto es en nuestro proyecto Angular, en interfaces.

        ng g i interfaces/bannerInterface

 4. Crear un componente en la carpeta components llamado "carrusel", se hace con el comando:

        ng g c components/carrusel

 5. Agrega el código para la interface de este repositorio y adaptalo a tus requerimientos en las categorias.
 6. Agrega el código .HTML de este repositorio.
 7. Agrega el código .ts de de este repositorio.
 8. (opcional), si deseas personalizar tu carrusel puede usar los demos de SwiperJs en su página oficial. Link:  https://swiperjs.com/demos

         ng g c components/carrusel

#  USO DEL CARRUSEL EN OTRO COMPONENTE: 

 1. Importamos el componente "CarruselComponent" en el componente donde usaremos el carrusel reusable.
 2. Agregamos el selector del carrusel en el HTML del componente padre:

        <app-carrusel [conector]="banners()"></app-carrusel>

Importante: 
El contenido que colocamos en "banners()" es porque usamos signals de Angular, 
y es importante crear la variable donde se almacenará la coleccion de banners del carrusel y
conectarla a una colección de firestore que podemos llamar como "Banners" ó "Carruseles".

# OBTENER LOS BANNERS EN EL COMPONENTE REUSABLE
