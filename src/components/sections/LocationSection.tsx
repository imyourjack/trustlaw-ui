'use client'

import { useEffect } from 'react'

export default function LocationSection() {
  useEffect(() => {
    const scriptId = 'kakao-map-script'
    const existingScript = document.getElementById(scriptId)

    if (!existingScript) {
      const script = document.createElement('script')
      script.id = scriptId
      script.src =
        `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false&libraries=services`
      script.async = true
      script.onload = () => {
        if (window.kakao?.maps?.load) {
          window.kakao.maps.load(initMap)
        }
      }
      document.head.appendChild(script)
    } else {
      if (window.kakao?.maps?.load) {
        window.kakao.maps.load(initMap)
      }
    }

    function initMap() {
      const container = document.getElementById('map')
      if (!container || !window.kakao?.maps) return

      const map = new window.kakao.maps.Map(container, {
        center: new window.kakao.maps.LatLng(35.145565, 126.922982),
        level: 3,
      })

      const geocoder = new window.kakao.maps.services.Geocoder()

      const address = '광주 동구 동명로 110 법조타운 4층 404호'

      geocoder.addressSearch(address, function (result, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(Number(result[0].y), Number(result[0].x))

          map.setCenter(coords)

          const marker = new window.kakao.maps.Marker({
            map,
            position: coords,
          })

          const info = new window.kakao.maps.InfoWindow({
            content: `
              <div style="padding:6px 12px; font-size:14px;">
                <a 
                  href="https://map.kakao.com/link/map/최길성 법무사사무소,${result[0].y},${result[0].x}" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style="color:#0055aa; font-weight:bold; text-decoration:underline;"
                >
                  최길성 법무사사무소
                </a>
              </div>
            `
          })

          info.open(map, marker)

          // ✅ 클릭 시 외부 카카오맵으로 연결
          window.kakao.maps.event.addListener(marker, 'click', () => {
            const lat = result[0].y
            const lng = result[0].x
            const placeName = encodeURIComponent('최길성 법무사사무소')

            const url = `https://map.kakao.com/link/map/${placeName},${lat},${lng}`
            window.open(url, '_blank')
          })
        }
      })
    }
  }, [])

  return (
    <section id="location" className="scroll-mt-32 mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">오시는 길</h2>
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700">주소</h3>
            <p className="text-gray-700">광주광역시 동구 동명로 110, 법조타운 4층 404호</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700">교통 안내</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>지하철 1호선 동명역 1번 출구 도보 5분</li>
              <li>버스 정류장 도보 3분 거리</li>
              <li>주차장 이용 가능</li>
            </ul>
          </div>
        </div>
        <div>
          <div id="map" className="w-full h-[400px] rounded-lg border" />
        </div>
      </div>
    </section>
  )
}