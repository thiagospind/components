import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
        { /* No caso de um componente dentro de outro, usar o nome do componente como uma TAG JSX. */ }
        <CommentDetail author="Sam"/>
        <CommentDetail author="Alex"/>
        <CommentDetail author="Jane"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));