export type LighhtedmntcittKnowlgQuestion = {
  id: string;
  sentenceBefore: string;
  sentenceAfter: string;
  options: string[];
  correctIndex: number;
};

export const lighhtedmntcittKnowlgQuestions: LighhtedmntcittKnowlgQuestion[] = [
  {
    id: 'k1',
    sentenceBefore: 'Edmonton is known as the ',
    sentenceAfter: ' City.',
    options: ['Snow', 'Festival', 'River', 'Oil'],
    correctIndex: 1,
  },
  {
    id: 'k2',
    sentenceBefore: 'The largest mall in Edmonton is ',
    sentenceAfter: ' Edmonton Mall.',
    options: ['North', 'West', 'East', 'Central'],
    correctIndex: 1,
  },
  {
    id: 'k3',
    sentenceBefore: 'The main river in Edmonton is the ',
    sentenceAfter: ' Saskatchewan River.',
    options: ['South', 'North', 'West', 'Great'],
    correctIndex: 1,
  },
  {
    id: 'k4',
    sentenceBefore: 'Edmonton is the capital of ',
    sentenceAfter: ' province.',
    options: ['Ontario', 'Alberta', 'Quebec', 'Manitoba'],
    correctIndex: 1,
  },
  {
    id: 'k5',
    sentenceBefore: 'The famous theater festival is called ',
    sentenceAfter: ' Festival.',
    options: ['Fringe', 'Summer', 'Art', 'Stage'],
    correctIndex: 0,
  },
  {
    id: 'k6',
    sentenceBefore: 'The indoor amusement park in the mall is called ',
    sentenceAfter: '.',
    options: ['Funland', 'Galaxyland', 'Dreamland', 'Playzone'],
    correctIndex: 1,
  },
  {
    id: 'k7',
    sentenceBefore: 'The largest park system in Edmonton is the River ',
    sentenceAfter: '.',
    options: ['Park', 'Valley', 'Forest', 'Zone'],
    correctIndex: 1,
  },
  {
    id: 'k8',
    sentenceBefore: 'A popular historic area is Old ',
    sentenceAfter: '.',
    options: ['Downtown', 'Strathcona', 'Center', 'Village'],
    correctIndex: 1,
  },
  {
    id: 'k9',
    sentenceBefore: 'Edmonton is located in the country of ',
    sentenceAfter: '.',
    options: ['USA', 'Canada', 'UK', 'Australia'],
    correctIndex: 1,
  },
  {
    id: 'k10',
    sentenceBefore: 'The main hockey team is Edmonton ',
    sentenceAfter: '.',
    options: ['Flames', 'Oilers', 'Kings', 'Stars'],
    correctIndex: 1,
  },
  {
    id: 'k11',
    sentenceBefore: 'The central arena area is called Ice ',
    sentenceAfter: '.',
    options: ['Zone', 'District', 'Center', 'Block'],
    correctIndex: 1,
  },
  {
    id: 'k12',
    sentenceBefore: 'The big museum is Royal Alberta ',
    sentenceAfter: '.',
    options: ['Gallery', 'Museum', 'Center', 'Hall'],
    correctIndex: 1,
  },
  {
    id: 'k13',
    sentenceBefore: 'Edmonton is known for its long ',
    sentenceAfter: ' trails.',
    options: ['road', 'walking', 'racing', 'flying'],
    correctIndex: 1,
  },
  {
    id: 'k14',
    sentenceBefore: 'The mall also has a large indoor ',
    sentenceAfter: '.',
    options: ['zoo', 'waterpark', 'forest', 'cinema'],
    correctIndex: 1,
  },
  {
    id: 'k15',
    sentenceBefore: 'Edmonton has many summer ',
    sentenceAfter: '.',
    options: ['storms', 'festivals', 'schools', 'roads'],
    correctIndex: 1,
  },
  {
    id: 'k16',
    sentenceBefore: 'The river valley is great for ',
    sentenceAfter: '.',
    options: ['driving', 'hiking', 'flying', 'shopping'],
    correctIndex: 1,
  },
  {
    id: 'k17',
    sentenceBefore: 'A famous street area is Columbia ',
    sentenceAfter: '.',
    options: ['Road', 'Street', 'Lane', 'Way'],
    correctIndex: 1,
  },
  {
    id: 'k18',
    sentenceBefore: 'Edmonton experiences very cold ',
    sentenceAfter: '.',
    options: ['summers', 'winters', 'springs', 'nights'],
    correctIndex: 1,
  },
  {
    id: 'k19',
    sentenceBefore: 'The Legislature Building is an important ',
    sentenceAfter: '.',
    options: ['shop', 'landmark', 'hotel', 'market'],
    correctIndex: 1,
  },
  {
    id: 'k20',
    sentenceBefore: 'Edmonton is one of the sunniest cities in ',
    sentenceAfter: '.',
    options: ['Europe', 'Canada', 'Asia', 'Africa'],
    correctIndex: 1,
  },
];

