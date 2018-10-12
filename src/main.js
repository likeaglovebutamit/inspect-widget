import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import style from 'style.css'

class InspectWidget extends Component {

    componentDidMount() {
      
      const documentViewer = document.querySelector("#documentViewer");
      const doc = document.querySelector("#document");

      documentViewer.addEventListener("touchstart", (e) => {
        
        this.x0 = e.touches[0].screenX;
        this.y0 = e.touches[0].screenY;
        
        documentViewer.style.transform = "scale(4)"
        documentViewer.style.transition = "transform .25s linear";
        doc.style.transform = "translate3d(-50%, -50%, 0)";
        doc.style.transition = "transform .25s linear";
        
      });
      
      documentViewer.addEventListener("touchend", (e) => {
        
        doc.style.transform = "translate3d(-50%, -50%, 0)";
        doc.style.transition = "transform .25s linear";
        documentViewer.style.transform = "scale(1)"
        documentViewer.style.transition = "transform .25s linear";

      });
      
      documentViewer.addEventListener("touchmove", (e) => {
        
        this.x = e.touches[0].screenX;
        this.y = e.touches[0].screenY;
        
        this.dx = this.x0 - this.x;
        this.dy = this.y0 - this.y;

        doc.style.transform = "translate3d(-50%, -50%, 0) translate3d("+this.dx+"px,"+this.dy+"px, 0)";
        
      });
    }

    render() {
      return (
        <div class={style.documentViewer}>
          <div class={style.document}></div>
        </div>
      )
    }
}

window.onload = () => {
    var mountPoint = document.createElement("div");
    document.body.appendChild(mountPoint);
    ReactDOM.render(<InspectWidget/>, mountPoint);
}