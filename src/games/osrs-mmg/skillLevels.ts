export function parseRequirementLevel(requirementText: string): number {
  const match = requirementText.trim().match(/(\d+)/);
  return match ? Number(match[1]) : 0;
}