/** How many questions per play session (random subset from the full bank). */
export const lighhtedmntcittKnowlgSessionSize = 5;

function lighhtedmntcittKnowlgRng(
  lighhtedmntcittSeedIn: number,
): () => number {
  let lighhtedmntcittS =
    Math.floor(Math.abs(lighhtedmntcittSeedIn)) % 2147483646 || 1;
  return () => {
    lighhtedmntcittS = (lighhtedmntcittS * 48271) % 2147483647;
    return lighhtedmntcittS / 2147483647;
  };
}

export function lighhtedmntcittKnowlgMixNonce(
  lighhtedmntcittN: number,
  lighhtedmntcittStr: string,
): number {
  let lighhtedmntcittH =
    Math.floor(Math.abs(lighhtedmntcittN)) % 2147483646 || 1;
  for (
    let lighhtedmntcittI = 0;
    lighhtedmntcittI < lighhtedmntcittStr.length;
    lighhtedmntcittI++
  ) {
    lighhtedmntcittH =
      (lighhtedmntcittH * 31 + lighhtedmntcittStr.charCodeAt(lighhtedmntcittI)) %
      2147483647;
  }
  return lighhtedmntcittH || 1;
}

export function lighhtedmntcittKnowlgPickSession(
  all: LighhtedmntcittKnowlgQuestion[],
  count: number,
  sessionNonce: number,
): LighhtedmntcittKnowlgQuestion[] {
  const lighhtedmntcittRnd = lighhtedmntcittKnowlgRng(sessionNonce);
  const lighhtedmntcittN = all.length;
  const lighhtedmntcittPick = Math.min(count, lighhtedmntcittN);
  const lighhtedmntcittIdx = Array.from(
    {length: lighhtedmntcittN},
    (_, lighhtedmntcittI) => lighhtedmntcittI,
  );
  for (
    let lighhtedmntcittI = lighhtedmntcittN - 1;
    lighhtedmntcittI > 0;
    lighhtedmntcittI--
  ) {
    const lighhtedmntcittJ = Math.floor(
      lighhtedmntcittRnd() * (lighhtedmntcittI + 1),
    );
    const lighhtedmntcittTmp = lighhtedmntcittIdx[lighhtedmntcittI];
    lighhtedmntcittIdx[lighhtedmntcittI] = lighhtedmntcittIdx[lighhtedmntcittJ];
    lighhtedmntcittIdx[lighhtedmntcittJ] = lighhtedmntcittTmp;
  }
  return lighhtedmntcittIdx
    .slice(0, lighhtedmntcittPick)
    .map(lighhtedmntcittI => all[lighhtedmntcittI]);
}

export const lighhtedmntcittKnowlgStarsPerCorrect = 3;

export function lighhtedmntcittKnowlgShuffleOptions(
  options: string[],
  correctIndex: number,
  optionNonce: number,
): {options: string[]; correctIndex: number} {
  const lighhtedmntcittRnd = lighhtedmntcittKnowlgRng(optionNonce);
  const lighhtedmntcittCorrectText = options[correctIndex];
  const lighhtedmntcittCopy = [...options];
  for (
    let lighhtedmntcittI = lighhtedmntcittCopy.length - 1;
    lighhtedmntcittI > 0;
    lighhtedmntcittI--
  ) {
    const lighhtedmntcittJ = Math.floor(
      lighhtedmntcittRnd() * (lighhtedmntcittI + 1),
    );
    const lighhtedmntcittTmp = lighhtedmntcittCopy[lighhtedmntcittI];
    lighhtedmntcittCopy[lighhtedmntcittI] = lighhtedmntcittCopy[lighhtedmntcittJ];
    lighhtedmntcittCopy[lighhtedmntcittJ] = lighhtedmntcittTmp;
  }
  const lighhtedmntcittNewIdx = lighhtedmntcittCopy.indexOf(
    lighhtedmntcittCorrectText,
  );
  return {
    options: lighhtedmntcittCopy,
    correctIndex:
      lighhtedmntcittNewIdx >= 0 ? lighhtedmntcittNewIdx : correctIndex,
  };
}
