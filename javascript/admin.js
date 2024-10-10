document.querySelector('.signout-btn').addEventListener('click', function() {
    window.location.href = 'index.html';
});

function loadStudentData() {
    // Lấy dữ liệu từ localStorage
    const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {}; // Lấy thông tin người dùng
    const wishes = JSON.parse(localStorage.getItem('wishes')) || []; // Lấy danh sách nguyện vọng

    const studentList = document.getElementById('student-list');

    // Tạo một hàng trong bảng cho sinh viên
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>1</td> <!-- STT có thể là số thứ tự bạn muốn -->
        <td>${userInfo.name}</td>
        <td>${userInfo.identity}</td>
        <td>${userInfo.studentPhone}</td>
        <td>
            <table>
                ${wishes.map(wish => `<tr><td>${wish.major}</td></tr>`).join('')}
            </table>
        </td>
        <td>
            <table>
                ${wishes.map((wish, index) => `<tr><td>${index + 1}</td></tr>`).join('')}
            </table>
        </td>
        <td><button onclick="viewStudent(0)"><i class="fa-solid fa-eye"></i></button></td> <!-- Chỉnh sửa chỉ số nếu cần -->
    `;
    
    studentList.appendChild(row);
}


// Gọi hàm để tải dữ liệu khi trang admin được mở
document.addEventListener('DOMContentLoaded', loadStudentData);


// Hiển thị thông tin thí sinh khi nhấn nút
function viewStudent(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const student = users[index];
    // Hiển thị thông tin thí sinh tương ứng
    alert(`Thông tin thí sinh: ${JSON.stringify(student)}`);
}

// Gọi hàm để tải dữ liệu khi trang admin được mở
document.addEventListener('DOMContentLoaded', loadStudentData);