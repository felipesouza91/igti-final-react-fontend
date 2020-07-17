import React from 'react';
import './styles.css';

function Home() {
  return (
    <section className="hero is-info  is-fullheight">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <a className="navbar-item">Home</a>
          </div>
        </nav>
      </div>
      <div className="container main-title">
        <h1 className="title">Sistema de Gerenciamento de financas</h1>
      </div>
      <div className="hero-body">
        <div className="container"></div>
      </div>
    </section>
  );
}

export default Home;
