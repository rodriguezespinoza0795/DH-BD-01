# App de pedidos Online: "Los restaurantes"

Se desea construir una base de datos que almacene los datos de una app de pedidor de comida online. en esta se dan de alta restauranes con los siguientes datos: nombre, foto, dirección, horario de atención y calificación del 1 al 5.

Cada restaurante publica los platos que ofrece. Por cada plato se almacena su nombre, descripción, una foto y el precio final para el cliente.

Cada plato pertenece a una categoría. Las categorías se caracterizan por su nombre, que pueden ser: entrada, plato fuerte, bebidas o extras. También van a tener una breve descripción.

Además para cada uno de los platos, se desea conocer los ingredientes en detalle.

Por último, el sistema realiza un registro de los pedidos, llevando un control de fecha y hora de realización, productos, cantidad, precio, total, aclaraciones, dirección de entrega, fecha y hora de envío.

Consigna:
Detectar y definir los siguientes:

- Entidades
- Atributos
- Tipos de datos

# App de pedidos Online: "Los usuarios"

Ahora, sobre el mismo caso, pensemos en los usuarios. Los usuarios se registran por primera vez donde se les solicita: nombre completo, teléfono, dirección, número de puerta, piso, departamento, aclaraciones, email y contraseña.

Existen distintos tipos de usuario, dependiendo si paga una membresía, si es corporativo o es ocacional. en el caso de membresía o corpotativo tienen una fecha de alta y de vencimiento para renovar su tipo de usuario. se registra cada renovación.

Lo usuarios también tienen un estado que les permite darse de baja en el caso que no quieran realizar más pedidos online. ¡No se los borra! simplemente, pasa al estado: "baja".

Ahora, no nos olvidemos que en la entidad de pedidos que creamos para el restaurante también debe de estar registrado el usuario que solicitó ese pedido. En el caso de que no lo hayas tenido en cuenta, actualizar la entidad.
