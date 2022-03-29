/* eslint-disable complexity */
import React from "react";
import {
    Form,
} from "semantic-ui-react";
import MaskedInput from "react-text-mask";

function registerFields( register ) {
    /* Personal information */
    register( { name: "firstName" }, {
        required: {
            value: true,
            message: "You must enter your first name.",
        },
    } );
    register( { name: "lastName" }, {
        required: {
            value: true,
            message: "You must enter your last name.",
        },
    } );
    register( { name: "email" }, {
        required: {
            value: true,
            message: "You must enter your e-mail address.",
        },

        pattern: {
            value: /^\w+([\\.-]?\w+)+@\w+([\\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/,
            message: "You must enter a valid e-mail address.",
        },
    } );
    register( { name: "birthDate" }, {
        required: {
            value: true,
            message: "You must enter your birth date.",
        },
    } );
    register( { name: "country" }, {
        required: {
            value: true,
            message: "You must enter your country of residence.",
        },
    } );
    register( { name: "phoneNumber" }, {
        required: {
            value: true,
            message: "You must enter your phone number.",
        },
        pattern: {
            value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
            message: "You must enter a valid phone number.",
        },
    } );

    /* Address */
    register( { name: "streetName" }, {
        required: {
            value: true,
            message: "You must enter your street name.",
        },
    } );
    register( { name: "houseNumber" }, {
        required: {
            value: true,
            message: "You must enter your house number.",
        },
    } );
    register( { name: "residence" }, {
        required: {
            value: true,
            message: "You must enter your residence.",
        },
    } );
    register( { name: "province" }, {
        required: {
            value: true,
            message: "You must enter your province.",
        },
    } );
    register( { name: "postalCode" }, {
        required: {
            value: true,
            message: "You must enter your postal code.",
        },
    } );
}
function getPersonalInformationFields( onChange, errors ) {
    return (
        <div>
            <Form.Group widths="equal">
                <Form.Input
                    placeholder="First name"
                    label="First name"
                    name="firstName"

                    error={ errors.firstName && errors.firstName.message }
                    onChange={ onChange }
                />
                <Form.Input
                    placeholder="Last name"
                    label="Last name"
                    name="lastName"
                    error={ errors.lastName && errors.lastName.message }
                    onChange={ onChange }
                />

            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input
                    placeholder="E-mail"
                    label="E-mail"
                    name="email"
                    error={ errors.email && errors.email.message }
                    onChange={ onChange }
                />
                <Form.Input
                    placeholder="DD/MM/YYYY"
                    label="Date of birth"
                    error={ errors.birthDate && errors.birthDate.message }
                >
                    <MaskedInput
                        mask={ [ /\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/ ] }
                        placeholder="DD/MM/YYYY"
                        onChange={ e => onChange( e, { name: "birthDate", value: e.currentTarget.value } ) }
                    />
                </Form.Input>

            </Form.Group>
            <Form.Group widths="equal">
                <Form.Select
                    placeholder="Country"
                    label="Country"
                    options={ [
                        {
                            key: "BE", text: "Belgium", value: "BE",
                        },
                        {
                            key: "NL", text: "the Netherlands", value: "NL",
                        } ] }
                    name="country"
                    defaultValue="BE"
                    error={ errors.country && errors.country.message }
                    onChange={ onChange }
                />

                <Form.Input
                    placeholder="Telephone number"
                    label="Telephone number"
                    name="phoneNumber"
                    error={ errors.phoneNumber && errors.phoneNumber.message }

                >
                    <MaskedInput
                        mask={ [ "+", /[1-9]/, /\d/, " ", /\d/, " ", /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/ ] }
                        placeholder="+31 6 00001234"
                        onChange={ e => onChange( e, { name: "phoneNumber", value: e.currentTarget.value } ) }

                    />
                </Form.Input>

            </Form.Group>
        </div>
    );
}
function getAddressFields( onChange, errors ) {
    return (
        <div>
            <Form.Group widths="equal">
                <Form.Input
                    placeholder="Street name"
                    label="Street name"
                    name="streetName"

                    error={ errors.streetName && errors.streetName.message }
                    onChange={ onChange }
                />
                <Form.Input
                    placeholder="House number"
                    label="House number"
                    name="houseNumber"
                    error={ errors.houseNumber && errors.houseNumber.message }
                    onChange={ onChange }
                />

            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input
                    placeholder="Residence"
                    label="Residence"
                    name="residence"

                    error={ errors.residence && errors.residence.message }
                    onChange={ onChange }
                />
                <Form.Input
                    placeholder="Province"
                    label="Province"
                    name="province"
                    error={ errors.province && errors.province.message }
                    onChange={ onChange }
                />

            </Form.Group>
            <Form.Group>
                <Form.Input
                    placeholder="Postal code"
                    label="Postal code"
                    name="postalCode"
                    width={ 8 }
                    error={ errors.postalCode && errors.postalCode.message }
                    onChange={ onChange }
                />

            </Form.Group>
        </div>
    );
}
export default {
    registerFields, getPersonalInformationFields, getAddressFields,
};
