import React from "react";
import '../../styles/bootstrap.min.css';
import Book from "./Book";

class AddForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],

            title: "",
            author: "",
            year: ""

        }
        this.titleHandler = this.titleHandler.bind(this);
        this.authorHandler = this.authorHandler.bind(this);
        this.yearHandler = this.yearHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    titleHandler(e) {
        this.setState({ title: e.target.value })
    }

    authorHandler(e) {
        this.setState({ author: e.target.value })
    }

    yearHandler(e) {
        this.setState({ year: e.target.value })
    }

    submitHandler(e) {
        e.preventDefault();
        let { title, author, year } = this.state;

        let newBook
        if (title && author && year) {
            newBook = {
                id: this.state.books.length + 1,
                title,
                author,
                year
            }



            this.setState({ books: [...this.state.books, newBook] })

            this.setState({
                title: '',
                author: '',
                year: '',
            })

        }
    }


    render() {
        return (
            <div>
                <form id="book-form" autoComplete="off" onSubmit={this.submitHandler}>
                    <div className="formgroup">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" className="form-control" value={this.state.title} onChange={this.titleHandler} />
                    </div>
                    <div className="formgroup">
                        <label htmlFor="Author">Author</label>
                        <input type="text" id="Author" className="form-control" value={this.state.author} onChange={this.authorHandler} />
                    </div>
                    <div className="formgroup">
                        <label htmlFor="Year">Year</label>
                        <input type="text" id="Year" className="form-control" value={this.state.year} onChange={this.yearHandler} />
                    </div>
                    <input type="submit" value="Add Book" className="btn  btn-block btn-warning add-btn mt-4 mb-3" style={{width:'100%',height:40,fontSize:18,fontWeight:'bold'}}/>
                </form>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody id="book-list">
                        {this.state.books.map(x => (
                            <Book key={x.id}  {...x} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AddForm;