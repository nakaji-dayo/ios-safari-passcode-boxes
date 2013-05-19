window.addEventListener('load', function() {
    var words = [];
    for(var i=0; i < 4; i++) {
        words[i]  = document.getElementById('p'+i);
    }
    var dummy = document.getElementById('dummy');
    var dummyDiv = document.getElementById('dummyDiv');
    words.forEach(function(word) {
        word.addEventListener('click', function(e) {
            dummy.focus();
        });
    });
        dummy.addEventListener('keypress', function(e) {
            if (dummy.value.length >= 4 || !String.fromCharCode(e.keyCode).match(/[0-9\.]/)) {
                e.preventDefault();
            }
        });

    dummy.addEventListener('keyup', function(e) {
        console.log(dummy.value);
        var len = dummy.value.length;

        for(var i=0; i<4; i++) {
            if(len <= i) {
                words[i].value = '';
            } else {
                words[i].value = dummy.value[i];
            }
        }
        if (len>=4) {
            return;
        }
        dummyDiv.style.position = 'absolute';
        var rect = words[len].getBoundingClientRect();
        dummyDiv.style.left = rect.left+'px';
        dummyDiv.style.top = (rect.top+15)+'px';
    });
});