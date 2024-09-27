
let wishCount = 3; // Đếm số nguyện vọng hiện tại

function deleteWish(wishId) {
const wishElement = document.getElementById(wishId);
if (wishElement) {
	wishElement.remove();
	updateWishes();
}
}

function updateWishes() {
const sections = document.querySelectorAll('.section');
sections.forEach((section, index) => {
	const header = section.querySelector('.section-header span:first-child');
	header.textContent = `Nguyện vọng ${index + 1}`;
	section.id = `wish-${index + 1}`;
	const selectMajor = section.querySelector('select[id^="major"]');
	selectMajor.id = `major${index + 1}`;
	const selectBlock = section.querySelector('select[id^="block"]');
	selectBlock.id = `block${index + 1}`;
});
wishCount = sections.length; // Cập nhật số lượng nguyện vọng
document.getElementById('message').textContent = ""; // Xóa thông báo
}

function addWish() {
if (wishCount >= 3) {
	document.getElementById('message').textContent = "Chỉ được tối đa 3 nguyện vọng!";
	return;
}
wishCount++;
const newWish = document.createElement('div');
newWish.classList.add('section');
newWish.id = `wish-${wishCount}`;
newWish.innerHTML = `
	<div class="section-header">
		<span>Nguyện vọng ${wishCount}</span>
		<span class="delete-button" onclick="deleteWish('wish-${wishCount}')">🗑️</span>
	</div>
	<div class="input-group">
		<label for="major${wishCount}">Ngành/Chương trình đăng ký xét tuyển</label>
		<div class="select-group">
			<select id="major${wishCount}">
				<option value="Công Nghệ Sinh Học">Công Nghệ Sinh Học</option>
				<option value="Kỹ Thuật Hóa Học">Kỹ Thuật Hóa Học</option>
				<option value="Kỹ Thuật Điều Khiển và Tự Động Hóa">Kỹ Thuật Điều Khiển và Tự Động Hóa</option>
				<option value="Kỹ Thuật Y Sinh (Hệ Tư Sinh)">Kỹ Thuật Y Sinh (Hệ Tư Sinh)</option>
				<option value="Kỹ Thuật Điện Tử - Viễn Thông (Hệ Thống Thông Minh Và IoT)">Kỹ Thuật Điện Tử - Viễn Thông (Hệ Thống Thông Minh Và IoT)</option>
				<option value="Kỹ Thuật Điện Tử - Viễn Thông (Thiết Kế Vi Mạch Bản Dẫn)">Kỹ Thuật Điện Tử - Viễn Thông (Thiết Kế Vi Mạch Bản Dẫn)</option>
				<option value="Kỹ Thuật Robot Và Trí Tuệ Nhân Tạo (Một Số Học Phần Chuyên Ngành Học Bằng Tiếng Anh)">Kỹ Thuật Robot Và Trí Tuệ Nhân Tạo (Một Số Học Phần Chuyên Ngành Học Bằng Tiếng Anh)</option>
				<option value="Công Nghệ Thông Tin">Công Nghệ Thông Tin</option>
				<option value="Kỹ Thuật Phần Mềm (Một Số Học Phần Chuyên Ngành Học Bằng Tiếng Anh)">Kỹ Thuật Phần Mềm (Một Số Học Phần Chuyên Ngành Học Bằng Tiếng Anh)</option>
				<option value="Công Nghệ Thông Tin Việt Nhật">Công Nghệ Thông Tin Việt Nhật</option>
				<option value="Khoa Học Máy Tính">Khoa Học Máy Tính</option>
				<option value="Tài Năng Khoa Học Máy Tính">Tài Năng Khoa Học Máy Tính</option>
				<option value="An Toàn Thông Tin (Một Số Học Phần Chuyên Ngành Học Bằng Tiếng Anh)">An Toàn Thông Tin (Một Số Học Phần Chuyên Ngành Học Bằng Tiếng Anh)</option>
				<option value="Trí Tuệ Nhân Tạo">Trí Tuệ Nhân Tạo</option>
				<option value="Kỹ Thuật Cơ Điện Tử">Kỹ Thuật Cơ Điện Tử</option>
				<option value="Kỹ Thuật Cơ Khí">Kỹ Thuật Cơ Khí</option>
				<option value="Vật Liệu Tiên Tiến Và Công Nghệ Nano">Vật Liệu Tiên Tiến Và Công Nghệ Nano</option>
				<option value="Vật Liệu Thông Minh Và Trí Tuệ Nhân Tạo">Vật Liệu Thông Minh Và Trí Tuệ Nhân Tạo</option>
				<option value="Chip Bán Dẫn Và Công Nghệ Đóng Gói">Chip Bán Dẫn Và Công Nghệ Đóng Gói</option>
				<option value="Kỹ Thuật Ô Tô">Kỹ Thuật Ô Tô</option>
				<option value="Cơ Điện Tử Ô Tô">Cơ Điện Tử Ô Tô</option>
				<option value="Kỹ Thuật Phần Mềm Ô Tô">Kỹ Thuật Phần Mềm Ô Tô</option>
				<option value="Quản Trị Kinh Doanh">Quản Trị Kinh Doanh</option>
				<option value="Kế Toán">Kế Toán</option>
				<option value="Tài Chính - Ngân Hàng">Tài Chính - Ngân Hàng</option>
				<option value="Quản Trị Nhân Lực">Quản Trị Nhân Lực</option>
				<option value="Luật Kinh Tế">Luật Kinh Tế</option>
				<option value="Kinh Doanh Quốc Tế (Một Số Học Phần Chuyên Ngành Học Bằng Tiếng Anh)">Kinh Doanh Quốc Tế (Một Số Học Phần Chuyên Ngành Học Bằng Tiếng Anh)</option>
				<option value="Logistics và Quản Lý Chuỗi Cung Ứng (Một Số Học Phần Chuyên Ngành Học Bằng Tiếng Anh)">Logistics và Quản Lý Chuỗi Cung Ứng (Một Số Học Phần Chuyên Ngành Học Bằng Tiếng Anh)</option>
				<option value="Marketing">Marketing</option>
				<option value="Công Nghệ Tài Chính">Công Nghệ Tài Chính</option>
				<option value="Kinh Tế Số">Kinh Tế Số</option>
				<option value="Kinh Doanh Số">Kinh Doanh Số</option>
				<option value="Thương Mại Điện Tử">Thương Mại Điện Tử</option>
				<option value="Logistics Số">Logistics Số</option>
				<option value="Công Nghệ Marketing">Công Nghệ Marketing</option>
				<option value="Ngôn Ngữ Anh">Ngôn Ngữ Anh</option>
				<option value="Ngôn Ngữ Trung Quốc">Ngôn Ngữ Trung Quốc</option>
				<option value="Ngôn Ngữ Hàn Quốc">Ngôn Ngữ Hàn Quốc</option>
				<option value="Ngôn Ngữ Nhật">Ngôn Ngữ Nhật</option>
				<option value="Ngôn Ngữ Pháp">Ngôn Ngữ Pháp</option>
				<option value="Đông Phương Học">Đông Phương Học</option>
				<option value="Du Lịch (Định Hướng Quản Trị Du Lịch)">Du Lịch (Định Hướng Quản Trị Du Lịch)</option>
				<option value="Kinh Doanh Du Lịch Số">Kinh Doanh Du Lịch Số</option>
				<option value="Hướng Dẫn Du Lịch Quốc Tế">Hướng Dẫn Du Lịch Quốc Tế</option>
				<option value="Quản Trị Khách Sạn">Quản Trị Khách Sạn</option>
				<option value="Điều Dưỡng">Điều Dưỡng</option>
				<option value="Dược Học">Dược Học</option>
				<option value="Kỹ Thuật Phục Hồi Chức Năng">Kỹ Thuật Phục Hồi Chức Năng</option>
				<option value="Kỹ Thuật Xét Nghiệm Y Học">Kỹ Thuật Xét Nghiệm Y Học</option>
				<option value="Kỹ Thuật Hình Ảnh Y Học">Kỹ Thuật Hình Ảnh Y Học</option>
				<option value="Y Khoa">Y Khoa</option>
				<option value="Răng Hàm Mặt">Răng Hàm Mặt</option>
				<option value="Quản Lý Bệnh Viện">Quản Lý Bệnh Viện</option>
				<option value="Y Học Cổ Truyền">Y Học Cổ Truyền</option>
			</select>
			<select id="block${wishCount}">
				<option value="">Chọn tổ hợp xét tuyển</option>
			</select>
		</div>
	</div>
`;
document.getElementById('wish-container').appendChild(newWish);
    document.getElementById('message').textContent = ""; // Xóa thông báo
    // Cập nhật khối ngành cho nguyện vọng mới
    const selectMajor = newWish.querySelector(`select[id="major${wishCount}"]`);
    const selectBlock = newWish.querySelector(`select[id="block${wishCount}"]`);
    updateBlocks(selectMajor, selectBlock);
}
const blocks = {
	'Công Nghệ Sinh Học': ['A00 (Toán, Vật lý, Hóa học)', 'B00 (Toán, Hóa học, Sinh học)', 'B08 (Toán, Sinh học, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Kỹ Thuật Hóa Học': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'B00 (Toán, Hóa học, Sinh học)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Kỹ Thuật Điều Khiển và Tự Động Hóa': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'C01 (Ngữ văn, Toán, Vật lý)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Kỹ Thuật Y Sinh (Hệ Tư Sinh)': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'B00 (Toán, Hóa học, Sinh học)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Kỹ Thuật Điện Tử - Viễn Thông (Hệ Thống Thông Minh Và IoT)': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'C01 (Ngữ văn, Toán, Vật lý)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Kỹ Thuật Điện Tử - Viễn Thông (Thiết Kế Vi Mạch Bản Dẫn)': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'C01 (Ngữ văn, Toán, Vật lý)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Kỹ Thuật Robot Và Trí Tuệ Nhân Tạo (Một Số Học Phần Chuyên Ngành Học Bằng Tiếng Anh)': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'C01 (Ngữ văn, Toán, Vật lý)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Công Nghệ Thông Tin': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Kỹ Thuật Phần Mềm (Một Số Học Phần Chuyên Ngành Học Bằng Tiếng Anh)': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Công Nghệ Thông Tin Việt Nhật': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)', 'D28 (Toán, Vật lý, Tiếng Nhật)'],
	'Khoa Học Máy Tính': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Tài Năng Khoa Học Máy Tính': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'An Toàn Thông Tin (Một Số Học Phần Chuyên Ngành Học Bằng Tiếng Anh)': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Trí Tuệ Nhân Tạo': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Kỹ Thuật Cơ Điện Tử': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'A02 (Toán, Vật lý, Sinh học)', 'C01 (Ngữ văn, Toán, Vật lý)'],
	'Kỹ Thuật Cơ Khí': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'A02 (Toán, Vật lý, Sinh học)', 'C01 (Ngữ văn, Toán, Vật lý)'],
	'Vật Liệu Tiên Tiến Và Công Nghệ Nano': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'B00 (Toán, Hóa học, Sinh học)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Vật Liệu Thông Minh Và Trí Tuệ Nhân Tạo': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'C01 (Ngữ văn, Toán, Vật lý)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Chip Bán Dẫn Và Công Nghệ Đóng Gói': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'B00 (Toán, Hóa học, Sinh học)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Kỹ Thuật Ô Tô': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'A10 (Toán, Vật lý, Giáo dục công dân)', 'D01 (Ngữ văn, Toán, Tiếng Anh)'],
	'Cơ Điện Tử Ô Tô': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'A10 (Toán, Vật lý, Giáo dục công dân)', 'D01 (Ngữ văn, Toán, Tiếng Anh)'],
	'Kỹ Thuật Phần Mềm Ô Tô': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'A10 (Toán, Vật lý, Giáo dục công dân)', 'D01 (Ngữ văn, Toán, Tiếng Anh)'],

	'Quản Trị Kinh Doanh': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Kế Toán': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Tài Chính - Ngân Hàng': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Quản Trị Nhân Lực': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Luật Kinh Tế': ['C00 (Ngữ văn, Lịch sử, Địa lý)', 'C04 (Ngữ văn, Toán, Địa lý)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D14 (Ngữ văn, Lịch sử, Tiếng Anh)'],
	'Kinh Doanh Quốc Tế (Một Số Học Phần Chuyên Ngành Học Bằng Tiếng Anh)': ['A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)', 'D10 (Toán, Địa lý, Tiếng Anh)'],
	'Logistics và Quản Lý Chuỗi Cung Ứng (Một Số Học Phần Chuyên Ngành Học Bằng Tiếng Anh)': ['A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)', 'D10 (Toán, Địa lý, Tiếng Anh)'],
	'Marketing': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D10 (Toán, Địa lý, Tiếng Anh)'],
	'Công Nghệ Tài Chính': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Kinh Tế Số': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Kinh Doanh Số': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Thương Mại Điện Tử': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Logistics Số': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Công Nghệ Marketing': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],

	'Ngôn Ngữ Anh': ['A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D09 (Toán, Lịch sử, Tiếng Anh)', 'D15 (Ngữ văn, Địa lý, Tiếng Anh)'],
	'Ngôn Ngữ Trung Quốc': ['A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D04 (Ngữ văn, Toán, Tiếng Trung)', 'D09 (Toán, Lịch sử, Tiếng Anh)'],
	'Ngôn Ngữ Hàn Quốc': ['A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D09 (Toán, Lịch sử, Tiếng Anh)', 'D02 (Ngữ văn, Toán, Tiếng Hàn)'],
	'Ngôn Ngữ Nhật': ['A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D06 (Ngữ văn, Toán, Tiếng Nhật)', 'D28 (Toán, Vật lý, Tiếng Nhật)'],
	'Ngôn Ngữ Pháp': ['A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D44 (Ngữ văn, Địa lý, Tiếng Pháp)', 'D64 (Ngữ văn, Lịch sử, Tiếng Anh)'],
	'Đông Phương Học': ['A01 (Toán, Vật lý, Tiếng Anh)', 'C00 (Ngữ văn, Lịch sử, Địa lý)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D09 (Toán, Lịch sử, Tiếng Anh)'],
	'Du Lịch (Định Hướng Quản Trị Du Lịch)': ['A01 (Toán, Vật lý, Tiếng Anh)', 'C00 (Ngữ văn, Lịch sử, Địa lý)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D15 (Ngữ văn, Địa lý, Tiếng Anh)'],
	'Kinh Doanh Du Lịch Số': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D10 (Toán, Địa lý, Tiếng Anh)'],
	'Hướng Dẫn Du Lịch Quốc Tế': ['A01 (Toán, Vật lý, Tiếng Anh)', 'C00 (Ngữ văn, Lịch sử, Địa lý)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D15 (Ngữ văn, Địa lý, Tiếng Anh)'],
	'Quản Trị Khách Sạn': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'D01 (Ngữ văn, Toán, Tiếng Anh)', 'D10 (Toán, Địa lý, Tiếng Anh)'],

	'Điều Dưỡng': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'B00 (Toán, Hóa học, Sinh học)', 'B08 (Toán, Sinh học, Tiếng Anh)'],
	'Dược Học': ['A00 (Toán, Vật lý, Hóa học)', 'B00 (Toán, Hóa học, Sinh học)', 'B08 (Toán, Sinh học, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Kỹ Thuật Phục Hồi Chức Năng': ['A02 (Toán, Vật lý, Sinh học)', 'B00 (Toán, Hóa học, Sinh học)', 'B08 (Toán, Sinh học, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Kỹ Thuật Xét Nghiệm Y Học': ['A02 (Toán, Vật lý, Sinh học)', 'B00 (Toán, Hóa học, Sinh học)', 'B08 (Toán, Sinh học, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Kỹ Thuật Hình Ảnh Y Học': ['A02 (Toán, Vật lý, Sinh học)', 'B00 (Toán, Hóa học, Sinh học)', 'B08 (Toán, Sinh học, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Y Khoa': ['A00 (Toán, Vật lý, Hóa học)','B00 (Toán, Hóa học, Sinh học)', 'B08 (Toán, Sinh học, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Răng Hàm Mặt': ['A00 (Toán, Vật lý, Hóa học)','B00 (Toán, Hóa học, Sinh học)', 'B08 (Toán, Sinh học, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
	'Quản Lý Bệnh Viện': ['A00 (Toán, Vật lý, Hóa học)', 'A01 (Toán, Vật lý, Tiếng Anh)', 'B00 (Toán, Hóa học, Sinh học)', 'D01 (Ngữ văn, Toán, Tiếng Anh)'],
	'Y Học Cổ Truyền': ['A00 (Toán, Vật lý, Hóa học)','B00 (Toán, Hóa học, Sinh học)', 'B08 (Toán, Sinh học, Tiếng Anh)', 'D07 (Toán, Hóa học, Tiếng Anh)'],
}
function updateBlocks(selectMajor, selectBlock) {
    selectMajor.addEventListener('change', function () {
        const selectedMajor = this.value;
        selectBlock.innerHTML = '<option value="">Chọn tổ hợp xét tuyển</option>';
        
        if (blocks[selectedMajor]) {
            blocks[selectedMajor].forEach(block => {
                const option = document.createElement('option');
                option.value = block;
                option.textContent = block;
                selectBlock.appendChild(option);
            });
        }
    });
}

// Thiết lập cho các nguyện vọng hiện tại
document.querySelectorAll('.section').forEach((section) => {
    const selectMajor = section.querySelector('select[id^="major"]');
    const selectBlock = section.querySelector('select[id^="block"]');
    updateBlocks(selectMajor, selectBlock);
});
const districts = {
            'An Giang': ['An Phú', 'Châu Đốc', 'Châu Phú', 'Châu Thành', 'Chợ Mới', 'Long Xuyên', 'Phú Tân', 'Tân Châu', 'Thoại Sơn', 'Tịnh Biên', 'Tri Tôn'],
    	    'Bà Rịa - Vũng Tàu': ['Vũng Tàu', 'Bà Rịa', 'Long Điền', 'Đất Đỏ', 'Xuyên Mộc'],
            'Bạc Liêu': ['Bạc Liêu', 'Giá Rai', 'Hòa Bình', 'Hồng Dân', 'Phước Long'],
    	    'Bắc Giang': ['Bắc Giang', 'Hiệp Hòa', 'Lạng Giang', 'Lục Nam', 'Lục Ngạn', 'Sơn Động', 'Tân Yên', 'Yên Dũng', 'Yên Thế', 'Việt Yên'],
            'Bắc Kạn': ['Bắc Kạn', 'Ba Bể', 'Bạch Thông', 'Chợ Đồn', 'Chợ Mới'],
    	    'Bến Tre': ['Bến Tre', 'Châu Thành', 'Bình Đại', 'Giồng Trôm', 'Mỏ Cày Bắc'],
   	    	'Bình Định': ['Quy Nhơn', 'An Nhơn', 'Bình Định', 'Hoài Nhơn', 'Phù Cát'],
    	    'Bình Dương': ['Thủ Dầu Một', 'Dĩ An', 'Thuận An', 'Bến Cát', 'Tân Uyên'],
            'Bình Phước': ['Đồng Xoài', 'Phước Long', 'Bù Gia Mập', 'Bù Đốp', 'Chơn Thành'],
  	    	'Bình Thuận': ['Phan Thiết', 'La Gi', 'Tuy Phong', 'Bắc Bình', 'Hàm Thuận Bắc'],
 	   		'Cao Bằng': ['Cao Bằng', 'Bảo Lạc', 'Bảo Lâm', 'Thạch An', 'Quảng Hòa'],
  	   		'Đà Nẵng': ['Hải Châu', 'Thanh Khê', 'Liên Chiểu', 'Ngũ Hành Sơn', 'Sơn Trà'],
 	   		'Đắk Lắk': ['Buôn Ma Thuột', 'Buôn Hồ', 'Ea H’leo', 'Krông Ana', 'Lắk'],
 	   		'Đắk Nông': ['Gia Nghĩa', 'Đắk Mil', 'Đắk Song', 'Krông Nô', 'Tuy Đức'],
 	   		'Điện Biên': ['Điện Biên Phủ', 'Mường Lay', 'Điện Biên Đông', 'Mường Nhé', 'Tủa Chùa'],
  	 	 	'Đồng Nai': ['Biên Hòa', 'Long Thành', 'Nhơn Trạch', 'Vĩnh Cửu', 'Xuân Lộc'],
   	   		'Đồng Tháp': ['Cao Lãnh', 'Sa Đéc', 'Hồng Ngự', 'Thanh Bình', 'Lai Vung'],
          	'Gia Lai': ['Pleiku', 'An Khê', 'Ayun Pa', 'Chư Păh', 'Đức Cơ'],
 	   		'Hà Giang': ['Hà Giang', 'Đồng Văn', 'Mèo Vạc', 'Yên Minh', 'Quản Bạ'],
 	   		'Hà Nam': ['Phủ Lý', 'Duy Tiên', 'Bình Lục', 'Lý Nhân', 'Kim Bảng'],
 	   		'Hà Tĩnh': ['Hà Tĩnh', 'Hương Khê', 'Kỳ Anh', 'Cẩm Xuyên', 'Thạch Hà'],
	   		'Hải Dương': ['Hải Dương', 'Chí Linh', 'Kinh Môn', 'Nam Sách', 'Ninh Giang'],
           	'Hải Phòng': ['Hải An', 'Lê Chân', 'Ngô Quyền', 'Đồ Sơn', 'Kiến An'],
  	   		'Hòa Bình': ['Hòa Bình', 'Cao Phong', 'Đà Bắc', 'Kỳ Sơn', 'Lương Sơn'],
           	'Hưng Yên': ['Hưng Yên', 'Mỹ Hào', 'Văn Lâm', 'Văn Giang', 'Khoái Châu'],
 	   		'Khánh Hòa': ['Nha Trang', 'Cam Ranh', 'Vạn Ninh', 'Ninh Hòa', 'Khánh Vĩnh'],
 	   		'Kiên Giang': ['Rạch Giá', 'Hà Tiên', 'Phú Quốc', 'An Biên', 'Châu Thành'],
 	   		'Kon Tum': ['Kon Tum', 'Đăk Glei', 'Ngọc Hồi', 'Đăk Tô', 'Sa Thầy'],
 	   		'Lai Châu': ['Lai Châu', 'Mường Tè', 'Nậm Nhùn', 'Tam Đường', 'Phong Thổ'],
 	   		'Lạng Sơn': ['Lạng Sơn', 'Thành Phố Lạng Sơn', 'Cao Lộc', 'Văn Lãng', 'Tràng Định'],
 	   		'Lào Cai': ['Lào Cai', 'Thành phố Lào Cai', 'Sa Pa', 'Bát Xát', 'Mường Khương'],
 	   		'Long An': ['Tân An', 'Bến Lức', 'Châu Thành', 'Đức Hòa', 'Đức Huệ'],
  	   		'Nam Định': ['Nam Định', 'Thành phố Nam Định', 'Mỹ Lộc', 'Vụ Bản', 'Trực Ninh'],
 	   		'Nghệ An': ['Vinh', 'Cửa Lò', 'Nghĩa Đàn', 'Đô Lương', 'Thanh Chương'],
 	   		'Ninh Bình': ['Ninh Bình', 'Tam Điệp', 'Gia Viễn', 'Hoa Lư', 'Yên Khánh'],
 	   		'Ninh Thuận': ['Phan Rang - Tháp Chàm', 'Ninh Hải', 'Ninh Sơn', 'Bác Ái', 'Thuận Bắc'],
 	   		'Phú Thọ': ['Việt Trì', 'Phú Thọ', 'Đoan Hùng', 'Hạ Hòa', 'Thanh Ba'],
 	   		'Quảng Bình': ['Đồng Hới', 'Ba Đồn', 'Quảng Trạch', 'Tuyên Hóa', 'Minh Hóa'],
 	   		'Quảng Nam': ['Tam Kỳ', 'Hội An', 'Núi Thành', 'Phú Ninh', 'Thăng Bình'],
 	   		'Quảng Ngãi': ['Quảng Ngãi', 'Sơn Tịnh', 'Tư Nghĩa', 'Bình Sơn', 'Trà Bồng'],
 	   		'Quảng Ninh': ['Hạ Long', 'Uông Bí', 'Móng Cái', 'Cẩm Phả', 'Đông Triều'],
 	   		'Quảng Trị': ['Đông Hà', 'Quảng Trị', 'Hải Lăng', 'Triệu Phong', 'Cam Lộ'],
 	   		'Sóc Trăng': ['Sóc Trăng', 'Ngã Năm', 'Kế Sách', 'Mỹ Tú', 'Long Phú'],
 	   		'Sơn La': ['Sơn La', 'Thành phố Sơn La', 'Mai Sơn', 'Sông Mã', 'Yên Châu'],
 	   		'Tây Ninh': ['Tây Ninh', 'Thành phố Tây Ninh', 'Hòa Thành', 'Trảng Bàng', 'Dương Minh Châu'],
 	   		'Thái Bình': ['Thái Bình', 'Thành phố Thái Bình', 'Đông Hưng', 'Hưng Hà', 'Quỳnh Phụ'],
 	   		'Thái Nguyên': ['Thái Nguyên', 'Thành phố Thái Nguyên', 'Phổ Yên', 'Đồng Hỷ', 'Đại Từ'],
 	   		'Thanh Hóa': ['Thanh Hóa', 'Thành phố Thanh Hóa', 'Sầm Sơn', 'Bỉm Sơn', 'Tĩnh Gia'],
 	   		'Thừa Thiên Huế': ['Huế', 'Thành phố Huế', 'Hương Thủy', 'Hương Trà', 'Phú Vang'],
 	   		'Tiền Giang': ['Mỹ Tho', 'Gò Công', 'Cai Lậy', 'Châu Thành', 'Tân Phước'],
	   	 	'Trà Vinh': ['Trà Vinh', 'Duyên Hải', 'Cầu Kè', 'Càng Long', 'Tiểu Cần'],
  	  		'Tuyên Quang': ['Tuyên Quang', 'Thành phố Tuyên Quang', 'Yên Sơn', 'Hàm Yên', 'Chiêm Hóa'],
 	   		'Vĩnh Long': ['Vĩnh Long', 'Bình Minh', 'Long Hồ', 'Mang Thít', 'Tam Bình'],
 	   		'Vĩnh Phúc': ['Vĩnh Yên', 'Phúc Yên', 'Bình Xuyên', 'Vĩnh Tường', 'Yên Lạc'],
	    	'Yên Bái': ['Yên Bái', 'Thành phố Yên Bái', 'Lục Yên', 'Văn Yên', 'Trấn Yên'],
	    	'Hà Nội': ['Ba Đình', 'Hoàn Kiếm', 'Đống Đa', 'Hai Bà Trưng', 'Hoàng Mai'],
	    	'Hồ Chí Minh': ['Quận 1', 'Quận 2', 'Quận 3', 'Quận 4', 'Quận 5'],
        };
    const provinceCodes = {
    		'An Giang': '51',
    		'Bà Rịa - Vũng Tàu': '52',
    		'Bắc Kạn': '11',
    		'Bắc Ninh': '19',
    		'Bến Tre': '55',
    		'Bình Định': '37',
    		'Bình Dương': '74',
    		'Bình Phước': '27',
    		'Cà Mau': '61',
    		'Cao Bằng': '06',
    		'Cần Thơ': '92',
    		'Đà Nẵng': '04',
    		'Đắk Lắk': '40',
    		'Đắk Nông': '63',
    		'Điện Biên': '62',
    		'Đồng Nai': '48',
    		'Đồng Tháp': '50',
    		'Gia Lai': '38',
    		'Hà Giang': '05',
   	 		'Hà Nội': '01',
    		'Hà Tĩnh': '30',
    		'Hậu Giang': '64',
    		'Hòa Bình': '23',
    		'Hưng Yên': '22',
    		'Khánh Hòa': '41',
    		'Kiên Giang': '54',
    		'Kon Tum': '36',
    		'Lai Châu': '07',
    		'Lâm Đồng': '42',
    		'Lào Cai': '08',
    		'Lạng Sơn': '10',
    		'Long An': '49',
    		'Nam Định': '25',
    		'Nghệ An': '29',
    		'Ninh Bình': '27',
    		'Ninh Thuận': '45',
    		'Phú Thọ': '15',
    		'Phú Yên': '39',
    		'Quảng Bình': '31',
    		'Quảng Nam': '34',
    		'Quảng Ngãi': '35',
    		'Quảng Ninh': '17',
    		'Sóc Trăng': '59',
    		'Sơn La': '14',
    		'Tây Ninh': '46',
    		'Thái Bình': '26',
    		'Thái Nguyên': '12',
    		'Trà Vinh': '58',
    		'Vĩnh Long': '57',
    		'Vĩnh Phúc': '16',
    		'Yên Bái': '13',
    		'Hồ Chí Minh': '02',
    		'Hải Phòng': '03',
    		'Thanh Hóa' : '28',
			'Bắc Giang' : '24',
			'Bạc Liêu' : '95',
			'Điện Biên' : '11',
			'Hưng Yên' : '33',
			'Khánh Hòa' : '56',
			'Lai Châu' : '12',
			'Lào Cai' : '10',
			'Long An' : '80',
			'Nam Định' : '36',
			'Nghệ An' : '40',
			'Ninh Bình' : '37',
			'Ninh Thuận' : '58',
			'Phú Thọ' : '25',
			'Phú Yên' : '54',
			'Quảng Bình' : '44',
			'Quảng Nam' : '49',
			'Quảng Ngãi' : '51',
			'Quảng Ninh' : '22',
			'Sóc Trăng' : '94',
			'Sơn La' : '14',
			'Tây Ninh' : '72',
			'Thái Bình' : '34',
			'Thái Nguyên' : '19',
			'Trà Vinh' : '84',
			'Vĩnh Long' : '86',
			'Vĩnh Phúc' : '26',
			'Yên Bái' : '15'
    };
	
        const setupDynamicDistricts = (provinceSelect, districtSelect, provinceCodeInput) => {
            provinceSelect.addEventListener('change', function() {
                const selectedProvince = this.value;

                // Cập nhật mã tỉnh
                const code = provinceCodes[selectedProvince] || '';
                provinceCodeInput.value = code;

                // Cập nhật danh sách quận/huyện
                districtSelect.innerHTML = '<option value="">Chọn huyện</option>';
                if (districts[selectedProvince]) {
                    districts[selectedProvince].forEach(district => {
                        const option = document.createElement('option');
                        option.value = district;
                        option.textContent = district;
                        districtSelect.appendChild(option);
                    });
                }
            });
        };

        // Thông tin cá nhân
        const provinceSelect = document.getElementById('province');
        const districtSelect = document.getElementById('district');
        const provinceCodeInput = document.getElementById('provinceCode');
        setupDynamicDistricts(provinceSelect, districtSelect, provinceCodeInput);

        // Lớp 10
        const schoolProvinceSelect10 = document.getElementById('schoolProvince10');
        const schoolDistrictSelect10 = document.getElementById('schoolDistrict10');
        const schoolProvinceCodeInput10 = document.getElementById('schoolProvinceCode10');
        setupDynamicDistricts(schoolProvinceSelect10, schoolDistrictSelect10, schoolProvinceCodeInput10);

        // Lớp 11
        const schoolProvinceSelect11 = document.getElementById('schoolProvince11');
        const schoolDistrictSelect11 = document.getElementById('schoolDistrict11');
        const schoolProvinceCodeInput11 = document.getElementById('schoolProvinceCode11');
        setupDynamicDistricts(schoolProvinceSelect11, schoolDistrictSelect11, schoolProvinceCodeInput11);

	// Lớp 12
        const schoolProvinceSelect12 = document.getElementById('schoolProvince12');
        const schoolDistrictSelect12 = document.getElementById('schoolDistrict12');
        const schoolProvinceCodeInput12 = document.getElementById('schoolProvinceCode12');
        setupDynamicDistricts(schoolProvinceSelect12, schoolDistrictSelect12, schoolProvinceCodeInput12);


	// Kiểm tra định dạng số ĐT 
       const phoneInput = document.getElementById('phone');

        phoneInput.addEventListener('input', function() {
            if (this.validity.valueMissing) {
                this.setCustomValidity('Phải điền ô này');
            } else if (this.validity.patternMismatch) {
                this.setCustomValidity('Số điện thoại phải gồm 10 chữ số.');
            } else {
                this.setCustomValidity('');
            }
        });
	// Kiểm tra định dạng số CCCD
	 identityInput.addEventListener('input', function() {
            if (this.validity.valueMissing) {
                this.setCustomValidity('Phải điền ô này');
            } else if (this.validity.patternMismatch) {
                this.setCustomValidity('Số CCCD phải gồm 12 chữ số.');
            } else {
                this.setCustomValidity('');
            }
        });

