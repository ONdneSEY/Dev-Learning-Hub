export interface modulesType {
  id?: number;
  title: string;
  description: string;
}

export interface topicsType {
  id?: number;
  moduleId: number;
  title: string;
  isCompleted: boolean;
  tags: [];
  officialDocsUrl: string;
  shortDescription: string;
  simpleExplanation: string;
  codeSnippet: string;
  homeworkTask: string;
  homeworkSolution: string;
  pitfalls: string;
}
