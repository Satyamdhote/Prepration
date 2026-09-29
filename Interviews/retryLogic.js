function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function retry(fn, retries, baseDelay = 100) {
  let lastError;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      if (attempt === retries) {
        break;
      }

      await sleep(baseDelay * 2 ** attempt);
    }
  }

  throw lastError;
}

let count = 0;

const result = await retry(async () => {
  count++;

  if (count < 3) {
    throw new Error("Something went wrong");
  }

  return "Success!";
}, 3);

console.log(result);