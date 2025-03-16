import { capitalize } from './utils.js';

export const greet = (name) => {
  return `Hello, ${capitalize(name)}! Welcome to Parcel.`;
};