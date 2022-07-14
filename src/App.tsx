import './App.css';
import 'antd/dist/antd.css';
import UseReducerHook from './componets/UseReducer/UseReducer';
import useMyFriendStatus from './componets/UseDebugValue/CustomHook';
import Parent from './componets/UseCallback/Parent';
import UseRefHook from './componets/UseRef/UseRef';
import { ResultInput } from './componets/ImperativeHook/ImperativeHook';
import UseLayoutEffect from './componets/UseLayoutEffect/UseLayoutEffect';
// import ErrorBounderies from './componets/ErrorBounderies/ErrorBounderies';
// import LazyLoading from './componets/LazyLoading/LazyLoading';

function App() {
  useMyFriendStatus('online');
  return (
    <div className="App">
      {/* <LazyLoading/> */}
      {/* <ErrorBounderies/> */}
      <UseReducerHook/>
      <Parent/>
      <UseRefHook/>
      <ResultInput/>
      <UseLayoutEffect/>
      
    </div>
  );
}

export default App;
