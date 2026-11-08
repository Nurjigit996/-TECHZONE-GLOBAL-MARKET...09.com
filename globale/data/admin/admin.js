const ADMIN_KEYS = {
    products: "techzone_products",
    orders: "techzone_orders",
    customers: "techzone_customers",
    reviews: "techzone_reviews",
    settings: "techzone_settings"
};


function readData(key, fallback = []) {

    try {
        const value = JSON.parse(localStorage.getItem(key));

        return value ?? fallback;

    } catch {
        return fallback;
    }

}


function saveData(key, data) {

    localStorage.setItem(key, JSON.stringify(data));

}


let products = readData(
    ADMIN_KEYS.products,
    window.TECHZONE_PRODUCTS || []
);

let orders = readData(ADMIN_KEYS.orders);

let customers = readData(ADMIN_KEYS.customers);

let reviews = readData(ADMIN_KEYS.reviews);


let settings = readData(
    ADMIN_KEYS.settings,
    {
        name: "TECHZONE GLOBAL MARKET",
        currency: "USD",
        email: "",
        whatsapp: "",
        instagram: ""
    }
);


function notify(message) {

    const element = document.getElementById("adminToast");

    element.textContent = message;

    element.classList.add("show");

    clearTimeout(window.adminToastTimer);

    window.adminToastTimer = setTimeout(() => {
        element.classList.remove("show");
    }, 2500);

}


// NAVIGATION

document.querySelectorAll(".nav-item").forEach(button => {

    button.addEventListener("click", () => {

        openPage(button.dataset.page);

    });

});


function openPage(page) {

    document.querySelectorAll(".admin-page").forEach(section => {
        section.classList.remove("active");
    });

    document.querySelectorAll(".nav-item").forEach(button => {
        button.classList.remove("active");
    });

    const section = document.getElementById(page);

    if (!section) return;

    section.classList.add("active");

    const navButton = document.querySelector(
        `.nav-item[data-page="${page}"]`
    );

    if (navButton) {
        navButton.classList.add("active");
    }

    document.getElementById("pageTitle").textContent =
        page.charAt(0).toUpperCase() + page.slice(1);

}


document.querySelectorAll("[data-go]").forEach(button => {

    button.addEventListener("click", () => {
        openPage(button.dataset.go);
    });

});


// DASHBOARD

function renderDashboard() {

    document.getElementById("statProducts").textContent =
        products.length.toLocaleString();

    document.getElementById("statOrders").textContent =
        orders.length.toLocaleString();

    document.getElementById("statCustomers").textContent =
        customers.length.toLocaleString();

    document.getElementById("statReviews").textContent =
        reviews.length.toLocaleString();


    document.getElementById("recentOrders").innerHTML =

        orders.slice(-5).reverse().map(order => `

            <tr>

                <td>#${escapeHTML(order.id)}</td>

                <td>${escapeHTML(order.customer || "Customer")}</td>

                <td>${escapeHTML(order.date || "-")}</td>

                <td>$${Number(order.total || 0).toLocaleString()}</td>

                <td>
                    <span class="status">
                        ${escapeHTML(order.status || "Pending")}
                    </span>
                </td>

            </tr>

        `).join("") || `
            <tr>
                <td colspan="5">No orders yet.</td>
            </tr>
        `;

}


// PRODUCTS

function renderProducts(search = "") {

    const query = search.toLowerCase();

    const filtered = products.filter(product =>
        String(product.name).toLowerCase().includes(query)
    );


    document.getElementById("productCount").textContent =
        `${filtered.length} products`;


    document.getElementById("productsTable").innerHTML =

        filtered.slice(0, 500).map(product => `

            <tr>

                <td>
                    <img
                        class="table-image"
                        src="${escapeHTML(product.image || "")}"
                        alt=""
                    >
                </td>

                <td>${escapeHTML(product.name)}</td>

                <td>${escapeHTML(product.category)}</td>

                <td>$${Number(product.price).toLocaleString()}</td>

                <td>${Number(product.stock || 0)}</td>

                <td>

                    <div class="action-buttons">

                        <button data-edit="${product.id}">
                            Edit
                        </button>

                        <button
                            class="delete-button"
                            data-delete="${product.id}"
                        >
                            Delete
                        </button>

                    </div>

                </td>

            </tr>

        `).join("") || `
            <tr>
                <td colspan="6">No products found.</td>
            </tr>
        `;


    document.querySelectorAll("[data-edit]").forEach(button => {

        button.addEventListener("click", () => {

            editProduct(Number(button.dataset.edit));

        });

    });


    document.querySelectorAll("[data-delete]").forEach(button => {

        button.addEventListener("click", () => {

            deleteProduct(Number(button.dataset.delete));

        });

    });

}


