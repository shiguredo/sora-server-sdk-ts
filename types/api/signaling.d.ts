type DisconnectChannelRequest = {
  channel_id: string
  reason: object
}

type DisconnectClientRequest = {
  channel_id: string
  client_id: string
  reason?: object
}

type DisconnectConnectionRequest = {
  channel_id: string
  connection_id: string
  reason?: object
}

type DisconnectChannelByRoleRequest = {
  channel_id: string
  role: Role
}

type ListChannelConnectionsRequest = {
  channel_id: string
}

type ChannelConnection = {
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
