import fetch from 'node-fetch'

export class Api {
  // https://sora.example.com/api
  private endpoint: string

  // TODO: 認証周りを opts?: Opts として渡せるようにする
  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  private async postRequest<T>(target: string, args?: any): Promise<T> {
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Sora-Target': target,
      },
      body: JSON.stringify(args),
    })

    if (!response.ok) {
      throw new Error('')
    }

    const data = await response.json()
    if (typeof data !== 'object' || data === null) {
      throw new Error('Invalid response')
    }

    return data as T
  }

  async getLicense(): Promise<GetLicenseResponse> {
    return await this.postRequest<GetLicenseResponse>('Sora_20171218.GetLicense')
  }

  async updateLicense(): Promise<UpdateLicenseResponse> {
    return await this.postRequest<UpdateLicenseResponse>('Sora_20171218.UpdateLicense')
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
