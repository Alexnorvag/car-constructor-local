export function createProjectsData(
  projectName: string,
  status: string,
  nextReview: string,
  milestones: { current: number; amount: number },
  delivery: string
) {
  return { projectName, status, nextReview, milestones, delivery };
}

export function createDetailsData(model: string, status: string) {
  return { model, status };
}
