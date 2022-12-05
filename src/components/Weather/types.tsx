export type Day = {
  datetime?: string,
  tmax?: number,
  tmin?: number,
  weather?: number,
  sun_hours?: number,
}

export type Data = {
  city?: { name ?: string},
  forecast?: Day[],
}
