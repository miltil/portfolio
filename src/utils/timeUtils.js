import { format, parse } from 'date-fns';

export const convertTimeToCalc = (time) => {
  return format(parse(time, 'h:mm a', new Date()), 'H');
}

export const convertTimeToDisplay = (time) => {
  return format(parse(time, 'H', new Date()), 'h:mm a');
}
