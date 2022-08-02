import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, SearchBox, connectStateResults, Configure } from 'react-instantsearch-dom';
import logo from '../../../static/ga-logo.svg';


const Search = (props) => {
        const [searchState, setSearchState ] = useState({});
        const searchClient = algoliasearch('D7QDDWYHIH', 'f9c8f72c8170d5f5b8e659a007b4f8da')

        const Results = connectStateResults(({ searchState, searchResults, children }) => {
            if(searchState && searchState.query && children) {
                return children;
            } else {
                return null;
            }
        });

        
        const Hit = useRef(({ hit }) => {
            const handleClick = () => {
                setSearchState({...searchState, query: ''})
            };
            return (
                <div style={{display: 'flex', flexDirection: 'column' }}>
                    <Link to={hit.url} onClick={handleClick} style={{display: 'flex', alignItems: 'center'}}>
                        <img style={{ height: 25, margin: '0px 5px 0px 0px' }} src={logo} alt={hit.title} />
                        <h6>{hit.title.replace(' | SEIR Flex 09/28/2021 - "Phoenix"', '')}</h6>
                    </Link>
                    <p>{hit.content.slice(0, 125) + ' ...'}</p>
                </div>
            );
        });

    return (
        <InstantSearch
            searchClient={searchClient}
            indexName={'netlify_64cbf0c6-a036-4dd2-a358-c6a29336bb1c_master_all'}
            searchState={searchState}
            onSearchStateChange={setSearchState}
            >
            <SearchBox />
            <Results>
                <Hits 
                    hitComponent={Hit.current}
                />
            </Results>
            <Configure 
                hitsPerPage={3}
            />
        </InstantSearch>
    );
};

export default Search;