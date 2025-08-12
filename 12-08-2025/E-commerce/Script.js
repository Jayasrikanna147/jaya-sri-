// Simple front-end eCommerce demo
// - Renders products from an array
// - Handles cart (add, qty change, remove) persisted in localStorage
// - Opens modal quick-view and cart drawer

const PRODUCTS = [
    {
      id: "sku-001",
      title: "Classic Leather Bag",
      price: 2499.00,
      img: "https://via.placeholder.com/800x600?text=Leather+Bag",
      desc: "Handcrafted leather bag with roomy interior and comfortable strap."
    },
    {
      id: "sku-002",
      title: "Minimal Wristwatch",
      price: 1599.00,
      img: "https://via.placeholder.com/800x600?text=Wristwatch",
      desc: "Slim profile, quartz movement, water-resistant to 50m."
    },
    {
      id: "sku-003",
      title: "Wireless Headphones",
      price: 2999.00,
      img: "https://via.placeholder.com/800x600?text=Headphones",
      desc: "Active noise cancellation, 24h battery life, comfortable ear cushions."
    },
    {
      id: "sku-004",
      title: "Ceramic Mug Set",
      price: 699.00,
      img: "https://via.placeholder.com/800x600?text=Mug+Set",
      desc: "Set of 2 ceramic mugs — dishwasher safe and elegant design."
    },
    {
      id: "sku-005",
      title: "Portable Charger 10000mAh",
      price: 1299.00,
      img: "https://via.placeholder.com/800x600?text=Power+Bank",
      desc: "Compact power bank with dual USB ports and fast charging."
    },
    {
      id: "sku-006",
      title: "Canvas Sneakers",
      price: 1999.00,
      img: "https://via.placeholder.com/800x600?text=Sneakers",
      desc: "Comfortable canvas sneakers with durable sole."
    }
  ];
  
  // ----- Helpers and state -----
  const $ = sel => document.querySelector(sel);
  const $$ = sel => document.querySelectorAll(sel);
  
  const CART_KEY = "demo_store_cart_v1";
  
  function formatCurrency(num){
    // Indian Rupee style; for a different currency use Intl accordingly
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(num);
  }
  
  function loadCart(){
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch(e){
      console.error("Failed to load cart", e);
      return {};
    }
  }
  function saveCart(cart){
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
  
  let cart = loadCart(); // { productId: {id, qty} }
  
  // ----- Render products -----
  const productGrid = $("#product-grid");
  function renderProducts(){
    productGrid.innerHTML = "";
    PRODUCTS.forEach(p => {
      const card = document.createElement("article");
      card.className = "card";
      card.setAttribute("role","listitem");
      card.innerHTML = `
        <img class="product-image" src="${p.img}" alt="${p.title}">
        <div>
          <h4 class="product-title">${p.title}</h4>
          <div class="product-meta">
            <div class="product-price">${formatCurrency(p.price)}</div>
          </div>
          <p class="product-desc" style="color:var(--muted);margin:8px 0 0;font-size:.95rem">${p.desc}</p>
        </div>
        <div class="card-actions">
          <button class="ghost-btn" data-action="view" data-id="${p.id}">View</button>
          <button class="primary-btn" data-action="add" data-id="${p.id}">Add to Cart</button>
        </div>
      `;
      productGrid.appendChild(card);
    });
  }
  renderProducts();
  
  // ----- Modal (quick view) -----
  const modal = $("#modal");
  const modalClose = $("#modal-close");
  const modalImage = $("#modal-image");
  const modalTitle = $("#modal-title");
  const modalDesc = $("#modal-desc");
  const modalPrice = $("#modal-price");
  const modalQty = $("#modal-qty");
  const modalAdd = $("#modal-add");
  let modalCurrentId = null;
  
  function openModal(productId){
    const p = PRODUCTS.find(x => x.id === productId);
    if(!p) return;
    modalCurrentId = p.id;
    modalImage.src = p.img;
    modalImage.alt = p.title;
    modalTitle.textContent = p.title;
    modalDesc.textContent = p.desc;
    modalPrice.textContent = formatCurrency(p.price);
    modalQty.value = 1;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden","false");
  }
  function closeModal(){
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden","true");
    modalCurrentId = null;
  }
  
  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if(e.target === modal) closeModal();
  });
  
  // ----- Cart Drawer -----
  const cartDrawer = $("#cart-drawer");
  const cartBtn = $("#cart-button");
  const cartCount = $("#cart-count");
  const cartItemsEl = $("#cart-items");
  const cartSubtotalEl = $("#cart-subtotal");
  const closeCartBtn = $("#close-cart");
  const checkoutBtn = $("#checkout-btn");
  
  function openCart(){
    cartDrawer.classList.add("open");
    cartDrawer.setAttribute("aria-hidden","false");
  }
  function closeCart(){
    cartDrawer.classList.remove("open");
    cartDrawer.setAttribute("aria-hidden","true");
  }
  
  cartBtn.addEventListener("click", () => {
    renderCart();
    openCart();
  });
  closeCartBtn.addEventListener("click", closeCart);
  
  // ----- Cart operations -----
  function addToCart(productId, quantity = 1){
    quantity = Number(quantity);
    if(quantity <= 0) return;
    if(!cart[productId]) cart[productId] = { id: productId, qty: 0 };
    cart[productId].qty += quantity;
    saveCart(cart);
    updateCartUI();
  }
  
  function removeFromCart(productId){
    delete cart[productId];
    saveCart(cart);
    renderCart();
    updateCartUI();
  }
  
  function setQty(productId, qty){
    qty = Number(qty);
    if(qty <= 0){ removeFromCart(productId); return; }
    if(cart[productId]) cart[productId].qty = qty;
    saveCart(cart);
    renderCart();
    updateCartUI();
  }
  
  function cartSummary(){
    // return { count, subtotal }
    let count = 0;
    let subtotal = 0;
    for(const key in cart){
      const item = cart[key];
      const prod = PRODUCTS.find(p => p.id === item.id);
      if(!prod) continue;
      // careful arithmetic: multiply price * qty then add
      const line = prod.price * item.qty;
      subtotal = subtotal + line;
      count += item.qty;
    }
    return { count, subtotal };
  }
  
  function updateCartUI(){
    const s = cartSummary();
    cartCount.textContent = s.count;
    cartSubtotalEl.textContent = formatCurrency(s.subtotal);
  }
  
  // ----- Render cart drawer items -----
  function renderCart(){
    cartItemsEl.innerHTML = "";
    const keys = Object.keys(cart);
    if(keys.length === 0){
      cartItemsEl.innerHTML = `<p style="color:var(--muted);padding:12px">Your cart is empty.</p>`;
      cartSubtotalEl.textContent = formatCurrency(0);
      updateCartUI();
      return;
    }
  
    keys.forEach(key => {
      const item = cart[key];
      const p = PRODUCTS.find(x => x.id === item.id);
      if(!p) return;
      const itemEl = document.createElement("div");
      itemEl.className = "cart-item";
      itemEl.innerHTML = `
        <img src="${p.img}" alt="${p.title}">
        <div class="item-info">
          <div class="item-title">${p.title}</div>
          <div style="color:var(--muted);margin-top:6px">${formatCurrency(p.price)}</div>
          <div class="item-qty">
            <button class="qty-btn" data-action="dec" data-id="${p.id}">-</button>
            <input type="number" min="1" value="${item.qty}" data-id="${p.id}" class="qty-input" style="width:56px;padding:6px;border-radius:6px;border:1px solid #eee" />
            <button class="qty-btn" data-action="inc" data-id="${p.id}">+</button>
            <button class="remove-btn" data-action="remove" data-id="${p.id}">Remove</button>
          </div>
        </div>
      `;
      cartItemsEl.appendChild(itemEl);
    });
  
    // attach listeners for qty buttons & inputs
    cartItemsEl.querySelectorAll("[data-action]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const action = e.currentTarget.dataset.action;
        const id = e.currentTarget.dataset.id;
        if(action === "inc") setQty(id, (cart[id].qty || 0) + 1);
        if(action === "dec") setQty(id, (cart[id].qty || 1) - 1);
        if(action === "remove") removeFromCart(id);
      });
    });
  
    cartItemsEl.querySelectorAll(".qty-input").forEach(input => {
      input.addEventListener("change", (e) => {
        const id = e.target.dataset.id;
        let val = Number(e.target.value) || 1;
        if(val < 1) val = 1;
        setQty(id, val);
      });
    });
  
    updateCartUI();
  }
  
  // ----- Global click handling for product buttons -----
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if(!btn) return;
  
    const action = btn.dataset.action;
    const id = btn.dataset.id;
  
    if(action === "add"){
      addToCart(id, 1);
      renderCart();
      updateCartUI();
      // show brief confirmation
      btn.textContent = "Added ✓";
      setTimeout(()=> btn.textContent = "Add to Cart", 900);
    }
  
    if(action === "view"){
      openModal(id);
    }
  });
  
  // Modal add to cart
  modalAdd.addEventListener("click", () => {
    if(!modalCurrentId) return;
    const qty = Number(modalQty.value) || 1;
    addToCart(modalCurrentId, qty);
    closeModal();
    renderCart();
    updateCartUI();
  });
  
  // Checkout simulation
  checkoutBtn.addEventListener("click", () => {
    const s = cartSummary();
    if(s.subtotal <= 0){
      alert("Your cart is empty.");
      return;
    }
    // In a real store you'd send cart to server and process payment.
    const proceed = confirm(`Proceed to checkout? Total: ${formatCurrency(s.subtotal)}`);
    if(proceed){
      // simulate success
      localStorage.removeItem(CART_KEY);
      cart = {};
      renderCart();
      updateCartUI();
      closeCart();
      alert("Thank you — your order has been placed (demo).");
    }
  });
  
  // Init UI
  updateCartUI();
  renderCart();
  
  // Utility: product card buttons for accessibility (keyboard)
  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
      closeModal();
      closeCart();
    }
  });
  
  // Set year
  document.getElementById("year").textContent = new Date().getFullYear();