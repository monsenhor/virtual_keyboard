window.getSvgCharacter = function(letter) {
  var o = {
    "1a":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="2" y="10" width="2" height="8" fill="white"></rect>\
<rect x="2" y="16" width="10" height="2" fill="white"></rect>\
<rect x="10" y="10" width="2" height="8" fill="white"></rect>\
</svg>',

    "2a":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="2" y="10" width="2" height="8" fill="white"></rect>\
<rect x="2" y="16" width="10" height="2" fill="white"></rect>\
<rect x="10" y="10" width="2" height="8" fill="white"></rect>\
<rect x="6" y="2" width="2" height="16" fill="white"></rect>\
</svg>',

    "3a":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="2" y="10" width="10" height="2" fill="white"></rect>\
<rect x="10" y="10" width="2" height="8" fill="white"></rect>\
<rect x="2" y="16" width="10" height="2" fill="white"></rect>\
</svg>',

    "4a":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="2" y="10" width="10" height="2" fill="white"></rect>\
<rect x="10" y="10" width="2" height="8" fill="white"></rect>\
<rect x="2" y="16" width="10" height="2" fill="white"></rect>\
<rect x="4" y="2" width="2" height="16" fill="white"></rect>\
</svg>',

    "5a":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="2" y="16" width="10" height="2" fill="white"></rect>\
<rect x="2" y="10" width="2" height="8" fill="white"></rect>\
</svg>',

    "6a":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="2" y="16" width="10" height="2" fill="white"></rect>\
<rect x="2" y="10" width="2" height="8" fill="white"></rect>\
<rect x="10" y="2" width="2" height="16" fill="white"></rect>\
</svg>',

    "7a":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="2" y="16" width="10" height="2" fill="white"></rect>\
<circle cx="5" cy="17" r="3" fill="white"></rect>\
</svg>',

    "8a":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="2" y="16" width="10" height="2" fill="white"></rect>\
<rect x="10" y="2" width="2" height="16" fill="white"></rect>\
<circle cx="5" cy="17" r="3" fill="white"></rect>\
</svg>',

    "9a":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="10" y="16" width="10" height="2" fill="white"></rect>\
<rect x="14" y="10" width="2" height="8" fill="white"></rect>\
<rect x="6" y="10" width="2" height="3" fill="white"></rect>\
<rect x="6" y="15" width="2" height="3" fill="white"></rect>\
<rect x="18" y="10" width="2" height="8" fill="white"></rect>\
</svg>',

    "10a":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="10" y="16" width="10" height="2" fill="white"></rect>\
<rect x="14" y="10" width="2" height="8" fill="white"></rect>\
<rect x="6" y="10" width="2" height="3" fill="white"></rect>\
<rect x="6" y="15" width="2" height="3" fill="white"></rect>\
<rect x="18" y="10" width="2" height="8" fill="white"></rect>\
<rect x="10" y="2" width="2" height="16" fill="white"></rect>\
</svg>',

    "11a":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="10" y="16" width="10" height="2" fill="white"></rect>\
<rect x="10" y="10" width="2" height="8" fill="white"></rect>\
<rect x="18" y="2" width="2" height="16" fill="white"></rect>\
<rect x="2" y="10" width="2" height="8" fill="white"></rect>\
<rect x="6" y="10" width="2" height="8" fill="white"></rect>\
<rect x="2" y="10" width="6" height="2" fill="white"></rect>\
</svg>',

    "12a":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="2" y="10" width="2" height="8" fill="white"></rect>\
<rect x="2" y="16" width="10" height="2" fill="white"></rect>\
<rect x="2" y="10" width="10" height="2" fill="white"></rect>\
<rect x="10" y="10" width="2" height="8" fill="white"></rect>\
</svg>',

    "1b":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="6" y="10" width="2" height="8" fill="white"></rect>\
<rect x="6" y="16" width="10" height="2" fill="white"></rect>\
<rect x="6" y="10" width="10" height="2" fill="white"></rect>\
<rect x="2" y="10" width="2" height="8" fill="white"></rect>\
<rect x="12" y="2" width="2" height="16" fill="white"></rect>\
</svg>',

    "2b":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="12" y="10" width="2" height="8" fill="white"></rect>\
<rect x="12" y="16" width="10" height="2" fill="white"></rect>\
<rect x="12" y="10" width="10" height="2" fill="white"></rect>\
<polygon points="4,18 6,10 8,10 6,18" stroke-width="2" fill="white"></polygon>\
<polygon points="8,18 6,10 8,10 10,18" stroke-width="2" fill="white"></polygon>\
<rect x="18" y="2" width="2" height="16" fill="white"></rect>\
</svg>',

    "3b":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="6" y="10" width="2" height="8" fill="white"></rect>\
<rect x="6" y="16" width="10" height="2" fill="white"></rect>\
<rect x="6" y="10" width="10" height="2" fill="white"></rect>\
<rect x="2" y="10" width="2" height="3" fill="white"></rect>\
<rect x="2" y="15" width="2" height="3" fill="white"></rect>\
</svg>',

    "4b":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="6" y="10" width="2" height="8" fill="white"></rect>\
<rect x="6" y="16" width="10" height="2" fill="white"></rect>\
<rect x="6" y="10" width="10" height="2" fill="white"></rect>\
<rect x="2" y="10" width="2" height="3" fill="white"></rect>\
<rect x="2" y="15" width="2" height="3" fill="white"></rect>\
<rect x="12" y="2" width="2" height="16" fill="white"></rect>\
</svg>',

    "5b":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="6" y="16" width="10" height="2" fill="white"></rect>\
<rect x="6" y="10" width="2" height="8" fill="white"></rect>\
<rect x="2" y="10" width="2" height="3" fill="white"></rect>\
<rect x="2" y="15" width="2" height="3" fill="white"></rect>\
</svg>',

    "6b":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="6" y="16" width="10" height="2" fill="white"></rect>\
<rect x="6" y="10" width="2" height="8" fill="white"></rect>\
<rect x="2" y="10" width="2" height="3" fill="white"></rect>\
<rect x="2" y="15" width="2" height="3" fill="white"></rect>\
<rect x="14" y="2" width="2" height="16" fill="white"></rect>\
</svg>',

    "7b":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="6" y="16" width="10" height="2" fill="white"></rect>\
<rect x="6" y="10" width="2" height="8" fill="white"></rect>\
<rect x="14" y="2" width="2" height="16" fill="white"></rect>\
<rect x="2" y="10" width="2" height="8" fill="white"></rect>\
</svg>',

    "8b":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="12" y="10" width="2" height="8" fill="white"></rect>\
<rect x="12" y="16" width="10" height="2" fill="white"></rect>\
<rect x="20" y="2" width="2" height="16" fill="white"></rect>\
<polygon points="4,18 6,10 8,10 6,18" stroke-width="2" fill="white"></polygon>\
<polygon points="8,18 6,10 8,10 10,18" stroke-width="2" fill="white"></polygon>\
</svg>',

    "9b":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="2" y="14" width="7" height="2" fill="white"></rect>\
<rect x="6" y="16" width="10" height="2" fill="white"></rect>\
<rect x="2" y="14" width="2" height="6" fill="white"></rect>\
<circle cx="9" cy="17" r="3" fill="white"></rect>\
</svg>',

    "10b":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="2" y="14" width="7" height="2" fill="white"></rect>\
<rect x="6" y="16" width="10" height="2" fill="white"></rect>\
<rect x="2" y="14" width="2" height="6" fill="white"></rect>\
<rect x="14" y="2" width="2" height="16" fill="white"></rect>\
<circle cx="9" cy="17" r="3" fill="white"></rect>\
</svg>',

    "11b":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="12" y="10" width="2" height="8" fill="white"></rect>\
<rect x="12" y="16" width="10" height="2" fill="white"></rect>\
<rect x="20" y="2" width="2" height="16" fill="white"></rect>\
<rect x="16" y="10" width="2" height="8" fill="white"></rect>\
<polygon points="4,18 6,10 8,10 6,18" stroke-width="2" fill="white"></polygon>\
<polygon points="8,18 6,10 8,10 10,18" stroke-width="2" fill="white"></polygon>\
</svg>',

    "12b":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="10" y="16" width="10" height="2" fill="white"></rect>\
<rect x="14" y="10" width="2" height="8" fill="white"></rect>\
<rect x="6" y="10" width="2" height="8" fill="white"></rect>\
<rect x="18" y="10" width="2" height="8" fill="white"></rect>\
<rect x="10" y="2" width="2" height="16" fill="white"></rect>\
</svg>',

    "1c":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="2" y="4" width="8" height="2" fill="white"></rect>\
<rect x="2" y="8" width="8" height="2" fill="white"></rect>\
<rect x="2" y="12" width="8" height="2" fill="white"></rect>\
<circle cx="6" cy="17" r="1" fill="white"></circle>\
</svg>',

    "2c":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="2" y="12" width="8" height="2" fill="white"></rect>\
<circle cx="6" cy="17" r="1" fill="white"></circle>\
</svg>',

    "3c":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="2" y="16" width="8" height="2" fill="white"></rect>\
<circle cx="6" cy="13" r="1" fill="white"></circle>\
</svg>',

    "4c":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="2" y="8" width="8" height="2" fill="white"></rect>\
<rect x="2" y="12" width="8" height="2" fill="white"></rect>\
<rect x="2" y="16" width="8" height="2" fill="white"></rect>\
<circle cx="6" cy="5" r="1" fill="white"></circle>\
</svg>',

    "5c":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="8" y="10" width="2" height="4" fill="white"></rect>\
<rect x="2" y="12" width="8" height="2" fill="white"></rect>\
<rect x="2" y="16" width="8" height="2" fill="white"></rect>\
<circle cx="6" cy="5" r="3" fill="white"></circle>\
<circle cx="6" cy="5" r="1" fill="#004134CD"></circle>\
<rect x="5" y="2" width="2" height="3" fill="#004134CD"></rect>\
<rect x="3" y="2" width="2" height="3" fill="white"></rect>\
<rect x="7" y="2" width="2" height="3" fill="white"></rect>\
</svg>',

    "6c":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="2" y="12" width="8" height="2" fill="white"></rect>\
<rect x="2" y="16" width="8" height="2" fill="white"></rect>\
<circle cx="4" cy="7" r="3" fill="white"></circle>\
<circle cx="4" cy="7" r="1" fill="#004134CD"></circle>\
<rect x="3" y="4" width="2" height="3" fill="#004134CD"></rect>\
<rect x="1" y="4" width="2" height="3" fill="white"></rect>\
<rect x="5" y="4" width="2" height="3" fill="white"></rect>\
<circle cx="8" cy="7" r="3" fill="white"></circle>\
<circle cx="8" cy="7" r="1" fill="#004134CD"></circle>\
<rect x="7" y="4" width="2" height="3" fill="#004134CD"></rect>\
<rect x="5" y="4" width="2" height="3" fill="white"></rect>\
<rect x="9" y="4" width="2" height="3" fill="white"></rect>\
</svg>',

    "7c":'<svg width="100%" height="100%" class="centerTheSVG">\
<circle cx="6" cy="15" r="3" fill="white"></circle>\
<circle cx="6" cy="15" r="1" fill="#004134CD"></circle>\
<rect x="5" y="12" width="2" height="3" fill="#004134CD"></rect>\
<rect x="3" y="12" width="2" height="3" fill="white"></rect>\
<rect x="7" y="12" width="2" height="3" fill="white"></rect>\
</svg>',

    "8c":'<svg width="100%" height="100%" class="centerTheSVG">\
<circle cx="6" cy="15" r="3" fill="white"></circle>\
<circle cx="6" cy="15" r="1" fill="#004134CD"></circle>\
<rect x="3" y="14" width="3" height="2" fill="#004134CD"></rect>\
<rect x="3" y="16" width="3" height="2" fill="white"></rect>\
<rect x="3" y="12" width="3" height="2" fill="white"></rect>\
<rect x="2" y="8" width="8" height="2" fill="white"></rect>\
</svg>',

    "9c":'<svg width="100%" height="100%" class="centerTheSVG">\
<rect x="2" y="2" width="8" height="2" fill="white"></rect>\
<rect x="2" y="6" width="8" height="2" fill="white"></rect>\
<rect x="8" y="6" width="2" height="4" fill="white"></rect>\
<circle cx="4" cy="15" r="3" fill="white"></circle>\
<circle cx="4" cy="15" r="1" fill="#004134CD"></circle>\
<rect x="3" y="12" width="2" height="3" fill="#004134CD"></rect>\
<rect x="1" y="12" width="2" height="3" fill="white"></rect>\
<rect x="5" y="12" width="2" height="3" fill="white"></rect>\
<circle cx="8" cy="15" r="3" fill="white"></circle>\
<circle cx="8" cy="15" r="1" fill="#004134CD"></circle>\
<rect x="7" y="12" width="2" height="3" fill="#004134CD"></rect>\
<rect x="5" y="12" width="2" height="3" fill="white"></rect>\
<rect x="9" y="12" width="2" height="3" fill="white"></rect>\
</svg>',

    "10c":'<svg width="100%" height="100%" class="centerTheSVG">\
<circle cx="6" cy="17" r="1" fill="white"></circle>\
</svg>',

    "11c":'<svg width="100%" height="100%" class="centerTheSVG">\
<circle cx="12" cy="10" r="7" fill="white"></circle>\
<polygon points="8,13 12,6 16,13" fill="#004134CD"></polygon>\
</svg>',
  }
  return o[letter];
}



