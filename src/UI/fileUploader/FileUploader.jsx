import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ProductService from '../../service/ProductService'

const _product = new ProductService();

class FileUploader extends Component {
    state = {
        file: null
    }
    selectFileHandler = (e) => {
        console.log(e.target.files[0])
        this.setState({
            file: e.target.files[0]
        })
    }
    uploadHandler = () => {
        const data = new FormData();
        data.append('upload_file', this.state.file)
        _product.uploadPic(data).then(res => {
            console.log('upload success',res)
        })
        .catch(e => {
            console.log('upload error',e)
        });
    }
    render() {
        return (
            <div>
                <Form.File.Input onChange={e => this.selectFileHandler(e)}/>
                {
                    this.state.file && 
                    <Button variant="light" onClick={this.uploadHandler}>Upload</Button> 
                }
                
            </div>
        )
    }
}

export default FileUploader;