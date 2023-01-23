var converter = new showdown.Converter();
var on = true;

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
    var start = '<!DOCTYPE html>\n<html>\n    <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width">\n    <title>noted</title>\n    <style></style>\n    <link rel="icon" type="image/x-icon" href="https://thecarsonwest.github.io/jacob.ico">\n    <link rel="stylesheet" href="https://thecarsonwest.github.io/noted/monkai.css">    \n    <link rel="stylesheet" href="https://thecarsonwest.github.io/noted/style.css">\n</head>\n<body><a href="../noted.html">Made with noted</a>';
    var html = start.concat(text.concat('</body></html>'));

    
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