import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("favorites")
  ? JSON.parse(localStorage.getItem("favorites"))
  : [];

//создаем состояние Redux
const favoritesSlice = createSlice({
  name: "favorites", //  имя этого состояния, которое будет использоваться для доступа к состоянию и его обновления.
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const id = action.payload.id;
      if (!state.includes(id)) {
        state.push(id); //проверяем, если товара нет в избранном, добавляем
      }
      localStorage.setItem("favorites", JSON.stringify(state));
    },
    removeFromFavorites(state, action) {
      const id = action.payload.id;
      const index = state.indexOf(id);
      if (index !== -1) {
        state.splice(index, 1); //удаляем, товар из избранного если найден такой id
      }
      localStorage.setItem("favorites", JSON.stringify(state));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

//addToFavorite - это редуктор, который обрабатывает действие (action) "addToFavorite". Он принимает текущее состояние (state) и действие (action) в качестве параметров. При вызове этого редуктора с действием "addToFavorite" он добавляет идентификатор товара (id) из action.payload.id в массив состояния (state), если этого идентификатора еще нет в массиве избранных товаров.
//removeFromFavorite - это редуктор, который обрабатывает действие (action) "removeFromFavorite". Он также принимает текущее состояние (state) и действие (action) в качестве параметров. При вызове этого редуктора с действием "removeFromFavorite", он ищет индекс идентификатора товара (id) из action.payload.id в массиве состояния (state). Если идентификатор найден (index !== -1), то он удаляет элемент из массива состояния (state) с помощью state.splice(index, 1).

//Таким образом, этот срез состояния позволяет добавлять и удалять идентификаторы товаров из массива избранных товаров, что представляет собой типичный пример управления состоянием для функции избранного.
