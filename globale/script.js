const $ = selector => document.querySelector(selector);

const translations = {

    en: {
        home: "Home",
        catalog: "Catalog",
        about: "About",
        contacts: "Contacts",
        newEra: "2026 — New Era",
        heroTitle: "Everything you need.",
        heroAccent: "One destination.",
        heroDescription: "Technology, style and more in one place.",
        shopNow: "Shop Now",
        delivery: "Fast Delivery",
        worldwide: "Worldwide",
        payment: "Secure Payment",
        support: "24/7 Support",
        alwaysHere: "Always Here",
        deals: "Best Deals",
        everyDay: "Every Day",
        popularCategories: "Popular Categories",
        viewAll: "View all →",
        featuredProducts: "Featured Products",
        allCategories: "All categories",
        popular: "Popular",
        priceLow: "Price: low to high",
        priceHigh: "Price: high to low",
        newest: "Newest",
        apply: "Apply",
        loadMore: "Load More Products",
        promoTitle: "More possibilities with TECHZONE",
        promoDescription: "Discover technology, style and incredible offers.",
        discover: "Discover More",
        reviewsTitle: "Customer Reviews",
        reviewOne: "Excellent service and beautiful products!",
        reviewTwo: "Very convenient store and modern design.",
        reviewThree: "Great selection of technology.",
        writeReview: "Write a Review",
        newsletterTitle: "Join the TECHZONE world",
        newsletterText: "Get updates about new products and special offers.",
        subscribe: "Subscribe",
        footerText: "Technology of the future — today.",
        rights: "All rights reserved.",
        yourCart: "Your Cart",
        total: "Total",
        checkout: "Proceed to Checkout",
        account: "My Account",
        login: "Sign in / Register",
        accountNote: "Demo account. Real authentication requires a secure server.",
        chatWelcome: "Hello! How can we help you?",
        add: "Add",
        added: "Added to cart!",
        emptyCart: "Your cart is empty.",
        emptySearch: "No products found.",
        product: "Product",
        remove: "Remove",
        maxPrice: "Maximum price",
        registered: "Demo account created!",
        emailRequired: "Please enter your email.",
        reviewPrompt: "Write your review:",
        reviewSaved: "Thank you for your review!",
        messageSent: "Message received! Connect a support server to receive replies.",
        orderDemo: "Checkout demo: connect payment and order processing to accept real orders.",
        newsletterThanks: "Thank you for subscribing!"
    },

    ru: {
        home: "Главная",
        catalog: "Каталог",
        about: "О нас",
        contacts: "Контакты",
        newEra: "2026 — Новая эра",
        heroTitle: "Всё, что тебе нужно.",
        heroAccent: "В одном месте.",
        heroDescription: "Технологии, стиль и многое другое.",
        shopNow: "Купить сейчас",
        delivery: "Быстрая доставка",
        worldwide: "По всему миру",
        payment: "Безопасная оплата",
        support: "Поддержка 24/7",
        alwaysHere: "Всегда рядом",
        deals: "Лучшие предложения",
        everyDay: "Каждый день",
        popularCategories: "Популярные категории",
        viewAll: "Все категории →",
        featuredProducts: "Популярные товары",
        allCategories: "Все категории",
        popular: "Популярные",
        priceLow: "Сначала дешевле",
        priceHigh: "Сначала дороже",
        newest: "Новые",
        apply: "Применить",
        loadMore: "Показать ещё товары",
        promoTitle: "Больше возможностей с TECHZONE",
        promoDescription: "Открой для себя технологии, стиль и выгодные предложения.",
        discover: "Подробнее",
        reviewsTitle: "Отзывы покупателей",
        reviewOne: "Отличный сервис и красивые товары!",
        reviewTwo: "Очень удобный магазин и современный дизайн.",
        reviewThree: "Большой выбор техники.",
        writeReview: "Написать отзыв",
        newsletterTitle: "Добро пожаловать в TECHZONE",
        newsletterText: "Узнавай о новинках и специальных предложениях.",
        subscribe: "Подписаться",
        footerText: "Технологии будущего — уже сегодня.",
        rights: "Все права защищены.",
        yourCart: "Корзина",
        total: "Итого",
        checkout: "Перейти к оформлению",
        account: "Мой аккаунт",
        login: "Войти / Зарегистрироваться",
        accountNote: "Демо-аккаунт. Для настоящей авторизации нужен защищённый сервер.",
        chatWelcome: "Здравствуйте! Чем мы можем помочь?",
        add: "Добавить",
        added: "Добавлено в корзину!",
        emptyCart: "Корзина пуста.",
        emptySearch: "Товары не найдены.",
        product: "Товар",
        remove: "Удалить",
        maxPrice: "Максимальная цена",
        registered: "Демо-аккаунт создан!",
        emailRequired: "Введите электронную почту.",
        reviewPrompt: "Напишите ваш отзыв:",
        reviewSaved: "Спасибо за отзыв!",
        messageSent: "Сообщение получено! Для ответа подключите сервер поддержки.",
        orderDemo: "Демо оформления: подключите оплату и обработку заказов для реальных покупок.",
        newsletterThanks: "Спасибо за подписку!"
    },

    ky: {
        home: "Башкы бет",
        catalog: "Каталог",
        about: "Биз жөнүндө",
        contacts: "Байланыш",
        newEra: "2026 — Жаңы доор",
        heroTitle: "Сага керектүүнүн баары.",
        heroAccent: "Бир жерде.",
        heroDescription: "Технология, стиль жана башка көптөгөн нерселер.",
        shopNow: "Азыр сатып алуу",
        delivery: "Тез жеткирүү",
        worldwide: "Дүйнө жүзү боюнча",
        payment: "Коопсуз төлөм",
        support: "24/7 колдоо",
        alwaysHere: "Ар дайым жаныңда",
        deals: "Мыкты сунуштар",
        everyDay: "Күн сайын",
        popularCategories: "Популярдуу категориялар",
        viewAll: "Бардык категориялар →",
        featuredProducts: "Популярдуу товарлар",
        allCategories: "Бардык категориялар",
        popular: "Популярдуу",
        priceLow: "Арзанынан баштап",
        priceHigh: "Кымбатынан баштап",
        newest: "Жаңы товарлар",
        apply: "Колдонуу",
        loadMore: "Дагы товарларды көрсөтүү",
        promoTitle: "TECHZONE менен көбүрөөк мүмкүнчүлүк",
        promoDescription: "Технологияны, стилди жана пайдалуу сунуштарды ач.",
        discover: "Көбүрөөк билүү",
        reviewsTitle: "Кардарлардын пикирлери",
        reviewOne: "Кызматы мыкты жана товарлары сонун!",
        reviewTwo: "Дүкөн абдан ыңгайлуу жана заманбап.",
        reviewThree: "Техникалардын тандоосу чоң.",
        writeReview: "Пикир жазуу",
        newsletterTitle: "TECHZONE дүйнөсүнө кошул",
        newsletterText: "Жаңы товарлар жана атайын сунуштар жөнүндө кабар ал.",
        subscribe: "Жазылуу",
        footerText: "Келечектин технологиялары — бүгүн.",
        rights: "Бардык укуктар корголгон.",
        yourCart: "Себет",
        total: "Жалпы сумма",
        checkout: "Буйрутма берүү",
        account: "Менин аккаунтум",
        login: "Кирүү / Катталуу",
        accountNote: "Демо-аккаунт. Чыныгы катталуу үчүн коопсуз сервер керек.",
        chatWelcome: "Саламатсызбы! Сизге кантип жардам беребиз?",
        add: "Кошуу",
        added: "Себетке кошулду!",
        emptyCart: "Себет бош.",
        emptySearch: "Товар табылган жок.",
        product: "Товар",
        remove: "Өчүрүү",
        maxPrice: "Эң жогорку баа",
        registered: "Демо-аккаунт түзүлдү!",
        emailRequired: "Электрондук почтаңызды киргизиңиз.",
        reviewPrompt: "Пикириңизди жазыңыз:",
        reviewSaved: "Пикириңиз үчүн рахмат!",
        messageSent: "Билдирүү кабыл алынды! Жооп алуу үчүн колдоо серверин туташтырыңыз.",
        orderDemo: "Демо буйрутма: чыныгы сатып алуулар үчүн төлөм жана буйрутма серверин туташтырыңыз.",
        newsletterThanks: "Жазылганыңыз үчүн рахмат!"
    }

};


