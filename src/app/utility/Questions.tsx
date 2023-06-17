const hairQuestion = (hairColor: Color): string => {
  return `Does this idol have ${hairColor} hair?`;
}

const eyeQuestion = (eyeColor: Color): string => {
  return `Does this character have ${eyeColor} eyes?`;
}

const circleQuestion = (circle: string): string => {
  return `Is this character a part of the circle ${circle}?`;
}

const monthQuestion = (month: string): string => {
  return `Was this character born in ${month}?`
}

function yesEffect(attribute: Attribute, value: any, questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) {
  // remove questions relating to this attribute
  setQuestions(questionArr.filter(q => q.attribute !== attribute ));
  // also remove idols that don't have that value
  setCharas(idols.filter(i => i[attribute] === value));
}

function noEffect(questionString: string, attribute: Attribute, value: any, questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) {
  setQuestions(questionArr.filter(q => q.question !== questionString));
  setCharas(idols.filter(i => i[attribute]!== value));
}

function circleYesEffect(question: string, setQuestions: any, questionArr: Question[], value: string, idols: Character[], setCharas: any) {
  // dont remove circle questions except for this one
  setQuestions(questionArr.filter(q => q.question !== question));
  // remove idols that are not a part of the circle
  setCharas(idols.filter(i => i.circle.includes(value)));
}

function circleNoEffect(question: string, setQuestions: any, questionArr: Question[], value: string, idols: Character[], setCharas: any) {
  // dont remove circle questions except for this one
  setQuestions(questionArr.filter(q => q.question !== question));
  // remove idols that are a part of the circle
  setCharas(idols.filter(i => !i.circle.includes(value)));
}

