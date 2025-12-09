// TechArena - Aplicación Principal
(function() {
  'use strict';

  // ========== CARRITO ==========
  const Cart = {
    items: [],
    
    init() {
      this.load();
      this.updateCount();
    },
    
    load() {
      const saved = localStorage.getItem('cart');
      if (saved) {
        this.items = JSON.parse(saved);
      }
    },
    
    save() {
      localStorage.setItem('cart', JSON.stringify(this.items));
      this.updateCount();
    },
    
    add(productId, quantity = 1) {
      const product = getProductById(productId);
      if (!product) return;
      
      const existing = this.items.find(item => item.id === productId);
      if (existing) {
        existing.qty += quantity;
      } else {
        this.items.push({
          id: productId,
          qty: quantity,
          price: product.priceCLP,
          name: product.name,
          image: product.image
        });
      }
      
      this.save();
      this.showToast(`${product.name} agregado al carrito`);
    },
    
    remove(productId) {
      this.items = this.items.filter(item => item.id !== productId);
      this.save();
    },
    
    updateQuantity(productId, quantity) {
      const item = this.items.find(item => item.id === productId);
      if (item) {
        item.qty = parseInt(quantity);
        if (item.qty <= 0) {
          this.remove(productId);
        } else {
          this.save();
        }
      }
    },
    
    clear() {
      this.items = [];
      this.save();
    },
    
    getTotal() {
      return this.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
    },
    
    getCount() {
      return this.items.reduce((sum, item) => sum + item.qty, 0);
    },
    
    updateCount() {
      const countEl = document.getElementById('cartCount');
      if (countEl) {
        countEl.textContent = this.getCount();
      }
    },
    
    showToast(message) {
      let toast = document.querySelector('.toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
      }
      
      toast.textContent = message;
      toast.classList.add('active');
      
      setTimeout(() => {
        toast.classList.remove('active');
      }, 3000);
    }
  };

  // ========== BÚSQUEDA ==========
  function initSearch() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    
    if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
          window.location.href = `/busqueda.html?q=${encodeURIComponent(query)}`;
        }
      });
    }
  }

  // ========== MEGA MENÚ ==========
  function initMegaMenu() {
    const navbar = document.querySelector('.navbar .container');
    if (!navbar) return;
    
    const navList = navbar.querySelector('.nav-list');
    if (!navList) return;
    
    // Limpiar menú existente
    navList.innerHTML = '';
    
    // Agregar enlace de inicio
    const homeItem = document.createElement('li');
    homeItem.className = 'nav-item';
    homeItem.innerHTML = '<a href="/index.html" class="nav-link">Inicio</a>';
    navList.appendChild(homeItem);
    
    // Generar menú desde catálogo
    CATALOG.categories.forEach(category => {
      const navItem = document.createElement('li');
      navItem.className = 'nav-item';
      
      const navLink = document.createElement('a');
      navLink.href = `/categoria.html?cat=${category.slug}`;
      navLink.className = 'nav-link';
      navLink.textContent = category.name;
      
      const megaMenu = document.createElement('div');
      megaMenu.className = 'mega-menu';
      
      category.subcategories.forEach(sub => {
        const column = document.createElement('div');
        column.className = 'mega-menu-column';
        
        const title = document.createElement('h3');
        title.textContent = sub.name;
        
        const link = document.createElement('a');
        link.href = `/subcategoria.html?cat=${category.slug}&sub=${sub.slug}`;
        link.textContent = `Ver todos (${sub.products.length})`;
        
        const ul = document.createElement('ul');
        ul.appendChild(document.createElement('li')).appendChild(link);
        
        column.appendChild(title);
        column.appendChild(ul);
        megaMenu.appendChild(column);
      });
      
      navItem.appendChild(navLink);
      navItem.appendChild(megaMenu);
      navList.appendChild(navItem);
    });
  }

  // ========== RENDERIZADO DE PRODUCTOS ==========
  function renderProductCard(product, categorySlug, subcategorySlug) {
    const card = document.createElement('a');
    card.href = `/producto.html?id=${product.id}`;
    card.className = 'product-card';
    
    let badges = '';
    if (product.badges && product.badges.length > 0) {
      badges = '<div class="product-badges">';
      product.badges.forEach(badge => {
        const badgeClass = badge === 'Nuevo' ? 'badge-new' : 'badge-sale';
        badges += `<span class="badge ${badgeClass}">${badge}</span>`;
      });
      badges += '</div>';
    }
    
    const stars = renderStars(product.rating);
    const stockClass = product.stock < 5 ? 'low' : product.stock === 0 ? 'out' : '';
    const stockText = product.stock === 0 ? 'Sin stock' : product.stock < 5 ? `Solo ${product.stock} disponibles` : `${product.stock} disponibles`;
    
    const oldPrice = product.oldPriceCLP ? `<span class="price-old">$${formatPrice(product.oldPriceCLP)}</span>` : '';
    
    card.innerHTML = `
      ${badges}
      <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2214%22 fill=%22%23999%22%3EImagen no disponible%3C/text%3E%3C/svg%3E'">
      <div class="product-brand">${product.brand}</div>
      <div class="product-name">${product.name}</div>
      <div class="product-rating">${stars}</div>
      <div class="product-price">
        <span class="price-current">$${formatPrice(product.priceCLP)}</span>
        ${oldPrice}
      </div>
      <div class="product-stock ${stockClass}">${stockText}</div>
      <button class="btn btn-primary btn-block" onclick="event.preventDefault(); Cart.add('${product.id}')">
        Añadir al carrito
      </button>
    `;
    
    return card;
  }

  function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      stars += `<span class="star ${i <= rating ? '' : 'empty'}">★</span>`;
    }
    return stars;
  }

  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  // ========== FILTROS ==========
  function applyFilters(products, filters) {
    let filtered = [...products];
    
    // Filtro de precio
    if (filters.minPrice !== undefined) {
      filtered = filtered.filter(p => p.priceCLP >= filters.minPrice);
    }
    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(p => p.priceCLP <= filters.maxPrice);
    }
    
    // Filtro de rating
    if (filters.minRating !== undefined) {
      filtered = filtered.filter(p => p.rating >= filters.minRating);
    }
    
    // Filtro de stock
    if (filters.inStock) {
      filtered = filtered.filter(p => p.stock > 0);
    }
    
    // Ordenamiento
    if (filters.sort) {
      switch (filters.sort) {
        case 'price-asc':
          filtered.sort((a, b) => a.priceCLP - b.priceCLP);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.priceCLP - a.priceCLP);
          break;
        case 'rating-desc':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'name-asc':
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
      }
    }
    
    return filtered;
  }

  // ========== MODAL ==========
  function showModal(title, message, icon = '✓') {
    let modal = document.querySelector('.modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal-content">
          <button class="modal-close">&times;</button>
          <div class="modal-icon"></div>
          <h2></h2>
          <p></p>
          <button class="btn btn-primary" onclick="this.closest('.modal').classList.remove('active')">Aceptar</button>
        </div>
      `;
      document.body.appendChild(modal);
      
      modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.classList.remove('active');
      });
      
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    }
    
    modal.querySelector('.modal-icon').textContent = icon;
    modal.querySelector('h2').textContent = title;
    modal.querySelector('p').textContent = message;
    modal.classList.add('active');
  }

  // ========== INICIALIZACIÓN ==========
  document.addEventListener('DOMContentLoaded', () => {
    Cart.init();
    initSearch();
    initMegaMenu();
  });

  // Exponer funciones globales
  window.Cart = Cart;
  window.renderProductCard = renderProductCard;
  window.applyFilters = applyFilters;
  window.formatPrice = formatPrice;
  window.renderStars = renderStars;
  window.showModal = showModal;

})();

