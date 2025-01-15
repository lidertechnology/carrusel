export interface BannerInterface {
    id: string;              // Identificador autogenerado por firestore
    url: string;             // Url de cloudinary 
    alt: string;             // Texto alternativo para SEO
    categoria: Categoria;    // Categoria de tipo enum para restringir a solo esas categorias.
}

// LA CARACTERISTICA ENUM RESTRINGE LAS CATEGORIAS QUE USARAN LA INTERFACE.
enum Categoria {
    Escritura = "Escritura",
    Agendas = "Agendas",
    Tecnologia = "Tecnologia",
    Escolares = "Escolares",
    Oficina = "Oficina",
  }


/**
 USAMOS ENUM PARA RESTRINGIR LAS CATEGORIAS DE NUETRA APP PARA BANNERS
 + Escritura
 + Agendas
 + Tecnología
 + Oficina
 + Escolares
 */


 
  
  
