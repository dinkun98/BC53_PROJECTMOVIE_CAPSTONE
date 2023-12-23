import axiosClient from "./axiosClient";

export const apiSignin = async (values) => {
  const { data } = await axiosClient.post("/QuanLyNguoiDung/DangNhap", values);
  return data;
};

export const apiSignup = async (values) => {
  const payload = { ...values, maNhom: "GP01" };

  const { data } = await axiosClient.post("/QuanLyNguoiDung/DangKy", payload);
  return data;
};

export const apiUserInfo = async () => {
  const { data } = await axiosClient.post("/QuanLyNguoiDung/ThongTinTaiKhoan");
  return data;
};

export const apiGetUserList = async () => {
  const { data } = await axiosClient.get(
    "QuanLyNguoiDung/LayDanhSachNguoiDung",
    {
      params: {
        maNhom: "GP01",
      },
    }
  );
  return data;
};

export const apiDeleteUser = async (taiKhoan) => {
  const { data } = await axiosClient.delete(
    `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
  );
  return data;
};

export const apiUpdateUser = async (user) => {
  const { data } = await axiosClient.post(
    "QuanLyNguoiDung/CapNhatThongTinNguoiDung",
    user
  );
  return data;
};

export const apiCreateNewUser = async (values) => {
  const payload = { ...values, maNhom: "GP01" };
  const { data } = await axiosClient.post(
    "/QuanLyNguoiDung/ThemNguoiDung",
    payload
  );
  return data;
};

export const apiSearchUser = async (keyword) => {
  const { data } = await axiosClient.get(
    `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${keyword}`
  );
  return data;
};
