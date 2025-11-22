const container = document.querySelector('.container');
function showKeys(e) {
  container.innerHTML = '';
  const keyCodes = {
    'e.key': e.key == ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code,
  };
  for (const key in keyCodes) {
    console.log(keyCodes[key]);

    const div = document.createElement('div');
    div.className = 'key';
    const small = document.createElement('small');
    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    container.appendChild(div);
  }
}

window.addEventListener('keydown', showKeys);
