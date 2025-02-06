import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    exportData: [
      {
        type: "google-sign-in",
        status: null,
        file: { account: "", name: null, tab: null, uploadDate: "" },
      },
      {
        type: "google-node",
        status: null,
        file: { account: "", name: null, tab: null, uploadDate: "" },
      },
      {
        type: "google-sign-in",
        status: "login",
        file: { account: "", name: null, tab: null, uploadDate: "" },
      },
    ],
  },
  reducers: {
    setStatus: (state, action) => {
      state.exportData[action.payload.index] = {
        ...state.exportData[action.payload.index],
        status: action.payload.status,
      };
    },
    deleteData: (state, action) => {
      state.exportData.splice(action.payload, 1);
    },
    setExportData: (state, action) => {
      const d = new Date();
      const dateString = `${d.getFullYear()}-${
        d.getMonth() + 1
      }-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

      console.log(dateString, action.payload);
      state.exportData[action.payload.index] = {
        ...state.exportData[action.payload.index],
        file: {
          account: action.payload.account,
          name: action.payload.name,
          tab: action.payload.tab,
          uploadDate: dateString,
        },
      };
    },
  },
});

export const { setStatus, deleteData, setExportData } = mainSlice.actions;

export default mainSlice.reducer;
