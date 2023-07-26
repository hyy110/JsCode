async function fetchData(url, method, headers, body) {
  try {
    const response = await fetch(url, method, headers, body);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error:", err);
  }
}

fetchData("http://baidu.com/", "Get");