let currentLanguage = localStorage.getItem("techzone_language") || "en";

let cart = JSON.parse(localStorage.getItem("techzone_cart") || "[]");

let favorites = JSON.parse(
    localStorage.getItem("techzone_favorites") || "[]"
);

let visibleProducts = 24;

let currentProducts = [...window.TECHZONE_PRODUCTS];

let customReviews = JSON.parse(
    localStorage.getItem("techzone_reviews") || "[]"
);


function t(key) {
    return translations[currentLanguage][key] ||
        translations.en[key] ||
        key;
}


function categoryName(id) {
    const category = window.TECHZONE_CATEGORIES.find(
        item => item.id === id
    );

    return category ? category.name[currentLanguage] : id;
}


function saveCart() {
    localStorage.setItem("techzone_cart", JSON.stringify(cart));
}


function saveFavorites() {
    localStorage.setItem(
        "techzone_favorites",
        JSON.stringify(favorites)
    );
}


function toast(message) {
    const element = $("#toast");

    element.textContent = message;
    element.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        element.classList.remove("show");
    }, 2600);
}


// LANGUAGE

function setLanguage(language) {

    if (!translations[language]) return;

    currentLanguage = language;

    localStorage.setItem("techzone_language", language);

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }

    });

    $("#searchInput").placeholder =
        language === "ru" ? "Поиск товаров..." :
        language === "ky" ? "Товар издөө..." :
        "Search products...";

    $("#maxPrice").placeholder = t("maxPrice");

    $("#languageSelect").value = language;

    renderCategories();
    renderProducts();
    renderCart();
    renderReviews();
}


