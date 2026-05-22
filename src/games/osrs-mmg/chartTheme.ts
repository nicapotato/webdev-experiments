export const OSRS_CHART_THEME = {
  grid: "#d0d7de",
  axis: "#57606a",
  bandP75: "#dbeafe",
  bandP25: "#eff6ff",
  medianLine: "#0969da",
  volumeLine: "#bf8700",
  tooltip: {
    background: "#ffffff",
    border: "#d0d7de",
    text: "#1f2328",
  },
  colors: ["#0969da", "#8250df", "#1a7f37", "#cf222e", "#bf8700", "#57606a"],
} as const;

export const axisTick = { fill: OSRS_CHART_THEME.axis, fontSize: 11 };

export const tooltipProps = {
  contentStyle: {
    background: OSRS_CHART_THEME.tooltip.background,
    border: `1px solid ${OSRS_CHART_THEME.tooltip.border}`,
    borderRadius: "0.35rem",
    color: OSRS_CHART_THEME.tooltip.text,
  },
  labelStyle: { color: OSRS_CHART_THEME.tooltip.text },
};
