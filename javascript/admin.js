document.querySelector('.signout-btn').addEventListener('click', function() {
    window.location.href = 'index.html';
});

function loadStudentData() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const studentList = document.getElementById('student-list');

    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.cmnd}</td>
            <td>${user.dob}</td>
            <td>        
		<table>
                    <tr><td>${user.major1}</td></tr>
                    <tr><td>${user.major2}</td></tr>
                    <tr><td>${user.major3}</td></tr>
                </table>
	    </td>
            <td>
		<table>
                    <tr><td>${1}</td></tr>
                    <tr><td>${2}</td></tr>
                    <tr><td>${3}</td></tr>
                </table>
	    </td>
            <td><button onclick="viewStudent(${index})"><i class="fa-solid fa-eye"></i></button></td>
        `;
        studentList.appendChild(row);
    });
}

// Hiển thị thông tin thí sinh khi nhấn nút
function viewStudent(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const student = users[index];
    // Hiển thị thông tin thí sinh tương ứng
    alert(`Thông tin thí sinh: ${JSON.stringify(student)}`);
}

// Gọi hàm để tải dữ liệu khi trang admin được mở
document.addEventListener('DOMContentLoaded', loadStudentData);