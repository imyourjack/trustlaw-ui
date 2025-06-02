'use client'

import { useEffect } from 'react'

export default function LocationSection() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      console.error('❌ window 객체 없음 (SSR)')
      return
    }

    const scriptId = 'kakao-map-script'
    const existingScript = document.getElementById(scriptId)

    const initMap = () => {
      console.log('✅ initMap 실행됨')
      const container = document.getElementById('map')
      if (!container || !window.kakao?.maps) {
        console.error('❌ container 또는 kakao.maps 없음')
        return
      }

      const center = new window.kakao.maps.LatLng(35.145565, 126.922982)
      const map = new window.kakao.maps.Map(container, {
        center,
        level: 3,
      })

      const marker = new window.kakao.maps.Marker({ position: center })
      marker.setMap(map)
      console.log('✅ 마커 표시 완료')
    }

    if (!existingScript) {
      console.log('📦 카카오 스크립트 처음 추가')
      const script = document.createElement('script')
      script.id = scriptId
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;
      script.async = true
      script.onload = () => {
        console.log('✅ Kakao map script loaded')
        if (window.kakao?.maps?.load) {
          console.log('✅ kakao.maps.load 있음')
          window.kakao.maps.load(initMap)
        } else {
          console.error('❌ window.kakao.maps.load 없음')
        }
      }
      script.onerror = () => {
        console.error('❌ 카카오 스크립트 로딩 실패')
      }
      document.head.appendChild(script)
    } else {
      console.log('📦 기존 스크립트 있음')
      if (window.kakao?.maps?.load) {
        console.log('✅ kakao.maps.load 있음')
        window.kakao.maps.load(initMap)
      } else {
        console.error('❌ window.kakao.maps.load 없음')
      }
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