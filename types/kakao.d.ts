// types/kakao.d.ts

export {}; // 이 줄이 꼭 필요함 (모듈로 만들기 위해)

declare global {
  interface Window {
    kakao: {
      maps: {
        load(callback: () => void): void;

        LatLng: new (lat: number, lng: number) => KakaoLatLng;
        Map: new (
          container: HTMLElement,
          options: { center: KakaoLatLng; level: number }
        ) => KakaoMap;
        Marker: new (options: { position: KakaoLatLng; map?: KakaoMap }) => KakaoMarker;
        InfoWindow: new (options: {
          content?: string | HTMLElement;
          position?: KakaoLatLng;
          removable?: boolean;
          zIndex?: number;
          disableAutoPan?: boolean;
        }) => KakaoInfoWindow;

        event: {
          addListener(
            instance: object,
            eventName: string,
            handler: (...args: unknown[]) => void
          ): void;
          removeListener(
            instance: object,
            eventName: string,
            handler: (...args: unknown[]) => void
          ): void;
        };

        services: {
          Status: {
            OK: 'OK';
            ZERO_RESULT: 'ZERO_RESULT';
            ERROR: 'ERROR';
          };
          Geocoder: new () => {
            addressSearch(
              address: string,
              callback: (
                result: KakaoGeocoderResult[],
                status: 'OK' | 'ZERO_RESULT' | 'ERROR'
              ) => void,
              options?: { page?: number; size?: number }
            ): void;
          };
        };
      };
    };
  }

  type KakaoLatLng = {
    getLat(): number;
    getLng(): number;
  };

  type KakaoMap = {
    setCenter(latLng: KakaoLatLng): void;
    setLevel(level: number, options?: {
      animate?: boolean | { duration: number };
      anchor?: KakaoLatLng;
    }): void;
  };

  type KakaoMarker = {
    setMap(map: KakaoMap | null): void;
    setPosition(position: KakaoLatLng): void;
  };

  type KakaoInfoWindow = {
    open(map: KakaoMap, marker?: KakaoMarker): void;
    close(): void;
    setContent(content: string | HTMLElement): void;
    setPosition(position: KakaoLatLng): void;
    setMap(map: KakaoMap | null): void;
  };

  type KakaoGeocoderResult = {
    address: {
      address_name: string;
      main_address_no: string;
      mountain_yn: string;
      region_1depth_name: string;
      region_2depth_name: string;
      region_3depth_name: string;
      region_3depth_h_name: string;
      sub_address_no: string;
      zip_code: string;
    };
    address_name: string;
    address_type: 'REGION' | 'ROAD' | 'REGION_ADDR' | 'ROAD_ADDR';
    road_address: unknown;
    x: string;
    y: string;
  };
}