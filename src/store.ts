import { configureStore } from "@reduxjs/toolkit";

import writeMailReducer from "~/features/writeMail";

export default configureStore({
  reducer: { writeMail: writeMailReducer },
  devTools: true,
});
