import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar />
        <Switch>
          <Route component={TodosPage} path='/' exact />
          <Route component={AboutPage} path='/about' />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
