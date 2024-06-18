import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "../reducer/login";

export default configureStore({
  reducer: { login: loginReducer },
});
