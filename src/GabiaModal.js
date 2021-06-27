class GabiaModal {
  constructor(options) {
    console.log(options);
    this.id = options.id;
    this.width = options.width;
    this._render();
  }

  open() {
    const wrapper = document.querySelector(`#${this.id}`);
    wrapper.classList.add("visible");
  }

  _render() {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
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
        .wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.3);
          visibility: hidden;
        }
        .wrapper.long{
          overflow-y: scroll;
        }
        .wrapper.visible{
          visibility: visible;
        }
        .wrapper .modal{
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
        .wrapper.long .modal{
            top: 20px;
            transform: translate(-50%);
        }
        .wrapper.visible .modal{
          animation: fromBottom .25s ease-in;
        }   
      
        .wrapper.long.visible .modal{
          animation: fromBottomLong .25s ease-in;
        }
  
        @media only screen and (max-width: 768px) {
            .wrapper .modal{
              width: 90%;
            }
        }
      </style>
      <div class="modal">
      </div>
        `;
    const modal = wrapper.querySelector(".modal");
    modal.appendChild(document.querySelector(`#${this.id}`));
  }
}
