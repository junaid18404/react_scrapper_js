import * as React from "react";
import newsServices from "../services/newsServices";

export default class Scrapper extends React.Component {
    state = {
        showTable: false,
        tableData: []
    };

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button className='btn btn-success' onClick={this.fetchData}>Fetch data</button>
                {this.state.showTable && this.renderTable()}
            </div>
        );
    }

    fetchData = async () => {
        this.formatData(await new newsServices().getNewsData());
    };

    formatData = (data) => {
        const allPostsRawData = data['data']['data']['children'];
        const allPostsData = allPostsRawData.map((postRawData) => {
            return {
                title: postRawData.data.title,
                url: postRawData.data.url,
                author: postRawData.data.author,
            }
        });
        this.setState({
            tableData: allPostsData,
            showTable: true
        });
    };

    renderTable() {
        return (
            <table className='table table-bordered'>
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Author</th>
                    <th>Url</th>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>
                {this.state.tableData.map( (item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.author}</td>
                        <td>{item.url}</td>
                        <td>{item.title}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}