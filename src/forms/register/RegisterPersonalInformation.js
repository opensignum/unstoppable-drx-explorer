/* eslint-disable no-unused-vars */
/* eslint-disable complexity */
/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from "react";
import {
    Button, Icon, Form, SegmentGroup, Segment,
} from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { func } from "prop-types";
import Belgium from "./Belgium";

function RegisterPersonalInformationForm( { onSubmit } ) {
    const {
        register, errors, handleSubmit, setValue, trigger,
    } = useForm();

    const [ country, setCountry ] = useState( "BE" );
    setValue( "country", country );

    // Default
    useEffect( () => {
        switch ( country ) {
            case "BE":
                Belgium.registerFields( register );
                break;
            default:
                break;
        }
    }, [ country ] );

    const onChange = ( e, { name, value } ) => {
        setValue( name, value );
        console.log( `setting: ${ name } to ${ value }` );
        trigger( name );

        if ( name === "country" ) {
            setCountry( value );
        }
    };
    return (
        <Form
            onSubmit={ handleSubmit( onSubmit ) }
        >
            <SegmentGroup>
                <Segment>Personal information</Segment>
                <Segment>
                    {{
                        BE: Belgium.getPersonalInformationFields( onChange, errors ),
                    }[ country ]}

                </Segment>
            </SegmentGroup>

            <SegmentGroup>
                <Segment>Address</Segment>
                <Segment>

                    {{
                        BE: Belgium.getAddressFields( onChange, errors ),
                    }[ country ]}
                    <Button
                        className="purple-button"
                        icon
                        labelPosition="right"
                        type="submit"
                    >
      Next
                        <Icon name="right arrow" />
                    </Button>
                </Segment>
            </SegmentGroup>
        </Form>
    );
}
RegisterPersonalInformationForm.propTypes = {
    onSubmit: func.isRequired,
};
RegisterPersonalInformationForm.defaultProps = {
};
export default RegisterPersonalInformationForm;
