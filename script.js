const CAFE_DATA = {
  whatsapp: "5553999999999",
  categories: {
    quentes: {
      label: "Quentes & Métodos",
      items: [
        {
          id: "espresso-duplo",
          name: "Espresso Duplo da Casa",
          desc: "Extração encorpada com notas de cacau amargo, avelã torrada e crema densa.",
          tag: "180ml • Intenso",
          price: 9.0
        },
        {
          id: "cappuccino-especiarias",
          name: "Cappuccino de Cacau & Canela",
          desc: "Espresso duplo, leite vaporizado na medida e toque de canela em rama e cacau puro.",
          tag: "200ml • Aconchegante",
          price: 14.5
        },
        {
          id: "cardamomo-latte",
          name: "Latte de Cardamomo & Mel",
          desc: "Leite sedoso inf fusionado com sementes de cardamomo e mel silvestre.",
          tag: "220ml • Aromático",
          price: 15.5
        },
        {
          id: "v60-manual",
          name: "Coado Manual (V60)",
          desc: "Preparado na hora, limpo e transparente, revelando acidez equilibrada e final doce.",
          tag: "250ml • Filtrado",
          price: 15.0
        },
        {
          id: "prensa-francesa",
          name: "Prensa Francesa",
          desc: "Infusão por imersão com corpo alto e textura envolvente para tardes calmas.",
          tag: "260ml • Encorpado",
          price: 15.5
        },
        {
          id: "cha-bergamota",
          name: "Chá Preto com Tangerina",
          desc: "Folhas infundidas com aroma cítrico floral e acabamento suave.",
          tag: "240ml • Sem café",
          price: 12.5
        }
      ]
    },
    frias: {
      label: "Gelados & Autorais",
      items: [
        {
          id: "cold-brew-18h",
          name: "Cold Brew 18h",
          desc: "Infusão a frio de longa maturação sobre gelo cristalino — suave, doce e sem amargor.",
          tag: "300ml • Extraído a frio",
          price: 13.5
        },
        {
          id: "baunilha-gelada",
          name: "Iced Latte de Baunilha Fava",
          desc: "Espresso gelado, leite frio e calda caseira de fava de baunilha.",
          tag: "320ml • Gelado",
          price: 15.0
        },
        {
          id: "affogato-brasa",
          name: "Affogato da Casa",
          desc: "Sorvete artesanal de creme ou chocolate amargo afogado em espresso quente na mesa.",
          tag: "Sobremesa • Quente & frio",
          price: 18.0
        },
        {
          id: "tonica-citrica",
          name: "Espresso com Tônica & Limão",
          desc: "Camadas refrescantes de água tônica seca, casca de limão siciliano e espresso.",
          tag: "320ml • Refrescante",
          price: 16.0
        },
        {
          id: "cacau-gelado",
          name: "Cacau Gelado com Hortelã",
          desc: "Chocolate 70% batido frio com leite e folhas frescas de hortelã.",
          tag: "300ml • Sem café",
          price: 15.5
        },
        {
          id: "cha-frutas-escuras",
          name: "Chá Gelado de Frutas Escuras",
          desc: "Infusão gelada de amora, mirtilo e hibiscus com toque cítrico.",
          tag: "320ml • Gelado",
          price: 13.0
        }
      ]
    },
    forno: {
      label: "Forno & Salgados",
      items: [
        {
          id: "cookie-amargo",
          name: "Cookie Chocolate 70% & Flor de Sal",
          desc: "Casquinha dourada, centro úmido, gotas de chocolate amargo e pitada de flor de sal.",
          tag: "Fornada da casa",
          price: 11.5
        },
        {
          id: "brownie-nozes",
          name: "Brownie Denso de Nozes",
          desc: "Chocolate intenso, nozes tostadas e miolo cremoso.",
          tag: "Individual",
          price: 12.0
        },
        {
          id: "torta-cardamomo",
          name: "Bolo Morno de Especiarias",
          desc: "Massa fofa com canela, gengibre e cardamomo, ideal para acompanhar coados.",
          tag: "Fatia generosa",
          price: 13.0
        },
        {
          id: "pao-queijo-cura",
          name: "Pão de Queijo de Cura Média",
          desc: "Casquinha estaladiça e interior macio, assado em pequenos lotes.",
          tag: "Quentinho",
          price: 9.5
        },
        {
          id: "croissant-queijo",
          name: "Croissant Folhado de Queijo & Ervas",
          desc: "Camadas amanteigadas douradas com queijo curado e tomilho.",
          tag: "Salgado de forno",
          price: 14.0
        },
        {
          id: "folhado-cogumelos",
          name: "Folhado de Cogumelos & Alho Poró",
          desc: "Recheio cremoso de cogumelos salteados envolto em massa folhada.",
          tag: "Vegetariano",
          price: 14.5
        }
      ]
    }
  },
  pairings: [
    {
      id: "Da-tarde",
      name: "Ritual da Tarde (V60 + Cookie 70%)",
      desc: "Um coado manual aromático acompanhado de um cookie de chocolate amargo e flor de sal.",
      price: 24.0
    },
    {
      id: "Da-noite",
      name: "Ritual da Noite (Cappuccino Especiarias + Brownie)",
      desc: "Textura cremosa com especiarias e um brownie denso de nozes para fechar o dia.",
      price: 24.5
    },
    {
      id: "Do-frio",
      name: "Ritual Gelado (Cold Brew 18h + Pão de Queijo)",
      desc: "O frescor equilibrado do cold brew junto ao contraste salgado e quente do forno.",
      price: 21.0
    }
  ],

};

