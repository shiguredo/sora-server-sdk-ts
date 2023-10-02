type EventWebhookRecordingStartedRequest = {
  type: 'recording.started'

  timestamp: string
  id: string

  log_written: boolean

  version: string
  label: string
  node_name: string

  channel_id: string

  data: EventWebhookRecordingStartedData
}

type EventWebhookRecordingStartedData = {
  channel_id: string
  recording_id: string
  metadata?: JSONValue
  split_only: boolean
  split_duration?: number
  created_at: number
  expire_time: number
  expired_at: number
  start_timestamp: string
}

type EventWebhookRecordingReportRequest = {
  type: 'recording.report'

  timestamp: string
  id: string

  log_written: boolean

  version: string
  label: string
  node_name: string

  channel_id: string

  data: EventWebhookRecordingReportData
}

type EventWebhookRecordingReportData = {
  channel_id: string
  recording_id: string
  metadata?: JSONValue
  split_only: boolean
  split_duration?: number
  created_at: number
  expire_time: number
  expired_at: number
  file_path: string
  filename: string
  file_written: boolean
  start_timestamp: string
  stop_timestamp: string
  archives: [EventWebhookRecordingReportArchive]
  failed_archives: [EventWebhookRecordingReportFailedArchive]
}

type EventWebhookRecordingReportArchive = {
  label: string
  node_name: string
  client_id: string
  bundle_id: string
  connection_id: string
  file_path?: string
  filename?: string
  metadata_file_path?: string
  metadata_filename?: string
  start_time_offset: number
  start_timestamp: string
  stop_time_offset: number
  stop_timestamp: string
  size?: number
  split_last_index?: string
}

type EventWebhookRecordingReportFailedArchive = {
  label: string
  node_name: string
  client_id: string
  bundle_id: string
  connection_id: string
}

type EventWebhookArchiveStartedRequest = {
  type: 'archive.started'

  timestamp: string
  id: string

  log_written: boolean

  version: string
  label: string
  node_name: string

  channel_id: string
  session_id: string
  client_id: string
  bundle_id: string
  connection_id: string

  event_metadata?: JSONValue

  data: EventWebhookArchiveStartedData
}

type ArchiveVideo =
  | boolean
  | {
      codec_type?: VideoCodecType
      bit_rate?: number
      height?: number
      width?: number
    }

type EventWebhookArchiveStartedData = {
  recording_id: string

  channel_id: string
  session_id: string
  client_id: string
  bundle_id: string
  connection_id: string

  created_at: number

  audio: WebhookAudio
  audio_codec_type?: string
  audio_bit_rate?: number

  video: Video
  video_codec_type?: string
  video_bit_rate?: number
  video_vp9_params?: VP9Params
  video_av1_params?: AV1Params
  video_h264_params?: H264Params

  start_time: number
  start_time_offset: number
  start_timestamp: string
}

type EventWebhookArchiveAvailableRequest = {
  type: 'archive.available'

  timestamp: string
  id: string

  log_written: boolean

  version: string
  label: string
  node_name: string

  channel_id: string
  session_id: string
  client_id: string
  bundle_id: string
  connection_id: string

  event_metadata?: JSONValue

  data: EventWebhookArchiveAvailableData
}

type EventWebhookArchiveAvailableData = {
  recording_id: string

  channel_id: string
  session_id: string
  client_id: string
  bundle_id: string
  connection_id: string

  file_path: string
  filename: string

  metadata_file_path: string
  metadata_filename: string

  size: number

  created_at: number

  audio: WebhookAudio
  audio_codec_type?: string
  audio_bit_rate?: number

  video: ArchiveVideo
  video_codec_type?: string
  video_bit_rate?: number
  video_height?: number
  video_width?: number
  video_vp9_params?: VP9Params
  video_av1_params?: AV1Params
  video_h264_params?: H264Params

  start_time: number
  start_time_offset: number
  start_timestamp: string

  stop_time: number
  stop_time_offset: number
  stop_timestamp: string

  stats: JSONValue
}

type EventWebhookSplitArchiveAvailableRequest = {
  type: 'split-archive.available'

  id: string
  timestamp: string

  log_written: boolean

  version: string
  label: string
  node_name: string

  channel_id: string
  session_id: string
  client_id: string
  bundle_id: string
  connection_id: string

  event_metadata?: JSONValue

  data: EventWebhookSplitArchiveAvailableData
}

type EventWebhookSplitArchiveAvailableData = {
  recording_id: string

  channel_id: string
  session_id: string
  client_id: string
  bundle_id: string
  connection_id: string

  split_index: string

  file_path: string
  filename: string

  metadata_file_path: string
  metadata_filename: string

  size: number

  created_at: number

  audio: WebhookAudio
  audio_codec_type?: string
  audio_bit_rate?: number

  video: ArchiveVideo
  video_codec_type?: string
  video_bit_rate?: number
  video_height?: number
  video_width?: number
  video_vp9_params?: VP9Params
  video_av1_params?: AV1Params
  video_h264_params?: H264Params

  start_time: number
  start_time_offset: number
  start_timestamp: string

  stop_time: number
  stop_time_offset: number
  stop_timestamp: string

  stats: JSONValue
}

type EventWebhookSplitArchiveEndRequest = {
  type: 'split-archive.end'

  id: string
  timestamp: string

  log_written: boolean

  version: string
  label: string
  node_name: string

  channel_id: string
  session_id: string
  client_id: string
  bundle_id: string
  connection_id: string

  event_metadata?: JSONValue

  data: EventWebhookSplitArchiveEndData
}

type EventWebhookSplitArchiveEndData = {
  split_last_index: string

  recording_id: string

  channel_id: string
  session_id: string
  client_id: string
  bundle_id: string
  connection_id: string

  file_path: string
  filename: string

  audio: WebhookAudio
  audio_codec_type?: string
  audio_bit_rate?: number

  video: Video
  video_codec_type?: string
  video_bit_rate?: number
  video_vp9_params?: VP9Params
  video_av1_params?: AV1Params
  video_h264_params?: H264Params

  start_time: number
  start_time_offset: number
  start_timestamp: string

  stop_time: number
  stop_time_offset: number
  stop_timestamp: string

  stats: JSONValue
}

type EventWebhookArchiveFailedRequest = {
  type: 'archive.failed'

  timestamp: string
  id: string

  log_written: boolean

  version: string
  label: string
  node_name: string

  channel_id: string
  session_id: string
  client_id: string
  bundle_id: string
  connection_id: string

  event_metadata?: JSONValue

  data: EventWebhookSplitArchiveFailedData
}

type EventWebhookSplitArchiveFailedData = {
  recording_id: string

  session_id: string

  file_path: string
  filename: string

  audio: WebhookAudio
  audio_codec_type?: string
  audio_bit_rate?: number

  video: ArchiveVideo
  video_codec_type?: string
  video_bit_rate?: number
  video_height?: number
  video_width?: number
  video_vp9_params?: VP9Params
  video_av1_params?: AV1Params
  video_h264_params?: H264Params

  start_time: number
  start_timestamp: string

  stop_time: number
  stop_timestamp: string

  stats: JSONValue
}
