var converter = new showdown.Converter();
var on = true;

var gen = function(text){
    console.log(converter.makeHtml(text));
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