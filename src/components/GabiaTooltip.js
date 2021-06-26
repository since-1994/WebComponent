class GabiaTooltip extends HTMLElement{
    constructor(){
        super();
        this._render();
    }

    get for() {
        if(this.hasAttribute("for")) {
            return this.getAttribute("for");
        }else {
            return "";
        }
    }

    _render() {
        const target = document.querySelector(`#${this.for}`);
        this.root = this.attachShadow({mode: "open"});
        this.root.innerHTML = `
            <style>
                .tooltip{
                    background-color: grey;
                    color: white;
                    position: fixed;
                    visibility: hidden;
                    left: ${target.getBoundingClientRect().x};
                    top: ${target.getBoundingClientRect().y};
                    padding: 10px;
                }
                .tooltip.visible{
                    visibility: visible;
                }
            </style>
            <span class="tooltip">
                <slot>
                    tool tip
                </slot>
            </span>
        `;
        console.log(target);
        target.addEventListener("mouseover", () => {
            const tooltip = this.shadowRoot.querySelector(".tooltip");
            tooltip.classList.add("visible");
        })
        target.addEventListener("mouseleave", () => {
            const tooltip = this.shadowRoot.querySelector(".tooltip");
            tooltip.classList.remove("visible");
        })
    }  
}

window.customElements.define("gabia-tooltip", GabiaTooltip);