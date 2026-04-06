import AsyncStorage from '@react-native-async-storage/async-storage';

const lighhtedmntcittStarStrgKey = 'lighhtedmntcittGlobalStars';

export const lighhtedmntcittStarStrgDefault = 15;

export async function lighhtedmntcittStarStrgRead(): Promise<number> {
  try {
    const lighhtedmntcittRaw = await AsyncStorage.getItem(
      lighhtedmntcittStarStrgKey,
    );
    if (lighhtedmntcittRaw == null) {
      return lighhtedmntcittStarStrgDefault;
    }
    const lighhtedmntcittN = parseInt(lighhtedmntcittRaw, 10);
    return Number.isFinite(lighhtedmntcittN) && lighhtedmntcittN >= 0
      ? lighhtedmntcittN
      : lighhtedmntcittStarStrgDefault;
  } catch {
    return lighhtedmntcittStarStrgDefault;
  }
}

export async function lighhtedmntcittStarStrgWrite(
  lighhtedmntcittN: number,
): Promise<void> {
  const lighhtedmntcittV = Math.max(0, Math.floor(lighhtedmntcittN));
  await AsyncStorage.setItem(
    lighhtedmntcittStarStrgKey,
    String(lighhtedmntcittV),
  );
}

export async function lighhtedmntcittStarStrgAdd(
  lighhtedmntcittDelta: number,
): Promise<number> {
  const lighhtedmntcittCur = await lighhtedmntcittStarStrgRead();
  const lighhtedmntcittNext = Math.max(
    0,
    lighhtedmntcittCur + Math.floor(lighhtedmntcittDelta),
  );
  await lighhtedmntcittStarStrgWrite(lighhtedmntcittNext);
  return lighhtedmntcittNext;
}

export async function lighhtedmntcittStarStrgTrySpend(
  lighhtedmntcittAmount: number,
): Promise<{ok: boolean; balance: number}> {
  const lighhtedmntcittCost = Math.max(0, Math.floor(lighhtedmntcittAmount));
  const lighhtedmntcittCur = await lighhtedmntcittStarStrgRead();
  if (lighhtedmntcittCur < lighhtedmntcittCost) {
    return {ok: false, balance: lighhtedmntcittCur};
  }
  const lighhtedmntcittNext = lighhtedmntcittCur - lighhtedmntcittCost;
  await lighhtedmntcittStarStrgWrite(lighhtedmntcittNext);
  return {ok: true, balance: lighhtedmntcittNext};
}
