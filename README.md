# Ecommerce_incap

Proyecto Django de Ecommerce desarrollado para eva4.

## Características

- Sistema de gestión de productos con categorías
- Panel de administración Django
- Modelos de datos para Category, Product, Order y OrderItem
- Interfaz de usuario básica para visualizar productos
- Sistema de imágenes para productos
- Gestión de inventario (stock)

## Requisitos Previos

- Python 3.8 o superior
- pip (gestor de paquetes de Python)

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/RexCats/Ecommerce_incap.git
cd Ecommerce_incap
```

2. Crear y activar un entorno virtual (recomendado):
```bash
python3 -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

3. Instalar las dependencias:
```bash
pip install -r requirements.txt
```

4. Ejecutar las migraciones:
```bash
python manage.py migrate
```

5. Crear un superusuario para acceder al admin:
```bash
python manage.py createsuperuser
```

6. Iniciar el servidor de desarrollo:
```bash
python manage.py runserver
```

7. Abrir el navegador en:
- Tienda: http://127.0.0.1:8000/
- Panel Admin: http://127.0.0.1:8000/admin/

## Estructura del Proyecto

```
Ecommerce_incap/
├── ecommerce_project/       # Configuración principal del proyecto
│   ├── settings.py         # Configuraciones de Django
│   ├── urls.py             # URLs principales
│   └── ...
├── store/                   # Aplicación de la tienda
│   ├── models.py           # Modelos de datos (Category, Product, Order, OrderItem)
│   ├── admin.py            # Configuración del admin
│   ├── views.py            # Vistas de la aplicación
│   ├── urls.py             # URLs de la tienda
│   └── templates/          # Plantillas HTML
├── manage.py               # Script de gestión de Django
└── requirements.txt        # Dependencias del proyecto
```

## Modelos de Datos

### Category
- Categorías de productos para organizar la tienda

### Product
- Productos disponibles en la tienda
- Incluye nombre, descripción, precio, stock, imagen, etc.

### Order
- Órdenes de compra de los clientes
- Estados: pending, processing, shipped, delivered, cancelled

### OrderItem
- Ítems individuales dentro de una orden

## Uso del Panel Admin

1. Acceder a http://127.0.0.1:8000/admin/
2. Iniciar sesión con las credenciales del superusuario
3. Gestionar categorías, productos, órdenes desde el panel

## Tecnologías Utilizadas

- Django 6.0
- SQLite (base de datos por defecto)
- Pillow (manejo de imágenes)

## Autor

RexCats - eva4

