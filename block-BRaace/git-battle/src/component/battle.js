import React from 'react';
import Players from './Players';

function Battle(props) {
  var { personDataAll, darkMode } = props;

  return (
    <>
      <div className={darkMode === true ? 'text-white container' : 'container'}>
        <h2 className="instruction">Instruction</h2>
        <div className="flex-sb">
          <div className="instraction-icon">
            <h3>Enter Two Github Users</h3>
            <i
              className={
                darkMode === true
                  ? 'fas fa-user-friends icon  person background-color '
                  : 'fas fa-user-friends icon  person'
              }
            ></i>
          </div>
          <div className="instraction-icon">
            <h3>Battel</h3>
            <i
              className={
                darkMode === true
                  ? ' fas fa-fighter-jet icon background-color'
                  : ' fas fa-fighter-jet icon'
              }
            ></i>
          </div>

          <div className="instraction-icon">
            <h3>See the Winner</h3>
            <i
              className={
                darkMode === true
                  ? 'fas fa-trophy icon  star background-color '
                  : 'fas fa-trophy icon  star'
              }
            ></i>
          </div>
        </div>
        <div>
          <Players personDataAll={personDataAll} />
        </div>
      </div>
    </>
  );
}

export default Battle;