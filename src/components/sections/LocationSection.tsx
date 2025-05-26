export default function LocationSection() {
    return (
      <section id="location" className="scroll-mt-32 mb-20">
        <h2 className="text-3xl font-bold mb-8">오시는 길</h2>
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">주소</h3>
              <p className="text-gray-700">광주광역시 동구 동명로 110, 법조타운 4층 404호</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">교통 안내</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>지하철 1호선 동명역 1번 출구 도보 5분</li>
                <li>버스 정류장 도보 3분 거리</li>
                <li>주차장 이용 가능</li>
              </ul>
            </div>
          </div>
          <div>
            <iframe
              src="https://map.naver.com/v5/entry/place/33118804?c=14136251.6358795,4184624.5780483,17,0,0,0,dh"
              width="100%"
              height="400"
              className="rounded-lg w-full border"
              allowFullScreen
              loading="lazy"
              title="네이버 지도"
            ></iframe>
          </div>
        </div>
      </section>
    )
  }