const cart = new Map();

function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function buildWhatsUrl(text) {
  const digits = CAFE_DATA.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

const menuGrid = document.getElementById("menu-grid");
const tabButtons = document.querySelectorAll(".tab-btn");

function renderCategory(categoryKey) {
  if (!menuGrid) return;
  const cat = CAFE_DATA.categories[categoryKey];
  if (!cat) return;

  menuGrid.innerHTML = "";
  const frag = document.createDocumentFragment();

  cat.items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "menu-item";

    const topBlock = document.createElement("div");

    const titleRow = document.createElement("div");
    titleRow.className = "menu-item-top";

    const h3 = document.createElement("h3");
    h3.textContent = item.name;

    const price = document.createElement("span");
    price.className = "menu-price";
    price.textContent = formatBRL(item.price);

    titleRow.append(h3, price);

    const desc = document.createElement("p");
    desc.className = "menu-desc";
    desc.textContent = item.desc;

    topBlock.append(titleRow, desc);

    const foot = document.createElement("div");
    foot.className = "menu-item-foot";

    const tag = document.createElement("span");
    tag.className = "menu-tag";
    tag.textContent = item.tag;

    const addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.className = "add-mini";
    addBtn.textContent = "+ Sacola";
    addBtn.addEventListener("click", () => addToCart(item));

    foot.append(tag, addBtn);
    card.append(topBlock, foot);
    frag.appendChild(card);
  });

  menuGrid.appendChild(frag);
}

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
    renderCategory(btn.dataset.cat);
  });
});

renderCategory("quentes");

// Cardápio completo expansível
const catalogSheet = document.getElementById("catalog-sheet");
const catalogColumns = document.getElementById("catalog-columns");
const openFullMenuBtn = document.getElementById("open-full-menu-btn");
const closeFullMenuBtn = document.getElementById("close-full-menu-btn");
const printMenuBtn = document.getElementById("print-menu-btn");

function buildFullCatalog() {
  if (!catalogColumns) return;
  catalogColumns.innerHTML = "";
  const frag = document.createDocumentFragment();

  Object.values(CAFE_DATA.categories).forEach((cat) => {
    const col = document.createElement("div");
    col.className = "catalog-group";

    const heading = document.createElement("h4");
    heading.textContent = cat.label;
    col.appendChild(heading);

    cat.items.forEach((item) => {
      const row = document.createElement("div");
      row.className = "catalog-row";

      const nameSpan = document.createElement("span");
      nameSpan.textContent = item.name;

      const priceSpan = document.createElement("strong");
      priceSpan.textContent = formatBRL(item.price);

      row.append(nameSpan, priceSpan);
      col.appendChild(row);
    });

    frag.appendChild(col);
  });

  catalogColumns.appendChild(frag);
}

buildFullCatalog();

