# WhatsPopUp
Ventana popUp que permite tener Web WhatsApp en S.O. (linux) sin aplicacion nativa , mediante navegador Firefox. Tambien aplica para cualquier S.O. donde se ejecute Firefox, pero su utilidad esta en donde no se dispone de la app de escritorio oficial.  
Pretende ser una alternativa a dejar fijada la pestaña en el navegador, y a no tener que encapsular con por ejemplo electron el servicio de WhatsApp web para tenerlo disponible como ventana en el escritorio.

## Instalación (prueba)
- Abre "about:debugging" en Firefox, da click en "Cargar complemento temporal" y selecciona cualquier archivo en el directorio de la extensión.
- La extensión se encontrará instalada, y lo estará hasta que reinicies Firefox.
- Aparecera el logo de WhatsApp al costado de la barra de menu, al presionar se abrira el popup en una nueva ventana.

## Instalación

- Abre la carpeta que contiene los archivos de tu extensión.  
- Selecciona todos los archivos.  
- comprimela como archivo .zip  
- Cambia el nombre del archivo resultante de whatspopup.zip a whatspopup.xpi  
- Da autorizacion para instalar complementos no frimados. En el navegador escribe about:config y baja hasta la preferencia  
xpinstall.signatures.required, cambiala de true a false.  
- Navega a about:addons  
- Arrastra y suelta el XPI dentro de la página, o abre el menú de opciones y escoge "Instalar complemento desde archivo..."  
- Da clic en "Instalar" en el diálogo que aparecerá.  
- Aparecera el logo de WhatsApp al costado de la barra de menu, al presionar se abrira el popup en una nueva ventana.



### Agradecimiento a https://www.flaticon.es/ por el uso del logo de WhatsApp SVG  
https://www.flaticon.es/packs/social-media-logos-2


### Material de apoyo utilizado:  
https://developer.mozilla.org/es/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension  
https://developer.mozilla.org/es/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension  
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows/create  
https://stackoverflow.com/questions/54963299/basic-firefox-addon-browser-browseraction-onclicked-addlistener-and-brows  
https://developer.mozilla.org/es/docs/orphaned/Mozilla/Add-ons/WebExtensions/Temporary_Installation_in_Firefox