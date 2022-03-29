/* eslint-disable react/prefer-stateless-function */
/* eslint-disable complexity */
/* eslint-disable no-nested-ternary */
import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
    Menu, Container, Search,
} from "semantic-ui-react";
import logo from "assets/svg/logo.svg";
import circles from "assets/svg/graphic.svg";
import { actions } from "./duck";

class PageHome extends React.Component {
    render() {
        const {
            SearchISRC,
            recordings,
        } = this.props;

        return (
            <div>
                <div className="white-box" />
                <Container>

                    <div className="circles-box">
                        <img src={ circles } style={ { width: "100%" } } alt="circles" />
                    </div>

                    <div className="page">
                        <Menu secondary>
                            <Menu.Item>
                                <img src={ logo } style={ { width: "120px" } } alt="logo" />
                            </Menu.Item>
                            <Menu.Menu position="right">
                                <Menu.Item
                                    name="gateway"
                                    active
                                    onClick={ () => {} }
                                />

                            </Menu.Menu>
                        </Menu>
                        <div id="search-box">
                            <Search
                                input={ { fluid: true } }
                                fluid
                                placeholder="Enter ISRC"
                                onSearchChange={ ( event, data ) => SearchISRC( { isrc: data.value } ) }
                                results={ recordings.map( r => ( {
                                    title: `${ r.creditedArtist } - ${ r.title }`,
                                    description: r.additionalArtists.map( a => a.artist.name ).join( ", " ),
                                } ) ) }
                            />

                        </div>
                    </div>

                </Container>
            </div>
        );
    }
}

const mSTP = ( {
    home: {
        recordings,
    },
} ) => ( {
    recordings,
} );

const mDTP = dispatch => ( {
    SearchISRC: values => dispatch( actions.searchISRC( values ) ),
} );

export default connect( mSTP, mDTP )( withRouter( PageHome ) );
