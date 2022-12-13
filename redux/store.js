import { configureStore } from "@reduxjs/toolkit";

import alarmsReducer from "./reducers/alarmsReducer";
import isEditModeReducer from "./reducers/isEditModeReducer";
import alarmsCollapseReducer from "./reducers/alarmsCollapseReducer";

export default configureStore({
  reducer: {
    alarms: alarmsReducer,
    isEditMode: isEditModeReducer,
    alarmsCollapse: alarmsCollapseReducer,
  },
});
