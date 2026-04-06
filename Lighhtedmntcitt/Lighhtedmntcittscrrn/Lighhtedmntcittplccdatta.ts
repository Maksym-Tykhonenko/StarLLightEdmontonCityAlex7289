import type {ImageSourcePropType} from 'react-native';

export type LighhtedmntcittPlccCategory = 'leisure' | 'nature' | 'culture';

export type LighhtedmntcittPlccPlace = {
  id: string;
  category: LighhtedmntcittPlccCategory;
  name: string;
  coords: string;
  description: string;

  image?: ImageSourcePropType;
};

export const lighhtedmntcittPlccPlaces: LighhtedmntcittPlccPlace[] = [
  {
    id: 'leisure-1',
    category: 'leisure',
    name: 'West Edmonton Mall',
    coords: '53.5244, -113.6167',
    image: require('../../elements/i/lighhtedmntplc1.png'),
    description:
      'The largest shopping and entertainment complex in North America, combining hundreds of shops, restaurants and large-scale entertainment under one roof. There is a water park, an amusement park, an ice arena and even miniature golf. This is a place where you can spend the whole day, switching between shopping and activities, regardless of the weather.',
  },
  {
    id: 'leisure-2',
    category: 'leisure',
    image: require('../../elements/i/lighhtedmntplc2.png'),
    name: 'Galaxyland',
    coords: '53.5244, -113.6167',
    description:
      'An indoor amusement park that offers dozens of attractions for children and adults. There are roller coasters, carousels and interactive games, creating the atmosphere of a real theme park. Due to its location inside the shopping mall, it is an ideal place to relax at any time of the year.',
  },
  {
    id: 'leisure-5',
    category: 'leisure',
    image: require('../../elements/i/lighhtedmntplc3.png'),
    name: 'Rogers Place',
    coords: '53.5461, -113.4978',
    description:
      'A modern arena in the city center, where hockey matches, concerts and major events are held. This is the heart of the Ice District entertainment district, which attracts both sports fans and music lovers. The atmosphere here is always energetic and lively.',
  },
  {
    id: 'leisure-6',
    category: 'leisure',
    image: require('../../elements/i/lighhtedmntplc4.png'),
    name: 'K-Days Grounds',
    coords: '53.5590, -113.4697',
    description:
      'Home to one of the largest festivals in the city. During the events, there are attractions, concerts, food zones and exhibitions. This place is full of energy and vivid impressions.',
  },
  {
    id: 'leisure-7',
    category: 'leisure',
    image: require('../../elements/i/lighhtedmntplc5.png'),
    name: 'Telus World of Science',
    coords: '53.5724, -113.5083',
    description:
      'An interactive science center where you can explore space, technology and nature through experiments and exhibitions. Suitable for both children and adults who want to learn something new in an interesting way.',
  },
  {
    id: 'leisure-8',
    category: 'leisure',
    image: require('../../elements/i/lighhtedmntplc6.png'),
    name: 'Edmonton Valley Zoo',
    coords: '53.5034, -113.5464',
    description:
      'A zoo located in a picturesque part of the city, where you can see animals from different continents. The space is well organized for walks and is suitable for family recreation.',
  },
  {
    id: 'leisure-9',
    category: 'leisure',
    image: require('../../elements/i/lighhtedmntplc7.png'),
    name: 'Snow Valley Aerial Park',
    coords: '53.4897, -113.5856',
    description:
      'An active park with rope courses and adventure routes among the trees. Ideal for those looking for active outdoor entertainment.',
  },
  {
    id: 'leisure-10',
    category: 'leisure',
    image: require('../../elements/i/lighhtedmntplc8.png'),
    name: 'Ice District Plaza',
    coords: '53.5465, -113.4973',
    description:
      'The central square of a modern district, where concerts, fan zones and city events are held. In winter, an ice rink is set up here, and in summer - outdoor events.',
  },
  {
    id: 'nature-1',
    category: 'nature',
    image: require('../../elements/i/lighhtedmntplc9.png'),
    name: 'North Saskatchewan River Valley',
    coords: '53.5444, -113.4909',
    description:
      'The largest urban park system in North America, stretching through the entire city and creating a unique natural corridor in the midst of the urban environment. There are dozens of kilometers of hiking and biking trails, viewpoints with panoramic views of the city and numerous recreation areas. This is the perfect place to experience the balance between nature and the metropolis at any time of year.',
  },
  {
    id: 'nature-2',
    category: 'nature',
    image: require('../../elements/i/lighhtedmntplc10.png'),
    name: 'Elk Island National Park',
    coords: '53.5590, -112.8570',
    description:
      'A national park near Edmonton, known for its bison population and clear night skies. It is one of the best locations in the region for stargazing and northern lights. Visitors can walk along nature trails, see wildlife and enjoy the silence away from the city noise.',
  },
  {
    id: 'nature-3',
    category: 'nature',
    image: require('../../elements/i/lighhtedmntplc11.png'),
    name: 'Hawrelak Park',
    coords: '53.5297, -113.5320',
    description:
      'One of the city’s most popular parks with a large lake, spacious lawns, and picnic areas. It hosts festivals in the warmer months, and in the winter, the area is transformed into a skating rink. The park is ideal for both active recreation and quiet walks.',
  },
  {
    id: 'nature-4',
    category: 'nature',
    image: require('../../elements/i/lighhtedmntplc12.png'),
    name: 'Whitemud Park',
    coords: '53.5055, -113.5667',
    description:
      'A green natural area with dense forests and numerous hiking trails. This place attracts those looking for peace, quiet, and a sense of remoteness from the city. Wildlife is often found here, adding to the authenticity of this space.',
  },
  {
    id: 'nature-5',
    category: 'nature',
    image: require('../../elements/i/lighhtedmntplc13.png'),
    name: 'Rundle Park',
    coords: '53.5720, -113.4009',
    description:
      'A large park with a variety of recreational areas, including fields, lakes and sports fields. Perfect for family recreation, walks or outdoor activities. The space is well organized and makes it easy to combine different types of activities.',
  },
  {
    id: 'nature-6',
    category: 'nature',
    image: require('../../elements/i/lighhtedmntplc14.png'),
    name: 'Muttart Conservatory',
    coords: '53.5345, -113.4927',
    description:
      'A unique botanical garden, located in glass pyramids, which have become an architectural symbol of the city. Inside, different climatic zones are presented - from the tropics to the desert. This place allows you to experience the diversity of nature in the world without leaving Edmonton.',
  },
  {
    id: 'nature-7',
    category: 'nature',
    image: require('../../elements/i/lighhtedmntplc15.png'),
    name: 'Gold Bar Park',
    coords: '53.5542, -113.4235',
    description:
      'A peaceful park along the river with scenic routes and plenty of greenery. Perfect for running, biking, or just relaxing by the water. There are fewer tourists, so the atmosphere is more relaxed.',
  },
  {
    id: 'nature-8',
    category: 'nature',
    image: require('../../elements/i/lighhtedmntplc16.png'),
    name: 'Terwillegar Park',
    coords: '53.4734, -113.5892',
    description:
      'A spacious natural park with open landscapes and access to the river. Popular with nature lovers, walkers, and outdoor enthusiasts. Also known as a place to spend time with pets.',
  },
  {
    id: 'nature-9',
    category: 'nature',
    image: require('../../elements/i/lighhtedmntplc17.png'),
    name: 'Emily Murphy Park',
    coords: '53.5272, -113.5275',
    description:
      'A cozy park with beautiful views of the river and comfortable seating areas. It is often visited by locals, which creates an atmosphere of real city life.',
  },
  {
    id: 'nature-10',
    category: 'nature',
    image: require('../../elements/i/lighhtedmntplc18.png'),
    name: 'Mill Creek Ravine',
    coords: '53.5205, -113.4687',
    description:
      'A picturesque natural ravine with wooden bridges, trails, and dense vegetation. This place looks like a separate natural area, remote from the city, although it is practically in the center. Perfect for quiet walks and photography.',
  },
  {
    id: 'culture-1',
    category: 'culture',
    image: require('../../elements/i/lighhtedmntplc19.png'),
    name: 'Royal Alberta Museum',
    coords: '53.5446, -113.4889',
    description:
      'Alberta’s largest museum, featuring state-of-the-art interactive exhibits on the region’s nature, history, and culture. See dinosaurs, learn about indigenous peoples, and explore natural ecosystems. The space is well-structured and suitable for both a quick visit and a deep dive.',
  },
  {
    id: 'culture-2',
    category: 'culture',
    image: require('../../elements/i/lighhtedmntplc20.png'),
    name: 'Art Gallery of Alberta',
    coords: '53.5444, -113.4894',
    description:
      'A modern art gallery with a unique architecture that immediately catches the eye. Inside, exhibitions of contemporary and classic art are presented, including works by local and international artists. This is a place for those who appreciate creativity and cultural development.',
  },
  {
    id: 'culture-3',
    category: 'culture',
    image: require('../../elements/i/lighhtedmntplc21.png'),
    name: 'Alberta Legislature Building',
    coords: '53.5344, -113.5075',
    description:
      'A historic provincial government building surrounded by beautiful gardens and fountains. The architecture combines classical style with modern elements, and the area is ideal for walking and taking photos. It is one of the main symbols of Edmonton.',
  },
  {
    id: 'culture-4',
    category: 'culture',
    image: require('../../elements/i/lighhtedmntplc22.png'),
    name: 'Fort Edmonton Park',
    coords: '53.5119, -113.5665',
    description:
      'A historical park that recreates life from different eras through reconstructed buildings and interactive exhibits. Visitors can see how the city developed and feel the atmosphere of the past. This is one of the most unique cultural locations in the region.',
  },
  {
    id: 'culture-5',
    category: 'culture',
    image: require('../../elements/i/lighhtedmntplc23.png'),
    name: 'Winspear Centre',
    coords: '53.5442, -113.4905',
    description:
      'One of the best concert halls in Canada, known for its acoustics. It hosts symphony orchestras, concerts and cultural events. The atmosphere of the place combines elegance and modernity.',
  },
  {
    id: 'culture-6',
    category: 'culture',
    image: require('../../elements/i/lighhtedmntplc24.png'),
    name: 'Citadel Theatre',
    coords: '53.5440, -113.4938',
    description:
      "A large theatre complex that stages both modern and classic plays. It is the center of the city's theatrical life, attracting both locals and tourists.",
  },
  {
    id: 'culture-7',
    category: 'culture',
    image: require('../../elements/i/lighhtedmntplc25.png'),
    name: 'Old Strathcona',
    coords: '53.5206, -113.4987',
    description:
      'A historic district with a unique atmosphere, where old buildings, local shops and cultural spaces have been preserved. It often hosts street performances and events. This is a place where you can feel the true character of the city.',
  },
  {
    id: 'culture-8',
    category: 'culture',
    image: require('../../elements/i/lighhtedmntplc26.png'),
    name: 'Neon Sign Museum',
    coords: '53.5439, -113.4937',
    description:
      "An unusual open-air museum of neon signs that shows the history of the city's advertising and design. It looks especially impressive at night, when all the signs are illuminated.",
  },
  {
    id: 'culture-9',
    category: 'culture',
    image: require('../../elements/i/lighhtedmntplc27.png'),
    name: 'Ukrainian Cultural Heritage Village',
    coords: '53.5703, -112.7983',
    description:
      'A historical and cultural complex that showcases the life of Ukrainian immigrants in Canada. Here you can see authentic buildings and learn more about culture and traditions.',
  },
  {
    id: 'culture-10',
    category: 'culture',
    image: require('../../elements/i/lighhtedmntplc28.png'),
    name: 'TELUS World of Science',
    coords: '53.5724, -113.5083',
    description:
      'A science center with modern exhibits and interactive zones. This place combines education and entertainment, allowing visitors to explore the world of science in an exciting way.',
  },
];