$("#languageSelect").addEventListener("change", event => {
    setLanguage(event.target.value);
});


// CATEGORIES

function renderCategories() {

    $("#categoriesGrid").innerHTML =
        window.TECHZONE_CATEGORIES.slice(0, 12).map(category => `

            <article class="category-card"
                data-category="${category.id}">

                <img
                    src="${category.image}"
                    alt="${category.name[currentLanguage]}"
                    loading="lazy"
                >

                <h3>${category.name[currentLanguage]}</h3>

            </article>

        `).join("");


    document.querySelectorAll(".category-card").forEach(card => {

        card.addEventListener("click", () => {

            $("#categoryFilter").value = card.dataset.category;

            applyFilters();

            $("#catalog").scrollIntoView({ behavior: "smooth" });

        });

    });


    $("#categoryFilter").innerHTML = `
        <option value="all">${t("allCategories")}</option>
        ${window.TECHZONE_CATEGORIES.map(category => `
            <option value="${category.id}">
                ${category.name[currentLanguage]}
            </option>
        `).join("")}
    `;

}


// PRODUCTS

function renderProducts() {

    const products = currentProducts.slice(0, visibleProducts);

    $("#productsGrid").innerHTML = products.length ? products.map(product => `

        <article class="product-card">

            <div class="product-image" data-open="${product.id}">

                <span class="product-badge">TECHZONE</span>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <button
                    class="favorite-product ${favorites.includes(product.id) ? "active" : ""}"
                    data-favorite="${product.id}"
                    aria-label="Add to favorites"
                >
                    ${favorites.includes(product.id) ? "♥" : "♡"}
                </button>

            </div>

            <div class="product-info">

                <span class="product-category">
                    ${categoryName(product.category)}
                </span>

                <h3>${product.name}</h3>

                <div class="product-rating">
                    ★★★★★ ${product.rating}
                    (${product.reviews})
                </div>

                <div class="product-bottom">

                    <span class="product-price">
                        $${product.price.toLocaleString()}
                    </span>

                    <button
                        class="add-cart"
                        data-add="${product.id}"
                    >
                        + ${t("add")}
                    </button>

                </div>

            </div>

        </article>

    `).join("") : `<p>${t("emptySearch")}</p>`;


    $("#productTotal").textContent =
        `${currentProducts.length.toLocaleString()} PRODUCTS`;

    $("#loadMore").style.display =
        visibleProducts >= currentProducts.length ? "none" : "inline-block";


    document.querySelectorAll("[data-add]").forEach(button => {

        button.addEventListener("click", event => {

            event.stopPropagation();

            addToCart(Number(button.dataset.add));

        });

    });


    document.querySelectorAll("[data-favorite]").forEach(button => {

        button.addEventListener("click", event => {

            event.stopPropagation();

            toggleFavorite(Number(button.dataset.favorite));

        });

    });


    document.querySelectorAll("[data-open]").forEach(element => {

        element.addEventListener("click", () => {
            openProduct(Number(element.dataset.open));
        });

    });

}


