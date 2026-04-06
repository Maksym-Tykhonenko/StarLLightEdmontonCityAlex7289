import AsyncStorage from '@react-native-async-storage/async-storage';

const lighhtedmntcittPlccSavedStorageKey = 'lighhtedmntcittPlccSavedPlaceIds';

async function lighhtedmntcittPlccReadSavedSet(): Promise<Set<string>> {
  try {
    const lighhtedmntcittRaw = await AsyncStorage.getItem(
      lighhtedmntcittPlccSavedStorageKey,
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

async function lighhtedmntcittPlccWriteSavedSet(
  lighhtedmntcittIds: Set<string>,
): Promise<void> {
  await AsyncStorage.setItem(
    lighhtedmntcittPlccSavedStorageKey,
    JSON.stringify([...lighhtedmntcittIds]),
  );
}

export async function lighhtedmntcittPlccReadSavedIds(): Promise<string[]> {
  const lighhtedmntcittSet = await lighhtedmntcittPlccReadSavedSet();
  return [...lighhtedmntcittSet];
}

export async function lighhtedmntcittPlccIsPlaceSaved(
  lighhtedmntcittId: string,
): Promise<boolean> {
  const lighhtedmntcittSet = await lighhtedmntcittPlccReadSavedSet();
  return lighhtedmntcittSet.has(lighhtedmntcittId);
}

export async function lighhtedmntcittPlccTogglePlaceSaved(
  lighhtedmntcittId: string,
): Promise<boolean> {
  const lighhtedmntcittSet = await lighhtedmntcittPlccReadSavedSet();
  if (lighhtedmntcittSet.has(lighhtedmntcittId)) {
    lighhtedmntcittSet.delete(lighhtedmntcittId);
  } else {
    lighhtedmntcittSet.add(lighhtedmntcittId);
  }
  await lighhtedmntcittPlccWriteSavedSet(lighhtedmntcittSet);
  return lighhtedmntcittSet.has(lighhtedmntcittId);
}
