// Hàm lưu dữ liệu vào Local Storage
function savedataHba() {
    const dataHba = {
        toan_ky1_lop11: document.getElementById('toan_ky1_lop11').value,
        toan_ky2_lop11: document.getElementById('toan_ky2_lop11').value,
        toan_ky1_lop12: document.getElementById('toan_ky1_lop12').value,
        ly_ky1_lop11: document.getElementById('ly_ky1_lop11').value,
        ly_ky2_lop11: document.getElementById('ly_ky2_lop11').value,
        ly_ky1_lop12: document.getElementById('ly_ky1_lop12').value,
        hoa_ky1_lop11: document.getElementById('hoa_ky1_lop11').value,
        hoa_ky2_lop11: document.getElementById('hoa_ky2_lop11').value,
        hoa_ky1_lop12: document.getElementById('hoa_ky1_lop12').value,
        sinh_ky1_lop11: document.getElementById('sinh_ky1_lop11').value,
        sinh_ky2_lop11: document.getElementById('sinh_ky2_lop11').value,
        sinh_ky1_lop12: document.getElementById('sinh_ky1_lop12').value,
        van_ky1_lop11: document.getElementById('van_ky1_lop11').value,
        van_ky2_lop11: document.getElementById('van_ky2_lop11').value,
        van_ky1_lop12: document.getElementById('van_ky1_lop12').value,
        su_ky1_lop11: document.getElementById('su_ky1_lop11').value,
        su_ky2_lop11: document.getElementById('su_ky2_lop11').value,
        su_ky1_lop12: document.getElementById('su_ky1_lop12').value,
        dia_ky1_lop11: document.getElementById('dia_ky1_lop11').value,
        dia_ky2_lop11: document.getElementById('dia_ky2_lop11').value,
        dia_ky1_lop12: document.getElementById('dia_ky1_lop12').value,
        anh_ky1_lop11: document.getElementById('anh_ky1_lop11').value,
        anh_ky2_lop11: document.getElementById('anh_ky2_lop11').value,
        anh_ky1_lop12: document.getElementById('anh_ky1_lop12').value,
        gdcd_ky1_lop11: document.getElementById('gdcd_ky1_lop11').value,
        gdcd_ky2_lop11: document.getElementById('gdcd_ky2_lop11').value,
        gdcd_ky1_lop12: document.getElementById('gdcd_ky1_lop12').value,
        nhat_ky1_lop11: document.getElementById('nhat_ky1_lop11').value,
        nhat_ky2_lop11: document.getElementById('nhat_ky2_lop11').value,
        nhat_ky1_lop12: document.getElementById('nhat_ky1_lop12').value,
        trung_ky1_lop11: document.getElementById('trung_ky1_lop11').value,
        trung_ky2_lop11: document.getElementById('trung_ky2_lop11').value,
        trung_ky1_lop12: document.getElementById('trung_ky1_lop12').value,
        han_ky1_lop11: document.getElementById('han_ky1_lop11').value,
        han_ky2_lop11: document.getElementById('han_ky2_lop11').value,
        han_ky1_lop12: document.getElementById('han_ky1_lop12').value,
    };

    // Lưu dữ liệu vào Local Storage
    localStorage.setItem('hoc_ba_data', JSON.stringify(dataHba));
}

// Hàm hiển thị dữ liệu từ Local Storage
function loadFormData_Hba() {
    const savedData_Hba = localStorage.getItem('hoc_ba_data');
    
    if (savedData_Hba) {
        const data_Hba = JSON.parse(savedData_Hba);

        document.getElementById('toan_ky1_lop11').value = data_Hba.toan_ky1_lop11;
        document.getElementById('toan_ky2_lop11').value = data_Hba.toan_ky2_lop11;
        document.getElementById('toan_ky1_lop12').value = data_Hba.toan_ky1_lop12;
        document.getElementById('ly_ky1_lop11').value = data_Hba.ly_ky1_lop11;
        document.getElementById('ly_ky2_lop11').value = data_Hba.ly_ky2_lop11;
        document.getElementById('ly_ky1_lop12').value = data_Hba.ly_ky1_lop12;
        document.getElementById('hoa_ky1_lop11').value = data_Hba.hoa_ky1_lop11;
        document.getElementById('hoa_ky2_lop11').value = data_Hba.hoa_ky2_lop11;
        document.getElementById('hoa_ky1_lop12').value = data_Hba.hoa_ky1_lop12;
        document.getElementById('sinh_ky1_lop11').value = data_Hba.sinh_ky1_lop11;
        document.getElementById('sinh_ky2_lop11').value = data_Hba.sinh_ky2_lop11;
        document.getElementById('sinh_ky1_lop12').value = data_Hba.sinh_ky1_lop12;
        document.getElementById('van_ky1_lop11').value = data_Hba.van_ky1_lop11;
        document.getElementById('van_ky2_lop11').value = data_Hba.van_ky2_lop11;
        document.getElementById('van_ky1_lop12').value = data_Hba.van_ky1_lop12;
        document.getElementById('su_ky1_lop11').value = data_Hba.su_ky1_lop11;
        document.getElementById('su_ky2_lop11').value = data_Hba.su_ky2_lop11;
        document.getElementById('su_ky1_lop12').value = data_Hba.su_ky1_lop12;
        document.getElementById('dia_ky1_lop11').value = data_Hba.dia_ky1_lop11;
        document.getElementById('dia_ky2_lop11').value = data_Hba.dia_ky2_lop11;
        document.getElementById('dia_ky1_lop12').value = data_Hba.dia_ky1_lop12;
        document.getElementById('anh_ky1_lop11').value = data_Hba.anh_ky1_lop11;
        document.getElementById('anh_ky2_lop11').value = data_Hba.anh_ky2_lop11;
        document.getElementById('anh_ky1_lop12').value = data_Hba.anh_ky1_lop12;
        document.getElementById('gdcd_ky1_lop11').value = data_Hba.gdcd_ky1_lop11;
        document.getElementById('gdcd_ky2_lop11').value = data_Hba.gdcd_ky2_lop11;
        document.getElementById('gdcd_ky1_lop12').value = data_Hba.gdcd_ky1_lop12;
        document.getElementById('nhat_ky1_lop11').value = data_Hba.nhat_ky1_lop11;
        document.getElementById('nhat_ky2_lop11').value = data_Hba.nhat_ky2_lop11;
        document.getElementById('nhat_ky1_lop12').value = data_Hba.nhat_ky1_lop12;
        document.getElementById('trung_ky1_lop11').value = data_Hba.trung_ky1_lop11;
        document.getElementById('trung_ky2_lop11').value = data_Hba.trung_ky2_lop11;
        document.getElementById('trung_ky1_lop12').value = data_Hba.trung_ky1_lop12;
        document.getElementById('han_ky1_lop11').value = data_Hba.han_ky1_lop11;
        document.getElementById('han_ky2_lop11').value = data_Hba.han_ky2_lop11;
        document.getElementById('han_ky1_lop12').value = data_Hba.han_ky1_lop12;
    }
}

// Gán sự kiện cho nút lưu
document.getElementById('save_hoc_ba').addEventListener('click', savedataHba);

window.onload = loadFormData_Hba;