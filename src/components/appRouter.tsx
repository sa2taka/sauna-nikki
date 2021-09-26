import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './pages/App';

interface Props {}

export const AppRouter: React.VFC<Props> = (props) => {
  return (
    <Router>
      <Route path="/" component={App} />
    </Router>
  );
};
