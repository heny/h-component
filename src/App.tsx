import React, {useState} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Button from "./components/Button/Button";
import Menu from "./components/Menu/Menu"
import MenuItem from "./components/Menu/MenuItem"
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'
library.add(fas)

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon='coffee' theme='danger' size='10x' />
        <Menu 
          defaultIndex='0' 
          // mode='vertical'
          defaultOpenSubMenus={['2']}
          onSelect={(index: string) => {console.log(index)}}
        >
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem>
            cool link 2
          </MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
            <MenuItem>
              dropdown 3
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link 3
          </MenuItem>
        </Menu>

        <Button size='lg' btnType='primary' onClick={() => setShow(!show)}> Toggle </Button>
        <Transition
          in={show}
          timeout={300}
          animation='zoom-in-left'
        >
          <div>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </div>
        </Transition>
        <Transition
          in={show}
          timeout={300}
          wrapper
          animation='zoom-in-top'
        >
          <Button btnType='primary' size='lg'> 按钮 </Button>
        </Transition>
        

        {/* <Button 
          btnType='primary'
          size='sm'
          onClick={(e: any) => {alert(1)}}
        >
          按钮
        </Button>

        <Button size='sm'>
          默认的按钮
        </Button>

        <Button 
          btnType='link'
          size='lg'
          href="https://baidu.com"
          disabled
        >
          百度
        </Button>


        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
