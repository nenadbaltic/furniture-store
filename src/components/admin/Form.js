import React from 'react';
import { storage } from '../../firebase/firebase';

class Form extends React.Component {
    state = {
        title: '',
        price: '',
        description: '',
        image: null,
        url: '',
        ready: false,
        error: undefined
    }
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => {
            return {
                title: title
            }
        });
    }
    onPriceChange = (e) => {
        const price = e.target.value;
        this.setState(() => {
            return {
                price: price
            }
        });
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => {
            return {
                description: description
            }
        });
    }
    handleChange = (e) => {
        if(e.target.files[0]) {
            const file = e.target.files[0] 

            this.setState(() => {
                return {
                    image: file 
                }
            })
        }
    }
    handleUpload = (e) => {
        e.preventDefault();
        const image = this.state.image;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progres
            },
            (error) => {
                // error
                console.log(error)
            },
            () => {
                // complete
                storage.ref('images').child(image.name).getDownloadURL().then((url) => {
                    console.log(url);
                    this.setState(() => {
                        return {
                            url: url
                        }
                    })
                })
            }

        );
        setTimeout(() => {
            this.setState(() => {
                return {
                    ready: true
                }
            })
        }, 3000)   
    }

    onSubmit = (e) => {
        e.preventDefault();
            if(!this.state.title || !this.state.price || !this.state.description || !this.state.image) {
                this.setState(() => { return { error: 'Please fill the fields correctly!' } });
            }
            else {
                this.setState(() => { return { error: undefined } })
    
                this.props.onSubmit({
                    title: this.state.title,
                    price: this.state.price,
                    description: this.state.description,
                    image: this.state.url
                })
            }
    }

    render() {
        return (
            <form>
                {this.state.error && <p className="error">{this.state.error}</p>}
				<h3>Add Product</h3>
                <ul>
                    <li>
                        <label>Product Image</label>
                        <input type="file" name="product_image" onChange={this.handleChange} /><br />
                        <button className="upload" onClick={this.handleUpload} disabled={!(this.state.image)}>Upload</button>
                    </li>
					<li>
						<label>Product Title</label>
						<input type="text" name="product_title" value={this.state.title} onChange={this.onTitleChange} />
					</li>
					<li>
						<label>Product Price</label>
						<input type="text" name="product_price" value={this.state.price} onChange={this.onPriceChange} />
					</li>
					<li>
						<label>Product Description</label>
						<textarea name="product_description" value={this.state.description} onChange={this.onDescriptionChange}></textarea>
                    </li>
					<li>
						<button onClick={this.onSubmit} className="submit" name="add_product" disabled={!(this.state.ready)}>Add Product</button>
					</li>
				</ul>
			</form>
        );
    }
}

export default Form;