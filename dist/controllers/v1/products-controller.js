"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.patchProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const products_1 = require("../../data/products");
const getProducts = (req, res) => {
    const itemsPerPages = 6;
    const page = parseInt(req.query.page);
    const start = (page - 1) * itemsPerPages;
    const total = products_1.products.length;
    const end = page * itemsPerPages;
    res.send({
        "page": page, "per_page": itemsPerPages, "total": total, "total_pages": Math.ceil(products_1.products.length / itemsPerPages), "data": products_1.products.slice(start, end), "support": { "url": "https://reqres.in/#support-heading", "text": "To keep ReqRes free, contributions towards server costs are appreciated!" }
    });
};
exports.getProducts = getProducts;
const getProductById = (req, res) => {
    const { productId } = req.params;
    const index = products_1.products.findIndex((item) => item.id === parseInt(productId));
    if (index != -1) {
        res.send({ data: products_1.products[index] });
    }
    else {
        res.status(404).send({});
    }
};
exports.getProductById = getProductById;
const createProduct = (req, res) => {
    const { name, year, color, pantone_value } = req.body;
    const newProduct = {
        id: products_1.products.length + 1,
        name,
        year,
        color,
        pantone_value
    };
    products_1.products.push(newProduct);
    res.send(newProduct);
};
exports.createProduct = createProduct;
const updateProduct = (req, res) => {
    const id = parseInt(req.params.productId);
    const { name, year, color, pantone_value } = req.body;
    const index = products_1.products.findIndex((item) => item.id == id);
    if (index != -1) {
        products_1.products[index] = {
            id,
            name,
            year,
            color,
            pantone_value
        };
        res.send({ data: products_1.products[index] });
    }
    else {
        res.status(404).send({});
    }
};
exports.updateProduct = updateProduct;
const patchProduct = (req, res) => {
    const id = parseInt(req.params.productId);
    const { name, year, color, pantone_value } = req.body;
    const index = products_1.products.findIndex((item) => item.id == id);
    console.log(index, id);
    if (index != -1) {
        const product = products_1.products[index];
        console.log(product);
        products_1.products[index] = {
            id: id,
            name: name || product.name,
            year: year || product.year,
            color: color || product.color,
            pantone_value: pantone_value || product.pantone_value
        };
        res.send({ data: products_1.products[index] });
    }
    else {
        res.status(404).send({});
    }
};
exports.patchProduct = patchProduct;
const deleteProduct = (req, res) => {
    const id = parseInt(req.params.productId);
    const index = products_1.products.findIndex((item) => item.id == id);
    if (index != -1) {
        products_1.products.splice(index, 1);
        res.send({});
    }
    else {
        res.status(404).send({});
    }
};
exports.deleteProduct = deleteProduct;
