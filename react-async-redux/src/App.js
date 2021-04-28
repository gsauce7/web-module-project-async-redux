import './App.css';
import { connect } from 'react-redux';
import { searchAnime } from './state/actions';
import { useEffect } from 'react';

function App(props) {
  console.log(props);

  useEffect(() => {
    props.searchAnime();
  }, []);
  return (
    <div className='App'>
      <h1>Search for Anime</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, { searchAnime })(App);
