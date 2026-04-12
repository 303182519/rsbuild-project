import './App.scss';
import MyButton from './components/botton';

const App = () => {
  return (
    <div className="content">
      <h1 className="flex">Rsbuild with React</h1>
      <h2 className="text-3xl font-bold underline">Hello world!</h2>
      <div className="w-screen space-y-[20px]">
        <div>1</div>
        <div>Start building amazing things with Rsbuild.</div>
        <div className="border-[4px] border-solid border-[#FF6B6B] rounded-5px">
          2
        </div>
      </div>
      <div className="flex divide-x-2">
        <div className="border-[#342b2b] leading-[40px] font-[500] flex-1">
          3
        </div>
        <div className="border-[#342b2b] text-xs font-[500] flex-1">4</div>
        <div className="border-[#342b2b] text-xs font-[500] flex-1">5</div>
      </div>
      <MyButton isHovering={true}>Submit me</MyButton>
      <div className="space-y-[20px]">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className="w-[100px] h-[40px] text-ellipsis">
        不仅考虑平衡，还要考虑字符间距实现美观,比如避免末尾出现孤立的单个字符，更适合对排版要求比较高的场景比如新闻网站
      </div>
    </div>
  );
};

export default App;
