/*..... consumiendo la api de manera local ..... */
// let products = [
//     {
//         "id": 1,
//         "name": "Camiseta de manga corta con cuello redondo",
//         "price": 10,
//         "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/shirt1_prckre.png",
//         "category": "shirt",
//         "quantity": 5,
//         "description": "Esta camiseta básica presenta un corte regular y un cuello redondo clásico. Es ideal para el uso diario y se puede combinar con una amplia variedad de looks."
//     },
//     {
//         "id": 2,
//         "name": "Camiseta de manga larga con estampado gráfico",
//         "price": 15,
//         "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/shirt2_av4jld.png",
//         "category": "shirt",
//         "quantity": 3,
//         "description": "Perfecta para un look casual, esta camiseta de manga larga presenta un estampado gráfico llamativo en el pecho. Su ajuste regular y suave tejido de algodón la hacen cómoda y fácil de usar."
//     },
//     {
//         "id": 3,
//         "name": "Camiseta con detalle de encaje",
//         "price": 12,
//         "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/shirt3_wlm0h3.png",
//         "category": "shirt",
//         "quantity": 2,
//         "description": "Esta camiseta presenta un detalle de encaje en el escote y mangas. Su ajuste regular y tela suave la hacen cómoda y fácil de usar para cualquier ocasión."
//     },
//     {
//         "id": 4,
//         "name": "Camiseta de tirantes con espalda cruzada",
//         "price": 8,
//         "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/shirt4_cypl6n.png",
//         "category": "shirt",
//         "quantity": 10,
//         "description": "Con un toque de estilo femenino, esta camiseta de tirantes presenta una espalda cruzada con detalle de encaje. El ajuste es regular y la tela suave y cómoda."
//     },
//     {
//         "id": 5,
//         "name": "Camiseta con hombros descubiertos",
//         "price": 12,
//         "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/shirt5_cnwq0w.png",
//         "category": "shirt",
//         "quantity": 6,
//         "description": "Con un toque femenino y coqueto, esta camiseta presenta hombros descubiertos y un ajuste regular. Su tela suave y transpirable la hace ideal para los días calurosos."
//     },
//     {
//         "id": 6,
//         "name": "Camiseta con cuello alto y manga larga",
//         "price": 18,
//         "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270465/eCommerce/shirt6_pnwws6.png",
//         "category": "shirt",
//         "quantity": 4,
//         "description": "Esta camiseta de manga larga presenta un cuello alto y ajuste regular. Es ideal para un look elegante y cómodo."
//     },
//     {
//         "id": 7,
//         "name": "Camiseta con cuello en V y manga corta",
//         "price": 9,
//         "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270450/eCommerce/shirt7_ofhlzd.png",
//         "category": "shirt",
//         "quantity": 8,
//         "description": "Esta camiseta clásica presenta un corte regular, cuello en V y mangas cortas. Es fácil de usar y combinar con diferentes looks."
//     },
//     {
//         "id": 8,
//         "name": "Hoddie con estampado de leopardo",
//         "price": 20,
//         "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270465/eCommerce/hoddie4_wvwaiv.png",
//         "category": "hoddie",
//         "quantity": 8,
//         "description": "Este hoddie presenta un estampado de leopardo y está hecho de una mezcla suave de algodón y poliéster. Es ideal para un look casual y cómodo."
//     },
//     {
//         "id": 9,
//         "name": "Hoddie con cremallera",
//         "price": 25,
//         "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270465/eCommerce/hoddie3_xboa0e.png",
//         "category": "hoddie",
//         "quantity": 10,
//         "description": "Este hoddie presenta una cremallera frontal y bolsillos laterales. Está hecho de una mezcla de algodón y poliéster para mayor comodidad y durabilidad."
//     },
//     {
//         "id": 10,
//         "name": "Hoddie con capucha y cordón ajustable",
//         "price": 30,
//         "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270465/eCommerce/hoddie2_utnolh.png",
//         "category": "hoddie",
//         "quantity": 6,
//         "description": "Este hoddie presenta una capucha con cordón ajustable y un corte holgado para mayor comodidad. Está hecho de una mezcla suave de algodón y poliéster."
//     },
//     {
//         "id": 11,
//         "name": "Hoddie con estampado de marca",
//         "price": 35,
//         "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270465/eCommerce/hoddie1_sxv2ce.png",
//         "category": "hoddie",
//         "quantity": 4,
//         "description": "Este hoddie presenta un estampado de marca en la parte delantera y está hecho de una mezcla suave de algodón y poliéster. Es ideal para un look casual y moderno."
//     },
//     {
//         "id": 12,
//         "name": "Hoddie con cierre de botones",
//         "price": 40,
//         "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/hoddie5_sqnwic.png",
//         "category": "hoddie",
//         "quantity": 3,
//         "description": "Este hoddie presenta un cierre de botones en la parte delantera y bolsillos laterales. Está hecho de una mezcla suave de algodón y poliéster para mayor comodidad y durabilidad."
//     },
//     {
//         "id": 13,
//         "name": "Hoddie con estampado de camuflaje",
//         "price": 45,
//         "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/hoddie6_i7gdrl.png",
//         "category": "hoddie",
//         "quantity": 7,
//         "description": "Este hoddie presenta un estampado de camuflaje y está hecho de una mezcla suave de algodón y poliéster. Es ideal para un look casual y moderno."
//     },
//     {
//         "id": 14,
//         "name": "Sweater de punto grueso",
//         "price": 10,
//         "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270450/eCommerce/sweater1_o8qh0p.png",
//         "category": "sweater",
//         "quantity": 5,
//         "description": "Este sweater de punto grueso es ideal para los días fríos. Está hecho de una mezcla suave de lana y acrílico para mayor comodidad y calidez."
//     },
//     {
//         "id": 15,
//         "name": "Sweater de cuello alto",
//         "price": 15,
//         "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270450/eCommerce/sweater2_y7yzqs.png",
//         "category": "sweater",
//         "quantity": 7,
//         "description": "Este sweater de cuello alto está hecho de una mezcla suave de lana y acrílico para mayor comodidad y calidez. Es ideal para un look elegante y cálido."
//     },
//     {
//         "id": 16,
//         "name": "Sweater de tejido fino",
//         "price": 20,
//         "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270450/eCommerce/sweater3_nnfctl.png",
//         "category": "sweater",
//         "quantity": 3,
//         "description": "Este sweater de tejido fino es ideal para los días frescos. Está hecho de una mezcla suave de lana y acrílico para mayor comodidad y calidez."
//     },
//     {
//         "id": 17,
//         "name": "Sweater con estampado de rayas",
//         "price": 25,
//         "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270450/eCommerce/sweater4_kxcvab.png",
//         "category": "sweater",
//         "quantity": 6,
//         "description": "Este sweater presenta un estampado de rayas en la parte delantera y está hecho de una mezcla suave de lana y acrílico para mayor comodidad y calidez. Es ideal para un look casual y moderno."
//     },
//     {
//         "id": 18,
//         "name": "Sweater con cuello redondo",
//         "price": 30,
//         "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270450/eCommerce/sweater5_hj94db.png",
//         "category": "sweater",
//         "quantity": 4,
//         "description": "Este sweater con cuello redondo está hecho de una mezcla suave de lana y acrílico para mayor comodidad y calidez. Es ideal para un look casual y cómodo."
//     }
// ]

