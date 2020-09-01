const initialState = {
  mangSinhVien: [],
};

export const QuanLySinhVienReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SINHVIEN": {
      // const mangSinhVien_ = action.payload;
      state.mangSinhVien = [...action.payload];
      return { ...state, ...action.payload };
    }
    default:
      return { ...state };
  }
};
