# Configuración del Sistema de Email

Este proyecto incluye un sistema de email completo que puede enviar formularios de contacto tanto por SMTP como a un CRM.

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

### Configuración de SMTP
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-contraseña-de-aplicación
```

### Configuración de CRM (opcional)
```env
CRM_ENDPOINT=https://api.tucrm.com/contacts
CRM_API_KEY=tu-api-key-del-crm
```

### Configuración de notificaciones
```env
NOTIFICATION_EMAIL=info@bshouse.io
FROM_EMAIL=noreply@bshouse.io
```

### Configuración de respaldo (opcional)
```env
# EmailJS como respaldo
NUXT_EMAILJS_SERVICE_ID=tu-service-id
NUXT_EMAILJS_TEMPLATE_ID=tu-template-id
NUXT_EMAILJS_USER_ID=tu-user-id

# Formspree como respaldo
NUXT_FORMSPREE_ENDPOINT=https://formspree.io/f/tu-form-id
```

## Configuración de Gmail

Para usar Gmail como servidor SMTP:

1. Activa la verificación en dos pasos en tu cuenta de Google
2. Genera una contraseña de aplicación:
   - Ve a Configuración de la cuenta de Google
   - Seguridad > Verificación en dos pasos
   - Contraseñas de aplicación
   - Genera una nueva contraseña para "Correo"
3. Usa esa contraseña en `SMTP_PASS`

## Configuración de CRM

El sistema puede enviar datos a cualquier CRM que tenga una API REST. Ejemplos:

### HubSpot
```env
CRM_ENDPOINT=https://api.hubapi.com/crm/v3/objects/contacts
CRM_API_KEY=tu-hubspot-api-key
```

### Salesforce
```env
CRM_ENDPOINT=https://tu-instancia.salesforce.com/services/data/v52.0/sobjects/Lead
CRM_API_KEY=tu-salesforce-access-token
```

### Pipedrive
```env
CRM_ENDPOINT=https://api.pipedrive.com/v1/persons
CRM_API_KEY=tu-pipedrive-api-token
```

## Flujo de Funcionamiento

1. El usuario envía el formulario de contacto
2. La API local (`/api/contact`) recibe los datos
3. Se validan los datos del formulario
4. Se genera un email HTML con los datos
5. Se envían en paralelo:
   - Email por SMTP
   - Datos al CRM (si está configurado)
6. Se retorna éxito si al menos uno de los métodos funciona

## Endpoints

### POST /api/contact

Recibe los datos del formulario y los procesa.

**Body:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "company": "Empresa S.A.",
  "phone": "+1234567890",
  "projectType": "Desarrollo Web",
  "budget": "$10,000 - $25,000",
  "message": "Necesito una aplicación web...",
  "newsletter": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "Formulario enviado correctamente",
  "data": {
    "email": { "success": true, "method": "SMTP" },
    "crm": { "success": true, "method": "CRM" },
    "errors": []
  }
}
```

## Personalización

### Modificar el template de email

Edita la función `generateEmailContent` en `server/api/contact.post.ts` para personalizar el diseño del email.

### Agregar más campos

1. Actualiza la interfaz `ContactFormData`
2. Modifica la validación en `validateFormData`
3. Actualiza el template de email
4. Agrega los campos al formulario en `ContactSection.vue`

### Integrar con otros servicios

Puedes agregar más métodos de envío en el archivo `server/api/contact.post.ts`:

```typescript
// Ejemplo: Enviar a Slack
async function sendToSlack(formData: ContactFormData) {
  // Implementación
}
```

## Troubleshooting

### Error de autenticación SMTP
- Verifica que las credenciales sean correctas
- Asegúrate de usar una contraseña de aplicación si es Gmail
- Verifica que el puerto sea correcto

### Error de CRM
- Verifica que la URL del endpoint sea correcta
- Confirma que el API key tenga permisos suficientes
- Revisa la documentación de la API del CRM

### Email no se envía
- Revisa los logs del servidor
- Verifica que las variables de entorno estén configuradas
- Confirma que el formulario esté enviando los datos correctos 