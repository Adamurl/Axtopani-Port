export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
  }
  
  export type WorkSection = {
    sectionDescription: string;
    projects: Project[];
  }
  
  export type Works = {
    tochtli: WorkSection;
    'sigma lambda beta': WorkSection;
    personal: WorkSection;
  }
  
  export type WorkCategory = keyof Works;
  
  