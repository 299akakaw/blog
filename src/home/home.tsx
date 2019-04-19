import * as React from 'react';
import Notebook from '../asset/notebook.svg'
import Tech from '../asset/tech.svg'
import './home.scss';

class Home extends React.Component {
  public render() {
    return (
        <div className="home">
        {/* 水平线 */}
            <i className="hline" />
        {/* 竖直线 */}
            <i className="vline" />
        {/* 主内容 */}
            <div className="content">
                <header>
                    <span className="word tech">
                        <Tech className="svgicon"/>
                        Tech
                    </span>
                    <span className="word notebook">
                        <Notebook className="svgicon"/>
                        By-talk
                    </span>
                </header>
            </div>
      </div>
    );
  }
}

export default Home;