export const questions: Question[] = [
  {
    question: hairQuestion("red"),
    attribute: "hair_color",
    value: "red",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("hair_color", "red", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(hairQuestion("red"), "hair_color", "red", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: hairQuestion("orange"),
    attribute: "hair_color",
    value: "orange",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("hair_color", "orange", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(hairQuestion("orange"), "hair_color", "orange", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: hairQuestion("blonde"),
    attribute: "hair_color",
    value: "blonde",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("hair_color", "blonde", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(hairQuestion("blonde"), "hair_color", "blonde", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: hairQuestion("green"),
    attribute: "hair_color",
    value: "green",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("hair_color", "green", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(hairQuestion("green"), "hair_color", "green", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: hairQuestion("blue"),
    attribute: "hair_color",
    value: "blue",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("hair_color", "blue", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(hairQuestion("blue"), "hair_color", "blue", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: hairQuestion("purple"),
    attribute: "hair_color",
    value: "purple",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("hair_color", "purple", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(hairQuestion("purple"), "hair_color", "purple", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: hairQuestion("black"),
    attribute: "hair_color",
    value: "black",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("hair_color", "black", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(hairQuestion("black"), "hair_color", "black", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: hairQuestion("brown"),
    attribute: "hair_color",
    value: "brown",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("hair_color", "brown", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(hairQuestion("brown"), "hair_color", "brown", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: hairQuestion("gray"),
    attribute: "hair_color",
    value: "gray",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("hair_color", "gray", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(hairQuestion("gray"), "hair_color", "gray", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: hairQuestion("white"),
    attribute: "hair_color",
    value: "white",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("hair_color", "white", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(hairQuestion("white"), "hair_color", "white", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: hairQuestion("magenta"),
    attribute: "hair_color",
    value: "magenta",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("hair_color", "magenta", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(hairQuestion("magenta"), "hair_color", "magenta", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: eyeQuestion("red"),
    attribute: "eye_color",
    value: "red",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("eye_color", "red", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(eyeQuestion("red"), "eye_color", "red", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: eyeQuestion("orange"),
    attribute: "eye_color",
    value: "orange",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("eye_color", "orange", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(eyeQuestion("orange"), "eye_color", "orange", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: eyeQuestion("yellow"),
    attribute: "eye_color",
    value: "yellow",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("eye_color", "yellow", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(eyeQuestion("yellow"), "eye_color", "yellow", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: eyeQuestion("green"),
    attribute: "eye_color",
    value: "green",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("eye_color", "green", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(eyeQuestion("green"), "eye_color", "green", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: eyeQuestion("blue"),
    attribute: "eye_color",
    value: "blue",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("eye_color", "blue", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(eyeQuestion("blue"), "eye_color", "blue", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: eyeQuestion("purple"),
    attribute: "eye_color",
    value: "purple",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("eye_color", "purple", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(eyeQuestion("purple"), "eye_color", "purple", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: eyeQuestion("brown"),
    attribute: "eye_color",
    value: "brown",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("eye_color", "brown", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(eyeQuestion("brown"), "eye_color", "brown", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: eyeQuestion("black"),
    attribute: "eye_color",
    value: "black",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("eye_color", "black", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(eyeQuestion("black"), "eye_color", "black", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: eyeQuestion("gray"),
    attribute: "eye_color",
    value: "gray",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("eye_color", "gray", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect(eyeQuestion("gray"), "eye_color", "gray", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: "Does this character have long hair?",
    attribute: "long_hair",
    value: true,
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("long_hair", true, questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect("Does this character have long hair?", "long_hair", true, questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: "Does this character wear glasses?",
    attribute: "glasses",
    value: true,
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("glasses", true, questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect("Does this character wear glasses?", "glasses", true, questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: "Does this character have a beauty mark?",
    attribute: "beauty_mark",
    value: true,
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("beauty_mark", true, questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect("Does this character have a beauty mark?", "beauty_mark", true, questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: "Does this character have streaks in their hair?",
    attribute: "multi_hair",
    value: true,
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("multi_hair", true, questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect("Does this character have streaks in their hair?", "multi_hair", true, questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: "Is this character a part of StarPro?",
    attribute: "agency",
    value: "starpro",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("agency", "starpro", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect("Is this character a part of StarPro?", "agency", "starpro", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: "Is this character a part of CosPro?",
    attribute: "agency",
    value: "cospro",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("agency", "cospro", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect("Is this character a part of CosPro?", "agency", "cospro", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: "Is this character a part of RhythLink?",
    attribute: "agency",
    value: "rhylin",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("agency", "rhylin", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect("Is this character a part of RhythLink?", "agency", "rhylin", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: "Is this character a part of NewDi?",
    attribute: "agency",
    value: "newdi",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("agency", "newdi", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect("Is this character a part of NewDi?", "agency", "newdi", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: "Has this character ever been to high school?",
    attribute: "school",
    value: undefined,
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove characters that have no school attribute
      setCharas(idols.filter(i => i.school !== undefined));
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove questions relating to school
      setQuestions(questionArr.filter(q => q.attribute !== "school"));
      // remove characters that have been to high school
      setCharas(idols.filter(i => i.school === undefined));
    }
  },
  {
    question: "Has this character ever been to Yumenosaki Academy?",
    attribute: "school",
    value: "Yumenosaki",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("school", "Yumenosaki", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect("Has this character ever been to Yumenosaki Academy?", "school", "Yumenosaki", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: "Has this character ever been to Reimei Academy?",
    attribute: "school",
    value: "Reimei",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("school", "Reimei", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect("Has this character ever been to Reimei Academy?", "school", "Reimei", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: "Has this character ever been to Shuuetsu Academy?",
    attribute: "school",
    value: "Shuuetsu",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      yesEffect("school", "Shuuetsu", questionArr, setQuestions, idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      noEffect("Has this character ever been to Shuuetsu Academy?", "school", "Shuuetsu", questionArr, setQuestions, idols, setCharas);
    }
  },
  {
    question: circleQuestion("BIBLION"),
    attribute: "circle",
    value: "archivebook",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("BIBLION"), setQuestions, questionArr, "archivebook", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("BIBLION"), setQuestions, questionArr, "archivebook", idols, setCharas);
    }
  },
  {
    question: circleQuestion("Manga Club"),
    attribute: "circle",
    value: "archivemanga",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("Manga Club"), setQuestions, questionArr, "archivemanga", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("Manga Club"), setQuestions, questionArr, "archivemanga", idols, setCharas);
    }
  },
  {
    question: circleQuestion("ASOBI Club"),
    attribute: "circle",
    value: "asobi",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("ASOBI Club"), setQuestions, questionArr, "asobi", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("ASOBI Club"), setQuestions, questionArr, "asobi", idols, setCharas);
    }
  },
  {
    question: circleQuestion("Band BB"),
    attribute: "circle",
    value: "bandbb",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("Band BB"), setQuestions, questionArr, "bandbb", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("Band BB"), setQuestions, questionArr, "bandbb", idols, setCharas);
    }
  },
  {
    question: circleQuestion("ANIMALS"),
    attribute: "circle",
    value: "bioanimal",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("ANIMALS"), setQuestions, questionArr, "bioanimal", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("ANIMALS"), setQuestions, questionArr, "bioanimal", idols, setCharas);
    }
  },
  {
    question: circleQuestion("OCEANS"),
    attribute: "circle",
    value: "bioocean",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("OCEANS"), setQuestions, questionArr, "bioocean", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("OCEANS"), setQuestions, questionArr, "bioocean", idols, setCharas);
    }
  },
  {
    question: circleQuestion("CRAFTMONSTER"),
    attribute: "circle",
    value: "craftmonster",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("CRAFTMONSTER"), setQuestions, questionArr, "craftmonster", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("CRAFTMONSTER"), setQuestions, questionArr, "craftmonster", idols, setCharas);
    }
  },
  {
    question: circleQuestion("Dramatica"),
    attribute: "circle",
    value: "dramatica",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("Dramatica"), setQuestions, questionArr, "dramatica", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("Dramatica"), setQuestions, questionArr, "dramatica", idols, setCharas);
    }
  },
  {
    question: circleQuestion("Ibara Lecture"),
    attribute: "circle",
    value: "lectureibara",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("Ibara Lecture"), setQuestions, questionArr, "lectureibara", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("Ibara Lecture"), setQuestions, questionArr, "lectureibara", idols, setCharas);
    }
  },
  {
    question: circleQuestion("Keito Lecture"),
    attribute: "circle",
    value: "lecturekeito",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("Keito Lecture"), setQuestions, questionArr, "lecturekeito", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("Keito Lecture"), setQuestions, questionArr, "lecturekeito", idols, setCharas);
    }
  },
  {
    question: circleQuestion("Gardenia"),
    attribute: "circle",
    value: "gardenia",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("Gardenia"), setQuestions, questionArr, "gardenia", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("Gardenia"), setQuestions, questionArr, "gardenia", idols, setCharas);
    }
  },
  {
    question: circleQuestion("Mystery Researchers"),
    attribute: "circle",
    value: "mystery",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("Mystery Researchers"), setQuestions, questionArr, "mystery", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("Mystery Researchers"), setQuestions, questionArr, "mystery", idols, setCharas);
    }
  },
  {
    question: circleQuestion("Niki's Kitchen"),
    attribute: "circle",
    value: "kitchen",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("Niki's Kitchen"), setQuestions, questionArr, "kitchen", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("Niki's Kitchen"), setQuestions, questionArr, "kitchen", idols, setCharas);
    }
  },
  {
    question: circleQuestion("Overnight Outdoors Party"),
    attribute: "circle",
    value: "overnight",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("Overnight Outdoors Party"), setQuestions, questionArr, "overnight", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("Overnight Outdoors Party"), setQuestions, questionArr, "overnight", idols, setCharas);
    }
  },
  {
    question: circleQuestion("Pretty 5"),
    attribute: "circle",
    value: "pretty5",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("Pretty 5"), setQuestions, questionArr, "pretty5", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("Pretty 5"), setQuestions, questionArr, "pretty5", idols, setCharas);
    }
  },
  {
    question: circleQuestion("SHIN"),
    attribute: "circle",
    value: "shin",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("SHIN"), setQuestions, questionArr, "shin", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("SHIN"), setQuestions, questionArr, "shin", idols, setCharas);
    }
  },
  {
    question: circleQuestion("Sports Survivors"),
    attribute: "circle",
    value: "sports",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("Sports Survivors"), setQuestions, questionArr, "sports", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("Sports Survivors"), setQuestions, questionArr, "sports", idols, setCharas);
    }
  },
  {
    question: circleQuestion("Sweets Fan Club"),
    attribute: "circle",
    value: "sweets",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("Sweets Fan Club"), setQuestions, questionArr, "sweets", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("Sweets Fan Club"), setQuestions, questionArr, "sweets", idols, setCharas);
    }
  },
  {
    question: circleQuestion("FLAVOR"),
    attribute: "circle",
    value: "teaflavor",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("FLAVOR"), setQuestions, questionArr, "teaflavor", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("FLAVOR"), setQuestions, questionArr, "teaflavor", idols, setCharas);
    }
  },
  {
    question: circleQuestion("Kaori"),
    attribute: "circle",
    value: "teaflavor",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleYesEffect(circleQuestion("Kaori"), setQuestions, questionArr, "teakaori", idols, setCharas);
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      circleNoEffect(circleQuestion("Kaori"), setQuestions, questionArr, "teakaori", idols, setCharas);
    }
  },
  {
    question: "Is this character 170cm or shorter?",
    attribute: "height",
    value: [153, 160, 162, 163, 164, 165, 166, 167, 168, 169, 170],
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove all height questions
      setQuestions(questionArr.filter(q => q.attribute !== "height"));
      // remove characters taller than this
      setCharas(idols.filter(i => i.height <= 170));
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove this question
      setQuestions(questionArr.filter(q => q.question !== "Is this character 165cm or shorter?"));
      // remove characters this height or shorter
      setCharas(idols.filter(i => i.height > 170));
    }
  },
  {
    question: "Is this character 175cm or taller?",
    attribute: "height",
    value: [175, 176, 177, 178, 179, 180, 181],
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove all height questions
      setQuestions(questionArr.filter(q => q.attribute !== "height"));
      // remove characters taller than this
      setCharas(idols.filter(i => i.height >= 175));
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove this question
      setQuestions(questionArr.filter(q => q.question !== "Is this character 165cm or shorter?"));
      // remove characters this height or shorter
      setCharas(idols.filter(i => i.height < 175));
    }
  },
  {
    question: monthQuestion("January"),
    attribute: "birthday",
    value: "01",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove all birthday questions
      setQuestions(questionArr.filter(q => q.attribute !== "birthday"));
      // remove idols that arent born in the month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth === "01";
      }));
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove this question
      setQuestions(questionArr.filter(q => q.question !== monthQuestion("January")));
      // remove idols that are born in that month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth !== "01";
      }))
    }
  },
  {
    question: monthQuestion("January"),
    attribute: "birthday",
    value: "01",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove all birthday questions
      setQuestions(questionArr.filter(q => q.attribute !== "birthday"));
      // remove idols that arent born in the month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth === "01";
      }));
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove this question
      setQuestions(questionArr.filter(q => q.question !== monthQuestion("January")));
      // remove idols that are born in that month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth !== "01";
      }))
    }
  },
  {
    question: monthQuestion("February"),
    attribute: "birthday",
    value: "02",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove all birthday questions
      setQuestions(questionArr.filter(q => q.attribute !== "birthday"));
      // remove idols that arent born in the month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth === "02";
      }));
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove this question
      setQuestions(questionArr.filter(q => q.question !== monthQuestion("February")));
      // remove idols that are born in that month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth !== "02";
      }))
    }
  },
  {
    question: monthQuestion("March"),
    attribute: "birthday",
    value: "03",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove all birthday questions
      setQuestions(questionArr.filter(q => q.attribute !== "birthday"));
      // remove idols that arent born in the month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth === "03";
      }));
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove this question
      setQuestions(questionArr.filter(q => q.question !== monthQuestion("March")));
      // remove idols that are born in that month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth !== "03";
      }))
    }
  },{
    question: monthQuestion("April"),
    attribute: "birthday",
    value: "04",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove all birthday questions
      setQuestions(questionArr.filter(q => q.attribute !== "birthday"));
      // remove idols that arent born in the month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth === "04";
      }));
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove this question
      setQuestions(questionArr.filter(q => q.question !== monthQuestion("April")));
      // remove idols that are born in that month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth !== "04";
      }))
    }
  },
  {
    question: monthQuestion("May"),
    attribute: "birthday",
    value: "05",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove all birthday questions
      setQuestions(questionArr.filter(q => q.attribute !== "birthday"));
      // remove idols that arent born in the month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth === "05";
      }));
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove this question
      setQuestions(questionArr.filter(q => q.question !== monthQuestion("May")));
      // remove idols that are born in that month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth !== "05";
      }))
    }
  },
  {
    question: monthQuestion("June"),
    attribute: "birthday",
    value: "06",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove all birthday questions
      setQuestions(questionArr.filter(q => q.attribute !== "birthday"));
      // remove idols that arent born in the month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth === "06";
      }));
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove this question
      setQuestions(questionArr.filter(q => q.question !== monthQuestion("June")));
      // remove idols that are born in that month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth !== "06";
      }))
    }
  },
  {
    question: monthQuestion("July"),
    attribute: "birthday",
    value: "07",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove all birthday questions
      setQuestions(questionArr.filter(q => q.attribute !== "birthday"));
      // remove idols that arent born in the month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth === "07";
      }));
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove this question
      setQuestions(questionArr.filter(q => q.question !== monthQuestion("July")));
      // remove idols that are born in that month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth !== "07";
      }))
    }
  },
  {
    question: monthQuestion("August"),
    attribute: "birthday",
    value: "08",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove all birthday questions
      setQuestions(questionArr.filter(q => q.attribute !== "birthday"));
      // remove idols that arent born in the month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth === "08";
      }));
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove this question
      setQuestions(questionArr.filter(q => q.question !== monthQuestion("August")));
      // remove idols that are born in that month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth !== "08";
      }))
    }
  },
  {
    question: monthQuestion("September"),
    attribute: "birthday",
    value: "09",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove all birthday questions
      setQuestions(questionArr.filter(q => q.attribute !== "birthday"));
      // remove idols that arent born in the month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth === "09";
      }));
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove this question
      setQuestions(questionArr.filter(q => q.question !== monthQuestion("September")));
      // remove idols that are born in that month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth !== "09";
      }))
    }
  },
  {
    question: monthQuestion("October"),
    attribute: "birthday",
    value: "10",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove all birthday questions
      setQuestions(questionArr.filter(q => q.attribute !== "birthday"));
      // remove idols that arent born in the month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth === "10";
      }));
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove this question
      setQuestions(questionArr.filter(q => q.question !== monthQuestion("October")));
      // remove idols that are born in that month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth !== "10";
      }))
    }
  },
  {
    question: monthQuestion("November"),
    attribute: "birthday",
    value: "11",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove all birthday questions
      setQuestions(questionArr.filter(q => q.attribute !== "birthday"));
      // remove idols that arent born in the month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth === "11";
      }));
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove this question
      setQuestions(questionArr.filter(q => q.question !== monthQuestion("November")));
      // remove idols that are born in that month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth !== "11";
      }))
    }
  },
  {
    question: monthQuestion("December"),
    attribute: "birthday",
    value: "12",
    yesEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove all birthday questions
      setQuestions(questionArr.filter(q => q.attribute !== "birthday"));
      // remove idols that arent born in the month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth === "12";
      }));
    },
    noEffect: (questionArr: Question[], setQuestions: any, idols: Character[], setCharas: any) => {
      // remove this question
      setQuestions(questionArr.filter(q => q.question !== monthQuestion("December")));
      // remove idols that are born in that month
      setCharas(idols.filter(i => {
        let birthMonth = i.birthday.split('-')[1];
        return birthMonth !== "12";
      }))
    }
  }
]