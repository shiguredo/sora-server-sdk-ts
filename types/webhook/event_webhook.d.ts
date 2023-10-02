// イベントコネクション生成ウェブフックリクエスト
type EventWebhookConnectionCreatedRequest = {
  type: 'connection.created'

  timestamp: string
  id: string

  log_written: boolean

  version: string
  label: string
  node_name: string

  role: Role
  channel_id: string
  session_id: string
  client_id: string
  bundle_id: string
  connection_id: string

  multistream: boolean
  simulcast: boolean
  spotlight: boolean

  event_metadata?: JSONValue

  data: EventWebhookConnectionCreatedData
}

// イベントコネクション生成ウェブフックデータ
type EventWebhookConnectionCreatedData = {
  minutes: number

  audio: WebhookAudio
  audio_codec_type?: AudioCodecType
  audio_bit_rate?: number

  video: Video
  video_codec_type?: VideoCodecType
  video_bit_rate?: number
  video_vp9_params?: VP9Params
  video_av1_params?: AV1Params
  video_h264_params?: H264Params

  channel_connections: number
  channel_sendrecv_connections: number
  channel_sendonly_connections: number
  channel_recvonly_connections: number

  turn_transport_type: 'udp' | 'tcp'

  created_time: number
  created_timestamp: string

  ice_connection_state: IceConnectionState

  total_received_bytes: number
  total_sent_bytes: number
}

// イベントコネクション更新ウェブフックリクエスト
type EventWebhookConnectionUpdatedRequest = {
  type: 'connection.updated'

  timestamp: string
  id: string

  log_written: boolean

  version: string
  label: string
  node_name: string

  role: Role
  channel_id: string
  session_id: string
  client_id: string
  bundle_id: string
  connection_id: string

  multistream: boolean
  simulcast: boolean
  spotlight: boolean

  event_metadata?: JSONValue

  data: EventWebhookConnectionUpdatedData
}

// イベントコネクション更新ウェブフックデータ
type EventWebhookConnectionUpdatedData = {
  minutes: number

  audio: WebhookAudio
  audio_codec_type?: AudioCodecType
  audio_bit_rate?: number

  video: Video
  video_codec_type?: VideoCodecType
  video_bit_rate?: number
  video_vp9_params?: VP9Params
  video_av1_params?: AV1Params
  video_h264_params?: H264Params

  channel_connections: number
  channel_sendrecv_connections: number
  channel_sendonly_connections: number
  channel_recvonly_connections: number

  turn_transport_type: 'udp' | 'tcp'

  created_time: number
  created_timestamp: string

  ice_connection_state: IceConnectionState

  total_received_bytes: number
  total_sent_bytes: number
}

// イベントコネクション破棄ウェブフックリクエスト
type EventWebhookConnectionDestroyedRequest = {
  type: 'connection.destroyed'

  timestamp: string
  id: string

  log_written: boolean

  version: string
  label: string
  node_name: string

  role: Role
  channel_id: string
  session_id: string
  client_id: string
  bundle_id: string
  connection_id: string

  multistream: boolean
  simulcast: boolean
  spotlight: boolean

  event_metadata?: JSONValue

  data: EventWebhookConnectionDestroyedData
}

// イベントコネクション破棄ウェブフックデータ
type EventWebhookConnectionDestroyedData = {
  minutes: number

  audio: WebhookAudio
  audio_codec_type?: AudioCodecType
  audio_bit_rate?: number

  video: Video
  video_codec_type?: VideoCodecType
  video_bit_rate?: number
  video_vp9_params?: VP9Params
  video_av1_params?: AV1Params
  video_h264_params?: H264Params

  channel_connections: number
  channel_sendrecv_connections: number
  channel_sendonly_connections: number
  channel_recvonly_connections: number

  turn_transport_type: 'udp' | 'tcp'

  created_time: number
  created_timestamp: string

  destroyed_time: number
  destroyed_timestamp: string

  ice_connection_state: IceConnectionState

  total_received_bytes: number
  total_sent_bytes: number

  reason?: string
  disconnect_api_reason?: string
  type_disconnect_reason?: string
}

type EventWebhookConnectionFailedRequest = {
  type: 'connection.failed'

  timestamp: string
  id: string

  log_written: boolean

  version: string
  label: string
  node_name: string

  role?: Role
  channel_id?: string
  client_id?: string
  bundle_id?: string
  connection_id: string

  multistream: boolean
  simulcast: boolean
  spotlight: boolean

  data: EventWebhookConnectionFailedData
}

type EventWebhookConnectionFailedData = {
  message: string

  channel_connections: number
  channel_sendrecv_connections: number
  channel_sendonly_connections: number
  channel_recvonly_connections: number

  total_received_bytes: number
  total_sent_bytes: number
}

type IceConnectionState = {
  total_checking_duration_ms: number
  total_disconnected_duration_ms: number
}
