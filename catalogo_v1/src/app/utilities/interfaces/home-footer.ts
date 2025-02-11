export interface HomeFooterSectionInterface {
  title: string;
  subsections: HomeFooterSubSectionInterface[];
}

export interface HomeFooterSubSectionInterface {
  title: string;
  hasRef: boolean;
  ref?: string;
  current?: boolean;
}

export interface SocialMediaIconsStructureInterface {
  name: string;
  icon: string;
  url: string;
}
