// 카카오 맵 타입 정의
declare global {
  interface Window {
    kakao: {
      maps: {
        load(callback: () => void): void
        
        // LatLng
        LatLng: new (lat: number, lng: number) => {
          getLat(): number
          getLng(): number
        }
        
        // Map
        Map: new (container: HTMLElement, options: {
          center: InstanceType<Window['kakao']['maps']['LatLng']>
          level: number
        }) => {
          setCenter(latLng: InstanceType<Window['kakao']['maps']['LatLng']>): void
          setLevel(level: number, options?: {
            animate?: boolean | { duration: number }
            anchor?: InstanceType<Window['kakao']['maps']['LatLng']>
          }): void
        }
        
        // Marker
        Marker: new (options: {
          position: InstanceType<Window['kakao']['maps']['LatLng']>
          map?: InstanceType<Window['kakao']['maps']['Map']>
        }) => {
          setMap(map: InstanceType<Window['kakao']['maps']['Map']> | null): void
          setPosition(position: InstanceType<Window['kakao']['maps']['LatLng']>): void
        }
        
        // Event handling
        event: {
          addListener(
            instance: object, 
            eventName: string, 
            handler: (...args: unknown[]) => void
          ): void
          removeListener(
            instance: object, 
            eventName: string, 
            handler: (...args: unknown[]) => void
          ): void
        }
        
        // Services
        services: {
          Status: {
            OK: 'OK'
            ZERO_RESULT: 'ZERO_RESULT'
            ERROR: 'ERROR'
          }
          Geocoder: new () => {
            addressSearch(
              address: string,
              callback: (
                result: Array<{
                  address: {
                    address_name: string
                    main_address_no: string
                    mountain_yn: string
                    region_1depth_name: string
                    region_2depth_name: string
                    region_3depth_name: string
                    region_3depth_h_name: string
                    sub_address_no: string
                    zip_code: string
                  }
                  address_name: string
                  address_type: 'REGION' | 'ROAD' | 'REGION_ADDR' | 'ROAD_ADDR'
                  road_address: unknown
                  x: string
                  y: string
                }>,
                status: 'OK' | 'ZERO_RESULT' | 'ERROR'
              ) => void,
              options?: {
                page?: number
                size?: number
              }
            ): void
          }
        }
      }
    }
  }
}

export {};
