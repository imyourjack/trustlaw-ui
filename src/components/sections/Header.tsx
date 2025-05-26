type Props = {
    activeSection: string
  }
  
  export default function Header({ activeSection }: Props) {
    const sections = [
      { id: 'qualification', label: '회생/파산 신청자격' },
      { id: 'consult', label: '상담안내' },
      { id: 'faq', label: '자주하는 질문' },
      { id: 'location', label: '오시는 길' },
    ]
  
    const handleClick = (id: string) => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  
    return (
      <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-screen-lg mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="/logo_main.png"
              alt="최길성 법무사사무소"
              className="w-64 h-auto cursor-pointer"
              onClick={() => handleClick('home')}
            />
          </div>
          <nav className="hidden md:flex space-x-6">
            {sections.map(({ id, label }) => (
              <a key={id} onClick={() => handleClick(id)} className="text-xl hover:text-blue-300 transition-colors cursor-pointer">
                <span className={activeSection === id ? 'text-blue-300' : ''}>{label}</span>
              </a>
            ))}
          </nav>
        </div>
      </header>
    )
  }
  