// import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// // import logger from "redux-logger";
// import createSagaMiddleware from "@redux-saga/core";

// import { rootSaga } from "./root-saga";

// import { rootReducer } from "./root-reducer";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["user"],
// };

// const sagaMiddleware = createSagaMiddleware();

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [
//   process.env.NODE_ENV !== "production" && logger,
//   sagaMiddleware,
// ].filter(Boolean);

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLD_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);

//* USING REDUX TOOLKIT
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

const middleWares = [process.env.NODE_ENV !== "development" && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleWares,
});
