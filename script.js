// Variables globales
let currentFilter = 'all';
let currentProducts = [];

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Función principal de inicialización
function initializeApp() {
    setupNavigation();
    loadProducts();
    setupSmoothScrolling();
    setupModalEvents();
}

// Configuración de la navegación móvil
function setupNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Configuración del scroll suave
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Cargar y mostrar productos
function loadProducts() {
    currentProducts = getAllProducts();
    displayProducts(currentProducts);
}

// Mostrar productos en la grilla
function displayProducts(products) {
    const productsGrid = document.getElementById('products-grid');
    
    if (!productsGrid) return;
    
    if (products.length === 0) {
        productsGrid.innerHTML = '<p class="text-center">No se encontraron productos en esta categoría.</p>';
        return;
    }
    
    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
    
    // Agregar animación
    const productCards = productsGrid.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in-up');
        }, index * 100);
    });
}

// Crear tarjeta de producto
function createProductCard(product) {
    const features = [];
    
    if (product.presentations) {
        features.push(`${product.presentations.join(', ')}`);
    }
    
    if (product.crueltyFree) {
        features.push('Libre de testeo animal');
    }
    
    if (product.madeInChile) {
        features.push('Ahora en Chile');
    }
    
    if (product.newImage) {
        features.push('Nueva imagen');
    }

    return `
        <div class="product-card" onclick="window.location.href='producto-${product.id}.html'">
            <img src="img/productos/${product.mainImage}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <div class="product-category">${product.categoryName}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.shortDescription}</p>
                ${features.length > 0 ? `
                    <div class="product-features">
                        ${features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                    </div>
                ` : ''}
                <div class="mt-2">
                    <span class="btn btn-primary" style="pointer-events: none;">Ver Detalles</span>
                </div>
            </div>
        </div>
    `;
}

// Filtrar productos por categoría
function filterProducts(category) {
    currentFilter = category;
    
    // Actualizar botones activos
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    const activeButton = document.querySelector(`[onclick="filterProducts('${category}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Mostrar/ocultar descripciones de categoría
    const descriptions = document.querySelectorAll('.category-description');
    descriptions.forEach(desc => desc.classList.add('hidden'));
    
    const activeDescription = document.getElementById(`desc-${category}`);
    if (activeDescription) {
        activeDescription.classList.remove('hidden');
    }
    
    // Filtrar y mostrar productos
    const filteredProducts = getProductsByCategory(category);
    displayProducts(filteredProducts);
}

// Mostrar categoría específica (desde las tarjetas de marca)
function showCategory(category) {
    // Scroll al catálogo
    const catalogSection = document.getElementById('catalogo');
    if (catalogSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = catalogSection.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Filtrar después del scroll
        setTimeout(() => {
            filterProducts(category);
        }, 500);
    }
}

// Configurar eventos del modal
function setupModalEvents() {
    const modal = document.getElementById('product-modal');
    
    if (modal) {
        // Cerrar modal al hacer clic fuera
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Cerrar modal con tecla Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }
}

// Abrir modal de producto
function openProductModal(productId) {
    const product = getProductById(productId);
    if (!product) return;
    
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = createProductModalContent(product);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Configurar eventos de la galería
    setupGalleryEvents();
}

// Crear contenido del modal de producto
function createProductModalContent(product) {
    const whatsappMessage = encodeURIComponent(`Hola, quiero cotizar el producto: ${product.name}`);
    const whatsappUrl1 = `https://api.whatsapp.com/send?phone=56985647272&text=${whatsappMessage}`;
    const whatsappUrl2 = `https://api.whatsapp.com/send?phone=56992934675&text=${whatsappMessage}`;
    
    return `
        <div class="product-gallery">
            ${product.images.map(image => `
                <img src="img/productos/${image}" alt="${product.name}" class="gallery-image" onclick="openImageViewer('img/productos/${image}')">
            `).join('')}
        </div>
        
        <div class="product-details">
            <div class="product-category">${product.categoryName}</div>
            <h2>${product.name}</h2>
            
            ${product.presentations ? `
                <p><strong>Presentaciones:</strong> ${product.presentations.join(', ')}</p>
            ` : ''}
            
            ${product.colors ? `
                <p><strong>Colores disponibles:</strong> ${product.colors.join(', ')}</p>
            ` : ''}
            
            <div class="mb-3">
                <h3>Descripción</h3>
                <p>${product.fullDescription}</p>
            </div>
            
            ${product.benefits && product.benefits.length > 0 ? `
                <div class="mb-3">
                    <h3>Beneficios del Producto</h3>
                    <ul class="benefits-list">
                        ${product.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            ${product.businessAttributes && product.businessAttributes.length > 0 ? `
                <div class="mb-3">
                    <h3>Atributos Clave para tu Negocio</h3>
                    <ul class="business-attributes-list">
                        ${product.businessAttributes.map(attr => `<li>${attr}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            ${product.idealFor ? `
                <div class="mb-3">
                    <h3>Ideal para</h3>
                    <p>${product.idealFor}</p>
                </div>
            ` : ''}
            
            ${product.ingredients ? `
                <div class="mb-3">
                    <h3>Ingredientes</h3>
                    <p>${product.ingredients.join(', ')}</p>
                </div>
            ` : ''}
            
            ${product.manufacturer ? `
                <div class="mb-3">
                    <h3>Fabricante</h3>
                    <p>${product.manufacturer}</p>
                </div>
            ` : ''}
            
            <div class="whatsapp-buttons">
                <a href="${whatsappUrl1}" target="_blank" class="btn btn-whatsapp-large">
                    <i class="fab fa-whatsapp"></i> COTIZAR POR WHATSAPP
                </a>
                <a href="${whatsappUrl2}" target="_blank" class="btn btn-whatsapp-large">
                    <i class="fab fa-whatsapp"></i> COTIZAR (LÍNEA 2)
                </a>
            </div>
        </div>
    `;
}

// Configurar eventos de la galería
function setupGalleryEvents() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
}

// Abrir visor de imagen (función simple)
function openImageViewer(imageSrc) {
    const viewer = document.createElement('div');
    viewer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3000;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 8px;
    `;
    
    viewer.appendChild(img);
    document.body.appendChild(viewer);
    
    viewer.addEventListener('click', function() {
        document.body.removeChild(viewer);
    });
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Funciones de utilidad para animaciones
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, {
        threshold: 0.1
    });

    const elements = document.querySelectorAll('.feature-card, .brand-card, .step, .contact-item');
    elements.forEach(el => observer.observe(el));
}

// Llamar a la función de observación después de que se cargue el contenido
setTimeout(observeElements, 1000);

// Función para manejar el scroll del header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--bg-primary)';
        header.style.backdropFilter = 'none';
    }
});