/*..... ventana de carga loading ..... */

function loading() {
    setTimeout(() => {
        const loadingHTML = document.querySelector(".loading");
        loadingHTML.style.display = "none";
        // loadingHTML.style.visibility = "hidden";
        // loadingHTML.style.opacity = "0";
    }, 2500);
}


/*..... consumiendo la api de manera remota ..... */

async function allProducts() {
    try {
        const dataProducts = await fetch("https://ecommercebackend.fundamentos-29.repl.co/");

        const res = await dataProducts.json();
        window.localStorage.setItem("products", JSON.stringify(res))
        return res;

    } catch (error) {
        console.log(error);

    }
}

/*.....Pintando la dataBase en Cards..... */

function printProducts(dataBase) {
    const productsHTML = document.querySelector(".products")

    let html = ""

    dataBase.products.forEach(product => {

        const { id, name, price, image, category, quantity, description } = product
        html += `
            <div class="cards_Products ${category}">
                <div class="img_Product">
                    <img src="${image}" alt="img">
                       
                </div>

                <div class="info_Product">
                ${quantity > 0 ?
                `<div class="button_add">
                        <i class='bx bx-plus' id="${id}"></i>
                    </div>` :
                `<div class="button_add button_add-hiden">
                        <i class='bx bx-plus' id="${id}"></i>
                    </div>`}
                    <div class="price_stock">
                        <h3>$${price}.00</h3>
                        <h5>${quantity ? `Stock: ${quantity}` : "<span class='sold_Out'>Sold out</span>"}</h5>
                    </div>
                    <div class="description_Product">
                        <p class="name_product" id="${id}">${name} </p>
                    </div>
                </div>
            </div>
    `

        productsHTML.innerHTML = html

    });

}