function applyFilters() {

    const category = $("#categoryFilter").value;

    const sort = $("#sortFilter").value;

    const query = $("#searchInput").value.trim().toLowerCase();

    const maxPrice = Number($("#maxPrice").value);

    currentProducts = window.TECHZONE_PRODUCTS.filter(product => {

        const matchesCategory =
            category === "all" || product.category === category;

        const matchesSearch =
            product.name.toLowerCase().includes(query) ||
            categoryName(product.category).toLowerCase().includes(query);

        const matchesPrice =
            !maxPrice || product.price <= maxPrice;

        return matchesCategory && matchesSearch && matchesPrice;

    });


    if (sort === "cheap") {
        currentProducts.sort((a, b) => a.price - b.price);
    }

    if (sort === "expensive") {
        currentProducts.sort((a, b) => b.price - a.price);
    }

    if (sort === "newest") {
        currentProducts.sort((a, b) => b.id - a.id);
    }

    if (sort === "popular") {
        currentProducts.sort((a, b) => b.rating - a.rating);
    }

    visibleProducts = 24;

    renderProducts();

}


$("#applyFilters").addEventListener("click", applyFilters);

$("#searchButton").addEventListener("click", applyFilters);

$("#searchInput").addEventListener("keydown", event => {
    if (event.key === "Enter") applyFilters();
});

$("#loadMore").addEventListener("click", () => {
    visibleProducts += 24;
    renderProducts();
});

$("#searchToggle").addEventListener("click", () => {
    $("#searchPanel").classList.toggle("active");
    $("#searchInput").focus();
});


// CART

function addToCart(id) {

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ id, quantity: 1 });
    }

    saveCart();
    renderCart();

    toast(t("added"));

}


function changeQuantity(id, amount) {

    const item = cart.find(product => product.id === id);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(product => product.id !== id);
    }

    saveCart();
    renderCart();

}


function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();
    renderCart();

}


function renderCart() {

    const totalCount = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    $("#cartCount").textContent = totalCount;

    const total = cart.reduce((sum, item) => {

        const product = getProduct(item.id);

        return sum + (product ? product.price * item.quantity : 0);

    }, 0);


    $("#cartTotal").textContent = "$" + total.toLocaleString();


    if (!cart.length) {

        $("#cartItems").innerHTML =
            `<p>${t("emptyCart")}</p>`;

        return;

    }


    $("#cartItems").innerHTML = cart.map(item => {

        const product = getProduct(item.id);

        if (!product) return "";

        return `

            <div class="cart-item">

                <img src="${product.image}" alt="${product.name}">

                <div>

                    <h4>${product.name}</h4>

                    <p>$${product.price.toLocaleString()}</p>

                    <div class="quantity-controls">

                        <button data-minus="${product.id}">−</button>

                        <span>${item.quantity}</span>

                        <button data-plus="${product.id}">+</button>

                    </div>

                </div>

                <button
                    class="remove-item"
                    data-remove="${product.id}"
                >
                    ✕
                </button>

            </div>

        `;

    }).join("");


    document.querySelectorAll("[data-minus]").forEach(button => {
        button.addEventListener("click", () => {
            changeQuantity(Number(button.dataset.minus), -1);
        });
    });

    document.querySelectorAll("[data-plus]").forEach(button => {
        button.addEventListener("click", () => {
            changeQuantity(Number(button.dataset.plus), 1);
        });
    });

    document.querySelectorAll("[data-remove]").forEach(button => {
        button.addEventListener("click", () => {
            removeFromCart(Number(button.dataset.remove));
        });
    });

}


function getProduct(id) {
    return window.TECHZONE_PRODUCTS.find(product => product.id === id);
}


$("#cartButton").addEventListener("click", () => {
    $("#cartDrawer").classList.add("active");
    $("#overlay").classList.add("active");
});

function closeCart() {
    $("#cartDrawer").classList.remove("active");
    $("#overlay").classList.remove("active");
}

$("#closeCart").addEventListener("click", closeCart);
$("#overlay").addEventListener("click", closeCart);


// FAVORITES

function toggleFavorite(id) {

    if (favorites.includes(id)) {
        favorites = favorites.filter(item => item !== id);
    } else {
        favorites.push(id);
    }

    saveFavorites();

    $("#favoriteCount").textContent = favorites.length;

    renderProducts();

}


$("#favoriteCount").textContent = favorites.length;

$("#favoritesButton").addEventListener("click", () => {

    currentProducts = window.TECHZONE_PRODUCTS.filter(
        product => favorites.includes(product.id)
    );

    visibleProducts = currentProducts.length || 24;

    renderProducts();

    $("#catalog").scrollIntoView({ behavior: "smooth" });

});


