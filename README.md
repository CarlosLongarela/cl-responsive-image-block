# CL Responsive Image Block

Un bloque de Gutenberg para WordPress que permite crear imágenes responsive con versiones diferenciadas para escritorio y móvil, incluyendo enlaces opcionales.

## 📋 Descripción

Este plugin añade un bloque personalizado al editor de WordPress (Gutenberg) que te permite:

- 🖥️ **Subir una imagen para escritorio** (versión principal)
- 📱 **Subir una imagen para móvil** (se muestra en pantallas ≤ 768px)
- 🔗 **Agregar enlace opcional** con validación de URL
- 🏷️ **Texto alternativo** para accesibilidad
- ⚡ **Control de lazy loading** (habilitado/deshabilitado)
- 📐 **Ancho completo automático** en el frontend
- 🎨 **Clases CSS personalizables** con prefijo `cl-`

## 🚀 Características

### ✨ **Editor (Backend)**
- Panel lateral intuitivo con controles organizados
- Vista previa de ambas imágenes en tiempo real
- Validación de URL en tiempo real
- Borde verde distintivo para identificar el bloque
- Preview responsive (muestra imagen móvil en pantallas pequeñas)

### 🌐 **Frontend**
- Imagen a ancho completo de pantalla (100vw)
- Cambio automático entre imagen de escritorio y móvil
- Sin distorsión de imagen (`object-fit: cover`)
- Enlaces con configuración flexible de ventana nueva
- Lazy loading configurable

## 🛠️ Instalación

1. **Descarga** el archivo ZIP del plugin
2. **Sube** el plugin desde `Plugins > Añadir nuevo > Subir plugin`
3. **Activa** el plugin
4. El bloque "Responsive Image" aparecerá en la categoría **Medios** del editor

## 🎯 Uso

### Paso 1: Agregar el bloque
1. En el editor de WordPress, haz clic en **+** para agregar un bloque
2. Busca "Responsive Image" o ve a la categoría **Medios**
3. Selecciona el bloque **Responsive Image**

### Paso 2: Configurar imágenes
En el panel lateral derecho encontrarás:

#### 📁 **Panel "Imágenes"**
- **Deshabilitar lazy loading**: Control global para carga inmediata de ambas imágenes (por defecto: deshabilitado)
- **Seleccionar imagen de escritorio**: Imagen principal (obligatoria)
- **Seleccionar imagen móvil**: Se mostrará en pantallas ≤ 768px (opcional)
- Vista previa de ambas imágenes bajo cada botón

#### ⚙️ **Panel "Configuración de imagen"**
- **Enlace de la imagen**: URL de destino (opcional, con validación)
- **Abrir enlace en ventana nueva**: Controla si el enlace se abre en ventana nueva (por defecto: deshabilitado)
- **Texto alternativo**: Para accesibilidad (recomendado)

### Paso 3: Publicar
El bloque generará automáticamente el HTML responsive optimizado.

## 🎨 Personalización CSS

El bloque utiliza las siguientes clases CSS que puedes personalizar:

```css
/* Contenedor principal */
.cl-responsive-image {
    /* Estilos del contenedor */
}

/* Elemento picture */
.cl-responsive-image-picture {
    /* Estilos del elemento picture */
}

/* Imagen */
.cl-responsive-image-img {
    /* Estilos de la imagen */
}

/* Enlace (cuando existe) */
.cl-responsive-image-link {
    /* Estilos del enlace */
}
```

### Ejemplo de personalización:
```css
.cl-responsive-image {
    max-width: 1200px;
    margin: 0 auto;
}

.cl-responsive-image-img {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
```

## 🔧 HTML Generado

### Con enlace (ventana nueva):
```html
<div class="wp-block-tabernawp-responsive-image cl-responsive-image">
    <a href="https://ejemplo.com" target="_blank" rel="noopener noreferrer" class="cl-responsive-image-link">
        <picture class="cl-responsive-image-picture">
            <source srcset="imagen-mobile.jpg" media="(max-width: 768px)">
            <img src="imagen-desktop.jpg" alt="Descripción" class="cl-responsive-image-img" loading="eager">
        </picture>
    </a>
</div>
```

### Con enlace (misma ventana):
```html
<div class="wp-block-tabernawp-responsive-image cl-responsive-image">
    <a href="https://ejemplo.com" target="_self" class="cl-responsive-image-link">
        <picture class="cl-responsive-image-picture">
            <source srcset="imagen-mobile.jpg" media="(max-width: 768px)">
            <img src="imagen-desktop.jpg" alt="Descripción" class="cl-responsive-image-img" loading="eager">
        </picture>
    </a>
</div>
```

### Sin enlace:
```html
<div class="wp-block-tabernawp-responsive-image cl-responsive-image">
    <picture class="cl-responsive-image-picture">
        <source srcset="imagen-mobile.jpg" media="(max-width: 768px)">
        <img src="imagen-desktop.jpg" alt="Descripción" class="cl-responsive-image-img" loading="lazy">
    </picture>
</div>
```

## 📱 Responsive Behavior

- **Escritorio (> 768px)**: Muestra imagen de escritorio
- **Móvil (≤ 768px)**: Muestra imagen móvil (si está configurada), sino muestra la de escritorio
- **Ancho completo**: Las imágenes ocupan el 100% del ancho de la ventana
- **Sin distorsión**: Se mantienen las proporciones originales

## 🔒 Seguridad

- **Validación de URLs**: Solo acepta protocolos HTTP/HTTPS
- **Sanitización**: Todos los atributos son escapados correctamente
- **Enlaces seguros**: Automáticamente añade `rel="noopener noreferrer"`

## ⚡ Rendimiento

- **Lazy loading configurable**: Por defecto habilitado para mejorar velocidad
- **CSS optimizado**: Archivos compilados y minificados
- **HTML semántico**: Usa elemento `<picture>` nativo para responsive

## 🔧 Requisitos

- **WordPress**: 5.0 o superior
- **PHP**: 7.4 o superior
- **Editor**: Gutenberg (incluido en WordPress 5.0+)

## 📝 Changelog

### Version 1.0.1
- ✅ Bloque funcional con imágenes responsive
- ✅ Panel de controles intuitivo
- ✅ Validación de URLs
- ✅ Personalización CSS completa
- ✅ Lazy loading configurable
- ✅ Ancho completo automático

## 👨‍💻 Autor

**Carlos Longarela**
- 🌐 Web: [https://tabernawp.com/](https://tabernawp.com/)
- 📧 Contacto: A través del sitio web

## 📄 Licencia

Este plugin está licenciado bajo GPL-2.0+. Consulta el archivo LICENSE para más detalles.

## 🆘 Soporte

Si encuentras algún problema o tienes sugerencias:

1. **Revisa** la documentación anterior
2. **Verifica** que las imágenes sean accesibles públicamente
3. **Comprueba** que las URLs tengan el formato correcto (http:// o https://)
4. **Contacta** a través de [https://tabernawp.com/](https://tabernawp.com/)

---

¡Gracias por usar CL Responsive Image Block! 🎉
