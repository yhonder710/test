// Fundamentos TS - Async/Await

async function fetchMock(url: string): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(`response from ${url}`), 200));
}

async function run() {
  const res = await fetchMock("https://api.local");
  console.log(res);
}

run();
