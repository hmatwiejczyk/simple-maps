import { User } from './User';
import { Company } from './Company';
import { loadMaps } from "../config";

const mapEl = document.getElementById('map');

loadMaps().then(() => {
  new google.maps.Map(mapEl, {
    zoom: 1,
    center: {
      lat: 0,
      lng: 0
    }
  });
});