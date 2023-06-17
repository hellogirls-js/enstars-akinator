type Attribute = "height" | "hair_color" | "eye_color" | "school" | "birthday" | "circle" | "agency" | "unit" | "glasses" | "multi_hair" | "multi_eye" | "long_hair" | "beauty_mark";
type Color = "red" | "orange" | "blonde" | "yellow" | "green" | "blue" | "purple" | "magenta" | "brown" | "black" | "gray" | "white" | string;
type Agency = "starpro" | "cospro" | "rhylin" | "newdi" | string;

interface Question {
  question: string;
  attribute: Attribute;
  value: any;
  yesEffect: (questionArr: Question[],setQuestions: any, idols: Character[], setCharas: any) => void;
  noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => void;
}

interface Character {
  character_id: number;
  unit: number[];
  agency: Agency;
  height: number;
  weight: number;
  birthday: string;
  horoscope: number;
  age: number;
  school?: string;
  blood_type: string;
  circle: string[];
  handedness?: string;
  height_old?: number;
  hair_color: Color;
  eye_color?: Color;
  multi_eye?: boolean;
  multi_hair?: boolean;
  beauty_mark?: boolean;
  long_hair?: boolean;
  glasses?: boolean;
}