/*..... Adicionar || quitar clase .view_cart para ver o esconder carrito ..... */

function viewCart() {
    const bagajeIconHTML = document.querySelector(".bx-shopping-bag")
    const cartContentHTML = document.querySelector(".cart_content")

    bagajeIconHTML.addEventListener("click", function () {
        cartContentHTML.classList.toggle("view_cart")
    })
}

/*..... Adicionar || quitar clase .view_menu_products para ver o esconder menu  ..... */

function viewMenu() {
    const menuProductsHTML = document.querySelector(".menu_Products")
    const bxsDashboardHTML = document.querySelector(".bxs-dashboard")

    bxsDashboardHTML.addEventListener("click", function () {
        menuProductsHTML.classList.toggle("view_menu_Products")
    })
}

/*..... darkMode  ..... */

function darkMode() {
    const bxMoonHTML = document.querySelector("#icon_moon");
    const bxSunHTML = document.querySelector("#icon_sun");
    const darkMode = document.querySelector(':root'); // Haca estoy seleccionando el :root

    // verificar el valor de darkMode alojado en el local storage
    const darkModeStatus = JSON.parse(localStorage.getItem("mode")) || "ligth"
    if (darkModeStatus === "dark") {
        darkMode.classList.add("dark");
        bxMoonHTML.classList.add("hide_icon_darkmode");
        bxSunHTML.classList.remove("hide_icon_darkmode");
    } else {
        darkMode.classList.remove("dark");
        bxSunHTML.classList.add("hide_icon_darkmode");
        bxMoonHTML.classList.remove("hide_icon_darkmode");
    }

    // Condiciones para boton pasar de light a dark
    bxMoonHTML.addEventListener("click", function () {
        bxMoonHTML.classList.add("hide_icon_darkmode");
        bxSunHTML.classList.remove("hide_icon_darkmode");
        darkMode.classList.add("dark");
        localStorage.setItem("mode", JSON.stringify("dark"));

    })

    // Condiciones para pasar de light a dark
    bxSunHTML.addEventListener("click", function () {
        bxSunHTML.classList.add("hide_icon_darkmode");
        bxMoonHTML.classList.remove("hide_icon_darkmode");
        darkMode.classList.remove("dark");
        localStorage.setItem("mode", JSON.stringify("light"));
    });

}

/*..... Adicionar || quitar clase .header_active para ver o esconder efecto header   ..... */

function headerEfect() {
    const headerHTML = document.querySelector("header")

    window.addEventListener("scroll", function () {
        // console.log(window.scrollY);

        if (window.scrollY > 55) {
            headerHTML.classList.add("header_active")
        } else {
            headerHTML.classList.remove("header_active")
        }
    })

}

/*..... Filtrar productos por categoria && Adicionar || quitar clase .button_filter--active para ver filtro activo   ..... */

function handleFilter() {
    const filterProductsHTML = document.querySelectorAll(".button_filter");

    filterProductsHTML.forEach((filter) => {
        filter.addEventListener("click", (e) => {
            filterProductsHTML.forEach((filter) =>
                filter.classList.remove("button_filter--active")
            );
            e.currentTarget.classList.add("button_filter--active");
        });
    });


    mixitup(".products", {
        selectors: {
            target: ".cards_Products",
        },
        animation: {
            duration: 300,
        },
    });


}