export function lighhtedmntcittPlccPlaceById(
  id: string,
): LighhtedmntcittPlccPlace | undefined {
  return lighhtedmntcittPlccPlaces.find(p => p.id === id);
}

export function lighhtedmntcittPlccParseCoords(
  coords: string,
): {latitude: number; longitude: number} | null {
  const lighhtedmntcittMatch = coords.match(
    /^\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*$/,
  );
  if (!lighhtedmntcittMatch) {
    return null;
  }
  const lighhtedmntcittLat = Number(lighhtedmntcittMatch[1]);
  const lighhtedmntcittLng = Number(lighhtedmntcittMatch[2]);
  if (Number.isNaN(lighhtedmntcittLat) || Number.isNaN(lighhtedmntcittLng)) {
    return null;
  }
  return {latitude: lighhtedmntcittLat, longitude: lighhtedmntcittLng};
}

export type LighhtedmntcittPlccFilter = 'all' | LighhtedmntcittPlccCategory;

export const lighhtedmntcittPlccFilters: {
  key: LighhtedmntcittPlccFilter;
  label: string;
}[] = [
  {key: 'all', label: 'All'},
  {key: 'leisure', label: 'Leisure'},
  {key: 'nature', label: 'Nature'},
  {key: 'culture', label: 'Culture'},
];

