"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const usersControllers = __importStar(require("../../controllers/v1/users_controller"));
const productsControllers = __importStar(require("../../controllers/v1/products-controller"));
const createRoutesV1 = (app) => {
    app.get('/api/v1/users', usersControllers.getUsers);
    app.get('/api/v1/users/:userId', usersControllers.getUser);
    app.get('/api/v1/products', productsControllers.getProducts);
    app.get('/api/v1/products/:productId', productsControllers.getProductById);
    app.post('/api/v1/product/create', productsControllers.createProduct);
    app.put('/api/v1/product/update/:productId', productsControllers.updateProduct);
    app.delete('/api/v1/product/delete/:productId', productsControllers.deleteProduct);
    app.patch('/api/v1/product/update/:productId', productsControllers.patchProduct);
};
exports.default = createRoutesV1;
