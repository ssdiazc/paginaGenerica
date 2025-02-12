import { Injectable } from '@angular/core';
import LocationsConstants from '../constants/data-constants';
import FooterConstants from '../constants/footer-constants';
import HeaderConstants from '../constants/header-constants';
import { AllConstantsStructureInterfaz } from '../interfaces/general';

let allConstants: AllConstantsStructureInterfaz[] = [
  {
    name: 'footer',
    data: FooterConstants,
  },
  {
    name: 'header',
    data: HeaderConstants,
  },
  {
    name: 'locations',
    data: LocationsConstants,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  constructor() {}

  selectorManyConstants(constantsType: string[]) {
    let findData = constantsType.map((type) =>
      allConstants.find((constList) => type === constList?.name)
    );
    return findData;
  }
  selectorConstants(constantsType: string) {
    return allConstants?.find((type) => type.name === constantsType)?.data;
  }
}
