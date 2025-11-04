// test.js

// 1. Attempt to import the external dependency (Axios)
try {
  const axios = require('axios');
  console.log("SUCCESS: Axios module loaded successfully.");

  // 2. Test a simple Node.js runtime feature
  const result = 2 + 2;
  console.log(`SUCCESS: Basic Node.js calculation: 2 + 2 = ${result}`);

  // 3. Since we don't want to actually hit a network endpoint in a simple test,
  //    we'll just ensure the imported object is valid.
  if (typeof axios.get === 'function') {
      console.log("SUCCESS: Axios functions (like .get) are available.");
  } else {
      console.error("FAILURE: Axios functions are missing.");
      process.exit(1);
  }

} catch (error) {
  console.error("FAILURE: Could not load the 'axios' dependency.");
  console.error(error.message);
  process.exit(1); // Exit with a non-zero code to fail the CI step
}
