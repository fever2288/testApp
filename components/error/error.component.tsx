import React from 'react';
import { ErrorView, ErrorTextStyle } from './error.styles';

/**
 * Interface for Error component props.
 * @interface ErrorProps
 * @property {string} errorText - The error message text to display.
 */
interface ErrorProps {
  errorText: string;
}

/**
 * Error component to display error messages in a styled view.
 * @param {ErrorProps} props - The props for the component.
 * @returns {JSX.Element} The rendered Error component.
 */
const Error: React.FC<ErrorProps> = ({ errorText }) => (
  <ErrorView>
    <ErrorTextStyle>{errorText}</ErrorTextStyle>
  </ErrorView>
);

export default Error;
