import React, { useState } from "react";
import TableSinhVien from "./TableSinhVien";
import { connect } from "react-redux";
const FormSinhVien = (props) => {
  const [sinhVien, setSinhVien] = useState({
    maSv: "",
    hoTen: "",
    SoDienThoai: "",
    email: "",
  });
  const { maSv, hoTen, SoDienThoai, email } = sinhVien;
  const [isHidden, setIsHidden] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const handleMaSv = (e) => {
    e.preventDefault();
    setSinhVien({
      ...sinhVien,
      maSv: e.target.value,
    });
  };
  const handleHoTen = (e) => {
    e.preventDefault();
    setSinhVien({
      ...sinhVien,
      hoTen: e.target.value,
    });
  };
  const handleSDT = (e) => {
    e.preventDefault();
    setSinhVien({
      ...sinhVien,
      SoDienThoai: e.target.value,
    });
  };
  const handleEmail = (e) => {
    e.preventDefault();
    setSinhVien({
      ...sinhVien,
      email: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsHidden(false);
    setSinhVien({
      maSv: "",
      hoTen: "",
      SoDienThoai: "",
      email: "",
    });
  };
  // if (
  //   maSv.length > 0 &&
  //   hoTen.length > 0 &&
  //   SoDienThoai.length > 0 &&
  //   email.length > 0
  // ) {
  //   setIsDisabled(false);
  // }
  return (
    <div className="container">
      <div className="bg-dark text-white py-2 px-2">
        <h2 className="text-left">Thêm sinh viên</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="row my-2">
            <div className="col">
              <label htmlFor="maSv">Mã Sv</label>
              <input
                type="text"
                className="form-control"
                id="maSv"
                value={sinhVien.maSv}
                onChange={handleMaSv}
              ></input>
            </div>
            <div className="col">
              <label htmlFor="hoTen">Họ Tên</label>
              <input
                type="text"
                className="form-control"
                id="hoTen"
                value={sinhVien.hoTen}
                onChange={handleHoTen}
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="sdt">Số điện thoại</label>
              <input
                type="text"
                className="form-control"
                id="sdt"
                value={sinhVien.SoDienThoai}
                onChange={handleSDT}
              ></input>
            </div>
            <div className="col">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                className="form-control"
                id="Email"
                value={sinhVien.email}
                onChange={handleEmail}
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col text-left">
              <button
                type="submit"
                className="btn btn-success mt-3"
                onClick={() => props.AddSinhVien(sinhVien)}
                disabled={
                  maSv.length > 0 &&
                  hoTen.length > 0 &&
                  SoDienThoai.length > 0 &&
                  email.length > 0
                    ? !isDisabled
                    : isDisabled
                }
              >
                Thêm sinh viên
              </button>
            </div>
          </div>
        </div>
      </form>
      {!isHidden && <TableSinhVien />}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  let mangSinhVien = [];
  return {
    AddSinhVien: (sinhVien) => {
      mangSinhVien.push(sinhVien);
      console.log(mangSinhVien);
      dispatch({
        type: "ADD_SINHVIEN",
        payload: mangSinhVien,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(FormSinhVien);
