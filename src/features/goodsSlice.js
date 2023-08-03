import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GOODS_URL } from "../const";

export const fetchGender = createAsyncThunk(
  "goods/fetchGender",
  async (gender) => {
    const url = new URL(GOODS_URL);
    url.searchParams.append("gender", gender);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);
export const fetchCategory = createAsyncThunk(
  "goods/fetchCategory",
  async (param) => {
    const url = new URL(GOODS_URL);
    for (const key in param) {
      url.searchParams.append(key, param[key]);
    }
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

export const fetchAll = createAsyncThunk(
  "goods/fetchAll",
  async (param = []) => {
    const url = new URL(GOODS_URL);
    for (const key in param) {
      url.searchParams.append(key, param[key]);
    }
    url.searchParams.append("count", "all");

    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

const goodsSlice = createSlice({
  name: "goods",
  initialState: {
    status: "idle",
    goodsList: [],
    error: null,
    page: 0,
    pages: 0,
    totalCount: null,
  },

  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchGender.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGender.fulfilled, (state, action) => {
        state.status = "success";
        state.goodsList = action.payload;
        state.pages = 0;
        state.totalCount = null;
      })
      .addCase(fetchGender.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = "success";
        state.goodsList = action.payload.goods;
        state.pages = action.payload.pages;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchAll.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.status = "success";
        state.goodsList = action.payload;
        state.pages = 0;
        state.totalCount = null;
      })
      .addCase(fetchAll.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { setPage } = goodsSlice.actions;
export default goodsSlice.reducer;

//---------------------------------------------------------------------

//Общий смысл этого кода заключается в создании слайса для управления списком товаров в Redux-состоянии, а также определении асинхронных Thunk-функций для выполнения запросов на сервер и обновления состояния на основе полученных данных о товарах.

//fetchGender: Это асинхронная Thunk-функция, которая выполняет запрос на сервер для получения списка товаров в зависимости от переданного параметра gender (пол). Она использует fetch для выполнения HTTP-запроса, добавляет параметр gender к URL и затем возвращает полученные данные о товарах.
//fetchCategory: принимает объект param, содержащий дополнительные параметры для фильтрации товаров. Она также использует fetch, добавляет переданные параметры к URL и возвращает данные о товарах.
//createSlice: Эта функция создает Redux Slice, который включает в себя состояние (initialState) и редюсеры (reducers) для обновления состояния.
//Состояние (initialState):
// status: Это строковое значение, которое указывает текущий статус загрузки данных о товарах (может быть "idle" - бездействие, "loading" - загрузка, "success" - успех или "failed" - ошибка).
// goodsList: Это массив, который хранит список полученных товаров.
// error: Это значение ошибки, которое будет заполнено, если произойдет ошибка при загрузке данных.
// page, pages, totalCount: значения, которые относятся к пагинации списка товаров.
//Редюсеры (reducers):
// setPage: Это обычный редюсер (не асинхронный), который обновляет состояние поля page на значение, переданное в action.payload.

//Дополнительные редюсеры (extraReducers):
// Каждый редюсер обрабатывает три возможных состояния асинхронной операции: pending (в процессе), fulfilled (успешно завершено) и rejected (ошибка).
// При выполнении fetchGender.pending, состояние status устанавливается на "loading".
// При выполнении fetchGender.fulfilled, состояние status устанавливается на "success", а goodsList, pages и totalCount обновляются с данными, полученными из запроса.
// При выполнении fetchGender.rejected, состояние status устанавливается на "failed", и ошибка сохраняется в error.

// В контексте Redux, редюсеры (reducers) - это функции, которые определяют, какое изменение произойдет в состоянии (state) при обработке действий (actions). Они являются чистыми функциями, что означает, что они не изменяют состояние напрямую, а вместо этого возвращают новый объект состояния, основываясь на текущем состоянии и переданных действиях.

// Функция редюсера принимает два аргумента:

// Состояние (state): Это текущее состояние приложения, которое может быть представлено в виде объекта, массива, числа или другой структуры данных, в зависимости от организации вашего хранилища (store).

// Действие (action): Это объект, который содержит информацию о том, какое действие должно быть выполнено. Он обязательно должен иметь свойство "type", которое указывает на тип действия, и может содержать дополнительные данные, необходимые для обработки этого действия.

// Функция редюсера затем выполняет определенные действия на основе типа действия, и возвращает новый объект состояния. Redux использует этот новый объект состояния для обновления хранилища (store) и предоставления обновленных данных компонентам приложения, которые следят за этим состоянием.
