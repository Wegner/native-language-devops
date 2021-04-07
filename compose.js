let xhr = new XMLHttpRequest();
xhr.open('./story/sample.md');
xhr.addEventListener('readystatechange', e => console.log(e));
xhr.send(null);