// Base de datos de productos
const products = [
    // Línea Capilar VITA
    {
        id: 1,
        name: "VITA Gold Premium",
        category: "vita",
        categoryName: "Línea Capilar VITA",
        shortDescription: "Tratamiento sin enjuague intensivo premium",
        fullDescription: "VITA Gold Premium es un tratamiento capilar sin enjuague, con tecnología avanzada que ofrece reparación en cada aplicación dejando el cabello suave y sedoso hasta las puntas. Su fórmula concentrada ofrece resultados desde la primera aplicación, ideal para cabellos severamente dañados por químicos y altas temperaturas.",
        benefits: [
            "Tratamiento sin enjuague - reparación instantánea",
            "Tecnología premium de reconstrucción capilar",
            "Repara el daño severo en cada aplicación",
            "Hidratación y restauración profunda intensiva", 
            "Controla el frizz y aporta fortalecimiento extremo",
            "Resultados visibles desde el primer uso"
        ],
        businessAttributes: [
            "Alta Rotación: Producto premium con gran demanda en el mercado chileno",
            "Formatos Convenientes: Disponible en presentaciones de 1.000ml y 1kg",
            "Reconocimiento de Marca: VITA es una marca reconocida en el cuidado capilar",
            "Margen Atractivo: Excelente rentabilidad para tu negocio"
        ],
        idealFor: "Góndolas de belleza, sección de cuidado capilar, farmacias y perfumerías dentro de supermercados",
        presentations: ["400g", "1000g"],
        colors: ["Negro", "Dorado"],
        images: ["4.jpg", "10.jpg", "14.jpg", "15.jpg", "17.jpg", "18.jpg", "22.jpg", "24.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg"],
        mainImage: "15.jpg"
    },
    {
        id: 2,
        name: "VITA Baño de Crema - Vivan los Rizos",
        category: "vita",
        categoryName: "Línea Capilar VITA",
        shortDescription: "Tratamiento sin enjuague especializado para cabello rizado",
        fullDescription: "Baño de crema sin enjuague específicamente formulado para cabello rizado o 'crespo'. Su fórmula única con cebolla, jalea real y proteína de leche define los rizos mientras los hidrata profundamente. Ideal para el creciente mercado de cuidado capilar especializado.",
        benefits: [
            "Tratamiento sin enjuague - aplicar y listo",
            "Define y controla los rizos naturalmente",
            "Bomba de hidratación y fortalecimiento",
            "Múltiples usos: crema para peinar, tratamiento y acondicionador",
            "Ingredientes activos: Cebolla, jalea real y proteína de leche",
            "Reduce el frizz y aporta brillo natural"
        ],
        businessAttributes: [
            "Nicho Específico: Dirigido al creciente mercado de cuidado para cabello rizado",
            "Producto 3 en 1: Mayor valor percibido por el cliente",
            "Ingredientes Premium: Fórmula con componentes reconocidos",
            "Presentación Atractiva: Envase turquesa que destaca en góndola"
        ],
        idealFor: "Sección de cuidado capilar especializado, góndolas de belleza, farmacias",
        presentations: ["400g", "1000g"],
        colors: ["Turquesa"],
        images: ["8.jpg", "21.jpg", "25.jpg", "30.jpg", "31.jpg", "33.jpg"],
        mainImage: "viva3.jpg"
    },
    {
        id: 3,
        name: "VITA Baño de Crema - Aloe de Argán",
        category: "vita",
        categoryName: "Línea Capilar VITA",
        shortDescription: "Tratamiento sin enjuague con aloe vera y aceite de argán",
        fullDescription: "Baño de crema sin enjuague que combina las propiedades calmantes e hidratantes del aloe vera con los beneficios reparadores del aceite de argán marroquí. Fórmula natural que restaura la vitalidad del cabello dañado sin necesidad de enjuague.",
        benefits: [
            "Tratamiento sin enjuague - fácil aplicación",
            "Aloe vera: calma el cuero cabelludo y aporta hidratación",
            "Aceite de argán: repara y suaviza el cabello",
            "Fórmula natural con ingredientes premium",
            "Restaura la elasticidad y brillo natural",
            "Protege contra factores ambientales"
        ],
        businessAttributes: [
            "Ingredientes Trending: Aloe y argán son ingredientes muy buscados",
            "Cuidado Natural: Apela al mercado de productos naturales",
            "Versatilidad: Apto para todo tipo de cabello",
            "Presentación Distintiva: Envase morado fácil de identificar"
        ],
        idealFor: "Góndolas de cuidado natural, sección de belleza, minimarkets",
        presentations: ["400g", "1000g"],
        colors: ["Morado"],
        images: ["5.jpg", "7.jpg", "9.jpg", "31.jpg", "33.jpg"],
        mainImage: "5.jpg"
    },
    {
        id: 4,
        name: "VITA Baño de Crema - Extracto de Aguacate",
        category: "vita",
        categoryName: "Línea Capilar VITA",
        shortDescription: "Tratamiento sin enjuague nutritivo con extracto de aguacate",
        fullDescription: "Baño de crema sin enjuague enriquecido con extracto de aguacate (palta), el superalimento capilar por excelencia. Su fórmula concentrada en vitaminas A, D, E y ácidos grasos esenciales nutre intensamente el cabello desde la raíz hasta las puntas.",
        benefits: [
            "Tratamiento sin enjuague - nutrición instantánea",
            "Extracto de aguacate (palta) con vitaminas A, D, E",
            "Rico en ácidos grasos esenciales y proteínas naturales",
            "Fortalece el cabello débil y quebradizo",
            "Aporta suavidad y manejabilidad",
            "Protege contra la sequedad y el daño ambiental"
        ],
        businessAttributes: [
            "Superalimento: El aguacate es reconocido por sus propiedades nutritivas",
            "Tendencia Saludable: Conecta con el trend de ingredientes naturales",
            "Fácil Identificación: Color verde asociado al aguacate",
            "Mercado Amplio: Atractivo para consumidores conscientes de la salud"
        ],
        idealFor: "Sección de productos naturales, góndolas de belleza, almacenes",
        presentations: ["1000g"],
        colors: ["Verde claro"],
        images: ["6.jpg"],
        mainImage: "6.jpg"
    },
    {
        id: 5,
        name: "VITA Baño de Crema - Aceite de Coco",
        category: "vita",
        categoryName: "Línea Capilar VITA",
        shortDescription: "Tratamiento sin enjuague hidratante con aceite de coco",
        fullDescription: "Baño de crema sin enjuague enriquecido con aceite de coco virgen, el hidratante natural más efectivo para el cabello. Su fórmula concentrada penetra profundamente en la fibra capilar, restaurando la humedad natural y creando una barrera protectora.",
        benefits: [
            "Tratamiento sin enjuague - hidratación inmediata",
            "Aceite de coco virgen con ácidos grasos esenciales",
            "Penetra profundamente en la fibra capilar",
            "Crea barrera protectora contra la humedad",
            "Aporta brillo natural y suavidad sedosa",
            "Ideal para cabellos secos, teñidos o dañados"
        ],
        businessAttributes: [
            "Ingrediente Popular: El aceite de coco tiene gran aceptación",
            "Beneficios Conocidos: Los consumidores conocen sus propiedades",
            "Presentación Limpia: Envase blanco transmite pureza",
            "Versatilidad: Funciona en todo tipo de cabello"
        ],
        idealFor: "Góndolas de cuidado capilar, sección de productos naturales, farmacias",
        presentations: ["1000g"],
        colors: ["Blanco con tapa marrón"],
        images: ["2.jpg", "3.jpg", "11.jpg", "12.jpg", "13.jpg", "31.jpg"],
        mainImage: "3.jpg"
    },

    // Cuidado de Pies Borialcanfor
    {
        id: 6,
        name: "Borialcanfor Talco para los Pies",
        category: "borialcanfor",
        categoryName: "Cuidado de Pies Borialcanfor",
        shortDescription: "Talco refrescante y preventivo de hongos",
        fullDescription: "El talco para pies Borialcanfor es un producto líder y de alta demanda, ideal para la venta en supermercados, minimarkets y almacenes. Su fórmula refrescante previene la aparición de hongos y combate el mal olor, ofreciendo protección y frescura duradera.",
        benefits: [
            "Más de 48 horas de protección",
            "Previene la aparición de hongos",
            "Combate y previene el mal olor",
            "Frescura duradera y protección contra hongos",
            "Textura ultra suave",
            "Fragancia duradera y unisex",
            "Apto para pieles sensibles",
            "Libre de testeo animal"
        ],
        businessAttributes: [
            "Alta Rotación: Un producto esencial en el canasto de cuidado personal de los chilenos",
            "Formatos Convenientes: Disponible en 120g para el hogar y 60g para viajes, cubriendo todas las necesidades",
            "Reconocimiento de Marca: Un nombre de confianza que los clientes buscan y reconocen fácilmente",
            "Sostenibilidad: Envase reutilizable"
        ],
        idealFor: "Góndolas de farmacia, sección de cuidado personal, cajas de minimarket y estantes de almacén",
        presentations: ["120g", "60g"],
        colors: ["Blanco con tapa marrón"],
        images: ["16.jpg", "26.jpg", "28.jpg", "29.jpg"],
        mainImage: "16.jpg",
        newImage: true,
        madeInChile: true,
        crueltyFree: true
    },

    // Manicure Boriesmalte
    {
        id: 7,
        name: "Boriesmalte Quitaesmalte",
        category: "boriesmalte",
        categoryName: "Manicure Boriesmalte",
        shortDescription: "Removedor de esmalte rápido y eficaz",
        fullDescription: "Removedor de esmalte para uñas de alta calidad, perfecto para la compra impulsiva en cajas y góndolas. Su fórmula eficaz y fragancia agradable lo convierten en un producto ideal para el retail.",
        benefits: [
            "Acción rápida y eficaz",
            "Sin residuos",
            "Agradable fragancia a cosmético",
            "Fórmula suave pero efectiva"
        ],
        businessAttributes: [
            "Compra Impulsiva: Perfecto para ubicar en cajas y puntos de venta",
            "Precio Accesible: Producto económico con buen margen",
            "Rotación Constante: Producto de uso frecuente",
            "Presentación Atractiva: Botella rosa llamativa"
        ],
        idealFor: "Cajas de supermercados, góndolas de cosméticos, minimarkets, almacenes",
        presentations: ["60ml"],
        colors: ["Rosa con tapa roja"],
        images: ["19.jpg", "20.jpg", "23.jpg", "27.jpg"],
        mainImage: "19.jpg",
        manufacturer: "Family-son C.A.",
        ingredients: ["Solvente", "Colorante", "Agua"]
    }
];

// Función para obtener todos los productos
function getAllProducts() {
    return products;
}

// Función para obtener productos por categoría
function getProductsByCategory(category) {
    if (category === 'all') {
        return products;
    }
    return products.filter(product => product.category === category);
}

// Función para obtener un producto por ID
function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

// Función para obtener categorías únicas
function getCategories() {
    const categories = [...new Set(products.map(product => product.category))];
    return categories.map(category => {
        const product = products.find(p => p.category === category);
        return {
            id: category,
            name: product.categoryName
        };
    });
}