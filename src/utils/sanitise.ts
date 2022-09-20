/**
 * @notice copied from https://gist.github.com/simonrenoult/2fa79fec8f035b2d35cef0767363b227
 * */

import _ from 'lodash';

export const sanitise = (object: object): object | string | null => {
  if (_.isString(object)) return _sanitiseString(object);
  if (_.isArray(object)) return _sanitiseArray(object);
  if (_.isPlainObject(object)) return _sanitiseObject(object);
  return object;
};

const _sanitiseString = (string: string) => {
  return _.isEmpty(string) ? null : string;
};

const _sanitiseArray = (array: Array<any>) => {
  return _.filter(_.map(array, sanitise), _isProvided);
};

const _sanitiseObject = (object: object) => {
  return _.pickBy(_.mapValues(object, sanitise), _isProvided);
};

const _isProvided = (value: any) => {
  const typeIsNotSupported = !_.isNil(value) && !_.isString(value) && !_.isArray(value) && !_.isPlainObject(value);
  return typeIsNotSupported || !_.isEmpty(value);
};
