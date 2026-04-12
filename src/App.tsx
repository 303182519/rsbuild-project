import './App.scss';
import MyButton from './components/botton';

const App = () => {
  return (
    <div className="content">
      <h1 className="flex">Rsbuild with React</h1>
      <h2 className="text-3xl font-bold underline">Hello world!</h2>
      <p>Start building amazing things with Rsbuild.</p>
      <MyButton isHovering={true}>Submit me</MyButton>
    </div>
  );
};

export default App;