if (openFullMenuBtn && catalogSheet) {
  openFullMenuBtn.addEventListener("click", () => {
    catalogSheet.hidden = false;
    catalogSheet.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

if (closeFullMenuBtn && catalogSheet) {
  closeFullMenuBtn.addEventListener("click", () => {
    catalogSheet.hidden = true;
  });
}

if (printMenuBtn && catalogSheet) {
  printMenuBtn.addEventListener("click", () => {
    catalogSheet.hidden = false;
    window.print();
  });
}

// Combinações de degustação
const pairingsList = document.getElementById("pairings-list");
if (pairingsList) {
  const frag = document.createDocumentFragment();
  CAFE_DATA.pairings.forEach((pair) => {
    const card = document.createElement("div");
    card.className = "pairing-card";

    const info = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = pair.name;
    const desc = document.createElement("p");
    desc.textContent = pair.desc;
    info.append(title, desc);

    const right = document.createElement("div");
    right.style.display = "flex";
    right.style.alignItems = "center";
    right.style.gap = "12px";

    const price = document.createElement("span");
    price.className = "menu-price";
    price.textContent = formatBRL(pair.price);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "add-mini";
    btn.textContent = "+ Sacola";
    btn.addEventListener("click", () => addToCart(pair));

    right.append(price, btn);
    card.append(info, right);
    frag.appendChild(card);
  });
  pairingsList.appendChild(frag);
}

// Bilhete da casa
const moodNoteBtn = document.getElementById("mood-note-btn");
const whisperBox = document.getElementById("whisper-box");
let whisperIndex = 0;

if (moodNoteBtn && whisperBox) {
  moodNoteBtn.addEventListener("click", () => {
    whisperIndex = (whisperIndex + 1) % CAFE_DATA.whispers.length;
    whisperBox.textContent = CAFE_DATA.whispers[whisperIndex];
  });
}

// Sacola
const cartCountEl = document.getElementById("cart-count");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const drawerEl = document.getElementById("cart-drawer");
const backdropEl = document.getElementById("drawer-backdrop");

function openDrawer() {
  if (!drawerEl || !backdropEl) return;
  drawerEl.hidden = false;
  backdropEl.hidden = false;
}

function closeDrawer() {
  if (!drawerEl || !backdropEl) return;
  drawerEl.hidden = true;
  backdropEl.hidden = true;
}

function addToCart(item) {
  const existing = cart.get(item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.set(item.id, { ...item, qty: 1 });
  }
  renderCart();
  openDrawer();
}

function removeFromCart(id) {
  const existing = cart.get(id);
  if (!existing) return;
  if (existing.qty > 1) {
    existing.qty -= 1;
  } else {
    cart.delete(id);
  }
  renderCart();
}

function renderCart() {
  if (!cartItemsEl || !cartCountEl || !cartTotalEl) return;
  cartItemsEl.innerHTML = "";
  let totalQty = 0;
  let totalPrice = 0;

  if (cart.size === 0) {
    const empty = document.createElement("p");
    empty.style.color = "var(--ink-muted)";
    empty.style.fontSize = "0.9rem";
    empty.textContent = "Sua sacola está vazia por enquanto.";
    cartItemsEl.appendChild(empty);
  } else {
    cart.forEach((item) => {
      totalQty += item.qty;
      totalPrice += item.price * item.qty;

      const row = document.createElement("div");
      row.className = "cart-row";

      const info = document.createElement("div");
      const name = document.createElement("strong");
      name.textContent = `${item.qty}× ${item.name}`;

      const sub = document.createElement("span");
      sub.textContent = formatBRL(item.price * item.qty);

      info.append(name, sub);

      const remBtn = document.createElement("button");
      remBtn.type = "button";
      remBtn.className = "remove-item";
      remBtn.textContent = "Remover";
      remBtn.addEventListener("click", () => removeFromCart(item.id));

      row.append(info, remBtn);
      cartItemsEl.appendChild(row);
    });
  }

  cartCountEl.textContent = String(totalQty);
  cartTotalEl.textContent = formatBRL(totalPrice);
}

document.getElementById("cart-trigger")?.addEventListener("click", openDrawer);
document.getElementById("close-drawer")?.addEventListener("click", closeDrawer);
backdropEl?.addEventListener("click", closeDrawer);

document.getElementById("checkout-whats")?.addEventListener("click", () => {
  if (cart.size === 0) {
    window.open(
      buildWhatsUrl("Olá! Gostaria de falar com a Câmara Torra."),
      "_blank",
      "noopener,noreferrer"
    );
    return;
  }
  const lines = [];
  let sum = 0;
  cart.forEach((item) => {
    lines.push(`- ${item.qty}x ${item.name} (${formatBRL(item.price * item.qty)})`);
    sum += item.price * item.qty;
  });
  const text = `Olá! Gostaria de fazer este pedido na Câmara Torra:\n\n${lines.join("\n")}\n\nTotal: ${formatBRL(sum)}`;
  window.open(buildWhatsUrl(text), "_blank", "noopener,noreferrer");
});

const reserveWhats = document.getElementById("reserve-whats");
if (reserveWhats) {
  reserveWhats.href = buildWhatsUrl("Olá! Queria tirar uma dúvida sobre a Câmara Torra.");
}

renderCart();

// Revelação na rolagem
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");

function showVisibleReveals() {
  const vh = window.innerHeight || document.documentElement.clientHeight;
  revealItems.forEach((el) => {
    if (el.getBoundingClientRect().top < vh * 0.96) {
      el.classList.add("is-visible");
    }
  });
}

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((el) => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
  );
  revealItems.forEach((el) => observer.observe(el));
  showVisibleReveals();
  window.addEventListener("scroll", showVisibleReveals, { passive: true });
}