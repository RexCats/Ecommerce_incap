// Catálogo completo de TechArena
const CATALOG = {
  categories: [
    {
      id: 'gaming',
      name: 'GAMING Y STREAMING',
      slug: 'gaming-streaming',
      subcategories: [
        {
          id: 'perifericos-gamer',
          name: 'Periféricos Gamer',
          slug: 'perifericos-gamer',
          products: [
            { id: 'pg-001', name: 'Teclado Mecánico Logitech G Pro X', brand: 'Logitech', priceCLP: 89990, oldPriceCLP: 109990, rating: 5, stock: 15, image: '/img/teclado-logitech-gpro.png', specs: { Tipo: 'Mecánico', Switch: 'GX Blue', Conectividad: 'USB-C', Iluminación: 'RGB' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'pg-002', name: 'Mouse Razer DeathAdder V3', brand: 'Razer', priceCLP: 64990, rating: 5, stock: 22, image: '/img/mouse-razer-deathadder.png', specs: { DPI: '30000', Sensor: 'Focus Pro 30K', Conectividad: 'Inalámbrico', Peso: '59g' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'pg-003', name: 'Audífonos HyperX Cloud II', brand: 'HyperX', priceCLP: 79990, oldPriceCLP: 94990, rating: 4, stock: 18, image: '/img/audifonos-hyperx-cloud2.png', specs: { Tipo: 'Over-ear', Conectividad: 'USB/3.5mm', Micrófono: 'Desmontable', Sonido: '7.1 Virtual' }, badges: ['Oferta'], shipping: 'Retiro' },
            { id: 'pg-004', name: 'Mousepad SteelSeries QcK Heavy XXL', brand: 'SteelSeries', priceCLP: 34990, rating: 5, stock: 30, image: '/img/mousepad-steelseries.png', specs: { Tamaño: '900x400mm', Grosor: '6mm', Material: 'Tela', Base: 'Goma antideslizante' }, badges: [], shipping: 'Despacho' },
            { id: 'pg-005', name: 'Teclado Corsair K70 RGB', brand: 'Corsair', priceCLP: 119990, rating: 5, stock: 12, image: '/img/teclado-corsair-k70.png', specs: { Tipo: 'Mecánico', Switch: 'Cherry MX Red', Conectividad: 'USB', Iluminación: 'RGB por tecla' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'pg-006', name: 'Mouse Logitech G502 HERO', brand: 'Logitech', priceCLP: 54990, rating: 5, stock: 25, image: '/img/mouse-logitech-g502.png', specs: { DPI: '25600', Sensor: 'HERO 25K', Conectividad: 'USB', Peso: 'Ajustable' }, badges: [], shipping: 'Retiro' },
            { id: 'pg-007', name: 'Audífonos Razer BlackShark V2', brand: 'Razer', priceCLP: 89990, rating: 4, stock: 14, image: '/img/audifonos-razer-blackshark.png', specs: { Tipo: 'Over-ear', Conectividad: 'USB/3.5mm', Micrófono: 'Desmontable', Sonido: 'THX 7.1' }, badges: [], shipping: 'Despacho' },
            { id: 'pg-008', name: 'Webcam Logitech C920 HD Pro', brand: 'Logitech', priceCLP: 69990, rating: 5, stock: 20, image: '/img/webcam-logitech-c920.png', specs: { Resolución: '1080p', FPS: '30', Micrófono: 'Estéreo', Conexión: 'USB-A' }, badges: [], shipping: 'Despacho' },
            { id: 'pg-009', name: 'Silla Gamer DXRacer Formula', brand: 'DXRacer', priceCLP: 249990, oldPriceCLP: 299990, rating: 4, stock: 8, image: '/img/silla-dxracer.png', specs: { Material: 'Cuero PU', Reclinación: '135°', Peso_Max: '150kg', Reposabrazos: '4D' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'pg-010', name: 'Control Xbox Wireless', brand: 'Microsoft', priceCLP: 59990, rating: 5, stock: 35, image: '/img/control-xbox.png', specs: { Conectividad: 'Bluetooth/USB-C', Batería: '40 horas', Compatibilidad: 'Xbox/PC', Vibración: 'Dual' }, badges: [], shipping: 'Retiro' }
          ]
        },
        {
          id: 'pc-notebook-gamer',
          name: 'PC y Notebook Gamer',
          slug: 'pc-notebook-gamer',
          products: [
            { id: 'png-001', name: 'Notebook ASUS ROG Strix G15', brand: 'ASUS', priceCLP: 1499990, rating: 5, stock: 5, image: '/img/notebook-asus-rog.png', specs: { CPU: 'Ryzen 7 6800H', GPU: 'RTX 3060 6GB', RAM: '16GB DDR5', Almacenamiento: '512GB SSD', Pantalla: '15.6" 144Hz' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'png-002', name: 'PC Gamer Intel i5-12400F + RTX 4060', brand: 'TechArena', priceCLP: 899990, oldPriceCLP: 999990, rating: 5, stock: 10, image: '/img/pc-gamer-i5.png', specs: { CPU: 'i5-12400F', GPU: 'RTX 4060 8GB', RAM: '16GB DDR4', Almacenamiento: '500GB SSD', Fuente: '650W 80+ Bronze' }, badges: ['Oferta'], shipping: 'Retiro' },
            { id: 'png-003', name: 'Notebook MSI Katana 15', brand: 'MSI', priceCLP: 1299990, rating: 4, stock: 7, image: '/img/notebook-msi-katana.png', specs: { CPU: 'i7-12650H', GPU: 'RTX 4050 6GB', RAM: '16GB DDR5', Almacenamiento: '512GB SSD', Pantalla: '15.6" 144Hz' }, badges: [], shipping: 'Despacho' },
            { id: 'png-004', name: 'PC Gamer AMD Ryzen 5 5600 + RX 6600', brand: 'TechArena', priceCLP: 749990, rating: 4, stock: 12, image: '/img/pc-gamer-ryzen5.png', specs: { CPU: 'Ryzen 5 5600', GPU: 'RX 6600 8GB', RAM: '16GB DDR4', Almacenamiento: '500GB SSD', Fuente: '600W 80+ Bronze' }, badges: [], shipping: 'Retiro' },
            { id: 'png-005', name: 'Notebook Lenovo Legion 5 Pro', brand: 'Lenovo', priceCLP: 1799990, rating: 5, stock: 4, image: '/img/notebook-lenovo-legion.png', specs: { CPU: 'Ryzen 7 6800H', GPU: 'RTX 4060 8GB', RAM: '32GB DDR5', Almacenamiento: '1TB SSD', Pantalla: '16" 165Hz QHD' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'png-006', name: 'PC Gamer Intel i7-13700F + RTX 4070', brand: 'TechArena', priceCLP: 1599990, oldPriceCLP: 1799990, rating: 5, stock: 6, image: '/img/pc-gamer-i7.png', specs: { CPU: 'i7-13700F', GPU: 'RTX 4070 12GB', RAM: '32GB DDR5', Almacenamiento: '1TB SSD', Fuente: '750W 80+ Gold' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'png-007', name: 'Notebook Acer Predator Helios 300', brand: 'Acer', priceCLP: 1399990, rating: 4, stock: 8, image: '/img/notebook-acer-predator.png', specs: { CPU: 'i7-12700H', GPU: 'RTX 3060 6GB', RAM: '16GB DDR4', Almacenamiento: '512GB SSD', Pantalla: '15.6" 144Hz' }, badges: [], shipping: 'Despacho' },
            { id: 'png-008', name: 'PC Gamer AMD Ryzen 7 7700X + RX 7800 XT', brand: 'TechArena', priceCLP: 1899990, rating: 5, stock: 3, image: '/img/pc-gamer-ryzen7.png', specs: { CPU: 'Ryzen 7 7700X', GPU: 'RX 7800 XT 16GB', RAM: '32GB DDR5', Almacenamiento: '1TB SSD', Fuente: '850W 80+ Gold' }, badges: ['Nuevo'], shipping: 'Retiro' },
            { id: 'png-009', name: 'Notebook HP Omen 16', brand: 'HP', priceCLP: 1599990, rating: 4, stock: 6, image: '/img/notebook-hp-omen.png', specs: { CPU: 'i7-13700HX', GPU: 'RTX 4060 8GB', RAM: '16GB DDR5', Almacenamiento: '1TB SSD', Pantalla: '16.1" 165Hz' }, badges: [], shipping: 'Despacho' },
            { id: 'png-010', name: 'PC Gamer Intel i9-13900K + RTX 4090', brand: 'TechArena', priceCLP: 3999990, rating: 5, stock: 2, image: '/img/pc-gamer-i9.png', specs: { CPU: 'i9-13900K', GPU: 'RTX 4090 24GB', RAM: '64GB DDR5', Almacenamiento: '2TB SSD', Fuente: '1000W 80+ Platinum' }, badges: ['Nuevo'], shipping: 'Despacho' }
          ]
        },
        {
          id: 'streaming',
          name: 'Streaming',
          slug: 'streaming',
          products: [
            { id: 'st-001', name: 'Webcam Logitech StreamCam', brand: 'Logitech', priceCLP: 149990, rating: 5, stock: 12, image: '/img/webcam-streamcam.png', specs: { Resolución: '1080p 60fps', Conexión: 'USB-C', Micrófono: 'Dual', Montaje: 'Monitor/Trípode' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'st-002', name: 'Micrófono Blue Yeti X', brand: 'Blue', priceCLP: 179990, oldPriceCLP: 199990, rating: 5, stock: 15, image: '/img/microfono-yeti.png', specs: { Tipo: 'Condensador', Patrones: '4 modos', Conexión: 'USB', Monitoreo: 'Auriculares' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'st-003', name: 'Elgato Stream Deck', brand: 'Elgato', priceCLP: 149990, rating: 5, stock: 10, image: '/img/elgato-streamdeck.png', specs: { Teclas: '15 LCD', Conexión: 'USB', Software: 'Windows/Mac', Personalización: 'Ilimitada' }, badges: [], shipping: 'Retiro' },
            { id: 'st-004', name: 'Aro de Luz Neewer 18"', brand: 'Neewer', priceCLP: 79990, rating: 4, stock: 20, image: '/img/aro-luz-neewer.png', specs: { Diámetro: '18 pulgadas', Temperatura: '3200-5600K', Potencia: '55W', Trípode: 'Incluido' }, badges: [], shipping: 'Despacho' },
            { id: 'st-005', name: 'Capturadora Elgato HD60 S+', brand: 'Elgato', priceCLP: 199990, rating: 5, stock: 8, image: '/img/elgato-hd60s.png', specs: { Resolución: '1080p 60fps', Conexión: 'USB 3.0', Passthrough: '4K 60fps', Latencia: 'Ultra baja' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'st-006', name: 'Micrófono HyperX QuadCast S', brand: 'HyperX', priceCLP: 139990, rating: 5, stock: 14, image: '/img/microfono-quadcast.png', specs: { Tipo: 'Condensador', Patrones: '4 modos', Conexión: 'USB', RGB: 'Personalizable' }, badges: [], shipping: 'Retiro' },
            { id: 'st-007', name: 'Green Screen Elgato', brand: 'Elgato', priceCLP: 189990, oldPriceCLP: 219990, rating: 4, stock: 6, image: '/img/greenscreen-elgato.png', specs: { Tamaño: '148x180cm', Tipo: 'Retráctil', Material: 'Tela cromática', Montaje: 'Aluminio' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'st-008', name: 'Brazo Articulado Rode PSA1+', brand: 'Rode', priceCLP: 119990, rating: 5, stock: 11, image: '/img/brazo-rode.png', specs: { Alcance: '820mm', Rotación: '360°', Capacidad: '1.9kg', Montaje: 'Escritorio' }, badges: [], shipping: 'Despacho' },
            { id: 'st-009', name: 'Panel LED Elgato Key Light', brand: 'Elgato', priceCLP: 199990, rating: 5, stock: 9, image: '/img/keylight-elgato.png', specs: { Brillo: '2800 lúmenes', Temperatura: '2900-7000K', Control: 'WiFi', Montaje: 'Escritorio' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'st-010', name: 'Webcam Razer Kiyo Pro', brand: 'Razer', priceCLP: 189990, rating: 5, stock: 7, image: '/img/webcam-kiyo.png', specs: { Resolución: '1080p 60fps', Sensor: 'CMOS adaptativo', Conexión: 'USB 3.0', FOV: 'Ajustable' }, badges: [], shipping: 'Despacho' }
          ]
        },
        {
          id: 'monitores-gamer',
          name: 'Monitores Gamer',
          slug: 'monitores-gamer',
          products: [
            { id: 'mg-001', name: 'Monitor ASUS TUF Gaming 27" 165Hz', brand: 'ASUS', priceCLP: 299990, oldPriceCLP: 349990, rating: 5, stock: 12, image: '/img/monitor-asus-tuf27.png', specs: { Tamaño: '27 pulgadas', Resolución: '1920x1080', Tasa: '165Hz', Panel: 'IPS', Tiempo: '1ms' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'mg-002', name: 'Monitor LG UltraGear 24" 144Hz', brand: 'LG', priceCLP: 219990, rating: 5, stock: 18, image: '/img/monitor-lg-24.png', specs: { Tamaño: '24 pulgadas', Resolución: '1920x1080', Tasa: '144Hz', Panel: 'IPS', Tiempo: '1ms' }, badges: [], shipping: 'Retiro' },
            { id: 'mg-003', name: 'Monitor Samsung Odyssey G5 27" Curvo', brand: 'Samsung', priceCLP: 349990, rating: 4, stock: 10, image: '/img/monitor-samsung-g5.png', specs: { Tamaño: '27 pulgadas', Resolución: '2560x1440', Tasa: '144Hz', Panel: 'VA Curvo', Tiempo: '1ms' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'mg-004', name: 'Monitor AOC 24G2 24" 144Hz', brand: 'AOC', priceCLP: 189990, rating: 4, stock: 15, image: '/img/monitor-aoc-24g2.png', specs: { Tamaño: '24 pulgadas', Resolución: '1920x1080', Tasa: '144Hz', Panel: 'IPS', Tiempo: '1ms' }, badges: [], shipping: 'Retiro' },
            { id: 'mg-005', name: 'Monitor MSI Optix MAG274QRF-QD 27"', brand: 'MSI', priceCLP: 449990, rating: 5, stock: 8, image: '/img/monitor-msi-mag274.png', specs: { Tamaño: '27 pulgadas', Resolución: '2560x1440', Tasa: '165Hz', Panel: 'IPS Quantum Dot', Tiempo: '1ms' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'mg-006', name: 'Monitor BenQ ZOWIE XL2546K 24.5"', brand: 'BenQ', priceCLP: 549990, oldPriceCLP: 599990, rating: 5, stock: 6, image: '/img/monitor-benq-zowie.png', specs: { Tamaño: '24.5 pulgadas', Resolución: '1920x1080', Tasa: '240Hz', Panel: 'TN', Tiempo: '0.5ms' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'mg-007', name: 'Monitor Gigabyte M27Q 27" 170Hz', brand: 'Gigabyte', priceCLP: 379990, rating: 5, stock: 11, image: '/img/monitor-gigabyte-m27q.png', specs: { Tamaño: '27 pulgadas', Resolución: '2560x1440', Tasa: '170Hz', Panel: 'IPS', Tiempo: '1ms' }, badges: [], shipping: 'Despacho' },
            { id: 'mg-008', name: 'Monitor Dell S2522HG 25" 240Hz', brand: 'Dell', priceCLP: 399990, rating: 4, stock: 9, image: '/img/monitor-dell-s2522.png', specs: { Tamaño: '25 pulgadas', Resolución: '1920x1080', Tasa: '240Hz', Panel: 'IPS', Tiempo: '1ms' }, badges: [], shipping: 'Retiro' },
            { id: 'mg-009', name: 'Monitor ASUS ROG Swift PG279QM 27"', brand: 'ASUS', priceCLP: 899990, rating: 5, stock: 4, image: '/img/monitor-asus-rog-swift.png', specs: { Tamaño: '27 pulgadas', Resolución: '2560x1440', Tasa: '240Hz', Panel: 'IPS', Tiempo: '1ms', G-Sync: 'Sí' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'mg-010', name: 'Monitor Acer Predator X34 34" Ultrawide', brand: 'Acer', priceCLP: 1199990, oldPriceCLP: 1399990, rating: 5, stock: 3, image: '/img/monitor-acer-x34.png', specs: { Tamaño: '34 pulgadas', Resolución: '3440x1440', Tasa: '144Hz', Panel: 'IPS Curvo', Tiempo: '1ms' }, badges: ['Oferta'], shipping: 'Despacho' }
          ]
        },
        {
          id: 'consolas',
          name: 'Consolas y Accesorios',
          slug: 'consolas',
          products: [
            { id: 'co-001', name: 'PlayStation 5 Standard', brand: 'Sony', priceCLP: 599990, rating: 5, stock: 8, image: '/img/ps5-standard.png', specs: { Almacenamiento: '825GB SSD', Lector: 'Ultra HD Blu-ray', Resolución: '4K 120fps', Controles: '1 DualSense' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'co-002', name: 'Xbox Series X', brand: 'Microsoft', priceCLP: 599990, rating: 5, stock: 10, image: '/img/xbox-series-x.png', specs: { Almacenamiento: '1TB SSD', Lector: 'Ultra HD Blu-ray', Resolución: '4K 120fps', Controles: '1 Wireless' }, badges: [], shipping: 'Despacho' },
            { id: 'co-003', name: 'Nintendo Switch OLED', brand: 'Nintendo', priceCLP: 399990, oldPriceCLP: 449990, rating: 5, stock: 15, image: '/img/switch-oled.png', specs: { Pantalla: '7" OLED', Almacenamiento: '64GB', Modos: 'TV/Portátil/Sobremesa', Controles: 'Joy-Con' }, badges: ['Oferta'], shipping: 'Retiro' },
            { id: 'co-004', name: 'Control DualSense PS5', brand: 'Sony', priceCLP: 69990, rating: 5, stock: 25, image: '/img/dualsense.png', specs: { Conectividad: 'Bluetooth/USB-C', Batería: '12-15 horas', Vibración: 'Háptica', Gatillos: 'Adaptativos' }, badges: [], shipping: 'Retiro' },
            { id: 'co-005', name: 'Control Xbox Elite Series 2', brand: 'Microsoft', priceCLP: 189990, rating: 5, stock: 12, image: '/img/xbox-elite.png', specs: { Conectividad: 'Bluetooth/USB-C', Batería: '40 horas', Personalización: 'Componentes intercambiables', Perfiles: '3 configurables' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'co-006', name: 'PlayStation 5 Digital Edition', brand: 'Sony', priceCLP: 499990, rating: 5, stock: 6, image: '/img/ps5-digital.png', specs: { Almacenamiento: '825GB SSD', Lector: 'No', Resolución: '4K 120fps', Controles: '1 DualSense' }, badges: [], shipping: 'Despacho' },
            { id: 'co-007', name: 'Xbox Series S', brand: 'Microsoft', priceCLP: 349990, oldPriceCLP: 399990, rating: 4, stock: 14, image: '/img/xbox-series-s.png', specs: { Almacenamiento: '512GB SSD', Lector: 'No', Resolución: '1440p 120fps', Controles: '1 Wireless' }, badges: ['Oferta'], shipping: 'Retiro' },
            { id: 'co-008', name: 'Auriculares PlayStation Pulse 3D', brand: 'Sony', priceCLP: 99990, rating: 4, stock: 18, image: '/img/pulse-3d.png', specs: { Conectividad: 'Inalámbrico USB', Batería: '12 horas', Audio: '3D Tempest', Micrófono: 'Dual integrado' }, badges: [], shipping: 'Despacho' },
            { id: 'co-009', name: 'Cámara HD PlayStation 5', brand: 'Sony', priceCLP: 59990, rating: 4, stock: 20, image: '/img/ps5-camera.png', specs: { Resolución: '1080p', Lentes: 'Dual', Conexión: 'USB', Uso: 'Streaming/Broadcast' }, badges: [], shipping: 'Despacho' },
            { id: 'co-010', name: 'Estación de Carga DualSense', brand: 'Sony', priceCLP: 34990, rating: 5, stock: 22, image: '/img/charging-station.png', specs: { Capacidad: '2 controles', Tiempo_Carga: '3 horas', Conexión: 'AC', Indicador: 'LED' }, badges: [], shipping: 'Retiro' }
          ]
        }
      ]
    },
    {
      id: 'computacion',
      name: 'COMPUTACIÓN',
      slug: 'computacion',
      subcategories: [
        {
          id: 'notebook',
          name: 'Notebook',
          slug: 'notebook',
          products: [
            { id: 'nb-001', name: 'Notebook HP 15-dy2795wm', brand: 'HP', priceCLP: 549990, rating: 4, stock: 10, image: '/img/notebook-hp-15.png', specs: { CPU: 'i5-1135G7', RAM: '8GB DDR4', Almacenamiento: '256GB SSD', Pantalla: '15.6" FHD', GPU: 'Intel Iris Xe' }, badges: [], shipping: 'Despacho' },
            { id: 'nb-002', name: 'Notebook Dell Inspiron 15 3000', brand: 'Dell', priceCLP: 499990, oldPriceCLP: 549990, rating: 4, stock: 12, image: '/img/notebook-dell-inspiron.png', specs: { CPU: 'i3-1115G4', RAM: '8GB DDR4', Almacenamiento: '256GB SSD', Pantalla: '15.6" HD', GPU: 'Intel UHD' }, badges: ['Oferta'], shipping: 'Retiro' },
            { id: 'nb-003', name: 'Notebook Lenovo IdeaPad 3', brand: 'Lenovo', priceCLP: 479990, rating: 4, stock: 15, image: '/img/notebook-lenovo-ideapad.png', specs: { CPU: 'Ryzen 5 5500U', RAM: '8GB DDR4', Almacenamiento: '512GB SSD', Pantalla: '15.6" FHD', GPU: 'Radeon Graphics' }, badges: [], shipping: 'Despacho' },
            { id: 'nb-004', name: 'Notebook ASUS VivoBook 15', brand: 'ASUS', priceCLP: 599990, rating: 4, stock: 11, image: '/img/notebook-asus-vivobook.png', specs: { CPU: 'i7-1165G7', RAM: '16GB DDR4', Almacenamiento: '512GB SSD', Pantalla: '15.6" FHD', GPU: 'Intel Iris Xe' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'nb-005', name: 'Notebook Acer Aspire 5', brand: 'Acer', priceCLP: 529990, rating: 4, stock: 13, image: '/img/notebook-acer-aspire5.png', specs: { CPU: 'i5-1235U', RAM: '8GB DDR4', Almacenamiento: '512GB SSD', Pantalla: '15.6" FHD', GPU: 'Intel Iris Xe' }, badges: [], shipping: 'Retiro' },
            { id: 'nb-006', name: 'Notebook MSI Modern 14', brand: 'MSI', priceCLP: 649990, oldPriceCLP: 699990, rating: 5, stock: 8, image: '/img/notebook-msi-modern14.png', specs: { CPU: 'i5-1235U', RAM: '16GB DDR4', Almacenamiento: '512GB SSD', Pantalla: '14" FHD', GPU: 'Intel Iris Xe' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'nb-007', name: 'Notebook HP Pavilion 14', brand: 'HP', priceCLP: 699990, rating: 5, stock: 9, image: '/img/notebook-hp-pavilion14.png', specs: { CPU: 'i7-1255U', RAM: '16GB DDR4', Almacenamiento: '512GB SSD', Pantalla: '14" FHD', GPU: 'Intel Iris Xe' }, badges: [], shipping: 'Despacho' },
            { id: 'nb-008', name: 'Notebook Lenovo ThinkPad E14', brand: 'Lenovo', priceCLP: 799990, rating: 5, stock: 7, image: '/img/notebook-lenovo-thinkpad.png', specs: { CPU: 'i5-1235U', RAM: '16GB DDR4', Almacenamiento: '512GB SSD', Pantalla: '14" FHD', GPU: 'Intel Iris Xe' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'nb-009', name: 'Notebook Dell Latitude 3420', brand: 'Dell', priceCLP: 849990, rating: 5, stock: 6, image: '/img/notebook-dell-latitude.png', specs: { CPU: 'i5-1135G7', RAM: '16GB DDR4', Almacenamiento: '512GB SSD', Pantalla: '14" FHD', GPU: 'Intel Iris Xe' }, badges: [], shipping: 'Despacho' },
            { id: 'nb-010', name: 'Notebook ASUS ZenBook 14', brand: 'ASUS', priceCLP: 999990, oldPriceCLP: 1099990, rating: 5, stock: 5, image: '/img/notebook-asus-zenbook.png', specs: { CPU: 'i7-1260P', RAM: '16GB LPDDR5', Almacenamiento: '512GB SSD', Pantalla: '14" OLED', GPU: 'Intel Iris Xe' }, badges: ['Oferta'], shipping: 'Despacho' }
          ]
        },
        {
          id: 'pc-escritorio',
          name: 'PC Escritorio',
          slug: 'pc-escritorio',
          products: [
            { id: 'pc-001', name: 'PC Oficina Intel i3-12100 + 8GB', brand: 'TechArena', priceCLP: 399990, rating: 4, stock: 15, image: '/img/pc-oficina-i3.png', specs: { CPU: 'i3-12100', RAM: '8GB DDR4', Almacenamiento: '256GB SSD', GPU: 'Intel UHD 730', Fuente: '450W' }, badges: [], shipping: 'Retiro' },
            { id: 'pc-002', name: 'PC Hogar AMD Ryzen 3 4100 + 8GB', brand: 'TechArena', priceCLP: 349990, oldPriceCLP: 399990, rating: 4, stock: 18, image: '/img/pc-hogar-ryzen3.png', specs: { CPU: 'Ryzen 3 4100', RAM: '8GB DDR4', Almacenamiento: '256GB SSD', GPU: 'Radeon Graphics', Fuente: '450W' }, badges: ['Oferta'], shipping: 'Retiro' },
            { id: 'pc-003', name: 'PC Multimedia Intel i5-12400 + 16GB', brand: 'TechArena', priceCLP: 549990, rating: 5, stock: 12, image: '/img/pc-multimedia-i5.png', specs: { CPU: 'i5-12400', RAM: '16GB DDR4', Almacenamiento: '500GB SSD', GPU: 'Intel UHD 730', Fuente: '500W' }, badges: [], shipping: 'Despacho' },
            { id: 'pc-004', name: 'PC Diseño AMD Ryzen 5 5600 + 16GB', brand: 'TechArena', priceCLP: 599990, rating: 5, stock: 10, image: '/img/pc-diseno-ryzen5.png', specs: { CPU: 'Ryzen 5 5600', RAM: '16GB DDR4', Almacenamiento: '500GB SSD', GPU: 'Radeon Graphics', Fuente: '550W' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'pc-005', name: 'PC Workstation Intel i7-13700 + 32GB', brand: 'TechArena', priceCLP: 1199990, oldPriceCLP: 1299990, rating: 5, stock: 6, image: '/img/pc-workstation-i7.png', specs: { CPU: 'i7-13700', RAM: '32GB DDR5', Almacenamiento: '1TB SSD', GPU: 'Intel UHD 770', Fuente: '650W 80+ Gold' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'pc-006', name: 'PC All-in-One HP 24-df1013la', brand: 'HP', priceCLP: 699990, rating: 4, stock: 8, image: '/img/aio-hp-24.png', specs: { CPU: 'i5-1135G7', RAM: '8GB DDR4', Almacenamiento: '512GB SSD', Pantalla: '24" FHD', GPU: 'Intel Iris Xe' }, badges: [], shipping: 'Despacho' },
            { id: 'pc-007', name: 'PC All-in-One Lenovo IdeaCentre 3', brand: 'Lenovo', priceCLP: 649990, rating: 4, stock: 9, image: '/img/aio-lenovo-ideacentre.png', specs: { CPU: 'Ryzen 5 5500U', RAM: '8GB DDR4', Almacenamiento: '512GB SSD', Pantalla: '24" FHD', GPU: 'Radeon Graphics' }, badges: [], shipping: 'Despacho' },
            { id: 'pc-008', name: 'PC Edición Video AMD Ryzen 7 5700X + 32GB', brand: 'TechArena', priceCLP: 999990, rating: 5, stock: 7, image: '/img/pc-video-ryzen7.png', specs: { CPU: 'Ryzen 7 5700X', RAM: '32GB DDR4', Almacenamiento: '1TB SSD', GPU: 'Radeon Graphics', Fuente: '650W 80+ Bronze' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'pc-009', name: 'PC Mini Intel NUC i5-1240P', brand: 'Intel', priceCLP: 549990, rating: 4, stock: 11, image: '/img/mini-pc-nuc.png', specs: { CPU: 'i5-1240P', RAM: '8GB DDR4', Almacenamiento: '256GB SSD', GPU: 'Intel Iris Xe', Tamaño: 'Mini' }, badges: [], shipping: 'Retiro' },
            { id: 'pc-010', name: 'PC Servidor Intel Xeon E-2314 + 64GB ECC', brand: 'TechArena', priceCLP: 1899990, rating: 5, stock: 3, image: '/img/pc-servidor-xeon.png', specs: { CPU: 'Xeon E-2314', RAM: '64GB DDR4 ECC', Almacenamiento: '2TB SSD', GPU: 'Integrada', Fuente: '750W 80+ Platinum' }, badges: [], shipping: 'Despacho' }
          ]
        }
      ]
    },
    {
      id: 'componentes',
      name: 'COMPONENTES',
      slug: 'componentes',
      subcategories: [
        {
          id: 'procesador',
          name: 'Procesador',
          slug: 'procesador',
          products: [
            { id: 'cpu-001', name: 'Procesador Intel Core i5-12400F', brand: 'Intel', priceCLP: 149990, oldPriceCLP: 169990, rating: 5, stock: 25, image: '/img/cpu-i5-12400f.png', specs: { Núcleos: '6', Hilos: '12', Frecuencia: '2.5-4.4 GHz', Socket: 'LGA1700', TDP: '65W' }, badges: ['Oferta'], shipping: 'Retiro' },
            { id: 'cpu-002', name: 'Procesador AMD Ryzen 5 5600', brand: 'AMD', priceCLP: 139990, rating: 5, stock: 30, image: '/img/cpu-ryzen5-5600.png', specs: { Núcleos: '6', Hilos: '12', Frecuencia: '3.5-4.4 GHz', Socket: 'AM4', TDP: '65W' }, badges: [], shipping: 'Retiro' },
            { id: 'cpu-003', name: 'Procesador Intel Core i7-13700F', brand: 'Intel', priceCLP: 399990, rating: 5, stock: 18, image: '/img/cpu-i7-13700f.png', specs: { Núcleos: '16', Hilos: '24', Frecuencia: '2.1-5.2 GHz', Socket: 'LGA1700', TDP: '65W' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'cpu-004', name: 'Procesador AMD Ryzen 7 5700X', brand: 'AMD', priceCLP: 279990, oldPriceCLP: 319990, rating: 5, stock: 20, image: '/img/cpu-ryzen7-5700x.png', specs: { Núcleos: '8', Hilos: '16', Frecuencia: '3.4-4.6 GHz', Socket: 'AM4', TDP: '65W' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'cpu-005', name: 'Procesador Intel Core i9-13900K', brand: 'Intel', priceCLP: 699990, rating: 5, stock: 10, image: '/img/cpu-i9-13900k.png', specs: { Núcleos: '24', Hilos: '32', Frecuencia: '3.0-5.8 GHz', Socket: 'LGA1700', TDP: '125W' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'cpu-006', name: 'Procesador AMD Ryzen 9 7900X', brand: 'AMD', priceCLP: 549990, rating: 5, stock: 12, image: '/img/cpu-ryzen9-7900x.png', specs: { Núcleos: '12', Hilos: '24', Frecuencia: '4.7-5.4 GHz', Socket: 'AM5', TDP: '170W' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'cpu-007', name: 'Procesador Intel Core i3-12100F', brand: 'Intel', priceCLP: 99990, rating: 4, stock: 28, image: '/img/cpu-i3-12100f.png', specs: { Núcleos: '4', Hilos: '8', Frecuencia: '3.3-4.3 GHz', Socket: 'LGA1700', TDP: '58W' }, badges: [], shipping: 'Retiro' },
            { id: 'cpu-008', name: 'Procesador AMD Ryzen 5 7600X', brand: 'AMD', priceCLP: 299990, rating: 5, stock: 15, image: '/img/cpu-ryzen5-7600x.png', specs: { Núcleos: '6', Hilos: '12', Frecuencia: '4.7-5.3 GHz', Socket: 'AM5', TDP: '105W' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'cpu-009', name: 'Procesador Intel Core i5-13600K', brand: 'Intel', priceCLP: 349990, oldPriceCLP: 389990, rating: 5, stock: 16, image: '/img/cpu-i5-13600k.png', specs: { Núcleos: '14', Hilos: '20', Frecuencia: '3.5-5.1 GHz', Socket: 'LGA1700', TDP: '125W' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'cpu-010', name: 'Procesador AMD Ryzen 7 7700X', brand: 'AMD', priceCLP: 399990, rating: 5, stock: 14, image: '/img/cpu-ryzen7-7700x.png', specs: { Núcleos: '8', Hilos: '16', Frecuencia: '4.5-5.4 GHz', Socket: 'AM5', TDP: '105W' }, badges: ['Nuevo'], shipping: 'Despacho' }
          ]
        },
        {
          id: 'placa-madre',
          name: 'Placa Madre',
          slug: 'placa-madre',
          products: [
            { id: 'mb-001', name: 'Placa Madre ASUS Prime B550M-A', brand: 'ASUS', priceCLP: 119990, rating: 5, stock: 20, image: '/img/mb-asus-b550m.png', specs: { Socket: 'AM4', Chipset: 'B550', Formato: 'Micro-ATX', RAM: 'DDR4 hasta 128GB', M2: '2 slots' }, badges: [], shipping: 'Despacho' },
            { id: 'mb-002', name: 'Placa Madre MSI B660M PRO', brand: 'MSI', priceCLP: 139990, oldPriceCLP: 159990, rating: 5, stock: 18, image: '/img/mb-msi-b660m.png', specs: { Socket: 'LGA1700', Chipset: 'B660', Formato: 'Micro-ATX', RAM: 'DDR4 hasta 128GB', M2: '2 slots' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'mb-003', name: 'Placa Madre Gigabyte B550 AORUS Elite', brand: 'Gigabyte', priceCLP: 159990, rating: 5, stock: 15, image: '/img/mb-gigabyte-b550.png', specs: { Socket: 'AM4', Chipset: 'B550', Formato: 'ATX', RAM: 'DDR4 hasta 128GB', M2: '2 slots' }, badges: [], shipping: 'Despacho' },
            { id: 'mb-004', name: 'Placa Madre ASUS TUF Gaming Z690-Plus', brand: 'ASUS', priceCLP: 249990, rating: 5, stock: 12, image: '/img/mb-asus-z690.png', specs: { Socket: 'LGA1700', Chipset: 'Z690', Formato: 'ATX', RAM: 'DDR5 hasta 128GB', M2: '4 slots' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'mb-005', name: 'Placa Madre MSI MAG X570 Tomahawk', brand: 'MSI', priceCLP: 219990, oldPriceCLP: 249990, rating: 5, stock: 10, image: '/img/mb-msi-x570.png', specs: { Socket: 'AM4', Chipset: 'X570', Formato: 'ATX', RAM: 'DDR4 hasta 128GB', M2: '3 slots' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'mb-006', name: 'Placa Madre ASRock B650M Pro RS', brand: 'ASRock', priceCLP: 179990, rating: 5, stock: 14, image: '/img/mb-asrock-b650m.png', specs: { Socket: 'AM5', Chipset: 'B650', Formato: 'Micro-ATX', RAM: 'DDR5 hasta 128GB', M2: '2 slots' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'mb-007', name: 'Placa Madre Gigabyte Z790 AORUS Elite AX', brand: 'Gigabyte', priceCLP: 299990, rating: 5, stock: 8, image: '/img/mb-gigabyte-z790.png', specs: { Socket: 'LGA1700', Chipset: 'Z790', Formato: 'ATX', RAM: 'DDR5 hasta 192GB', M2: '5 slots' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'mb-008', name: 'Placa Madre ASUS ROG Strix B550-F Gaming', brand: 'ASUS', priceCLP: 189990, rating: 5, stock: 11, image: '/img/mb-asus-rog-b550.png', specs: { Socket: 'AM4', Chipset: 'B550', Formato: 'ATX', RAM: 'DDR4 hasta 128GB', M2: '2 slots' }, badges: [], shipping: 'Despacho' },
            { id: 'mb-009', name: 'Placa Madre MSI MPG X670E Carbon WiFi', brand: 'MSI', priceCLP: 449990, rating: 5, stock: 6, image: '/img/mb-msi-x670e.png', specs: { Socket: 'AM5', Chipset: 'X670E', Formato: 'ATX', RAM: 'DDR5 hasta 128GB', M2: '4 slots' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'mb-010', name: 'Placa Madre Gigabyte B760M DS3H', brand: 'Gigabyte', priceCLP: 129990, rating: 4, stock: 16, image: '/img/mb-gigabyte-b760m.png', specs: { Socket: 'LGA1700', Chipset: 'B760', Formato: 'Micro-ATX', RAM: 'DDR4 hasta 128GB', M2: '2 slots' }, badges: [], shipping: 'Retiro' }
          ]
        },
        {
          id: 'memoria-ram',
          name: 'Memorias RAM',
          slug: 'memoria-ram',
          products: [
            { id: 'ram-001', name: 'Memoria RAM Corsair Vengeance 16GB DDR4 3200MHz', brand: 'Corsair', priceCLP: 49990, oldPriceCLP: 59990, rating: 5, stock: 35, image: '/img/ram-corsair-16gb.png', specs: { Capacidad: '16GB (2x8GB)', Tipo: 'DDR4', Frecuencia: '3200MHz', Latencia: 'CL16', RGB: 'No' }, badges: ['Oferta'], shipping: 'Retiro' },
            { id: 'ram-002', name: 'Memoria RAM Kingston Fury Beast 32GB DDR4 3600MHz', brand: 'Kingston', priceCLP: 89990, rating: 5, stock: 28, image: '/img/ram-kingston-32gb.png', specs: { Capacidad: '32GB (2x16GB)', Tipo: 'DDR4', Frecuencia: '3600MHz', Latencia: 'CL18', RGB: 'No' }, badges: [], shipping: 'Despacho' },
            { id: 'ram-003', name: 'Memoria RAM G.Skill Trident Z RGB 16GB DDR4 3600MHz', brand: 'G.Skill', priceCLP: 69990, rating: 5, stock: 30, image: '/img/ram-gskill-16gb-rgb.png', specs: { Capacidad: '16GB (2x8GB)', Tipo: 'DDR4', Frecuencia: '3600MHz', Latencia: 'CL16', RGB: 'Sí' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'ram-004', name: 'Memoria RAM Corsair Vengeance DDR5 32GB 5600MHz', brand: 'Corsair', priceCLP: 149990, oldPriceCLP: 169990, rating: 5, stock: 20, image: '/img/ram-corsair-ddr5-32gb.png', specs: { Capacidad: '32GB (2x16GB)', Tipo: 'DDR5', Frecuencia: '5600MHz', Latencia: 'CL36', RGB: 'No' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'ram-005', name: 'Memoria RAM Kingston Fury Beast 8GB DDR4 3200MHz', brand: 'Kingston', priceCLP: 29990, rating: 4, stock: 40, image: '/img/ram-kingston-8gb.png', specs: { Capacidad: '8GB (1x8GB)', Tipo: 'DDR4', Frecuencia: '3200MHz', Latencia: 'CL16', RGB: 'No' }, badges: [], shipping: 'Retiro' },
            { id: 'ram-006', name: 'Memoria RAM G.Skill Ripjaws V 32GB DDR4 3200MHz', brand: 'G.Skill', priceCLP: 79990, rating: 5, stock: 25, image: '/img/ram-gskill-32gb.png', specs: { Capacidad: '32GB (2x16GB)', Tipo: 'DDR4', Frecuencia: '3200MHz', Latencia: 'CL16', RGB: 'No' }, badges: [], shipping: 'Despacho' },
            { id: 'ram-007', name: 'Memoria RAM Corsair Dominator Platinum RGB 64GB DDR5 6000MHz', brand: 'Corsair', priceCLP: 349990, rating: 5, stock: 12, image: '/img/ram-corsair-ddr5-64gb.png', specs: { Capacidad: '64GB (2x32GB)', Tipo: 'DDR5', Frecuencia: '6000MHz', Latencia: 'CL36', RGB: 'Sí' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'ram-008', name: 'Memoria RAM Kingston Fury Impact 16GB DDR4 3200MHz SODIMM', brand: 'Kingston', priceCLP: 54990, rating: 5, stock: 22, image: '/img/ram-kingston-sodimm-16gb.png', specs: { Capacidad: '16GB (2x8GB)', Tipo: 'DDR4 SODIMM', Frecuencia: '3200MHz', Latencia: 'CL20', Uso: 'Notebook' }, badges: [], shipping: 'Despacho' },
            { id: 'ram-009', name: 'Memoria RAM Crucial 32GB DDR4 3200MHz', brand: 'Crucial', priceCLP: 74990, oldPriceCLP: 84990, rating: 4, stock: 26, image: '/img/ram-crucial-32gb.png', specs: { Capacidad: '32GB (2x16GB)', Tipo: 'DDR4', Frecuencia: '3200MHz', Latencia: 'CL22', RGB: 'No' }, badges: ['Oferta'], shipping: 'Retiro' },
            { id: 'ram-010', name: 'Memoria RAM G.Skill Trident Z5 RGB 32GB DDR5 6400MHz', brand: 'G.Skill', priceCLP: 199990, rating: 5, stock: 15, image: '/img/ram-gskill-ddr5-32gb.png', specs: { Capacidad: '32GB (2x16GB)', Tipo: 'DDR5', Frecuencia: '6400MHz', Latencia: 'CL32', RGB: 'Sí' }, badges: ['Nuevo'], shipping: 'Despacho' }
          ]
        },
        {
          id: 'almacenamiento',
          name: 'Almacenamiento',
          slug: 'almacenamiento',
          products: [
            { id: 'ssd-001', name: 'SSD Kingston NV2 500GB M.2 NVMe', brand: 'Kingston', priceCLP: 39990, oldPriceCLP: 44990, rating: 4, stock: 40, image: '/img/ssd-kingston-nv2-500gb.png', specs: { Capacidad: '500GB', Interfaz: 'M.2 NVMe PCIe 4.0', Lectura: '3500 MB/s', Escritura: '2100 MB/s', Formato: 'M.2 2280' }, badges: ['Oferta'], shipping: 'Retiro' },
            { id: 'ssd-002', name: 'SSD Samsung 980 PRO 1TB M.2 NVMe', brand: 'Samsung', priceCLP: 119990, rating: 5, stock: 30, image: '/img/ssd-samsung-980pro-1tb.png', specs: { Capacidad: '1TB', Interfaz: 'M.2 NVMe PCIe 4.0', Lectura: '7000 MB/s', Escritura: '5000 MB/s', Formato: 'M.2 2280' }, badges: [], shipping: 'Despacho' },
            { id: 'ssd-003', name: 'SSD WD Black SN850X 2TB M.2 NVMe', brand: 'Western Digital', priceCLP: 249990, rating: 5, stock: 18, image: '/img/ssd-wd-sn850x-2tb.png', specs: { Capacidad: '2TB', Interfaz: 'M.2 NVMe PCIe 4.0', Lectura: '7300 MB/s', Escritura: '6600 MB/s', Formato: 'M.2 2280' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'ssd-004', name: 'SSD Crucial MX500 1TB SATA 2.5"', brand: 'Crucial', priceCLP: 79990, rating: 5, stock: 35, image: '/img/ssd-crucial-mx500-1tb.png', specs: { Capacidad: '1TB', Interfaz: 'SATA III', Lectura: '560 MB/s', Escritura: '510 MB/s', Formato: '2.5 pulgadas' }, badges: [], shipping: 'Retiro' },
            { id: 'ssd-005', name: 'HDD Seagate BarraCuda 2TB 7200RPM', brand: 'Seagate', priceCLP: 59990, rating: 4, stock: 45, image: '/img/hdd-seagate-2tb.png', specs: { Capacidad: '2TB', Interfaz: 'SATA III', Velocidad: '7200 RPM', Cache: '256MB', Formato: '3.5 pulgadas' }, badges: [], shipping: 'Despacho' },
            { id: 'ssd-006', name: 'SSD Kingston A400 480GB SATA 2.5"', brand: 'Kingston', priceCLP: 44990, oldPriceCLP: 49990, rating: 4, stock: 38, image: '/img/ssd-kingston-a400-480gb.png', specs: { Capacidad: '480GB', Interfaz: 'SATA III', Lectura: '500 MB/s', Escritura: '450 MB/s', Formato: '2.5 pulgadas' }, badges: ['Oferta'], shipping: 'Retiro' },
            { id: 'ssd-007', name: 'HDD WD Blue 4TB 5400RPM', brand: 'Western Digital', priceCLP: 89990, rating: 4, stock: 32, image: '/img/hdd-wd-blue-4tb.png', specs: { Capacidad: '4TB', Interfaz: 'SATA III', Velocidad: '5400 RPM', Cache: '256MB', Formato: '3.5 pulgadas' }, badges: [], shipping: 'Despacho' },
            { id: 'ssd-008', name: 'SSD Samsung 870 EVO 500GB SATA 2.5"', brand: 'Samsung', priceCLP: 59990, rating: 5, stock: 28, image: '/img/ssd-samsung-870evo-500gb.png', specs: { Capacidad: '500GB', Interfaz: 'SATA III', Lectura: '560 MB/s', Escritura: '530 MB/s', Formato: '2.5 pulgadas' }, badges: [], shipping: 'Retiro' },
            { id: 'ssd-009', name: 'SSD Corsair MP600 PRO 1TB M.2 NVMe', brand: 'Corsair', priceCLP: 129990, rating: 5, stock: 22, image: '/img/ssd-corsair-mp600-1tb.png', specs: { Capacidad: '1TB', Interfaz: 'M.2 NVMe PCIe 4.0', Lectura: '7000 MB/s', Escritura: '5500 MB/s', Formato: 'M.2 2280' }, badges: [], shipping: 'Despacho' },
            { id: 'ssd-010', name: 'HDD Seagate IronWolf 8TB NAS 7200RPM', brand: 'Seagate', priceCLP: 249990, oldPriceCLP: 279990, rating: 5, stock: 15, image: '/img/hdd-seagate-ironwolf-8tb.png', specs: { Capacidad: '8TB', Interfaz: 'SATA III', Velocidad: '7200 RPM', Cache: '256MB', Uso: 'NAS' }, badges: ['Oferta'], shipping: 'Despacho' }
          ]
        },
        {
          id: 'tarjeta-video',
          name: 'Tarjeta de Video',
          slug: 'tarjeta-video',
          products: [
            { id: 'gpu-001', name: 'GPU Nvidia RTX 4060 8GB', brand: 'Nvidia', priceCLP: 399990, oldPriceCLP: 449990, rating: 5, stock: 15, image: '/img/gpu-rtx4060.png', specs: { Memoria: '8GB GDDR6', Bus: '128-bit', Núcleos_CUDA: '3072', TDP: '115W', Conectores: '1x 8-pin' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'gpu-002', name: 'GPU AMD Radeon RX 6600 8GB', brand: 'AMD', priceCLP: 329990, rating: 5, stock: 18, image: '/img/gpu-rx6600.png', specs: { Memoria: '8GB GDDR6', Bus: '128-bit', Stream_Processors: '1792', TDP: '132W', Conectores: '1x 8-pin' }, badges: [], shipping: 'Despacho' },
            { id: 'gpu-003', name: 'GPU Nvidia RTX 4070 12GB', brand: 'Nvidia', priceCLP: 699990, rating: 5, stock: 12, image: '/img/gpu-rtx4070.png', specs: { Memoria: '12GB GDDR6X', Bus: '192-bit', Núcleos_CUDA: '5888', TDP: '200W', Conectores: '1x 16-pin' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'gpu-004', name: 'GPU AMD Radeon RX 7800 XT 16GB', brand: 'AMD', priceCLP: 799990, oldPriceCLP: 899990, rating: 5, stock: 10, image: '/img/gpu-rx7800xt.png', specs: { Memoria: '16GB GDDR6', Bus: '256-bit', Stream_Processors: '3840', TDP: '263W', Conectores: '2x 8-pin' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'gpu-005', name: 'GPU Nvidia RTX 4090 24GB', brand: 'Nvidia', priceCLP: 2499990, rating: 5, stock: 5, image: '/img/gpu-rtx4090.png', specs: { Memoria: '24GB GDDR6X', Bus: '384-bit', Núcleos_CUDA: '16384', TDP: '450W', Conectores: '1x 16-pin' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'gpu-006', name: 'GPU Nvidia GTX 1650 4GB', brand: 'Nvidia', priceCLP: 199990, rating: 4, stock: 20, image: '/img/gpu-gtx1650.png', specs: { Memoria: '4GB GDDR6', Bus: '128-bit', Núcleos_CUDA: '896', TDP: '75W', Conectores: 'Sin conector' }, badges: [], shipping: 'Retiro' },
            { id: 'gpu-007', name: 'GPU AMD Radeon RX 6700 XT 12GB', brand: 'AMD', priceCLP: 549990, oldPriceCLP: 599990, rating: 5, stock: 14, image: '/img/gpu-rx6700xt.png', specs: { Memoria: '12GB GDDR6', Bus: '192-bit', Stream_Processors: '2560', TDP: '230W', Conectores: '2x 8-pin' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'gpu-008', name: 'GPU Nvidia RTX 4080 16GB', brand: 'Nvidia', priceCLP: 1599990, rating: 5, stock: 7, image: '/img/gpu-rtx4080.png', specs: { Memoria: '16GB GDDR6X', Bus: '256-bit', Núcleos_CUDA: '9728', TDP: '320W', Conectores: '1x 16-pin' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'gpu-009', name: 'GPU AMD Radeon RX 7900 XTX 24GB', brand: 'AMD', priceCLP: 1399990, rating: 5, stock: 8, image: '/img/gpu-rx7900xtx.png', specs: { Memoria: '24GB GDDR6', Bus: '384-bit', Stream_Processors: '6144', TDP: '355W', Conectores: '2x 8-pin' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'gpu-010', name: 'GPU Intel Arc A750 8GB', brand: 'Intel', priceCLP: 299990, rating: 4, stock: 16, image: '/img/gpu-arc-a750.png', specs: { Memoria: '8GB GDDR6', Bus: '256-bit', Xe_Cores: '28', TDP: '225W', Conectores: '1x 8-pin + 1x 6-pin' }, badges: [], shipping: 'Despacho' }
          ]
        },
        {
          id: 'fuente-poder',
          name: 'Fuente de Poder',
          slug: 'fuente-poder',
          products: [
            { id: 'psu-001', name: 'Fuente Corsair CV650 650W 80+ Bronze', brand: 'Corsair', priceCLP: 69990, oldPriceCLP: 79990, rating: 4, stock: 25, image: '/img/psu-corsair-cv650.png', specs: { Potencia: '650W', Certificación: '80+ Bronze', Modular: 'No', Ventilador: '120mm', Garantía: '3 años' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'psu-002', name: 'Fuente EVGA 600 W1 600W 80+', brand: 'EVGA', priceCLP: 59990, rating: 4, stock: 30, image: '/img/psu-evga-600w1.png', specs: { Potencia: '600W', Certificación: '80+', Modular: 'No', Ventilador: '120mm', Garantía: '3 años' }, badges: [], shipping: 'Retiro' },
            { id: 'psu-003', name: 'Fuente Corsair RM750e 750W 80+ Gold Modular', brand: 'Corsair', priceCLP: 119990, rating: 5, stock: 20, image: '/img/psu-corsair-rm750e.png', specs: { Potencia: '750W', Certificación: '80+ Gold', Modular: 'Totalmente', Ventilador: '135mm', Garantía: '10 años' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'psu-004', name: 'Fuente Thermaltake Smart 500W 80+', brand: 'Thermaltake', priceCLP: 49990, rating: 4, stock: 28, image: '/img/psu-thermaltake-500w.png', specs: { Potencia: '500W', Certificación: '80+', Modular: 'No', Ventilador: '120mm', Garantía: '2 años' }, badges: [], shipping: 'Retiro' },
            { id: 'psu-005', name: 'Fuente Seasonic Focus GX-850 850W 80+ Gold Modular', brand: 'Seasonic', priceCLP: 159990, oldPriceCLP: 179990, rating: 5, stock: 15, image: '/img/psu-seasonic-gx850.png', specs: { Potencia: '850W', Certificación: '80+ Gold', Modular: 'Totalmente', Ventilador: '135mm', Garantía: '10 años' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'psu-006', name: 'Fuente ASUS ROG Thor 1000W 80+ Platinum', brand: 'ASUS', priceCLP: 299990, rating: 5, stock: 8, image: '/img/psu-asus-thor-1000w.png', specs: { Potencia: '1000W', Certificación: '80+ Platinum', Modular: 'Totalmente', Ventilador: '135mm', Display: 'OLED' }, badges: ['Nuevo'], shipping: 'Despacho' },
            { id: 'psu-007', name: 'Fuente Cooler Master MWE 650W 80+ Bronze', brand: 'Cooler Master', priceCLP: 64990, rating: 4, stock: 22, image: '/img/psu-coolermaster-mwe650.png', specs: { Potencia: '650W', Certificación: '80+ Bronze', Modular: 'No', Ventilador: '120mm', Garantía: '5 años' }, badges: [], shipping: 'Despacho' },
            { id: 'psu-008', name: 'Fuente MSI MPG A850G 850W 80+ Gold Modular', brand: 'MSI', priceCLP: 149990, rating: 5, stock: 16, image: '/img/psu-msi-a850g.png', specs: { Potencia: '850W', Certificación: '80+ Gold', Modular: 'Totalmente', Ventilador: '135mm', Garantía: '10 años' }, badges: [], shipping: 'Despacho' },
            { id: 'psu-009', name: 'Fuente Gigabyte P750GM 750W 80+ Gold Modular', brand: 'Gigabyte', priceCLP: 109990, oldPriceCLP: 124990, rating: 5, stock: 18, image: '/img/psu-gigabyte-p750gm.png', specs: { Potencia: '750W', Certificación: '80+ Gold', Modular: 'Totalmente', Ventilador: '120mm', Garantía: '7 años' }, badges: ['Oferta'], shipping: 'Despacho' },
            { id: 'psu-010', name: 'Fuente be quiet! Straight Power 11 650W 80+ Gold', brand: 'be quiet!', priceCLP: 129990, rating: 5, stock: 14, image: '/img/psu-bequiet-sp11-650w.png', specs: { Potencia: '650W', Certificación: '80+ Gold', Modular: 'Totalmente', Ventilador: '135mm Silent Wings', Garantía: '5 años' }, badges: [], shipping: 'Despacho' }
          ]
        }
      ]
    }
  ]
};

// Función para buscar productos
function searchProducts(query) {
  const results = [];
  const lowerQuery = query.toLowerCase();
  
  CATALOG.categories.forEach(cat => {
    cat.subcategories.forEach(sub => {
      sub.products.forEach(prod => {
        if (prod.name.toLowerCase().includes(lowerQuery) || 
            prod.brand.toLowerCase().includes(lowerQuery)) {
          results.push({
            ...prod,
            categorySlug: cat.slug,
            subcategorySlug: sub.slug,
            categoryName: cat.name,
            subcategoryName: sub.name
          });
        }
      });
    });
  });
  
  return results;
}

// Función para obtener producto por ID
function getProductById(id) {
  for (const cat of CATALOG.categories) {
    for (const sub of cat.subcategories) {
      const product = sub.products.find(p => p.id === id);
      if (product) {
        return {
          ...product,
          categorySlug: cat.slug,
          subcategorySlug: sub.slug,
          categoryName: cat.name,
          subcategoryName: sub.name
        };
      }
    }
  }
  return null;
}

// Función para obtener categoría
function getCategory(slug) {
  return CATALOG.categories.find(c => c.slug === slug);
}

// Función para obtener subcategoría
function getSubcategory(catSlug, subSlug) {
  const cat = getCategory(catSlug);
  if (!cat) return null;
  return cat.subcategories.find(s => s.slug === subSlug);
}

