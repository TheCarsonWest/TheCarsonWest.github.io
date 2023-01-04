var converter = new showdown.Converter();
var on = true;

var gen = function(text){
    var start = '<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width">\n<title>noted</title>\n<link href="./style.css" rel="stylesheet" type="text/css" />\n<link rel="icon" type="image/x-icon" href="https://thecarsonwest.github.io/jacob.ico">\n<script type="text/javascript" src="https://unpkg.com/showdown/dist/showdown.min.js"></script>\n<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/monokai-sublime.min.css">\n<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>\n<script>hljs.highlightAll();</script>\n<script src="index.js"></script>\n<link rel="stylesheet" href="./style.css">\n</head>\n<body><a href="../noted.html">Made with noted</a>'
    var html = start.concat(converter.makeHtml(text)).concat('</body></html>')

    
        // Create a blob from the HTML string
        var blob = new Blob([html], {type: 'text/html'});
        
        // Create a URL for the blob
        var url = URL.createObjectURL(blob);
        
        // Open the URL in a new window
        window.open(url);
}

var update = function(){
    var text = document.getElementById('text').value,
    target = document.getElementById('preview'),
    converter = new showdown.Converter(),
    html = converter.makeHtml(text);
    target.innerHTML = html;
    
}
var toggle = function(target, btn, on, off){
    var examples = document.getElementById(target);
    var toggleButton = document.getElementById(btn);
    examples.style.display = examples.style.display === 'none' ? 'block' : 'none';
    toggleButton.innerHTML = toggleButton.innerHTML === on ? off : on;
};