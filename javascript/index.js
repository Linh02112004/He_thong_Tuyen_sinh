document.getElementById('cmnd').addEventListener('input', validateCMND);
document.getElementById('phone').addEventListener('input', validatePhone);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('confirm-password').addEventListener('input', validatePassword);

const notification = document.getElementById('notification');

function showNotification(message) {
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000); // Ẩn thông báo sau 5 giây
}

// Xử lý đăng ký
document.querySelector('form').onsubmit = function(event) {
    event.preventDefault(); // Ngăn chặn hành động gửi form mặc định

    const cmnd = document.getElementById('cmnd').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Kiểm tra các trường nhập
    if (!validateFields(cmnd, phone, email, password, confirmPassword)) {
        return; // Nếu có lỗi, không tiếp tục
    }

    // Kiểm tra xem thông tin đã tồn tại trong localStorage chưa
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const isCMNDExists = users.some(user => user.cmnd === cmnd);
    const isPhoneExists = users.some(user => user.phone === phone);
    const isEmailExists = users.some(user => user.email === email);

    if (isCMNDExists) {
        showNotification('CMND/CCCD đã được đăng ký.');
    } else if (isEmailExists) {
        showNotification('Email đã được đăng ký.');
    } else if (isPhoneExists) {
        showNotification('Số điện thoại đã được đăng ký.');
    } else {
        // Lưu thông tin người dùng
        users.push({ cmnd, phone, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        showNotification('Đăng ký thành công!');

        // Xóa thông tin đã nhập
        clearForm();

        // Chuyển sang phần đăng nhập
        document.getElementById('registrationContainer').style.display = 'none'; // Ẩn phần đăng ký
        document.getElementById('loginModal').style.display = 'block'; // Hiện phần đăng nhập
    }
};

// Xử lý đăng nhập
document.querySelector('#loginForm').onsubmit = function(event) {
    event.preventDefault(); // Ngăn chặn hành động gửi form mặc định

    const loginId = document.getElementById('login_id').value;
    const loginPassword = document.getElementById('login_password').value;

    // Kiểm tra thông tin trong localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.cmnd === loginId || user.phone === loginId || user.email === loginId);
    
    // Kiểm tra tài khoản Thí sinh
    if (document.querySelector('input[name="userType"]:checked').value === 'student') {
        if (!user) {
            showNotification('Tài khoản không tồn tại.'); // Thông báo nếu tài khoản không tồn tại
            return;
        }

        if (user.password !== loginPassword) {
            showNotification('Mật khẩu không chính xác.'); // Thông báo nếu mật khẩu sai
            return;
        }

        // Nếu thông tin là chính xác, chuyển hướng đến trang index1.html
        window.location.href = 'thi_sinh.html';
        return;
    }

    // Kiểm tra tài khoản Cán bộ Tuyển sinh
    if (loginId === 'admin1' && loginPassword === 'admin1') {
        // Nếu thông tin đúng, chuyển hướng đến trang admin.html
        window.location.href = 'admin.html';
    } else {
        showNotification('Tài khoản không tồn tại.'); // Thông báo nếu tài khoản không tồn tại
    }
};

// Thêm sự kiện cho các liên kết
document.getElementById('backToRegister').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none'; // Ẩn phần đăng nhập
    document.getElementById('registrationContainer').style.display = 'block'; // Hiện phần đăng ký
});

document.getElementById('openLoginModal').addEventListener('click', function() {
    document.getElementById('registrationContainer').style.display = 'none'; // Ẩn phần đăng ký
    document.getElementById('loginModal').style.display = 'block'; // Hiện phần đăng nhập
});

function clearForm() {
    document.getElementById('cmnd').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirm-password').value = '';
}

function validateCMND() {
    const cmnd = document.getElementById('cmnd').value;
    const errorMessage = document.querySelector('#cmnd + .error');
    if (errorMessage) errorMessage.remove();

    if (cmnd.length !== 12) {
        const error = document.createElement('span');
        error.className = 'error';
        error.style.color = 'red';
        error.textContent = 'CMND/CCCD phải có 12 số.';
        document.getElementById('cmnd').insertAdjacentElement('afterend', error);
    }
}

function validatePhone() {
    const phone = document.getElementById('phone').value;
    const errorMessage = document.querySelector('#phone + .error');
    if (errorMessage) errorMessage.remove();

    if (phone.length !== 10) {
        const error = document.createElement('span');
        error.className = 'error';
        error.style.color = 'red';
        error.textContent = 'Số điện thoại phải có 10 số.';
        document.getElementById('phone').insertAdjacentElement('afterend', error);
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const errorMessage = document.querySelector('#email + .error');
    if (errorMessage) errorMessage.remove();

    // Kiểm tra email hợp lệ (đơn giản)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        const error = document.createElement('span');
        error.className = 'error';
        error.style.color = 'red';
        error.textContent = 'Email không hợp lệ.';
        document.getElementById('email').insertAdjacentElement('afterend', error);
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.querySelector('#confirm-password + .error');
    
    if (errorMessage) errorMessage.remove();

    if (password !== confirmPassword) {
        const error = document.createElement('span');
        error.className = 'error';
        error.style.color = 'red';
        error.textContent = 'Mật khẩu không khớp.';
        document.getElementById('confirm-password').insertAdjacentElement('afterend', error);
    }
}

function validateFields(cmnd, phone, email, password, confirmPassword) {
    // Kiểm tra các trường nhập
    if (cmnd.length !== 12) {
        alert('CMND/CCCD phải có 12 số.');
        return false;
    }
    if (phone.length !== 10) {
        alert('Số điện thoại phải có 10 số.');
        return false;
    }
    if (password !== confirmPassword) {
        alert('Mật khẩu không khớp.');
        return false;
    }
    return true;
}

function toggleFields() {
    const userType = document.querySelector('input[name="userType"]:checked').value;
    const loginLabel = document.getElementById('loginLabel');
    const loginIdInput = document.getElementById('login_id');
    const loginPasswordInput = document.getElementById('login_password');

    if (userType === 'admin') {
        loginLabel.textContent = 'Tên đăng nhập *'; // Thay đổi nhãn cho Cán bộ Tuyển sinh
        loginIdInput.value = ''; // Xóa thông tin đã nhập
        loginPasswordInput.value = ''; // Xóa mật khẩu đã nhập
    } else {
        loginLabel.textContent = 'Số CMND/CCCD *'; // Trở về nhãn cũ cho Thí sinh
        loginIdInput.value = ''; // Xóa thông tin đã nhập
        loginPasswordInput.value = ''; // Xóa mật khẩu đã nhập
    }
}