/*..... Adicionar los productos al carrito desde las cards..... */

function addProductsToCard(dataBase) {

    const productsHTML = document.querySelector(".products")
    productsHTML.addEventListener("click", function (e) {

        if (e.target.classList.contains("bx-plus")) {
            const id = Number(e.target.id)

            const productSearch = dataBase.products.find((product) => product.id === id);
            if (dataBase.cart[productSearch.id]) {
                if (productSearch.quantity === dataBase.cart[productSearch.id].cuanty)
                    return Swal.fire("Producto sin stock")
                dataBase.cart[productSearch.id].cuanty++
            } else {
                dataBase.cart[productSearch.id] = { ...productSearch, cuanty: 1 }
            }

            localStorage.setItem("cart", JSON.stringify(dataBase.cart))
            printProductsInCart(dataBase)
            printTotalInCart(dataBase)
            handlePrintCuantyProducts(dataBase)

        }
    });
}

/*..... Pintando los productos en el carrito ..... */

function printProductsInCart(dataBase) {

    const cartProductsHTML = document.querySelector(".cart_products")

    let html = ""


    for (const product in dataBase.cart) {
        const { cuanty, price, name, image, id, quantity } = dataBase.cart[product];
        const sub = cuanty * price;
        html += `
        <div class="product_InCart">

             <div class="img_ProductInCart">
                    <img src="${image}" alt="imgage">
             </div>

            <div class="info_ProductInCart">

                 <h3>${name}</h3>
                  <p>Stock: ${quantity} | <span>$${price}.00</span></p>
                 <p>Subtotal: $${sub}.00 </p>
                 <div class="add_Sub_Clear" id="${id}">
                      <i class='bx bx-minus'></i>
                      <p>${cuanty} Units</p>
                      <i class='bx bx-plus'></i>
                      <i class='bx bx-trash'></i>
                 </div>
            </div>
        </div>
                `
    }
    cartProductsHTML.innerHTML = html
}

/*..... Adicionar, restar, eliminar los productor desde el carrito ..... */

