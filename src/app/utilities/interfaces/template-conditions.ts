export interface TemplateConditionsInputStructure {
  title?: string;
  sections?: TemplateConditionsSectionStructure[];
}

export interface TemplateConditionsSectionStructure {
  title?: string;
  content?: string[];
  list?: string[];
}
