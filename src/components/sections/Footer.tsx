export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 text-sm py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* 좌측 - 사무소 정보 */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-white">최길성 법무사사무소</p>
            <p>주소: 광주광역시 동구 동명로 110, 법조타운 4층 404호</p>
            <p className="mb-1">대표자: 최길성 | 사업자등록번호: 123-45-67890</p>
            <p>전화: 062-224-2227</p>
            <p>이메일: trustlaw@example.com</p>
          </div>
  
          {/* 우측 - 사이트 정보 */}
          <div className="text-center md:text-right space-y-1">
            <p>&copy; {new Date().getFullYear()} Copyrightⓒ 최길성 법무사사무소 All Rights Reserved.</p>
            <p>
              <a href="#privacy" className="hover:underline">개인정보처리방침</a> |{' '}
              <a href="#terms" className="hover:underline">이용약관</a>
            </p>
          </div>
        </div>
      </footer>
    )
  }
  