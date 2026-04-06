import AsyncStorage from '@react-native-async-storage/async-storage';

const lighhtedmntcittBllogSavedStorageKey = 'lighhtedmntcittBllogSavedIds';

async function lighhtedmntcittBllogReadSavedSet(): Promise<Set<string>> {
  try {
    const lighhtedmntcittRaw = await AsyncStorage.getItem(
      lighhtedmntcittBllogSavedStorageKey,
    );
    if (!lighhtedmntcittRaw) {
      return new Set();
    }
    const lighhtedmntcittParsed = JSON.parse(lighhtedmntcittRaw) as unknown;
    if (!Array.isArray(lighhtedmntcittParsed)) {
      return new Set();
    }
    return new Set(
      lighhtedmntcittParsed.filter((x): x is string => typeof x === 'string'),
    );
  } catch {
    return new Set();
  }
}

async function lighhtedmntcittBllogWriteSavedSet(
  lighhtedmntcittIds: Set<string>,
): Promise<void> {
  await AsyncStorage.setItem(
    lighhtedmntcittBllogSavedStorageKey,
    JSON.stringify([...lighhtedmntcittIds]),
  );
}

export async function lighhtedmntcittBllogReadSavedIds(): Promise<string[]> {
  const lighhtedmntcittSet = await lighhtedmntcittBllogReadSavedSet();
  return [...lighhtedmntcittSet];
}

export async function lighhtedmntcittBllogIsSaved(
  lighhtedmntcittId: string,
): Promise<boolean> {
  const lighhtedmntcittSet = await lighhtedmntcittBllogReadSavedSet();
  return lighhtedmntcittSet.has(lighhtedmntcittId);
}

export async function lighhtedmntcittBllogToggleSaved(
  lighhtedmntcittId: string,
): Promise<boolean> {
  const lighhtedmntcittSet = await lighhtedmntcittBllogReadSavedSet();
  if (lighhtedmntcittSet.has(lighhtedmntcittId)) {
    lighhtedmntcittSet.delete(lighhtedmntcittId);
  } else {
    lighhtedmntcittSet.add(lighhtedmntcittId);
  }
  await lighhtedmntcittBllogWriteSavedSet(lighhtedmntcittSet);
  return lighhtedmntcittSet.has(lighhtedmntcittId);
}
