import './scss/app.scss';
import Message from './components/Message';

function App() {
  return (
    <div>
      <h1>Welcome!</h1>
      <div className="container">
        <div className='item color1'>
          <Message name="Bob" />

        </div>
        <div className='item color2'>
          <Message name="Kate" />

        </div>

        <div className='item color3'>
          <Message name="Jim" />

        </div>

        <div className='item color4'>
          <Message name="Allah" />

        </div>
      </div>
    </div>

  );
}

export default App;
