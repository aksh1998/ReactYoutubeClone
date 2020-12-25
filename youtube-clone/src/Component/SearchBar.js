import React from 'react';
import { TextField, Paper } from '@material-ui/core';
class SearchBar extends React.Component {
    state = {
        searchText: '',
    }
    handleChange = (event) => this.setState({ searchText: event.target.value });

    handleSubmit = (event) => {
        const { searchText } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchText);
        event.preventDefault();
    }
    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange} />
                </form>
            </Paper>
        );
    }
}

export default SearchBar;