document.getElementById("productSearch").addEventListener(
    "input",
    event => renderProducts(event.target.value)
);


// PRODUCT FORM

function populateCategorySelect() {

    const select = document.getElementById("productCategory");

    select.innerHTML = window.TECHZONE_CATEGORIES.map(category => `

        <option value="${category.id}">
            ${category.name.en}
        </option>

    `).join("");

}


function openProductForm(product = null) {

    populateCategorySelect();

    document.getElementById("productModalTitle").textContent =
        product ? "Edit Product" : "Add Product";

    document.getElementById("editProductId").value =
        product?.id ?? "";

    document.getElementById("productName").value =
        product?.name ?? "";

    document.getElementById("productCategory").value =
        product?.category ?? window.TECHZONE_CATEGORIES[0].id;

    document.getElementById("productPrice").value =
        product?.price ?? "";

    document.getElementById("productOldPrice").value =
        product?.oldPrice ?? "";

    document.getElementById("productImage").value =
        product?.image ?? "";

    document.getElementById("productStock").value =
        product?.stock ?? 10;

    document.getElementById("productDescription").value =
        typeof product?.description === "string"
            ? product.description
            : product?.description?.en ?? "";

    document.getElementById("productModal").classList.add("active");

}


document.getElementById("addProduct").addEventListener("click", () => {

    openProductForm();

});


function editProduct(id) {

    const product = products.find(item => item.id === id);

    if (product) openProductForm(product);

}


document.getElementById("closeProduct").addEventListener("click", () => {

    document.getElementById("productModal").classList.remove("active");

});


document.getElementById("productForm").addEventListener(
    "submit",
    event => {

        event.preventDefault();

        const idValue = document.getElementById("editProductId").value;

        const existingId = idValue ? Number(idValue) : null;

        const description = document.getElementById(
            "productDescription"
        ).value;

        const product = {

            id: existingId || Date.now(),

            name: document.getElementById("productName").value.trim(),

            category: document.getElementById("productCategory").value,

            price: Number(document.getElementById("productPrice").value),

            oldPrice: Number(
                document.getElementById("productOldPrice").value
            ) || 0,

            image: document.getElementById("productImage").value.trim(),

            stock: Number(document.getElementById("productStock").value),

            description: {
                en: description,
                ru: description,
                ky: description
            },

            specs: {
                en: "Product specifications",
                ru: "Характеристики товара",
                ky: "Товардын мүнөздөмөлөрү"
            },

            rating: 5,
            reviews: 0

        };


        if (existingId) {

            products = products.map(item =>
                item.id === existingId ? product : item
            );

        } else {

            products.unshift(product);

        }


        saveData(ADMIN_KEYS.products, products);

        document.getElementById("productModal").classList.remove("active");

        renderProducts();

        renderDashboard();

        notify("Product saved successfully!");

    }

);


function deleteProduct(id) {

    if (!confirm("Delete this product?")) return;

    products = products.filter(item => item.id !== id);

    saveData(ADMIN_KEYS.products, products);

    renderProducts();

    renderDashboard();

    notify("Product deleted.");

}


// CATEGORIES

function renderCategories() {

    document.getElementById("categoriesTable").innerHTML =

        window.TECHZONE_CATEGORIES.map(category => `

            <article class="admin-category">

                <b>${escapeHTML(category.name.en)}</b>

                <small>Category ID: ${escapeHTML(category.id)}</small>

            </article>

        `).join("");

}