// PRODUCT DETAILS

function openProduct(id) {

    const product = getProduct(id);

    if (!product) return;

    $("#productDetails").innerHTML = `

        <div class="detail-product">

            <img src="${product.image}" alt="${product.name}">

            <div>

                <span class="product-category">
                    ${categoryName(product.category)}
                </span>

                <h2>${product.name}</h2>

                <div class="product-rating">
                    ★★★★★ ${product.rating}
                </div>

                <span class="detail-price">
                    $${product.price.toLocaleString()}
                </span>

                <p>${product.description[currentLanguage]}</p>

                <br>

                <p>${product.specs[currentLanguage]}</p>

                <br>

                <button
                    class="checkout-button"
                    id="modalAddToCart"
                >
                    + ${t("add")}
                </button>

            </div>

        </div>

    `;

    $("#productModal").classList.add("active");

    $("#modalAddToCart").addEventListener("click", () => {
        addToCart(id);
        $("#productModal").classList.remove("active");
    });

}


$("#closeProductModal").addEventListener("click", () => {
    $("#productModal").classList.remove("active");
});


// ACCOUNT DEMO

$("#accountButton").addEventListener("click", () => {
    $("#accountModal").classList.add("active");
});

$("#closeAccount").addEventListener("click", () => {
    $("#accountModal").classList.remove("active");
});


$("#loginForm").addEventListener("submit", event => {

    event.preventDefault();

    const user = {
        name: $("#userName").value,
        email: $("#userEmail").value
    };

    localStorage.setItem("techzone_demo_user", JSON.stringify(user));

    $("#accountModal").classList.remove("active");

    toast(t("registered"));

});


// REVIEWS

function renderReviews() {

    const defaultReviews = [
        {
            text: t("reviewOne"),
            name: "Alex M."
        },
        {
            text: t("reviewTwo"),
            name: "Daniel K."
        },
        {
            text: t("reviewThree"),
            name: "Sarah L."
        }
    ];

    const allReviews = [...defaultReviews, ...customReviews];

    $("#reviewsGrid").innerHTML = allReviews.map(review => `

        <article class="review-card">

            <div class="stars">★★★★★</div>

            <p>${escapeHTML(review.text)}</p>

            <b>${escapeHTML(review.name)}</b>

            <small>TECHZONE customer</small>

        </article>

    `).join("");

}


$("#writeReview").addEventListener("click", () => {

    const text = prompt(t("reviewPrompt"));

    if (!text || !text.trim()) return;

    const user = JSON.parse(
        localStorage.getItem("techzone_demo_user") || "null"
    );

    customReviews.push({
        text: text.trim(),
        name: user?.name || "Customer"
    });

    localStorage.setItem(
        "techzone_reviews",
        JSON.stringify(customReviews)
    );

    renderReviews();

    toast(t("reviewSaved"));

});


function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[character]);

}


// CHECKOUT DEMO

$("#checkoutButton").addEventListener("click", () => {

    if (!cart.length) {
        toast(t("emptyCart"));
        return;
    }

    toast(t("orderDemo"));

});


// NEWSLETTER

$("#newsletterForm").addEventListener("submit", event => {

    event.preventDefault();

    toast(t("newsletterThanks"));

    event.target.reset();

});


// CHAT DEMO

$("#chatButton").addEventListener("click", () => {
    $("#chatWindow").classList.toggle("active");
});

$("#closeChat").addEventListener("click", () => {
    $("#chatWindow").classList.remove("active");
});


$("#chatForm").addEventListener("submit", event => {

    event.preventDefault();

    const input = $("#chatInput");

    const message = input.value.trim();

    if (!message) return;

    const element = document.createElement("p");

    element.className = "user-message";

    element.textContent = message;

    $("#chatMessages").appendChild(element);

    input.value = "";

    const answer = document.createElement("p");

    answer.className = "support-message";

    answer.textContent = t("messageSent");

    $("#chatMessages").appendChild(answer);

    $("#chatMessages").scrollTop =
        $("#chatMessages").scrollHeight;

});


// INITIALIZATION

function initialize() {

    $("#languageSelect").value = currentLanguage;

    $("#favoriteCount").textContent = favorites.length;

    renderCategories();

    renderProducts();

    renderCart();

    renderReviews();

    setLanguage(currentLanguage);

}

initialize();
