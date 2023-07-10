/* GET /api/goods - получить список всех товаров с пагинацией
GET /api/goods/{id} - получить товар по его ID
GET /api/categories - получить список категорий
GET /api/colors - получить список цветов
GET /api/goods?[param] */

export const API_URL = "http://localhost:8024";
export const GOODS_URL = `${API_URL}/api/goods`;
export const CATEGORY_URL = `${API_URL}/api/categories`;
export const COLORS_URL = `${API_URL}/api/colors`;
