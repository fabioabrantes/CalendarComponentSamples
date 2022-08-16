import { useTheme } from 'styled-components';

import {Calendar1} from '../../components/Calendar1';
import {Calendar2} from '../../components/Calendar2';


import { 
  Container,
  Header,
  UserContainer,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  LogoutButton,
  IconPower,
  CalendarContainer,
  Title,

} from './styles';

interface User{
  id:number;
  name:string;
}

export function Home(){
  
 const theme = useTheme();

   
  return (
    <Container>
         <Header>
            <UserContainer>
              <UserInfo>
                <Photo source={{uri:'https://avatars.githubusercontent.com/u/62598805?v=4'}}/>
                <User>
                  <UserGreeting>Olá,</UserGreeting>
                  <UserName>Fábio</UserName>
                </User>
              </UserInfo>

              <LogoutButton onPress={()=>{}}>
                <IconPower name="power" color={theme.colors.main_light}/>
              </LogoutButton>
            </UserContainer>
          </Header>
     
          <CalendarContainer>
            <Calendar1/>

            <Calendar2/>
          </CalendarContainer>
    </Container>
  );
}