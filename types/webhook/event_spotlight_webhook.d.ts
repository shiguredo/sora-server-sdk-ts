type EventWebhookSpotlightFocusedRequest = {
  type: 'spotlight.focused'

  timestamp: string
  id: string

  log_written: boolean

  version: string
  label: string
  node_name: string

  channel_id: string
  client_id: string
  bundle_id: string
  connection_id: string

  spotlight_number: number

  fixed: boolean

  audio: boolean
  video: boolean
}

type EventWebhookSpotlightUnfocusedRequest = {
  type: 'spotlight.unfocused'

  timestamp: string
  id: string

  log_written: boolean

  version: string
  label: string
  node_name: string

  channel_id: string
  client_id: string
  bundle_id: string
  connection_id: string

  spotlight_number: number

  audio: boolean
  video: boolean
}
