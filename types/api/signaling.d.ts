type Connection = {
  audio: Audio
  audio: Video
  channel_id: string
  client_id: string
  created_time: number
  bundle_id: string
  connection_id: string
  role: Role
  simulcast: boolean
  spotlight: boolean
  multistream: boolean
}

type DisconnectChannelParams = {
  channel_id: string
  reason: object
}

type DisconnectChannel = {
  channel_id: string
}

type DisconnectClientParams = {
  channel_id: string
  client_id: string
  reason?: object
}

type DisconnectClient = {
  channel_id: string
  client_id: string
}

type DisconnectConnectionParams = {
  channel_id: string
  connection_id: string
  reason?: object
}

type DisconnectConnection = {
  channel_id: string
  connection_id: string
}

type DisconnectChannelByRoleParams = {
  channel_id: string
  role: Role
}

type DisconnectChannelByRole = {
  channel_id: string
  role: Role
}

type ListChannelConnectionsParams = {
  channel_id: string
}
