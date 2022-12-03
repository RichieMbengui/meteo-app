export type Day = {
  dt?: number,
  main?: { temp ?: number, temp_max?: number, temp_min?: number, humidity ?: number},
}

export type Data = {
  city?: { name ?: string},
  forecast?: Day[],
}
