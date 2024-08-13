import { format } from 'date-fns'

export const trackFormattedTime = (time: number) => format(time * 1000, 'm:ss')
