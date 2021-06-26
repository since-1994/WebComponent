class GabiaButton extends HTMLElement{
    constructor() {
        super();
        this._render();
    }

    get backgroundcolor() {
        if(this.hasAttribute("backgroundcolor")){
            return this.getAttribute("backgroundcolor");
        }else {
            return "blue";
        }
    }
    
    _render(){
        this.root = this.attachShadow({mode: "open"});
        this.root.innerHTML = `
            <style>
                button{
                    background-color: ${this.backgroundcolor};
                    color: white;
                    border: none;
                    border-radius: 5px;
                    padding: 5px;
                }
            </style>
            <button>
                <slot>
                    버튼
                </slot>
            </button>
        `
    }
}

window.customElements.define("gabia-button", GabiaButton);