import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext;
    render() { 
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
        <div className="bookList" style={{ color: theme.txtColor, background: theme.bg }}>
            <ul> 
                <li style={{ background: theme.ui }}>Red Rising</li>
                <li style={{ background: theme.ui }}>Dune</li>
                <li style={{ background: theme.ui }}>Ender's Game</li>
            </ul>
        </div>
        );
    }
}

export default BookList;