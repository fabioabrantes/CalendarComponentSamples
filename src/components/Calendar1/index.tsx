import { Calendar, LocaleConfig,} from 'react-native-calendars';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';

import {format,subWeeks,addWeeks} from 'date-fns';
import {useTheme} from 'styled-components';

import {AGENDAMENTOS} from './data';

import {ptBR} from './localConfig';
LocaleConfig.locales['pt-br']= ptBR;
LocaleConfig.defaultLocale='pt-br'; 

import {
  Container
} from './styles';

interface MarkedDateProps{
  [key:string]:MarkingProps;
}

interface Appointment{
  date:string;
}

export function Calendar1(){
 /*  const date = new Date(1995, 11, 17) 
  console.log(format(date,'yyyy-MM-dd')); */

  const initDate = '2022/08/01';
  const initDateFormatted = format(new Date(initDate),'yyyy-MM-dd')

  const theme = useTheme();

  function getMarkedDates(baseDate:string, appointments:Appointment[]){
    let datasMarcadas:MarkedDateProps = {};
  
    datasMarcadas[baseDate] = { 
      selected: true,
      marked:true,
      color:theme.colors.main,
      textColor:theme.colors.text_detail,
    }
  
    appointments.forEach((appointment) => {
      const formattedDate = format(new Date(appointment.date),'yyyy-MM-dd');
      
      datasMarcadas= {
        ...datasMarcadas,
        [formattedDate] :{
          marked: true,
          textColor:'#ebf3ea',
          color:'red',
          dotColor:'blue'
        }
      };
    });
    console.log(datasMarcadas);
    return datasMarcadas;
  };
 
  return (
    <Container>
      <Calendar
        style={{
          borderWidth: 1,
          borderColor: 'red',
          height: 320,
          width: 300,
          margin: 10,
        }}
        current={initDate}
        minDate ={format(subWeeks(new Date(initDate), 1),'yyyy-MM-dd')}
        maxDate ={format(addWeeks(new Date(initDate), 2),'yyyy-MM-dd')}
        onDayPress={(day) => {
          console.log('data selecionado', day);
        }}
        firstDay={1}
        markingType="period"
        markedDates={getMarkedDates(initDateFormatted, AGENDAMENTOS)}
        theme={{
          calendarBackground: '#fff',
          textSectionTitleColor:'#000',
          textMonthFontWeight: 'bold',
          selectedDayTextColor: '#4b053f',
          todayTextColor: '#00adf5',
          selectedDayBackgroundColor: '#ddf500',
          textDayFontSize:10,
          textDayHeaderFontWeight:'bold',
          textDayHeaderFontSize:10,
          textMonthFontSize:12    
        }}

      />
    </Container>
  );
}
