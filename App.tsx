import {ThemeProvider} from 'styled-components';

import {Home} from './src/screens/Home';

import {Load} from './src/components/Load';


import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import {THEME} from './src/global/styles/themes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontsLoaded) {return <Load/>} 
   
  
  return (
    <ThemeProvider theme={THEME}>
      <Home />
    </ThemeProvider>
   
  );
}