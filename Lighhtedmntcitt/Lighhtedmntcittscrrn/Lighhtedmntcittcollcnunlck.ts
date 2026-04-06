import AsyncStorage from '@react-native-async-storage/async-storage';

const lighhtedmntcittCollcnUnlckKey = 'lighhtedmntcittCollcnUnlockedIds';

async function lighhtedmntcittCollcnReadUnlckSet(): Promise<Set<string>> {
  try {
    const lighhtedmntcittRaw = await AsyncStorage.getItem(
      lighhtedmntcittCollcnUnlckKey,
    );
    if (!lighhtedmntcittRaw) {
      return new Set();
    }
    const lighhtedmntcittParsed = JSON.parse(lighhtedmntcittRaw) as unknown;
    if (!Array.isArray(lighhtedmntcittParsed)) {
      return new Set();
    }
    return new Set(
      lighhtedmntcittParsed.filter(
        (x): x is string => typeof x === 'string',
      ),
    );
  } catch {
    return new Set();
  }
}

async function lighhtedmntcittCollcnWriteUnlckSet(
  lighhtedmntcittIds: Set<string>,
): Promise<void> {
  await AsyncStorage.setItem(
    lighhtedmntcittCollcnUnlckKey,
    JSON.stringify([...lighhtedmntcittIds]),
  );
}

export async function lighhtedmntcittCollcnReadUnlockedIds(): Promise<
  string[]
> {
  const lighhtedmntcittS = await lighhtedmntcittCollcnReadUnlckSet();
  return [...lighhtedmntcittS];
}

export async function lighhtedmntcittCollcnAddUnlockedId(
  lighhtedmntcittId: string,
): Promise<void> {
  const lighhtedmntcittS = await lighhtedmntcittCollcnReadUnlckSet();
  lighhtedmntcittS.add(lighhtedmntcittId);
  await lighhtedmntcittCollcnWriteUnlckSet(lighhtedmntcittS);
}
