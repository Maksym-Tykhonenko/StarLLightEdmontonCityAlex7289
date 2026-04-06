export type LighhtedmntcittBllogItem = {
  id: string;
  title: string;
  preview: string;
  body: string;
};

export const lighhtedmntcittBllogItems: LighhtedmntcittBllogItem[] = [
  {
    id: 'bllog-1',
    title: 'City of Festivals',
    preview:
      'Edmonton is widely known as the Festival City, hosting over 50 festivals throughout the year. From music and theater to food and winter celebrations, there is always...',
    body:
      'Edmonton is widely known as the Festival City, hosting over 50 festivals throughout the year. From music and theater to food and winter celebrations, there is always something happening. The Edmonton International Fringe Theatre Festival is one of the largest in the world, attracting performers and visitors from many countries. Summer is especially vibrant, with streets full of performances, markets, and live music. Visiting during festival season gives you a completely different experience of the city.',
  },
  {
    id: 'bllog-2',
    title: 'West Edmonton Mall',
    preview:
      'West Edmonton Mall is one of the largest shopping and entertainment complexes in the world. It is much more than a mall — it includes an indoor amusement park, a massive water park, an ice rink, and hundreds of stores...',
    body:
      'West Edmonton Mall is one of the largest shopping and entertainment complexes in the world. It is much more than a mall — it includes an indoor amusement park, a massive water park, an ice rink, and hundreds of stores. Visitors can easily spend an entire day here without leaving the building. It is a perfect destination for families, shopping lovers, and anyone looking for indoor entertainment.',
  },
  {
    id: 'bllog-3',
    title: 'River Valley Escape',
    preview:
      'The North Saskatchewan River Valley is the largest urban park system in North America. It offers over 160 kilometers of trails for walking, cycling, and exploring nature...',
    body:
      'The North Saskatchewan River Valley is the largest urban park system in North America. It offers over 160 kilometers of trails for walking, cycling, and exploring nature. Despite being in a big city, the area feels calm and natural. It is a great place for relaxation, outdoor activities, and scenic views. In every season, the valley offers a different experience.',
  },
  {
    id: 'bllog-4',
    title: 'Historic Edmonton',
    preview:
      'Edmonton has a rich history that dates back to its origins as a trading post. Areas like Old Strathcona preserve the city’s historic atmosphere with unique buildings, local shops, and cultural spots...',
    body:
      'Edmonton has a rich history that dates back to its origins as a trading post. Areas like Old Strathcona preserve the city’s historic atmosphere with unique buildings, local shops, and cultural spots. Walking through these streets gives a sense of how the city developed over time. It is a must-visit for those interested in local culture and heritage.',
  },
  {
    id: 'bllog-5',
    title: 'Winter Experience',
    preview:
      'Winter in Edmonton is cold but full of unique activities. The city transforms into a snowy landscape with ice festivals, skating rinks, and winter lights...',
    body:
      'Winter in Edmonton is cold but full of unique activities. The city transforms into a snowy landscape with ice festivals, skating rinks, and winter lights. Even with temperatures dropping far below zero, locals and visitors enjoy outdoor events. It is a completely different side of the city that many tourists find unforgettable.',
  },
  {
    id: 'bllog-6',
    title: 'Food Scene',
    preview:
      'Edmonton offers a diverse and growing food scene. You can find everything from local Canadian dishes to international cuisine. The city is also known for its food festivals and markets...',
    body:
      'Edmonton offers a diverse and growing food scene. You can find everything from local Canadian dishes to international cuisine. The city is also known for its food festivals and markets, where you can try unique flavors and fresh products. Exploring food in Edmonton is a key part of the travel experience.',
  },
  {
    id: 'bllog-7',
    title: 'Modern Downtown',
    preview:
      'Downtown Edmonton combines modern architecture with entertainment and business spaces. The Ice District is one of the most dynamic areas, featuring Rogers Place arena, restaurants, and nightlife...',
    body:
      'Downtown Edmonton combines modern architecture with entertainment and business spaces. The Ice District is one of the most dynamic areas, featuring Rogers Place arena, restaurants, and nightlife. It is a center of activity both during the day and at night. Visitors can enjoy events, dining, and city views all in one place.',
  },
];

export function lighhtedmntcittBllogById(
  id: string,
): LighhtedmntcittBllogItem | undefined {
  return lighhtedmntcittBllogItems.find(b => b.id === id);
}
