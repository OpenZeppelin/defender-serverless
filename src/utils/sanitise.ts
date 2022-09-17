import _ from 'lodash';

export const sanitize = (object: object): object | string | null => {
  if (_.isString(object)) return _sanitizeString(object);
  if (_.isArray(object)) return _sanitizeArray(object);
  if (_.isPlainObject(object)) return _sanitizeObject(object);
  return object;
};

const _sanitizeString = (string: string) => {
  return _.isEmpty(string) ? null : string;
};

const _sanitizeArray = (array: Array<any>) => {
  return _.filter(_.map(array, sanitize), _isProvided);
};

const _sanitizeObject = (object: object) => {
  return _.pickBy(_.mapValues(object, sanitize), _isProvided);
};

const _isProvided = (value: any) => {
  const typeIsNotSupported = !_.isNull(value) && !_.isString(value) && !_.isArray(value) && !_.isPlainObject(value);
  return typeIsNotSupported || !_.isEmpty(value);
};
