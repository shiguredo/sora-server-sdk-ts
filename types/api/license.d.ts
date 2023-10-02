type GetLicenseResponse = {
  expired_at: string
  max_connections: number
  product_name: string
  serial_code: string
  type: string
}

type UpdateLicenseResponse = {
  new_license: GetLicenseResponse
  old_license: GetLicenseResponse
}
