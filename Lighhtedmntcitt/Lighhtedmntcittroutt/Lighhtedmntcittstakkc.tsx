// STACK

import {createStackNavigator} from '@react-navigation/stack';

import Lighhtedmntcittloadr from '../Lighhtedmntcittcpnts/Lighhtedmntcittloadr';
import Lighhtedmntcittonbr from '../Lighhtedmntcittscrrn/Lighhtedmntcittonbr';
import Lighhtedmntcittbllogdet from '../Lighhtedmntcittscrrn/Lighhtedmntcittbllogdet';

import Lighhtedmntcittplccdetl from '../Lighhtedmntcittscrrn/Lighhtedmntcittplccdetl';
import Lighhtedmntcitttab from '../../Lighhtedmntcitttab';

import Lighhtedmntcittsvvd from '../Lighhtedmntcittscrrn/Lighhtedmntcittsvvd';
import Lighhtedmntcittplcc from '../Lighhtedmntcittscrrn/Lighhtedmntcittplcc';
import Lighhtedmntcittknowlgpla from '../Lighhtedmntcittscrrn/Lighhtedmntcittknowlgpla';

const Stack = createStackNavigator();

const Lighhtedmntcittstakkc = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Lighhtedmntcittloadr"
        component={Lighhtedmntcittloadr}
      />
      <Stack.Screen
        name="Lighhtedmntcittonbr"
        component={Lighhtedmntcittonbr}
      />
      <Stack.Screen name="Lighhtedmntcitttab" component={Lighhtedmntcitttab} />
      <Stack.Screen
        name="Lighhtedmntcittplcc"
        component={Lighhtedmntcittplcc}
        options={{presentation: 'card'}}
      />
      <Stack.Screen
        name="Lighhtedmntcittplccdetl"
        component={Lighhtedmntcittplccdetl}
        options={{presentation: 'card'}}
      />
      <Stack.Screen
        name="Lighhtedmntcittbllogdet"
        component={Lighhtedmntcittbllogdet}
        options={{presentation: 'card'}}
      />
      <Stack.Screen
        name="Lighhtedmntcittknowlgpla"
        component={Lighhtedmntcittknowlgpla}
        options={{presentation: 'card'}}
      />
      <Stack.Screen
        name="Lighhtedmntcittsvvd"
        component={Lighhtedmntcittsvvd}
        options={{presentation: 'card'}}
      />
    </Stack.Navigator>
  );
};

export default Lighhtedmntcittstakkc;
