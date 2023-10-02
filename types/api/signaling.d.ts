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
  role: string
}
