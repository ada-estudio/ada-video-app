import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import CameraScreen from './app/screens/CameraScreen';
import EditorScreen from './app/screens/EditorScreen';

type Tela = 'home' | 'camera' | 'editor';

export default function App() {
  const [tela, setTela] = useState<Tela>('home');
  const [videoUri, setVideoUri] = useState<string>('');
  const [videoDuracao, setVideoDuracao] = useState<number>(0);

  function aoGravarVideo(uri: string, duracao: number) {
    setVideoUri(uri);
    setVideoDuracao(duracao);
    setTela('editor');
  }

  async function aoImportarGaleria() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissao necessaria', 'Autorize o acesso a galeria para importar videos.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: false,
      quality: 1,
    });
    if (!result.canceled && result.assets[0]) {
      const asset = result.assets[0];
      setVideoUri(asset.uri);
      setVideoDuracao(Math.round((asset.duration ?? 0) / 1000));
      setTela('editor');
    }
  }

  return (
    <>
      <StatusBar style="light" />
      {tela === 'home' && (
        <HomeScreen
          onGravar={() => setTela('camera')}
          onImportar={aoImportarGaleria}
        />
      )}
      {tela === 'camera' && (
        <CameraScreen
          onVideoGravado={aoGravarVideo}
          onVoltar={() => setTela('home')}
        />
      )}
      {tela === 'editor' && (
        <EditorScreen
          videoUri={videoUri}
          duracao={videoDuracao}
          onExportar={(uri) => console.log('Exportando:', uri)}
          onVoltar={() => setTela('home')}
        />
      )}
    </>
  );
}
