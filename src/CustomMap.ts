interface Mappable {
  location: {
    latitude: number;
    longitude: number;
  };
  getMarkerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.latitude,
        lng: mappable.location.longitude,
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.getMarkerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}