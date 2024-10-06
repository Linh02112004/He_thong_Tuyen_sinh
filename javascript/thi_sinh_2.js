// Hàm lưu dữ liệu vào Local Storage
function saveFormData() {
    const data = {
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
    localStorage.setItem('hoc_ba_data', JSON.stringify(data));
}

// Hàm hiển thị dữ liệu từ Local Storage
function loadFormData() {
    const savedData = localStorage.getItem('hoc_ba_data');
    
    if (savedData) {
        const data = JSON.parse(savedData);

        document.getElementById('toan_ky1_lop11').value = data.toan_ky1_lop11;
        document.getElementById('toan_ky2_lop11').value = data.toan_ky2_lop11;
        document.getElementById('toan_ky1_lop12').value = data.toan_ky1_lop12;
        document.getElementById('ly_ky1_lop11').value = data.ly_ky1_lop11;
        document.getElementById('ly_ky2_lop11').value = data.ly_ky2_lop11;
        document.getElementById('ly_ky1_lop12').value = data.ly_ky1_lop12;
        document.getElementById('hoa_ky1_lop11').value = data.hoa_ky1_lop11;
        document.getElementById('hoa_ky2_lop11').value = data.hoa_ky2_lop11;
        document.getElementById('hoa_ky1_lop12').value = data.hoa_ky1_lop12;
        document.getElementById('sinh_ky1_lop11').value = data.sinh_ky1_lop11;
        document.getElementById('sinh_ky2_lop11').value = data.sinh_ky2_lop11;
        document.getElementById('sinh_ky1_lop12').value = data.sinh_ky1_lop12;
        document.getElementById('van_ky1_lop11').value = data.van_ky1_lop11;
        document.getElementById('van_ky2_lop11').value = data.van_ky2_lop11;
        document.getElementById('van_ky1_lop12').value = data.van_ky1_lop12;
        document.getElementById('su_ky1_lop11').value = data.su_ky1_lop11;
        document.getElementById('su_ky2_lop11').value = data.su_ky2_lop11;
        document.getElementById('su_ky1_lop12').value = data.su_ky1_lop12;
        document.getElementById('dia_ky1_lop11').value = data.dia_ky1_lop11;
        document.getElementById('dia_ky2_lop11').value = data.dia_ky2_lop11;
        document.getElementById('dia_ky1_lop12').value = data.dia_ky1_lop12;
        document.getElementById('anh_ky1_lop11').value = data.anh_ky1_lop11;
        document.getElementById('anh_ky2_lop11').value = data.anh_ky2_lop11;
        document.getElementById('anh_ky1_lop12').value = data.anh_ky1_lop12;
        document.getElementById('gdcd_ky1_lop11').value = data.gdcd_ky1_lop11;
        document.getElementById('gdcd_ky2_lop11').value = data.gdcd_ky2_lop11;
        document.getElementById('gdcd_ky1_lop12').value = data.gdcd_ky1_lop12;
        document.getElementById('nhat_ky1_lop11').value = data.nhat_ky1_lop11;
        document.getElementById('nhat_ky2_lop11').value = data.nhat_ky2_lop11;
        document.getElementById('nhat_ky1_lop12').value = data.nhat_ky1_lop12;
        document.getElementById('trung_ky1_lop11').value = data.trung_ky1_lop11;
        document.getElementById('trung_ky2_lop11').value = data.trung_ky2_lop11;
        document.getElementById('trung_ky1_lop12').value = data.trung_ky1_lop12;
        document.getElementById('han_ky1_lop11').value = data.han_ky1_lop11;
        document.getElementById('han_ky2_lop11').value = data.han_ky2_lop11;
        document.getElementById('han_ky1_lop12').value = data.han_ky1_lop12;
    }
}

// Gán sự kiện cho nút lưu
document.getElementById('saveForm').addEventListener('click', saveFormData);

// Hiển thị dữ liệu khi tải trang
window.onload = loadFormData;