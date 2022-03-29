/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";

const Anchor = props => ( props.href
    ? <a { ...props } />
    : <Link { ...props } /> );

export default Anchor;
