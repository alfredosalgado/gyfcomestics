// Base de datos de productos
const products = [
    // Línea Capilar VITA
    {
        id: 1,
        name: "VITA Gold Premium",
        category: "vita",
        categoryName: "Línea Capilar VITA",
        shortDescription: "Tratamiento capilar intensivo premium",
        fullDescription: "El VITA Gold Premium es un tratamiento capilar intensivo de alta gama, ideal para la venta en supermercados, minimarkets y almacenes. Su fórmula avanzada ofrece resultados profesionales que tus clientes buscan.",
        benefits: [
            "Repara el daño en cada aplicación",
            "Ofrece hidratación y restauración profunda", 
            "Controla el frizz y aporta fortalecimiento al cabello"
        ],
        businessAttributes: [
            "Alta Rotación: Producto premium con gran demanda en el mercado chileno",
            "Formatos Convenientes: Disponible en presentaciones de 1.000ml y 1kg",
            "Reconocimiento de Marca: VITA es una marca reconocida en el cuidado capilar",
            "Margen Atractivo: Excelente rentabilidad para tu negocio"
        ],
        idealFor: "Góndolas de belleza, sección de cuidado capilar, farmacias y perfumerías dentro de supermercados",
        presentations: ["1.000ml", "1kg"],
        colors: ["Negro", "Dorado"],
        images: ["1.jpg", "2.jpg", "4.jpg", "10.jpg", "14.jpg", "15.jpg", "17.jpg", "18.jpg", "22.jpg", "24.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg"],
        mainImage: "1.jpg"
    },
    {
        id: 2,
        name: "VITA Baño de Crema - Vivan los Crespos",
        category: "vita",
        categoryName: "Línea Capilar VITA",
        shortDescription: "Tratamiento especializado para cabello rizado",
        fullDescription: "Este producto está específicamente diseñado para cabello rizado o 'crespo', un segmento con alta demanda en el mercado. Es un tratamiento multifuncional que ofrece múltiples beneficios en un solo producto.",
        benefits: [
            "Bomba de hidratación y fortalecimiento",
            "Múltiples usos: crema para peinar, tratamiento y acondicionador",
            "Ingredientes clave: Cebolla, jalea real y proteína de leche"
        ],
        businessAttributes: [
            "Nicho Específico: Dirigido al creciente mercado de cuidado para cabello rizado",
            "Producto 3 en 1: Mayor valor percibido por el cliente",
            "Ingredientes Premium: Fórmula con componentes reconocidos",
            "Presentación Atractiva: Envase turquesa que destaca en góndola"
        ],
        idealFor: "Sección de cuidado capilar especializado, góndolas de belleza, farmacias",
        presentations: ["1.000ml"],
        colors: ["Turquesa"],
        images: ["8.jpg", "21.jpg", "25.jpg", "30.jpg", "31.jpg", "33.jpg"],
        mainImage: "8.jpg"
    },
    {
        id: 3,
        name: "VITA Baño de Crema - Aloe de Argán",
        category: "vita",
        categoryName: "Línea Capilar VITA",
        shortDescription: "Tratamiento con aloe vera y aceite de argán",
        fullDescription: "Baño de crema que combina las propiedades hidratantes del aloe vera con los beneficios reparadores del aceite de argán. Una combinación perfecta para el cuidado capilar integral.",
        benefits: [
            "Combina aloe vera y aceite de argán",
            "Proporciona salud y cuidado general para el cabello",
            "Hidratación profunda y reparación"
        ],
        businessAttributes: [
            "Ingredientes Trending: Aloe y argán son ingredientes muy buscados",
            "Cuidado Natural: Apela al mercado de productos naturales",
            "Versatilidad: Apto para todo tipo de cabello",
            "Presentación Distintiva: Envase morado fácil de identificar"
        ],
        idealFor: "Góndolas de cuidado natural, sección de belleza, minimarkets",
        presentations: ["1000gr"],
        colors: ["Morado"],
        images: ["5.jpg", "7.jpg", "9.jpg", "31.jpg", "33.jpg"],
        mainImage: "5.jpg"
    },
    {
        id: 4,
        name: "VITA Baño de Crema - Extracto de Aguacate",
        category: "vita",
        categoryName: "Línea Capilar VITA",
        shortDescription: "Tratamiento nutritivo con extracto de aguacate",
        fullDescription: "Tratamiento capilar enriquecido con extracto de aguacate (palta), aprovechando las propiedades nutritivas de este superalimento para el cuidado del cabello.",
        benefits: [
            "Extracto de aguacate (palta) nutritivo",
            "Proporciona salud y cuidado para el cabello",
            "Rico en vitaminas y ácidos grasos esenciales"
        ],
        businessAttributes: [
            "Superalimento: El aguacate es reconocido por sus propiedades nutritivas",
            "Tendencia Saludable: Conecta con el trend de ingredientes naturales",
            "Fácil Identificación: Color verde asociado al aguacate",
            "Mercado Amplio: Atractivo para consumidores conscientes de la salud"
        ],
        idealFor: "Sección de productos naturales, góndolas de belleza, almacenes",
        presentations: ["1000gr"],
        colors: ["Verde claro"],
        images: ["2.jpg", "6.jpg", "31.jpg"],
        mainImage: "6.jpg"
    },
    {
        id: 5,
        name: "VITA Baño de Crema - Aceite de Coco",
        category: "vita",
        categoryName: "Línea Capilar VITA",
        shortDescription: "Tratamiento hidratante con aceite de coco",
        fullDescription: "Tratamiento capilar con aceite de coco, conocido por sus propiedades hidratantes y reparadoras. Ideal para cabellos secos y dañados que necesitan nutrición profunda.",
        benefits: [
            "Aceite de coco hidratante y reparador",
            "Salud y cuidado para el cabello",
            "Nutrición profunda para cabellos secos"
        ],
        businessAttributes: [
            "Ingrediente Popular: El aceite de coco tiene gran aceptación",
            "Beneficios Conocidos: Los consumidores conocen sus propiedades",
            "Presentación Limpia: Envase blanco transmite pureza",
            "Versatilidad: Funciona en todo tipo de cabello"
        ],
        idealFor: "Góndolas de cuidado capilar, sección de productos naturales, farmacias",
        presentations: ["1000gr"],
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