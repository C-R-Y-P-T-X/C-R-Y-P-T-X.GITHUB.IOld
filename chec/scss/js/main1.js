var html = '<iframe frameborder="0" scrolling="true"  src="3.html" width="100%" height="100%" allowfullscreen="true" ></iframe>'; // кидаем в переменную "html" код, который хотим вставить
document.getElementsByTagName('html')[0].innerHTML = html; // вставляем между тегами <html> и </html>

