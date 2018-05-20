import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uploadImage } from '../actions';

class ImageUploader extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onReaderLoad = this.onReaderLoad.bind(this);

        this.reader = new FileReader();
        this.reader.onload = this.onReaderLoad;
    }

    onReaderLoad(e) {
        this.props.uploadImage(e.target.result);
    }

    onChange(event) {
        const imageType = /^image\//;
        const file = event.target.files.item(0);
        const MB = 1000000;

        if (!file || !imageType.test(file.type) || file.size > MB) {
            return;
        }

        this.reader.readAsDataURL(file);
    }

    render() {
        return (
            <div className="file-picker-container">
                <h3>Please, upload an image you'd like to crop</h3>
                <input
                    id="file-picker"
                    type="file"
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default connect(null, {
    uploadImage
})(ImageUploader);
