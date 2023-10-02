// 型 export
export * from './api'
export * from './webhook'

// JSON 値を表します。
// 仕様は RFC 8259 に従います。
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue | undefined }

// ストリームの種別
type Role = 'sendrecv' | 'sendonly' | 'recvonly'

// サイマルキャストで視聴する映像の種類
type SimulcastRid = 'r0' | 'r1' | 'r2'

// 音声の設定
type Audio =
  | boolean
  | {
      codec_type?: AudioCodecType
      bit_rate?: number
      lyra_params?: LyraParams
      opus_params?: OpusParams
    }

type LyraParams = {
  version?: string
  bitrate?: number
}

type OpusParams = {
  channels?: number
  maxplaybackrate?: number
  minptime?: number
  ptime?: number
  stereo?: boolean
  sprop_stereo?: boolean
  useinbandfec?: boolean
  usedtx?: boolean
}

// 映像の設定
type Video =
  | boolean
  | {
      codec_type?: VideoCodecType
      bit_rate?: number
      vp9_params?: VP9Params
      av1_params?: AV1Params
      h264_params?: H264Params
    }

type VP9Params = {
  // 0..3
  profile_id?: number
}

type AV1Params = {
  // 0..2
  profile?: number
}

type H264Params = {
  profile_level_id?: string
}

// 音声コーデックの種類
type AudioCodecType = 'OPUS' | 'LYRA'

// 映像コーデックの種類
type VideoCodecType = 'VP9' | 'VP8' | 'AV1' | 'H264' | 'H265'

// DataChannel の方向
type Direction = 'sendrecv' | 'sendonly' | 'recvonly'

// DataChannels
type DataChannel = {
  label: string
  direction: Direction
  ordered?: boolean
  max_packet_life_time?: number
  max_retransmits?: number
  protocol?: string
  compress?: boolean
}

type ForwardingFilterRuleField = 'connection_id' | 'client_id' | 'kind'

type ForwardingFilterRuleOperator = 'is_in' | 'is_not_in'

type ForwardingFilterRule = {
  field: ForwardingFilterRuleField
  operator: ForwardingFilterRuleOperator
  values: [string]
}

type ForwardingFilterAction = 'block' | 'allow'

type ForwardingFilter = {
  version?: string
  metadata?: JSONValue
  action: ForwardingFilterAction
  rules: [[ForwardingFilterRule]]
}

// SoraClient
type SoraClient = {
  environment?: string
  raw?: string
  type?: string
  version?: string
  commit_short?: string
  libwebrtc?: string
}
