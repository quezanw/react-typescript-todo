import * as React from 'react';
import App from '../components/App/App';

export default class AppPage extends React.Component<any, any> {
  
  public render(): JSX.Element {
    return (
      <div>      
        <App/>
      </div>
    );
  }
}