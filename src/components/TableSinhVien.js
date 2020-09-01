import React from "react";
import { connect } from "react-redux";
const TableSinhVien = (props) => {
  return (
    <table className="table table-hover">
      <thead className="thead-dark">
        <tr>
          <th>Mã Sv</th>
          <th>Họ Tên</th>
          <th>Sdt</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {props.mangSinhVien.map((sv, index) => {
            console.log(sv);
          return (
            <tr key={index}>
              <td>{sv.maSv}</td>
              <td>{sv.hoTen}</td>
              <td>{sv.SoDienThoai}</td>
              <td>{sv.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
  };
};
export default connect(mapStateToProps)(TableSinhVien);
