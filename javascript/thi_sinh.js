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
				<option value="Chon_nganh">Chọn ngành</option>
				<option value="Cong_nghe_sinh_hoc">Công nghệ sinh học</option>
				<option value="Ky_thuat_hoa_hoc">Công nghệ hóa học</option>
				<option value="Ky_thuat_dieu_khien_va_tu_dong_hoa">Kỹ thuật điều khiển và tự động hóa</option>
				<option value="Ky_thuat_y_sinh">Kỹ thuật y sinh</option>
				<option value="Ky_thuat_dien_tu_vien_thong">Kỹ thuật điện tử- viễn thông</option>
				<option value="Ky_thuat_robot_va_tri_tue_nhan_tao">Kỹ thuật robot và trí tuệ nhân tạo</option>
				<option value="Cong_nghe_thong_tin">Công nghệ thông tin</option>
				<option value="Ky_thuat_phan_men">Kỹ thuật phần mềm</option>
				<option value="Cong_nghe_thong_tin_Viet_Nhat">Công nghệ thông tin Việt Nhật</option>
				<option value="Khoa_hoc_may_tinh">Khoa học máy tính</option>
				<option value="Tai_nang_khoa_hoc_may_tinh">Tài năng khoa học máy tính</option>
				<option value="An_toan_thong_tin">An toàn thông tin</option>
				<option value="Tri_tue_nhan_tao">Trí tuệ nhân tạo</option>
				<option value="Ky_thuat_co_dien_tu">Kỹ thuật cơ điện tử</option>
				<option value="Vat_lieu_tien_tien_va_cong_nghe_nano">Vật liệu tiên tiến và công nghệ nano</option>
				<option value="Vat_lieu_thong_minh_va_tri_tue_nhan_tao">Vật liệu thông minh và trí tuệ nhân tạo</option>
				<option value="Chip_ban_dan_va_cong_nghe_dong_goi">Chip bán dẫn và Công nghệ đóng gói</option>
				<option value="Ky_thuat_o_to">Kỹ thuật ô tô</option>
				<option value="Co_dien_tu_o_to">Cơ điện tử ô tô</option>
				<option value="Ky_thuat_phan_men_o_to">Kỹ thuật phần mềm ô tô</option>
				<option value="Quan_tri_kinh_doanh">Quản trị kinh doanh</option>
				<option value="Ke_toan">Kế toán</option>
				<option value="Tai_chinh_ngan_hang">Tài chính-Ngân hàng</option>
				<option value="Quan_tri_nhan_luc">Quản trị nhân lực</option>
				<option value="Marketing">Marketing</option>
				<option value="Ngon_ngu_anh">Ngôn ngữ Anh</option>
				<option value="Ngon_ngu_trung">Ngôn ngữ Trung Quốc</option>
				<option value="Ngon_ngu_han">Ngôn ngữ Hàn Quốc</option>
				<option value="Ngon_ngu_nhat">Ngôn ngữ Nhật</option>
				<option value="Ngon_ngu_phap">Ngôn ngữ Pháp</option>
				<option value="Dong_phuong_hoc">Đông phương học</option>
				<option value="Du_lich">Du lịch</option>
				<option value="Kinh_doanh_du_lich_so">Kinh doanh du lịch số</option>
				<option value="Quan_tri_khach_san">Quản trị khách sạn</option>
				<option value="Dieu_duong">Điều dưỡng</option>
				<option value="Duoc_hoc">Dược học</option>
				<option value="Ky_thuat_xet_nghiem_y_hoc">Kỹ thuật xét nghiệm y học</option>
				<option value="Y_khoa">Y khoa</option>
				<option value="Rang_ham_mat">Răng-Hàm-Mặt</option>
			</select>
			<select id="block${wishCount}">
				<option value="Chon_to_hop">Chọn tổ hợp xét tuyển</option>
				<option value="A00">A00 (Toán, Lý, Hóa)</option>
				<option value="A01">A01 (Toán, Lý, Anh)</option>
				<option value="A02">A02 (Toán, Vật lý, Sinh học)</option>
				<option value="A10">A10 (Toán, Vật lý, Giáo dục công dân)</option>
				<option value="B00">B00 (Toán, Hóa học, Sinh học)</option>
				<option value="B08">B08 (Toán, Sinh học, Tiếng Anh)</option>
				<option value="C00">C00 (Văn, Lịch sử, Địa lí)</option>
				<option value="C01">C01 (Văn, Toán, Vật lí)</option>
				<option value="C04">C04 (Văn, Toán, Địa lí)</option>
				<option value="D01">D01 (Văn, Toán, tiếng Anh)</option>
				<option value="D07">D07 (Toán, Hóa học, Tiếng Anh)</option>
				<option value="D08">D08 (Toán, Sinh học, Tiếng Anh)</option>
				<option value="D09">D09 (Toán, Lịch sử, Tiếng Anh)</option>
				<option value="D10">D10 (Toán, Địa lí, Tiếng Anh)</option>
				<option value="D15">D15 (Văn, Địa lí, Tiếng Anh)</option>
			</select>
		</div>
	</div>
`;
document.getElementById('wish-container').appendChild(newWish);
document.getElementById('message').textContent = ""; // Xóa thông báo
}
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