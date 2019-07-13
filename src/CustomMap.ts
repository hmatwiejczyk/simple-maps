interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapContainerId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(mapContainerId),
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0
        }
      }
    );
  }

  addMarker(marker: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: marker.location.lat,
        lng: marker.location.lng
      }
    });
  }
}