export const lighhtedmntcittPlccFacts: string[] = [
  'Edmonton is called the “Festival City” because it hosts over 50 festivals a year.',
  'The city is home to one of the world’s largest shopping malls, the West Edmonton Mall.',
  'Edmonton has the largest urban park system in North America.',
  'The North Saskatchewan River flows through the city, forming a vast green valley.',
  'Edmonton has more hours of sunshine per year than any other major city in Canada.',
  'The city is the capital of the province of Alberta.',
  'Edmonton was an important center of the fur trade in the 19th century.',
  'It hosts one of the largest theater festivals in the world, the Fringe Festival.',
  'West Edmonton Mall even has an artificial beach and waves for surfing.',
  'Edmonton is one of the northernmost major cities in North America.',
  'The city has an indoor amusement park, Galaxyland.',
  'Edmonton is home to the Royal Alberta Museum, the largest museum in the province.',
  'In winter, temperatures can drop below −30°C.',
  'The city is known for its hockey culture and the Edmonton Oilers team.',
  'Edmonton has over 160 km of cycling and hiking trails.',
  'The Alberta Legislature Building is located here, one of the main architectural landmarks.',
  'The city is actively developing due to Alberta’s oil industry.',
  'Edmonton has a large number of bridges over the river valley with beautiful views.',
  'The city has an ice district, a modern area with entertainment, restaurants and arenas.',
  'Edmonton combines urbanism and wildlife, where you can see deer right in the city.',
];
