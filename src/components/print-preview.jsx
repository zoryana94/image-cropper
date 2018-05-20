import React, { Component } from 'react';

class PrintPreview extends Component {
    constructor(props) {
        super(props);

        this.previewImage = this.previewImage.bind(this);
    }

    getPagetoPrint() {
        const { crop } = this.props;

        return `
            <html>
                <head>
                    <meta charset="utf-8" />
                    <title>Preview Print</title>
                    <script>
                        function printImage() {
                            setTimeout(() => {
                                window.print();
                                window.close();
                            }, 1000);
                        }
                    </script>
                </head>
                <body onload='printImage();'>
                    <div>
                        <img style="display: block; margin: 0 auto;" src=`
                          + crop + ` alt="cropped image" />
                    </div>
                </body>
            </html>
        `;
    }

    previewImage() {
        const pagelink = 'about:blank';
        const page = window.open(pagelink, '_new');
        const content = this.getPagetoPrint();

        page.document.open();
        page.document.write(content);
        page.document.close();
    }

    render() {
        const { disabled } = this.props;

        return (
            <button onClick={this.previewImage} disabled={disabled}>Print Preview</button>
        );
    }
}

export default PrintPreview;
