type GetLicense = {
  expired_at: string
  max_connections: number
  product_name: string
  serial_code: string
  type: string
}

type UpdateLicense = {
  new_license: GetLicense
  old_license: GetLicense
}
