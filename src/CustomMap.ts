import { loadMaps } from '../config';

export class CustomMap {
  private googleMap: Promise<google.maps.Map | void>;
  constructor(mapContainerId: string) {
    this.googleMap = loadMaps().then(() => {
      new google.maps.Map(document.getElementById(mapContainerId), {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0
        }
      });
    });
  }
}
