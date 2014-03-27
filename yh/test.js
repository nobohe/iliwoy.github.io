var iframe = document.createElement('iframe');

function check() {
    alert('check: ' + iframe.getAttribute('src'));
}

iframe.src = 'https://iliwoy.github.io/yh/test.html';
document.body.appendChild(iframe);

setTimeout(check, 2000);
