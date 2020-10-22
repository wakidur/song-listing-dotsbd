import React, { Component } from 'react';
import { connect } from 'react-redux';

export const HomePage = () => {
  return <div>Home</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
