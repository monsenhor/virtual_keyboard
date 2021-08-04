const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        // Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
            "1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12a",
            "1b", "2b", "3b", "4b", "5b", "6b", "7b", "8b", "9b", "10b", "11b", "12b",
            "1c", "2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "10c", "11c",
            "space"
        ];
  
// Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["0", "12a", "12b", "11c"].indexOf(key) !== -1;
            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "11c":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = getSvgCharacter("11c");                   
                    keyElement.addEventListener("click", () => {
                    var textEditorForKeyBoard = document.getElementById("idOutPutFromKeyboard");
                    if (textEditorForKeyBoard.lastChild) {
                        textEditorForKeyBoard.removeChild(textEditorForKeyBoard.lastChild);
                        }
                    });
                    
                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("");
                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;
               
                default:                  
                   var svgCode;
                  
                   svgCode = getSvgCharacter(key);
                  
                   if (svgCode) {
                      keyElement.innerHTML = svgCode;
                      keyElement.addEventListener("click", function() {keyBoardWuzClkt(this,key)});
                   break;
                }

                   keyElement.textContent = key.toLowerCase();

                   keyElement.addEventListener("click", () => {
                       var textEditorForKeyBoard = document.getElementById("idOutPutFromKeyboard");                                            
                       var node = document.createElement("SPAN"); // Create a <span> node
                       var h = '<span style="color:white;padding-right:8px;">' + key + '</span>';
                     
                       node.innerHTML = h; 
                       textEditorForKeyBoard.appendChild(node);
                   });

                       break;
            }                  
                  
            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
    }
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});

