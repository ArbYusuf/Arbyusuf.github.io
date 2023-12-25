const form = document.querySelector('form');
const input = document.querySelector('input');
if(form) {
form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://%27/) || url.startsWith('http://%27%29%29/) url = 'http://' + url;
        window.location.href = uv$config.prefix + __uv$config.encodeUrl(url);
    });
});
}
function isUrl(val = "") {
  if (
    /^http(s?):///.test(val) ||
    (val.includes(".") && val.substr(0, 1) !== " ")
  )
    return true;
  return false;
}