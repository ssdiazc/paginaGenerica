import { Injectable } from '@angular/core';
import LocationsConstants from '../constants/data-constants';
import FooterConstants from '../constants/footer-constants';
import GeneralConditionsConstants from '../constants/general-conditions';
import HeaderConstants from '../constants/header-constants';
import ResponsabilityClause from '../constants/responsability-clause';
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
  {
    name: 'gen-conditions',
    data: GeneralConditionsConstants,
  },
  {
    name: 'resp-clause',
    data: ResponsabilityClause,
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
