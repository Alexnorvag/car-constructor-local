export type ProjectMilestone = {
  current: number;
  amount: number;
};

export interface ProjectData {
  projectName: string;
  status: string;
  nextReview: string;
  milestones: ProjectMilestone;
  delivery: string;
}

export interface DetailsData {
  model: string;
  status: string;
}