document.getElementById("addCategory").addEventListener("click", () => {

    const name = prompt("Enter category name:");

    if (!name || !name.trim()) return;

    const id = name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");

    if (window.TECHZONE_CATEGORIES.some(item => item.id === id)) {
        notify("This category already exists.");
        return;
    }

    window.TECHZONE_CATEGORIES.push({

        id,

        name: {
            en: name.trim(),
            ru: name.trim(),
            ky: name.trim()
        },

        image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500"

    });

    saveData("techzone_categories", window.TECHZONE_CATEGORIES);

    renderCategories();

    populateCategorySelect();

    notify("Category added.");

});


// ORDERS

function renderOrders() {

    document.getElementById("ordersTable").innerHTML =

        orders.map(order => `

            <tr>

                <td>#${escapeHTML(order.id)}</td>

                <td>${escapeHTML(order.customer || "-")}</td>

                <td>${escapeHTML(order.email || "-")}</td>

                <td>$${Number(order.total || 0).toLocaleString()}</td>

                <td>
                    <span class="status">
                        ${escapeHTML(order.status || "Pending")}
                    </span>
                </td>

                <td>

                    <select data-order-status="${escapeHTML(order.id)}">

                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>

                    </select>

                </td>

            </tr>

        `).join("") || `
            <tr>
                <td colspan="6">No orders yet.</td>
            </tr>
        `;


    document.querySelectorAll("[data-order-status]").forEach(select => {

        const order = orders.find(
            item => String(item.id) === select.dataset.orderStatus
        );

        if (order) select.value = order.status || "Pending";


        select.addEventListener("change", () => {

            if (!order) return;

            order.status = select.value;

            saveData(ADMIN_KEYS.orders, orders);

            renderDashboard();

            notify("Order status updated.");

        });

    });

}


// CUSTOMERS

function renderCustomers() {

    document.getElementById("customersTable").innerHTML =

        customers.map(customer => `

            <tr>

                <td>${escapeHTML(customer.name || "-")}</td>

                <td>${escapeHTML(customer.email || "-")}</td>

                <td>${escapeHTML(customer.date || "-")}</td>

            </tr>

        `).join("") || `
            <tr>
                <td colspan="3">No customers yet.</td>
            </tr>
        `;

}


// REVIEWS

function renderReviews() {

    document.getElementById("reviewsTable").innerHTML =

        reviews.map((review, index) => `

            <article class="admin-review">

                <div>

                    <b>${escapeHTML(review.name || "Customer")}</b>

                    <p>${escapeHTML(review.text || "")}</p>

                    <small>Customer review</small>

                </div>

                <button data-review-delete="${index}">
                    Delete
                </button>

            </article>

        `).join("") || "<p>No reviews yet.</p>";


    document.querySelectorAll("[data-review-delete]").forEach(button => {

        button.addEventListener("click", () => {

            const index = Number(button.dataset.reviewDelete);

            if (!confirm("Delete this review?")) return;

            reviews.splice(index, 1);

            saveData(ADMIN_KEYS.reviews, reviews);

            renderReviews();

            renderDashboard();

            notify("Review deleted.");

        });

    });

}


// SETTINGS

function loadSettings() {

    document.getElementById("storeName").value =
        settings.name || "TECHZONE GLOBAL MARKET";

    document.getElementById("storeCurrency").value =
        settings.currency || "USD";

    document.getElementById("supportEmail").value =
        settings.email || "";

    document.getElementById("whatsappNumber").value =
        settings.whatsapp || "";

    document.getElementById("instagramUrl").value =
        settings.instagram || "";

}


document.getElementById("saveSettings").addEventListener("click", () => {

    settings = {

        name: document.getElementById("storeName").value,

        currency: document.getElementById("storeCurrency").value,

        email: document.getElementById("supportEmail").value,

        whatsapp: document.getElementById("whatsappNumber").value,

        instagram: document.getElementById("instagramUrl").value

    };

    saveData(ADMIN_KEYS.settings, settings);

    notify("Settings saved!");

});


// SECURITY AGAINST HTML INJECTION

function escapeHTML(value) {

    return String(value ?? "").replace(/[&<>"']/g, character => ({

        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"

    })[character]);

}


// INITIALIZATION

function initializeAdmin() {

    renderDashboard();

    renderProducts();

    renderCategories();

    renderOrders();

    renderCustomers();

    renderReviews();

    loadSettings();

}

initializeAdmin();