// Función para lazy loading de imágenes
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Configurar lazy loading después de cargar el DOM
document.addEventListener('DOMContentLoaded', setupLazyLoading);

// Función para mostrar/ocultar el botón de scroll to top
function setupScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    
    // Aplicar estilos responsive
    function updateScrollButtonStyles() {
        const isMobile = window.innerWidth <= 480;
        const isTablet = window.innerWidth <= 768;
        
        let bottomPos = '20px';
        let rightPos = '20px';
        let size = '50px';
        let fontSize = '1.2rem';
        
        if (isMobile) {
            bottomPos = '10px';
            rightPos = '10px';
            size = '45px';
            fontSize = '1rem';
        } else if (isTablet) {
            bottomPos = '15px';
            rightPos = '15px';
            size = '48px';
            fontSize = '1.1rem';
        }
        
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: ${bottomPos};
            right: ${rightPos};
            width: ${size};
            height: ${size};
            border-radius: 50%;
            background: var(--primary-color);
            color: white;
            border: none;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            font-size: ${fontSize};
            box-shadow: var(--shadow-lg);
            transition: var(--transition);
            z-index: 1000;
            max-width: calc(100vw - 20px);
            max-height: calc(100vh - 20px);
        `;
    }
    
    updateScrollButtonStyles();
    
    document.body.appendChild(scrollBtn);
    
    // Actualizar estilos cuando cambie el tamaño de ventana
    window.addEventListener('resize', updateScrollButtonStyles);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Configurar scroll to top
setupScrollToTop();

// Función para manejar errores de carga de imágenes
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';
            this.alt = 'Imagen no disponible';
        });
    });
}

// Configurar manejo de errores de imágenes
document.addEventListener('DOMContentLoaded', handleImageErrors);

// Función para optimizar el rendimiento
function optimizePerformance() {
    // Debounce para el scroll
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.onscroll = function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) {
                originalScrollHandler();
            }
        }, 10);
    };
}

// Aplicar optimizaciones
optimizePerformance();