import moment from 'moment';

export function utcToLocal(time, format = 'YYYY-MM-DD HH:mm:ss') {
  if (!time) return time;
  return moment.utc(time).local().format(format);
}
