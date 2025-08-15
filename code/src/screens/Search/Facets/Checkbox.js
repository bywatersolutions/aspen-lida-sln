import { Checkbox, HStack, Pressable, Text } from 'native-base';
import React from 'react';

export default function Facet_Checkbox({ data, category, values = [], updateLocalValues }) {
     const isChecked = values.includes(data.value);
     const handlePress = () => {
          const newValues = isChecked
               ? values.filter(v => v !== data.value)
               : [...values, data.value];
          updateLocalValues(category, newValues);
     };

     return (
          <Pressable
               py={4}
               hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
               onPress={handlePress}
          >
               <HStack alignItems="center" space={3}>
                    <Checkbox
                         value={data.value}
                         accessibilityLabel={data.display}
                         isChecked={isChecked}
                         onChange={handlePress}    // <-- This makes Checkbox itself clickable
                    >
                         <Text
                              _light={{ color: 'darkText' }}
                              _dark={{ color: 'lightText' }}
                              onPress={handlePress}   // <-- This makes the label clickable
                         >
                              {data.display}{data.count ? ` (${data.count})` : ''}
                         </Text>
                    </Checkbox>
               </HStack>
          </Pressable>
     );
}