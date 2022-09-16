// replace-in-file configuration
module.exports = {
  files: ['**/schemas/*.schema.json'],
  from: /definitions.schema.json\//g,
  to: '',
};
