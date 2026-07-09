# ADA Video App

> Qualquer um pode criar um vídeo viral.

App mobile (Android + iOS) para criação de vídeos virais com inteligência artificial.
Desenvolvido por **ADA Estúdio** — Forjado por ADA.

---

## Funcionalidades

- 📷 Câmera nativa (sem perda de qualidade)
- ✂️ Corte automático por silêncio (IA)
- 💬 Legendas automáticas (OpenAI Whisper)
- 🎙️ Clonagem de voz (ElevenLabs) com 30-60s de amostra
- 🌍 Dublagem automática com sincronização
- ✨ Ganchos virais e hashtags (GPT-4o)
- ⬆️ Export direto para Reels, TikTok e Shorts (9:16)

## Stack

- React Native + Expo
- Supabase (auth + banco + storage)
- OpenAI Whisper + GPT-4o
- ElevenLabs TTS + Voice Cloning
- ffmpeg-kit-react-native

## Estrutura

```
ada-video-app/
├── app/screens/        # Telas principais
├── components/         # Componentes reutilizáveis
├── constants/          # Cores, constantes ADA
├── hooks/              # useVideoEditor
├── services/           # supabase.ts, ai.ts
└── supabase/functions/ # Edge Functions (Whisper, GPT, TTS)
```

## Configuração

1. Copie `.env.example` para `.env` e preencha as chaves
2. `npm install`
3. `npx expo start`

## Modelo de negócio

- **Grátis:** 3 exports/dia, até 60s, com marca d'água
- **Pro:** exports ilimitados, até 10min, sem marca d'água
- **Créditos avulsos:** clonagem de voz, dublagem, export HD

---

*ADA — Adilson · Daniel · Almeida. Forjado por código.*
