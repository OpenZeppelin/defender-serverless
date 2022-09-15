exports.handler = async function (event) {
  console.log(`Hello world from serverless`);
  console.log(JSON.stringify(event));
  console.log('blah blah blah')
  return `Hello world from serverless`;
};
