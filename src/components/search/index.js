import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, SearchBox, connectStateResults, Configure, Highlight } from 'react-instantsearch-dom';
import logo from '../../../static/ga-logo.svg';


const Search = (props) => {
        const [searchState, setSearchState ] = useState({});
        const searchClient = algoliasearch('AW46ICEW1Y', '41979fdbbd9692353d4ce6447eb71555')

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
                        <Highlight hit={hit} attribute='title' />
                    </Link>
                    <p>{hit.content.slice(0, 125) + ' ...'}</p>
                </div>
            );
        });

    return (
        <InstantSearch
            searchClient={searchClient}
            indexName={'netlify_3fc516c0-475d-4e1d-86e2-ae1f751ad654_master_all'}
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