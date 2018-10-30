import React, { Component } from 'react';
// import moment from 'moment';

class Search extends Component {

    render() {
        return (
          <section>
            <h2>Search your images:</h2>
            <form onSubmit={this.props.submitSearch}>
                <label htmlFor="in-date">Date:</label>
                <input id="in-date" onChange={this.props.handleSearchChange('date')} 
                    value={this.props.imageSearch.date}
                    // value={moment(this.props.imageSearch.date).format('ddd M[/]D, YYYY, h:mm')} 
                    />
                {/* <label htmlFor="in-time">Time:</label>
                <input id="in-time" onChange={this.props.handleSearchChange('time')} 
                    value={this.props.imageSearch.time} /> */}
                <input type="submit" value="Search" /> 
            </form>
          </section>
        );
      }
    }

export default Search;
