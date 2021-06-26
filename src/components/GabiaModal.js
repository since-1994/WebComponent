class GabiaModal extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback() {
        this._render();
    }

    get width() {
        if (this.hasAttribute("width")) {
            return this.getAttribute("width");
        }else {
            return 300;
        }
    }

    set visible(val) {
        if(val) {
            this.setAttribute("visible", "");
        }else {
            this.removeAttribute("visible");
        }
    }

    get visible() {
        if (this.hasAttribute("visible")){
            return true;
        }else {
            return false;
        }
    }

    get id() {
        if (this.hasAttribute("id")){
            return this.getAttribute("id");
        }else {
            return 1;
        }
    }

    get for() {
        if (this.hasAttribute("for")){
            return this.getAttribute("for");
        }else {
            return "";
        }
    }

    static get observedAttributes() {return ['visible']; }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === "visible") {
            console.log("visible");
            const wrapper = this.shadowRoot.querySelector(".wrapper");
            if(this.visible) {
                wrapper.classList.add("visible");
            }else {
                wrapper.classList.remove("visible");
            }
        }
    }
    
    _render() {
        console.log("im render");
        this.root = this.attachShadow({mode: 'open'});
        const id = this.id;
        this.root.innerHTML = `
            <style>
              @keyframes fromBottom{ 
                from{
                    transform: translate(-50%, -60%);
                }
                to{
                    transform: translate(-50%, -50%)
                }
              }
              @keyframes fromBottomLong{ 
                from{
                    transform: translate(-50%, -20px);
                }
                to{
                    transform: translate(-50%)
                }
              }
              .${id}.wrapper {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background-color: rgba(0, 0, 0, 0.3);
                visibility: hidden;
              }
              .${id}.wrapper.long{
                overflow-y: scroll;
              }
              .${id}.wrapper.visible{
                visibility: visible;
              }
              .${id}.wrapper .modal{
                position: relative;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: #fff;
                width: ${this.width}px;
                padding: 10px;
                min-height: 300px;
                border-radius: 10px;
                padding: 10px;
              }
              .${id}.wrapper.long .modal{
                  top: 20px;
                  transform: translate(-50%);
              }
              .${id}.wrapper.visible .modal{
                animation: fromBottom .25s ease-in;
              }   
            
              .${id}.wrapper.long.visible .modal{
                animation: fromBottomLong .25s ease-in;
              }

              @media only screen and (max-width: 768px) {
                  .${id}.wrapper .modal{
                    width: 90%;
                  }
              }
            </style>
            <div class="wrapper ${id}">
              <div class="modal">
                <slot>
                    this is content
                </slot>
              </div>
            </div>
        `;

        const wrapper = this.shadowRoot.querySelector(".wrapper");
        const modal = this.shadowRoot.querySelector(".modal");

        if(wrapper.scrollHeight < modal.clientHeight) {
            wrapper.classList.add('long');
        }
    }
}

window.customElements.define("gabia-modal", GabiaModal);