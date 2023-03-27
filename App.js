import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState, useEffect} from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {StatusBar} from "expo-status-bar";

function App() {

    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    async function loadFontsAsync() {
        await Font.loadAsync({
        'opens-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'opens-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })
    }

    useEffect(() => {
        async function loadResourcesAsync() {
            try {
                await SplashScreen.preventAutoHideAsync();
                await loadFontsAsync();
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                await SplashScreen.hideAsync();
            }
        }

        loadResourcesAsync();
    }, []);

    if (!isLoadingComplete) {
        return null;
    }

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    let screen = <StartGameScreen onPickedNumber = {pickedNumberHandler}/>;

    function gameOverHandler(numberOfRounds) {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);
    }

    function startNewGameHandler() {
        setUserNumber(null);
        setGuessRounds(0);
    }

    if(userNumber){
        screen = <GameScreen userNumber={userNumber} onGameOver = {gameOverHandler}/>;
    }

    if(gameIsOver && userNumber){
        screen = <GameOverScreen
            userNumber={userNumber}
            roundsNumber={guessRounds}
            onStartNewGame={startNewGameHandler}/>
    }

  return (
      <>
          <StatusBar style='light'/>
          <LinearGradient colors={[Colors.primary800,Colors.accent200]} style={styles.rootScreen}>
              <ImageBackground
                    source={require('./assets/images/bg.jpg')}
                    resizeMode='cover'
                    style={styles.rootScreen}
                    imageStyle={styles.backgroundImage}
                >
                  <SafeAreaView style={styles.rootScreen}>
                      {screen}
                  </SafeAreaView>
                </ImageBackground>
          </LinearGradient>
      </>
  );
}

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
    backgroundImage: {
      opacity: 0.35,
    }
});

