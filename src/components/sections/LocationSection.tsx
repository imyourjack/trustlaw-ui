'use client'

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/utils/animations';

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
    <motion.section 
      id="location" 
      className="relative scroll-mt-32 py-24 pb-32 bg-gradient-to-br from-blue-50 to-indigo-50"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={staggerContainer(0.2)}
    >
      <div className="absolute inset-0 bg-[url('/images/map-pattern.png')] opacity-10"></div>
      <div className="relative z-10">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-blue-900"
          variants={fadeInUp}
        >
          오시는 길
        </motion.h2>
        <motion.div 
          className="relative z-10 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-6 max-w-5xl mx-auto"
          variants={fadeInUp}
          whileHover={{ 
            y: -5, 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
            transition: { duration: 0.3 }
          }}
        >
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer(0.1)}
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-700">주소</h3>
              <p className="text-gray-700">광주광역시 동구 동명로 110, 법조타운 4층 404호</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-700">교통 안내</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>법원 버스 정류장 도보 2분 거리</li>
                <li>주차장 이용 가능</li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.div 
            id="map" 
            className="w-full h-96 rounded-xl overflow-hidden shadow-lg"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
          />
        </motion.div>
      </div>
    </motion.section>
  )
}