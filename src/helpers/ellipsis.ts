export default (str: string, max: number): string => {
  if (!str) {
    return '';
  }
  return str.length > max ? `${str.substr(0, max)}..` : str;
};
