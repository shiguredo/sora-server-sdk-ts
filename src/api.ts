import fetch from 'node-fetch'

export default class Api {
  // https://sora.example.com/api
  private endpoint: string

  // TODO: 認証周りを opts?: Opts として渡せるようにする
  constructor(endpoint: string, opts?: any) {
    this.endpoint = endpoint
  }

  private async postRequest<T>(target: string, params?: any): Promise<T> {
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Sora-Target': target,
      },
      body: JSON.stringify(params),
    })

    if (!response.ok) {
      throw new Error('Unexpected response status')
    }

    const data = await response.json()
    if (typeof data !== 'object' || data === null) {
      throw new Error('Invalid response')
    }

    return data as T
  }

  async disconnectChannel(params: DisconnectChannelParams): Promise<DisconnectChannel> {
    return await this.postRequest<DisconnectChannel>('Sora_20151104.DisconnectChannel', params)
  }

  async disconnectClient(params: DisconnectClientParams): Promise<DisconnectClient> {
    return await this.postRequest<DisconnectClient>('Sora_20151104.DisconnectClient', params)
  }

  async disconnectConnection(params: DisconnectConnectionParams): Promise<DisconnectConnection> {
    return await this.postRequest<DisconnectConnection>(
      'Sora_20151104.DisconnectConnection',
      params,
    )
  }

  async disconnectChannelByRole(
    params: DisconnectChannelByRoleParams,
  ): Promise<DisconnectChannelByRole> {
    return await this.postRequest<DisconnectChannelByRole>(
      'Sora_20201120.DisconnectChannelByRole',
      params,
    )
  }

  async listConnections(): Promise<Connection[]> {
    return await this.postRequest<Connection[]>('Sora_20201013.ListConnections')
  }

  async listChannelConnections(params: ListChannelConnectionsParams): Promise<Connection[]> {
    return await this.postRequest<Connection[]>('Sora_20201013.ListChannelConnections', params)
  }

  async getLicense(): Promise<GetLicense> {
    return await this.postRequest<GetLicense>('Sora_20171218.GetLicense')
  }

  async updateLicense(): Promise<UpdateLicense> {
    return await this.postRequest<UpdateLicense>('Sora_20171218.UpdateLicense')
  }
}

/*
import Api from '@shiguredo/sora-server-sdk'

const api = new Api('https://sora.example.com/api')
try {
  const result = await api.getLicense()
  console.log(result)
} catch (error) {
  console.log(error)
}
*/
