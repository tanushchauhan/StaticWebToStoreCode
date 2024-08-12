function copyToClipboard() {
  const copyText = document.getElementById("p1").textContent;
  const textArea = document.createElement("textarea");
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  var tooltip = document.getElementById("mbtn");
  tooltip.innerHTML = "Copied!";
}
function copyToClipboard2() {
  const copyText = document.getElementById("p2").textContent;
  const textArea = document.createElement("textarea");
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  var tooltip = document.getElementById("mbtn2");
  tooltip.innerHTML = "Copied!";
}
function copyToClipboard3() {
  const copyText = document.getElementById("p3").textContent;
  const textArea = document.createElement("textarea");
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  var tooltip = document.getElementById("mbtn3");
  tooltip.innerHTML = "Copied!";
}
function copyToClipboard4() {
  const copyText = document.getElementById("p4").textContent;
  const textArea = document.createElement("textarea");
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  var tooltip = document.getElementById("mbtn4");
  tooltip.innerHTML = "Copied!";
}
