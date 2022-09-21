import PropTypes from 'prop-types';

export default PropTypes.shape({
    /** Whether we are loading the data via the API */
    isLoading: PropTypes.bool,

    /** A date that indicates the user has been throttled */
    throttledDate: PropTypes.string,

    /** Additional data for the account in setup */
    achData: PropTypes.shape({

        /** Step of the setup flow that we are on. Determines which view is presented. */
        currentStep: PropTypes.string,

        /** Bank account state */
        state: PropTypes.string,

        /** Bank account ID of the VBA that we are validating is required */
        bankAccountID: PropTypes.number,

    }),

    /** Disable validation button if max attempts exceeded */
    maxAttemptsReached: PropTypes.bool,

    /** Alert message to display above submit button */
    error: PropTypes.string,

    /** Object containing various errors */
    errorFields: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.arrayOf(PropTypes.objectOf(PropTypes.bool)),

        /**
         * Errors from api calls on the specific user
         * {<timestamp>: 'error message', <timestamp2>: 'error message 2'}
         */
        PropTypes.string,
    ])),
});
