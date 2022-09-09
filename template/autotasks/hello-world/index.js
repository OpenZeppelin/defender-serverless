exports.handler = async function (event) {
  console.log(`Hello world from serverless`);
  console.log(JSON.stringify(event));
  return `Hello world from serverless`;
};
