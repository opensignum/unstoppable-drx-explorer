import moment from "moment";

// eslint-disable-next-line
const _isEmpty = value => !( value !== null && value !== undefined ) || value === "";

// eslint-disable-next-line
const _matchRegex = ( value, regex ) => new RegExp( regex ).test( value )

const useList = validation => ( values, value ) => {
    if ( value !== undefined ) {
        // eslint-disable-next-line
        for ( const v of value ) {
            const result = validation( values, v );
            if ( result !== true ) {
                return `All the values ${ result.toLowerCase() }`;
            }
        }
    }
    return true;
};

const isRequired = ( values, value ) => ( value !== undefined && value !== null && value !== ""
    ? true
    : "Required."
);

const isNumeric = ( values, value ) => ( _isEmpty( value ) || typeof value === "number" || _matchRegex( value, "^[-+]?(?:\\d*[.])?\\d+$" )
    ? true
    : "Must be a number."
);

const isAlphanumeric = ( values, value ) => ( _isEmpty( value ) || _matchRegex( value, "^[a-zA-Z0-9_ ]*$" )
    ? true
    : "Can only contain numbers and letters."
);

const isEmail = value => ( _isEmpty( value ) || _matchRegex( value, "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$" )
    ? true
    : "Must be a valid email."
);

const isPassword = ( values, value ) => ( _isEmpty( value ) || _matchRegex( value, "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$" )
    ? true
    : "Must at least contain 1 capital letter, 1 lowercase letter and 1 number."
);

const isPhoneNumber = value => ( _isEmpty( value )
|| _matchRegex( value, "^((\\+\\d{1,3}(-| )?\\(?\\d\\)?(-| )?\\d{1,5})|(\\(?\\d{2,6}\\)?))(-| )?(\\d{3,4})(-| )?(\\d{4})(( x| ext)\\d{1,5}){0,1}$" )
    ? true
    : "Must be a valid phone number."
);

const isDate = ( values, value ) => ( _isEmpty( value ) || !moment( value, "MM/DD/YYYY" ).isValid()
    ? true
    : "Must be a valid date."
);

const minLength = min => ( values, value ) => ( _isEmpty( value ) || value.length >= min
    ? true
    : `Must be at least ${ min } characters.`
);

const maxLength = max => ( values, value ) => ( _isEmpty( value ) || value.length <= max
    ? true
    : `Must be ${ max } characters or less.`
);

const minValue = min => ( values, value ) => ( _isEmpty( value ) || value >= min
    ? true
    : `Must be at least ${ min }.`
);

const maxValue = max => ( values, value ) => ( _isEmpty( value ) || value <= max
    ? true
    : `Must be ${ max } or less.`
);

const isTime = ( values, value ) => ( _isEmpty( value ) || _matchRegex( value, "^(0?[1-9]|1[0-2]):[0-5][0-9]\\d$" ) ? true : "Must be a valid time" );
const isDuration = ( values, value ) => ( _isEmpty( value ) || _matchRegex( value, "^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$" ) ? true : "Must be a valid duration" );

export {
    useList,
    isRequired,
    isNumeric,
    isAlphanumeric,
    isEmail,
    isPassword,
    isDate,
    isTime,
    isDuration,
    minLength,
    maxLength,
    minValue,
    maxValue,
    isPhoneNumber,
};