function handleProductsInCart(dataBase) {
    const cartProductsHTML = document.querySelector(".cart_products")

    cartProductsHTML.addEventListener("click", function (e) {

        if (e.target.classList.contains("bx-plus")) {
            const id = Number(e.target.parentElement.id);

            const productSearch = dataBase.products.find((product) => product.id === id);
            if (productSearch.quantity === dataBase.cart[productSearch.id].cuanty)
                return Swal.fire("Producto sin stock")

            dataBase.cart[id].cuanty++
        }

        if (e.target.classList.contains("bx-minus")) {
            const id = Number(e.target.parentElement.id)

            if (dataBase.cart[id].cuanty === 1) {

                Swal.fire({
                    title: "Seguro deseas eliminar el producto?",
                    showCancelButton: true,
                    confirmButtonText: 'Eliminar',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {

                    if (result.isConfirmed) {
                        delete dataBase.cart[id];

                        localStorage.setItem("cart", JSON.stringify(dataBase.cart))
                        printProductsInCart(dataBase)
                        printTotalInCart(dataBase)
                        handlePrintCuantyProducts(dataBase)

                    } else if (result.isDenied) {
                        return;
                    }


                })
            } else {
                dataBase.cart[id].cuanty--;
            }

        }

        if (e.target.classList.contains("bx-trash")) {
            const id = Number(e.target.parentElement.id)

            Swal.fire({
                title: "Seguro deseas eliminar el producto?",
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {

                if (result.isConfirmed) {
                    delete dataBase.cart[id];

                    localStorage.setItem("cart", JSON.stringify(dataBase.cart))
                    printProductsInCart(dataBase)
                    printTotalInCart(dataBase)
                    handlePrintCuantyProducts(dataBase)
                } else if (result.isDenied) {
                    return;
                }


            })
        }

        localStorage.setItem("cart", JSON.stringify(dataBase.cart))
        printProductsInCart(dataBase)
        printTotalInCart(dataBase)
        handlePrintCuantyProducts(dataBase)
    })

}

/*..... Pintar total productos y precio total productos en el carrito ..... */

function printTotalInCart(dataBase) {
    const totalProductsHTML = document.querySelector(".total_products")
    const totalPriceHTML = document.querySelector(".total_price")

    let totalProducts = 0
    let totalPrice = 0

    for (const product in dataBase.cart) {
        const { cuanty, price } = dataBase.cart[product];
        totalPrice += cuanty * price;
        totalProducts += cuanty;

    }

    totalProductsHTML.textContent = totalProducts + "  productos"
    totalPriceHTML.textContent = "$" + totalPrice + ".00"
}

/*..... Comprar desde el carrito ..... */

function handleTotal(dataBase) {
    const btnBuyHTML = document.querySelector(".btn_buy");
    btnBuyHTML.addEventListener("click", function () {

        if (!Object.values(dataBase.cart).length)
            return Swal.fire("Tu carrito de compras esta vacio");


        Swal.fire({
            title: "Seguro que quieres comprar?",
            showCancelButton: true,
            confirmButtonText: 'Comprar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {

            if (result.isConfirmed) {
                const currentProducts = []

                for (const product of dataBase.products) {
                    const productInCart = dataBase.cart[product.id]
                    if (product.id === productInCart?.id) {
                        currentProducts.push({
                            ...product,
                            quantity: product.quantity - productInCart.cuanty,
                        })
                    } else {
                        currentProducts.push(product)
                    }
                }

                dataBase.products = currentProducts;
                dataBase.cart = {};
                localStorage.setItem("products", JSON.stringify(dataBase.products));
                localStorage.setItem("cart", JSON.stringify(dataBase.cart));

                printTotalInCart(dataBase);
                printProductsInCart(dataBase);
                printProducts(dataBase);
                handlePrintCuantyProducts(dataBase);

            } else if (result.isDenied) {
                return;
            }


        })

        printTotalInCart(dataBase);
        printProductsInCart(dataBase);
        printProducts(dataBase);
        handlePrintCuantyProducts(dataBase);


    })
}

/*..... Mostrar cantidad de productos en icono de carrito ..... */

function handlePrintCuantyProducts(dataBase) {
    const cuantyProductsHMTL = document.querySelector(".cuanty_products");

    let cuanty = 0;

    for (const product in dataBase.cart) {
        cuanty += dataBase.cart[product].cuanty;
    }

    cuantyProductsHMTL.textContent = cuanty;
}

/*..... Funcion main "inicio de todo el codigo" ..... */

async function main() {
    const dataBase = {
        products: JSON.parse(window.localStorage.getItem("products")) || await allProducts(),
        cart: JSON.parse(localStorage.getItem("cart")) || {},
    }

    printProducts(dataBase)
    loading();
    viewCart()
    viewMenu()
    darkMode();
    headerEfect()
    handleFilter();
    addProductsToCard(dataBase);
    printProductsInCart(dataBase);
    handleProductsInCart(dataBase);
    printTotalInCart(dataBase);
    handleTotal(dataBase);
    handlePrintCuantyProducts(dataBase);



    const modalProductsHTML = document.querySelector(".modal_products");
    const productsHTML = document.querySelector(".products");


    let html = ""

    productsHTML.addEventListener("click", function (e) {

        if (e.target.classList.contains("name_product")) {
            modalProductsHTML.classList.remove("modal_hidden")
            const idSearch = Number(e.target.id);

            const productSearch = dataBase.products.find((product) => product.id === idSearch);

            const { id, name, price, image, category, description, quantity } = productSearch

            html =
                `
                <div class="card_modal">
                    <div class="image_modal">
                        <img src="${image}" alt="imagen">
                        <i class='bx bxs-x-circle'></i>
                    </div>
                    <div class="modal_info">
                        <h3>${name}</h3>
                        <p>${description}</p>
                    </div>
                    <div class="modal_price--stock">
                        <h3>${price}.00</h3>
                        <p>Stock: ${quantity}</p>
                    </div>
                </div>
                `
            modalProductsHTML.innerHTML = html

            const buttonXHTML = document.querySelector(".bxs-x-circle")
            buttonXHTML.addEventListener("click", function () {
                modalProductsHTML.classList.add("modal_hidden")
            })
        }
    });



}
main()

