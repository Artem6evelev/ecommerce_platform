// import { combineReducers } from "redux";

// import { userReducer } from "./user/user.reducer";
// import { categoriesReducer } from "./categories/category.reducer";
// import { cartReducer } from "./cart/cart.reducer";

// export const rootReducer = combineReducers({
//   user: userReducer,
//   categories: categoriesReducer,
//   cart: cartReducer,
// });

//* USING REDUX TOOLKIT
import { combineReducers } from "@reduxjs/toolkit";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
