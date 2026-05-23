import type { IoLine, IoLineAtKph, ItemBreakdownRank, MmgCalcResult, MmgGuide, RankedBreakdownLine } from "./types";

function scaleLine(line: IoLine, kph: number): IoLineAtKph {
  return {
    ...line,
    qtyPerHour: line.qtyPerCompletion * kph,
    gpPerHour: line.gpPerCompletion * kph,
  };
}

export function calcAtKph(guide: MmgGuide, kph: number): MmgCalcResult {
  return {
    kph,
    inputs: guide.inputs.map((line) => scaleLine(line, kph)),
    outputs: guide.outputs.map((line) => scaleLine(line, kph)),
    inputTotal: guide.inputTotalPk * kph + guide.inputTotalPh,
    outputTotal: guide.outputTotalPk * kph + guide.outputTotalPh,
    profit:
      (guide.outputTotalPk - guide.inputTotalPk) * kph +
      (guide.outputTotalPh - guide.inputTotalPh),
  };
}

export function formatGp(value: number): string {
  const rounded = Math.round(value);
  return `${rounded.toLocaleString("en-GB")} gp`;
}

export function formatGpCompact(value: number): string {
  const abs = Math.abs(value);
  if (abs >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (abs >= 1_000) return `${Math.round(value / 1_000)}k`;
  return String(Math.round(value));
}

export function formatQty(value: number): string {
  const abs = Math.abs(value);
  if (abs >= 100) return Math.round(value).toLocaleString("en-GB");
  if (abs >= 1) return value.toFixed(2);
  if (abs >= 0.01) return value.toFixed(4);
  return value.toPrecision(3);
}

function toRankedLine(line: IoLineAtKph, ioType: RankedBreakdownLine["ioType"]): RankedBreakdownLine {
  return {
    ...line,
    ioType,
    lineKey: `${ioType}:${line.wikiSlug}`,
  };
}

export function rankItemBreakdown(guide: MmgGuide, kph: number, topN = 5): ItemBreakdownRank {
  const calc = calcAtKph(guide, kph);
  const all = [
    ...calc.inputs.map((line) => toRankedLine(line, "input")),
    ...calc.outputs.map((line) => toRankedLine(line, "output")),
  ];
  const sorted = [...all].sort((a, b) => Math.abs(b.gpPerHour) - Math.abs(a.gpPerHour));
  return {
    top: sorted.slice(0, topN),
    other: sorted.slice(topN),
  };
}
