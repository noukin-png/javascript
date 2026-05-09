"use strict";

{
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");
  btn.addEventListener("click", () => {
    const results = ['殺す！', '犯す！', 'すみません'];
    const n = Math.floor(Math.random() * results.length);

    result.textContent = results[n];

    
  });
}
