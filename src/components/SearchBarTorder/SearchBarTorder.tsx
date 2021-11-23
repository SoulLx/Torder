import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';

class SearchBarTorder extends React.Component {
    state = {
        search: '',
    };
    
    updateSearch = (search: any) => {
        this.setState({ search });
    };
    
    render() {
        const { search } = this.state;
    
        return (
            <SearchBar                
                placeholder="Pesquisar Restaurante"
                value={search}
                platform={'android'}
                showLoading={true}   
                lightTheme={false} 
                round={false} 
                onChangeText={this.updateSearch}   
            />
        );
    }
}

export default SearchBarTorder


