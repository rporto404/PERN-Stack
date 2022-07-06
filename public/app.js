class App extends React.Component {
    state = {
        products:[]
    }

    componentDidMount = () => {
        axios.get('/products').then(
            (response) => {
                this.setState({
                    products:response.data
                })
            }
        )
    }

    createProduct = (event) => {
        event.preventDefault();
        axios.post(
            '/products',
            {
                name:this.state.newProductName,
                category:this.state.newProductCategory,
                price:this.state.newProductPrice,
            }
        ).then(
            (response) => {
                this.setState({
                    products:response.data
                })
            }
        )
    }

    changeNewProductPrice = (event) => {
        this.setState({
            newProductPrice:event.target.value
        });
    }

    changeNewProductCategory = (event) => {
        this.setState({
            newProductCategory:event.target.value
        });
    }

    changeNewProductName = (event) => {
        this.setState({
            newProductName:event.target.value
        });
    }

    deleteProduct = (event) => {
        axios.delete('/products/' + event.target.value).then(
            (response) => {
                this.setState({
                    products:response.data
                })
            }
        )

    }

    updateProduct = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/products/' + id,
            {
                name:this.state.updateProductName,
                category:this.state.updateProductCategory,
                price:this.state.updateProductPrice,
            }
        ).then(
            (response) => {
                this.setState({
                    products:response.data,
                    name:'',
                    category:'',
                    price:null,
                })
            }
        )
    }

    changeUpdateProductName = (event) => {
        this.setState(
            {
                updateProductName:event.target.value
            }
        )
    }

    changeUpdateProductCategory = (event) => {
        this.setState(
            {
                updateProductCategory:event.target.value
            }
        )
    }

    changeUpdateProductPrice = (event) => {
        this.setState(
            {
                updateProductPrice:event.target.value
            }
        )
    }

    render = () => {
        return <div>
            <h2>Add An Exciting New Product to Our Lineup</h2>
            <form id='add' onSubmit={this.createProduct}>
                <input onKeyUp={this.changeNewProductName} type="text" placeholder="name" /><br/>
                <input onKeyUp={this.changeNewProductCategory} type="text" placeholder="category" /><br/>
                <input onKeyUp={this.changeNewProductPrice} type="number" placeholder="price" /><br/>
                <input type="submit" value="Create Product" />
            </form>
            <h2>Browse Our Catalogue of Products</h2>
            <ul>
                {
                    this.state.products.map(
                        (product, index) => {
                            return <li key={index}>

                                {product.name}: ${product.price}<br/>
                                Category: {product.category}<br/>

                                <button value={product.id} onClick={this.deleteProduct}>DELETE</button>

                                <form id={product.id} onSubmit={this.updateProduct}>
                                    <input onKeyUp={this.changeUpdateProductName} type="text" placeholder="name"/><br/>
                                    <input onKeyUp={this.changeUpdateProductCategory} type="text" placeholder="category"/><br/>
                                    <input onKeyUp={this.changeUpdateProductPrice} type="number" placeholder="price"/><br/>
                                    <input type="submit" value="Update Product"/>
                                </form>
                            </li>
                        }
                    )
                }
            </ul>
        </div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
