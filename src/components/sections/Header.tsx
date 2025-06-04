import { useState } from 'react';
import Image from 'next/image';

type Props = {
    activeSection: string
}

export default function Header({ activeSection }: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sections = [
        { id: 'home', label: '홈' },
        { id: 'qualification', label: '회생/파산 신청자격' },
        { id: 'consult', label: '상담안내' },
        { id: 'faq', label: '자주하는 질문' },
        { id: 'location', label: '오시는 길' },
    ]

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
          const header = document.querySelector('header');
          const headerHeight = header?.offsetHeight || 0;
          let offset = 0;
          
          // 오시는 길 섹션인 경우 추가 오프셋 적용
          if (id === 'location') {
            offset = 40; // 필요에 따라 조정 가능
          }
          
          window.scrollTo({
            top: el.offsetTop - headerHeight - offset,
            behavior: 'smooth'
          });
        }
        setIsMenuOpen(false);
      }

    return (
        <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-screen-lg mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo_main.png"
                        alt="최길성 법무사사무소"
                        width={256}
                        height={64}
                        className="w-64 h-auto cursor-pointer"
                        onClick={() => handleClick('home')}
                        priority
                    />
                </div>
                
                {/* 햄버거 버튼 - 모바일에서만 표시 */}
                <button 
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="메뉴 토글"
                >
                    <div className="w-6 flex flex-col gap-1.5">
                        <span className={`h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>

                {/* 데스크탑 메뉴 */}
                <nav className="hidden md:flex space-x-6">
                    {sections
                        .filter(({ id }) => id !== 'home') // ← 홈은 메뉴에서 제외
                        .map(({ id, label }) => (
                            <a key={id} onClick={() => handleClick(id)} className="text-xl hover:text-blue-300 transition-colors cursor-pointer">
                                <span className={activeSection === id ? 'text-blue-300' : ''}>{label}</span>
                            </a>
                        ))}
                </nav>
            </div>

            {/* 모바일 메뉴 */}
            <div className={`md:hidden bg-blue-900 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
                <nav className="flex flex-col space-y-4 p-4">
                    {sections
                        .filter(({ id }) => id !== 'home') // ← 홈은 메뉴에서 제외
                        .map(({ id, label }) => (
                            <a 
                                key={id} 
                                onClick={() => handleClick(id)} 
                                className="text-xl hover:text-blue-300 transition-colors cursor-pointer py-2"
                            >
                                <span className={activeSection === id ? 'text-blue-300' : ''}>{label}</span>
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}