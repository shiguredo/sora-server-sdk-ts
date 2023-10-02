// 認証ウェブフックリクエスト
type AuthWebhookRequest = {
  timestamp: string

  version: string
  label: string
  node_name: string

  role: Role
  channel_id: string
  client_id?: string
  bundle_id?: string
  connection_id: string

  multistream: boolean
  simulcast: boolean
  simulcast_rid?: SimulcastRid
  spotlight: boolean
  spotlight_focus_rid?: 'none' | SimulcastRid
  spotlight_unfocus_rid?: 'none' | SimulcastRid

  audio: WebhookAudio
  audio_codec_type?: string
  audio_bit_rate?: number

  video: Video
  video_codec_type?: string
  video_bit_rate?: number
  video_vp9_params?: VP9Params
  video_av1_params?: AV1Params
  video_h264_params?: H264Params

  data_channel_signaling: boolean
  ignore_disconnect_websocket: boolean
  data_channels?: [DataChannel]

  forwarding_filter?: ForwardingFilter

  auth_metadata?: JSONValue
  metadata?: JSONValue

  whip?: boolean

  sora_client?: SoraClient

  channel_connections: number
  channel_sendrecv_connections: number
  channel_sendonly_connections: number
  channel_recvonly_connections: number

  e2ee: boolean
}

// 認証ウェブフック成功レスポンス
// 200 OK で返してください
type AuthWebhookAcceptResponse = {
  allowed: true

  audio?: Audio
  audio_codec_type?: string
  audio_bit_rate?: number
  audio_lyra_params?: LyraParams
  audio_opus_params?: OpusParams

  video?: Video
  video_codec_type?: string
  video_bit_rate?: number

  video_vp9_params?: VP9Params
  video_av1_params?: AV1Params
  video_h264_params?: H264Params

  bundle_id?: string
  client_id?: string

  data_channel_signaling?: boolean
  ignore_disconnect_websocket?: boolean
  data_channels?: [DataChannel]

  simulcast?: boolean
  simulcast_rid?: SimulcastRid
  simulcast_encodings?: [SimulcastEncoding]

  spotlight?: boolean
  spotlight_number?: number
  spotlight_focus_rid?: 'none' | SimulcastRid
  spotlight_unfocus_rid?: 'none' | SimulcastRid
  spotlight_encodings?: [SimulcastEncoding]

  turn_fqdn?: string
  turn_tls_fqdn?: string

  signaling_notify?: boolean
  signaling_notify_metadata?: JSONValue
  signaling_notify_metadata_ext?: JSONValue

  // 2024 年 6 月にて廃止
  h264_profile_level_id?: string

  user_agent_stats?: boolean

  metadata?: JSONValue
  event_metadata?: JSONValue

  ipv4_address?: string
  ipv6_address?: string

  audio_streaming_language_code?: string

  turn_tcp_only?: boolean
  turn_tls_only?: boolean

  rtp_packet_loss_simulator_incoming?: number
  rtp_packet_loss_simulator_outgoing?: number
}

type SimulcastEncoding = {
  rid: SimulcastRid
  active?: boolean
  scaleResolutionDownBy?: number
  maxBitrate?: number
  maxFramerate?: number
  adaptivePtime?: boolean
}

// 認証ウェブフック失敗レスポンス
// 200 OK で返してください
type AuthWebhookRejectResponse = {
  allowed: false
  reason: string
}
