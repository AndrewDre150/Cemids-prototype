import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ServicesHomeOne from '../Landing/Components/HomeQuiz';
import ClimateChangeQuiz from './ClimateChange';
import CleanEnergyQuiz from './CleanEnergy';
import PlasticsImpactsQuiz from './PlasticsImpact';
import EnvironmentalLiteracyQuiz from './EnviromentalLiteracy';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ServicesHomeOne} />
        <Route exact path="/climate-change-quiz" component={ClimateChangeQuiz} />
        <Route exact path="/clean-energy-quiz" component={CleanEnergyQuiz} />
        <Route exact path="/plastics-impacts-quiz" component={PlasticsImpactsQuiz} />
        <Route exact path="/environmental-literacy-quiz" component={EnvironmentalLiteracyQuiz} />
      </Switch>
    </Router>
  );
}

export default App;
