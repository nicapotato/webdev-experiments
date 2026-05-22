import type { IoLine, IoLineAtKph, MmgCalcResult, MmgGuide } from "./types";

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

export function formatQty(value: number): string {
  const abs = Math.abs(value);
  if (abs >= 100) return Math.round(value).toLocaleString("en-GB");
  if (abs >= 1) return value.toFixed(2);
  if (abs >= 0.01) return value.toFixed(4);
  return value.toPrecision(3);
}
