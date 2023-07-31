# Empresa de eventos

Una empresa quiere mejorar el funcionamiento de su equipo y , por eso, cree que es importante prestar atención a la gestión de su información.

Hasta el momento no cuenta con ninguna tecnología, por lo que te contrata como su asesor.

"La empresa realiza **eventos**. Estos eventos pueden ser de distintos _tipos_, como ser: corporativos, casamientos, 15 años, etc. Un **cliente** es quién nos contrata para realizar el evento. Generalmente solicitamos _nombre, identificación y datos de contacto_. Luego, pedimos datos del evento: _presupuesto estimado, cantidad de personas, tipo de evento, fecha, lugar_, características deseables- por ejemplo, la música: clásica, rock&pop u otros géneros-, comida - buffet, cocktail, aperitiva, brunch, etc.- entre otros."

1. Detallar las columnas necesarias y recordar que todas deben tener título.
2. Generar un lote de datos de ejemplo. Esto permite entender qué dato se guardarán en cada columna.
3. Buscar un dato que identifique unívocamente a cada fila.

- Entidad CLIENTE.
  - ID
  - Nombre completo
  - Identificación
  - Teléfono
  - Email
- Entidad EVENTO
  - **ID_TIPO_EVENTO**
  - Número de invitados
  - Presupuesto
  - Fecha
  - Lugar
  - **ID_CLIENTE**
- Entidad TIPO_EVENTO
  - Id
  - Nombre
  - Descripción
- Entidad EVENTO_DETALLE
  - ID_Evento
  - Música
  - Comida
