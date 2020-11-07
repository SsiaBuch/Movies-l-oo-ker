import { monthNow } from './Date.js';

export const MovieAfterNowDate = (arr) => {
  return arr.filter(el => +el.release_date.substring(5, 7) >= monthNow && +el.release_date.substring(0, 4) >= 2020)
}
export const MovieLatest = (arr) => {
  return arr.filter(el => +el.release_date.substring(5, 7) > monthNow && +el.release_date.substring(0, 4) >= 2020)
}