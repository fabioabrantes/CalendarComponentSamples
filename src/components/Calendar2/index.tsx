import React,{useState} from 'react';

import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';
import {useTheme} from 'styled-components';

import {ptBR} from '../Calendar1/localConfig';
LocaleConfig.locales['pt-br']= ptBR;
LocaleConfig.defaultLocale='pt-br'; 

import {
  Container,
} from './styles';

interface MarkedDateProps{
  [key:string]:MarkingProps;
}

export function Calendar2(){
  const [marked, setMarked] = useState<MarkedDateProps>({} as MarkedDateProps);

  const theme = useTheme();
  
  function onDayPress(day:DateData):void{
    let dataMarcada:MarkedDateProps = {};
  
    dataMarcada[day.dateString] = {
      selected: true,
      disableTouchEvent: true,
      selectedColor: theme.colors.main,
      selectedTextColor: theme.colors.text_detail
      
    }
    setMarked(dataMarcada);
  };
  
  return (
    <Container>
      <Calendar
          enableSwipeMonths
          style={{
            borderWidth: 1,
            borderColor: 'red',
            height: 320,
            width: 300,
            margin: 10,
          }}
          onDayPress={onDayPress}
          markedDates={marked}
          theme={{
            textSectionTitleColor:theme.colors.title,
            textDayFontSize:10,
            textDayHeaderFontWeight:'bold',
            textMonthFontSize:10,
            textDayHeaderFontSize:10,
            
          }}
          firstDay={1}
        />
    </Container>
  );
}
