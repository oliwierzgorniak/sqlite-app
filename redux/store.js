import { configureStore } from "@reduxjs/toolkit";

import alarmsReducer from "./reducers/alarmsReducer";
import isEditModeReducer from "./reducers/isEditModeReducer";
import alarmsCollapseReducer from "./reducers/alarmsCollapseReducer";
import timeSelection from "./reducers/timeSelectionReducer";

export default configureStore({
  reducer: {
    alarms: alarmsReducer,
    isEditMode: isEditModeReducer,
    alarmsCollapse: alarmsCollapseReducer,
    timeSelection: timeSelection,
  },
});
