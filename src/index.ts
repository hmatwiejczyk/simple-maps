import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { loadMaps } from '../config';

const user = new User();
const company = new Company();

loadMaps().then(() => {
  const customMap = new CustomMap('map');
  customMap.addUserMarker(user);
  customMap.addCompanyMarker(company);
});
