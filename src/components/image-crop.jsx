import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cropper from 'react-cropper';
import { setCroppedImage } from '../actions';
import { imageCropperSelector } from '../selector';
import PrintPreview from './print-preview.jsx';

class ImageCrop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // crop: {
            //     width: 800,
            //     height: 100
            // }
            startX: 0,
            startY: 0,
            endX: 0,
            endY: 0
        };

        // this.c=document.getElementById("myCanvas");
        // this.ctx=this.c.getContext("2d");

        this.cropImage = this.cropImage.bind(this);
        this.setStart = this.setStart.bind(this);
        this.setEnd = this.setEnd.bind(this);
        this.handleEndClick = this.handleEndClick.bind(this);
        this.handleStartClick = this.handleStartClick.bind(this);
        this.setImage = this.setImage.bind(this);
    }

    handleStartClick(e) {
        console.log('1', e);
        this.setState({
            startX: e.pageX,
            startY: e.pageY
        });
    }

    handleEndClick(e) {
        console.log('2', e);
        this.setState({
            endX: e.pageX,
            endY: e.pageY
        });
    }


    setStart(e) {
      this.setState({ imageSrc: this.props.imageSrc});

        this.originalImg.removeEventListener('click', this.handleEndClick);
        this.originalImg.addEventListener('click', this.handleStartClick);
    }

    setEnd(e) {
        this.originalImg.removeEventListener('click', this.handleStartClick);
        this.originalImg.addEventListener('click', this.handleEndClick);
    }

    cropCrop() {
        const { startX, startY, endX, endY } = this.state;

        const maxWidth = endX - startX;
        const maxHeight = endY - startY;

        const width = maxWidth > 800 ? 800 : maxWidth;
        const height = maxHeight > 100 ? 100 : maxHeight;
        console.log(width, height);

        const croppedImage = new Image();
        croppedImage.src = this.state.imageSrc;
        // document.getElementById('image-container').appendChild(this.croppedImage);

        const c = document.getElementById("myCanvas");
        const ctx = c.getContext("2d");
        console.log(ctx, this.state.imageSrc, this.croppedImage, this.originalImg, startX, startY, width, height, 0, 0, width, height);

        // ctx.drawImage(this.croppedImage, 0, 0);
        // const imageData = this.ctx.getImageData(startX, startY, endX, endY);
        ctx.drawImage(croppedImage, startX, startY, width, height, 0, 0, width, height);
        croppedImage.src = this.state.imageSrc;

        // this.ctx.putImageData(imageData, startX, startY);
        // console.log(imageData);
        // this.props.setCroppedImage(imageData);
    }

    setImage() {
      this.setState({ imageSrc: this.props.imageSrc});
      // this.croppedImage = new Image(900, 400);
      // this.croppedImage.src = this.props.imageSrc;
      // const c = document.getElementById("myCanvas");
      // this.ctx = c.getContext("2d");
      // this.ctx.drawImage(this.croppedImage, 0, 0);
    }

    cropImage() {
        //  const croppedCanvas = this.cropper.getCroppedCanvas({
        //      width: 800,
        //      height: 100,
        //      maxWidth: 800,
        //      maxHeight: 100
        //  });
         //
        //  if (typeof croppedCanvas === 'undefined') {
        //      return;
        //  }
         //
        //  const croppedImage = croppedCanvas.toDataURL();
         //
        //  this.props.setCroppedImage(croppedImage);
        this.cropCrop();
    }

    getCropBoxData() {
        return {
            width: 800,
            height: 100
        }
    }

    render() {
        const { imageSrc, crop } = this.props;
        const { cropBoxData } = this.state;
        const isData = imageSrc || crop;
        // this.cropCrop();
        console.log('state', this.state);

        return (
          <div>
            <button onClick={this.setStart}>Set Start</button>
            <button onClick={this.setEnd}>Set End</button>
              <p>Original image:</p>
              <div style={{maxWidth: '100%', maxHeight: 400, overflow: 'auto'}}>
                  <img src={imageSrc} ref={img => {this.originalImg = img;}} alt="Original Image" />
              </div>

              Cropped image:
              <canvas id="myCanvas" ref={img => {this.originalImgCtx = img;}} width="900" height="400" style={{border:'1px solid #d3d3d3'}} />


              {
                  isData &&
                      <div>
                          <div className="controls">
                              <button onClick={this.cropImage}>
                                  Crop
                              </button>
                              <PrintPreview crop={crop} disabled={!crop}/>
                          </div>
                      </div>
              }
              <div className="img-preview" style={{ width: '50%', height: 300 }} />
        </div>
        );
    }
}

export default connect(imageCropperSelector, {
    setCroppedImage
})(ImageCrop);
