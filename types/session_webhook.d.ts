// セッションウェブフック生成リクエスト
type SessionWebhookCreatedRequest = {
  type: 'session.created'

  timestamp: string
  id: string

  version: string
  label: string
  node_name: string

  // cluster = true の時のみ含まれる
  external_signaling_url?: string

  channel_id: string
  session_id: string

  multistream: boolean
  spotlight: boolean

  created_time: number
  created_timestamp: string
}

// 200 OK で返してください
type SessionWebhookCreatedResponse = {
  session_metadata?: JSONValue
  forwarding_filter?: ForwardingFilter
  audio_streaming?: boolean
  audio_streaming_auto?: boolean
}

// セッションウェブフック破棄リクエスト
type SessionWebhookDestroyedRequest = {
  type: 'session.destroyed'

  timestamp: string
  id: string

  version: string
  label: string
  node_name: string

  // cluster = true の時のみ含まれる
  external_signaling_url?: string

  channel_id: string
  session_id: string

  multistream: boolean
  spotlight: boolean

  created_time: number
  created_timestamp: string

  destroyed_time: number
  destroyed_timestamp: string

  max_connections: number
  total_connections: number

  session_metadata?: JSONValue

  connections?: [SessionConnection]
}

type SessionConnection = {
  role: Role
  client_id: string
  bundle_id: string
  connection_id: string

  simulcast: boolean

  audio: WebhookAudio
  audio_codec_type?: string
  audio_bit_rate?: number

  video: Video
  video_codec_type?: string
  video_bit_rate?: number
  video_vp9_params?: VP9Params
  video_av1_params?: AV1Params
  video_h264_params?: H264Params

  connection_created_timestamp: string
  connection_destroyed_timestamp: string

  event_metadata?: JSONValue
}

// セッションウェブフック全破棄リクエスト
type SessionWebhookVanishedRequest = {
  type: 'session.vanished'

  timestamp: string
  id: string

  version: string
  label: string
  node_name: string
}

// セッションウェブフック音声ストリーミング開始リクエスト
type SessionWebhookAudioStreamingStartedRequest = {
  type: 'audio-streaming.started'

  timestamp: string
  id: string

  version: string
  label: string
  node_name: string

  // cluster = true の時のみ含まれる
  external_signaling_url?: string

  channel_id: string
  session_id: string

  multistream: boolean
  spotlight: boolean

  created_time: number
  created_timestamp: string

  max_connections: number
  total_connections: number

  session_metadata?: JSONValue

  data: AudioStreamingStartedData
}

type AudioStreamingStartedData = {
  audio_streaming_auto: boolean
  audio_streaming_started_timestamp: string
}

// セッションウェブフック音声ストリーミング停止リクエスト
type SessionWebhookAudioStreamingStoppedRequest = {
  type: 'audio-streaming.stopped'

  timestamp: string
  id: string

  version: string
  label: string
  node_name: string

  // cluster = true の時のみ含まれる
  external_signaling_url?: string

  channel_id: string
  session_id: string

  multistream: boolean
  spotlight: boolean

  created_time: number
  created_timestamp: string

  max_connections: number
  total_connections: number

  session_metadata?: JSONValue

  data: AudioStreamingStoppedData
}

type AudioStreamingStoppedData = {
  audio_streaming_auto: boolean
  audio_streaming_started_timestamp: string
  audio_streaming_stopped_timestamp: string
}
