// ウェブフックで通知される音声の設定
type WebhookAudio =
  | boolean
  | {
      codec_type?: AudioCodecType
      bit_rate?: number
    }
