import React, { Component } from 'react';
import { connect } from 'react-redux';

export const MySongListPage = () => {
  return <div>My List</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MySongListPage);
