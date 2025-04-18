async function generateOutput() {
  const jobDesc = document.getElementById('job-desc').value;
  const linkedin = document.getElementById('linkedin-url').value;

  const res = await fetch('/api/customizer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      resume: 'Sample resume here or user input later',
      jobDescription: jobDesc,
      linkedin: linkedin
    })
  });

  const data = await res.json();
  document.getElementById('output-box').innerText = data.result;
}

