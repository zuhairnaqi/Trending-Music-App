export const msToDurationString = ms => {
  const time = new Date(ms).toISOString().slice(11, 19);
  const timeStr = time.split(':');
  const hour = Number(timeStr[0]);
  const min = Number(timeStr[1]);
  const sec = Number(timeStr[2]);
  let durationStr = '';
  if (hour) {
    durationStr += hour + 'h ';
  }
  if (min) {
    durationStr += min + 'm ';
  }
  if (sec) {
    durationStr += sec + 's';
  }
  return durationStr;
};
