 // Mở modal khi nhấp vào nút đăng nhập
    document.getElementById('openLoginModal').onclick = function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định
        document.getElementById('registrationContainer').style.display = 'none'; // Ẩn phần đăng ký
        document.getElementById('loginModal').style.display = 'block'; // Hiển thị modal đăng nhập
        document.querySelector('.overlay').style.display = 'block'; // Hiển thị overlay
    };

    // Quay lại phần đăng ký
    document.getElementById('backToRegister').onclick = function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định
        document.getElementById('loginModal').style.display = 'none'; // Ẩn modal đăng nhập
        document.getElementById('registrationContainer').style.display = 'block'; // Hiển thị lại phần đăng ký
    };

    // Đóng modal khi nhấp ra ngoài modal (overlay)
    document.querySelector('.overlay').onclick = function() {
        this.style.display = 'none';
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('registrationContainer').style.display = 'block'; // Hiển thị lại phần đăng ký
    };

function toggleFields() {
    const userType = document.querySelector('input[name="userType"]:checked').value;
    const loginLabel = document.getElementById('loginLabel');
    const loginInput = document.getElementById('login_id');

    if (userType === 'admin') {
        loginLabel.innerHTML = 'Tên đăng nhập <span class="required">*</span>';
        loginInput.setAttribute('placeholder', '');
    } else {
        loginLabel.innerHTML = 'Số CMND/CCCD <span class="required">*</span>';
        loginInput.setAttribute('placeholder', '');
    }
}

function handleLogin(event) {
    event.preventDefault(); // Ngăn chặn hành động gửi form mặc định

    const userType = document.querySelector('input[name="userType"]:checked').value;
    const loginId = document.getElementById('login_id').value;
    const loginPassword = document.getElementById('login_password').value;

    // Ở đây có thể thêm logic xác thực (kiểm tra tài khoản, mật khẩu)
    
    // Chuyển hướng dựa trên loại người dùng
    if (userType === 'admin') {
        // Chuyển đến trang admin
        window.location.href = 'home.html'; // Khi nào xong thì sửa đường dẫn
    } else {
        // Chuyển đến trang thí sinh
        window.location.href = 'index1.html';
    }
}