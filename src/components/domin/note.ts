// 音符
export type noteType = "natural" | "flat" | "sharp";

// 音调
export type nodePitch = "A" | "B" | "C" | "D" | "E" | "F" | "G";

// 音阶
export type OctaveIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

// 音阶值
export type MidiValue = number;

// 音调值
export type PitchIndex = number;

export type Note = {
  midi: MidiValue;
  type: noteType;
  pitch: nodePitch;
  index: PitchIndex;
  octave: OctaveIndex;
};


