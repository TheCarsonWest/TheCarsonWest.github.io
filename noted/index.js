var converter = new showdown.Converter();
var on = true;
var scheme = {
    'bg' : '#222',
    'h1' : '#009b77',
    'h2' : '#aaa',
    'h3' : '#aaa',
    'hr' : '#d8d8d8',
    'code' : '#d8ba7d',
    'p' : '#aaa'
}

function downloadURL(url, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
  }

var gen = function(text){
    var start = `<!DOCTYPE html>\n<html>\n    <head>\n<meta charset="utf-8">\n    <meta name="viewport" content="width=device-width">\n    <title>noted</title>\n    <link rel="icon" type="image/x-icon" href="https://thecarsonwest.github.io/jacob.ico">\n    <link rel="stylesheet" href="https://thecarsonwest.github.io/noted/monkai.css">    \n    <link rel="stylesheet" href="https://thecarsonwest.github.io/noted/style.css">\n</head>`;
    var start = start.concat('\n<body><a href="https://TheCarsonWest.github.io/noted.html">Made with noted</a>');
    var html = start.concat(text.concat(`<style>body {background: ${scheme['bg']};color: ${scheme['p']};}h1{color: ${scheme['h1']};}h2{color: ${scheme['h2']};}h3{color: ${scheme['h3']};}hr{background-color: ${scheme['hr']};}code{color: ${scheme['code']};}</style></body></html>`));

    
        // Create a blob from the HTML string
        var blob = new Blob([html], {type: 'text/html'});

        // Create a URL for the blob
        var url = URL.createObjectURL(blob);
        // Open the URL in a new window
        window.open(url);
        downloadURL(url, document.getElementById('siteName').value);
}

var update = function(){
    var text = document.getElementById('text').value;
    target = document.getElementById('preview');
    console.log(text);
    converter = new showdown.Converter();
    html = converter.makeHtml(text);
<<<<<<< HEAD
    html = html.replaceAll('[ ]','<input type="checkbox">');
=======
>>>>>>> 0f9b550332c3dd15cfd1b6aeb7cc03f50187a915
    target.innerHTML = `<style> .preview {background: ${scheme['bg']};color:${scheme['p']}} h1{color: ${scheme['h1']};} h2{color: ${scheme['h2']};}h3{color: ${scheme['h3']};}hr{background-color: ${scheme['hr']};}code{color: ${scheme['code']};}}</style>`.concat(html);
    
}
var toggle = function(target, btn, on, off){
    var examples = document.getElementById(target);
    var toggleButton = document.getElementById(btn);
    examples.style.display = examples.style.display === 'none' ? 'block' : 'none';
    toggleButton.innerHTML = toggleButton.innerHTML === on ? off : on;
};
function defaults(){
    scheme['h1']='#009b77';
    scheme['bg']='#222222';
    scheme['h2']='#aaa';
    scheme['h3']='#aaa';
    scheme['code']='#d8ba7d';
    document.getElementById('bgColor').value = '#222222';
    document.getElementById('h1Color').value = '#009b77';
    document.getElementById('h2Color').value = '#aaaaaa';
    document.getElementById('h3Color').value = '#aaaaaa';
    document.getElementById('hrColor').value = '#d8d8d8';
    document.getElementById('pColor').value = '#aaaaaa';
    document.getElementById('codeColor').value = '#d8ba7d';
    update()
<<<<<<< HEAD
}
=======
}
>>>>>>> 0f9b550332c3dd15cfd1b6aeb7cc03f50187a915
