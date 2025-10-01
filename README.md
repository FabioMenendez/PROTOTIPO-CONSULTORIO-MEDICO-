#  Consultorio Virtual — Dr. Constantino Domínguez Barrera

Este proyecto corresponde a una **aplicación web** que incluye:

1. **Sitio oficial del Dr. Constantino Domínguez Barrera**  
   - Portada con carrusel animado.  
   - Biografía y foto.  
   - Reconocimientos con fotos y descripciones interactivas.  
   - Sección de artículos publicados (3 artículos con páginas individuales).  
   - Información de contacto y mapa del consultorio.  

2. **Consultorio Virtual (Panel privado para el doctor)**  
   - Login con usuario y contraseña.  
   - Dashboard con accesos rápidos:  
     - Añadir pacientes y registrar historia clínica.  
     - Revisar todas las historias clínicas.  
     - Crear recetas médicas con editor enriquecido e impresión.  
     - Sección futura: publicar o modificar artículos desde el panel.  

---

##  Estado actual
Actualmente el proyecto contiene **solo el frontend** (HTML, CSS y JavaScript).  
El almacenamiento local fue eliminado para preparar la migración a un **backend con base de datos real (MySQL + API REST)**.  

---

##  Tecnologías utilizadas
- **Frontend:**  
  - HTML5  
  - CSS3 (animaciones, flexbox y grid)  
  - JavaScript vanilla  

- **Diseño:**  
  - Estilo responsivo  
  - Animaciones de entrada y efectos suaves  
  - Paleta en tonos azul profesional  

---

## Páginas principales
- `index.html` → Sitio oficial (portada, biografía, reconocimientos, artículos, consultorio).  
- `articulo1.html` → Artículo 1
- `articulo2.html` → Artículo 2
- `articulo3.html` → Artículo 3 
- `index2.html` → Login al consultorio virtual.  
- `dashboard.html` → Panel principal del doctor.  
- `historia.html`, `historias.html` → Gestión de historias clínicas.  
- `receta.html` → Generación de recetas médicas con impresión.
- `Historias-todas.html` → Visualización de todas las historias médicas de los pacientes.

---

## Próximos pasos
1. Desarrollar un **backend** con Node.js + Express.  
2. Conectar a **MySQL** (ej. usando MySQL Workbench).  
3. Crear **API REST** para pacientes, historias clínicas, recetas y artículos.  
4. Implementar autenticación real (login seguro).  
5. Consumir la API desde el frontend actual.  
6. Desplegar en un hosting web o VPS para acceso desde cualquier lugar.  

---

 Proyecto en desarrollo — **esta versión es únicamente frontend**.
