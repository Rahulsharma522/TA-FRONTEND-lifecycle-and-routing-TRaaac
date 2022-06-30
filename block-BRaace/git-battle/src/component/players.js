import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
function Players(props) {
  var { personDataAll } = props;
  var [person1, setPerson1] = useState('');
  var [person2, setPerson2] = useState('');

  var [person1Data, setPerson1Data] = useState(null);
  var [person2Data, setPerson2Data] = useState(null);

  var [person1Name, setPerson1Name] = useState('');
  var [person2Name, setPerson2Name] = useState('');

  function handelPlayer1({ target }) {
    var { name, value } = target;
    setPerson1(([name] = value));
  }

  function handelPlayer2({ target }) {
    var { name, value } = target;
    setPerson2(([name] = value));
  }

  function fetchPersion1Data() {
    fetch(`https://api.github.com/users/${person1Name}`).then((res) =>
      res.json().then((data) => {
        setPerson1Data(data);
      })
    );
  }
  function fetchPersion2Data() {
    fetch(`https://api.github.com/users/${person2Name}`).then((res) =>
      res.json().then((data) => {
        setPerson2Data(data);
      })
    );
  }

  useEffect(() => {
    fetchPersion1Data();
    fetchPersion2Data();
    return () => {};
  }, [person1Name, person2Name]);

  function handelSubmit(event) {
    event.preventDefault();
    setPerson1Name(person1);
    setPerson2Name(person2);
  }

  function handel1Clear() {
    setPerson1('');
    setPerson1Name('');
  }
  function handel2Clear() {
    setPerson2('');
    setPerson2Name('');
  }

  return (
    <>
      <div className="player ">
        <h2>Players</h2>
        <div className="flex-sb">
          <div className="flex-48">
            <div>
              <form action="" onSubmit={handelSubmit}>
                <label htmlFor="">Player One</label>
                {person1Name ? (
                  ''
                ) : (
                  <input
                    type="text"
                    onChange={handelPlayer1}
                    value={person1}
                    name="person1"
                    className="input"
                    placeholder="github Username"
                  />
                )}
                {person1Name ? (
                  ''
                ) : person1 ? (
                  <input type="submit" className="submit" />
                ) : (
                  <input type="submit" className="submit disabled" disabled />
                )}
              </form>
              <div>
                {person1Name ? (
                  <article>
                    <div className="github-img flex">
                      <img src={person1Data.avatar_url} alt="" />
                      <h3>{person1Data.name}</h3>

                      <p onClick={handel1Clear} className="cross">
                        <i className="fas fa-times"></i>
                      </p>
                    </div>
                  </article>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>

          <div className="flex-48">
            <div>
              <form action="" onSubmit={handelSubmit}>
                <label htmlFor="">Player Two</label>
                {person2Name ? (
                  ''
                ) : (
                  <input
                    type="text"
                    onChange={handelPlayer2}
                    value={person2}
                    name="person2"
                    className="input"
                    placeholder="github Username"
                  />
                )}
                {person2Name ? (
                  ''
                ) : person2 ? (
                  <input type="submit" className="submit" />
                ) : (
                  <input type="submit" className="submit disabled" disabled />
                )}
              </form>
              <div>
                {person2Name ? (
                  <article>
                    <div className="github-img flex">
                      <img src={person2Data.avatar_url} alt="" />
                      <h3>{person2Data.name}</h3>

                      <p onClick={handel2Clear} className="cross">
                        <i className="fas fa-times"></i>
                      </p>
                    </div>
                  </article>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="battle">
        {person1Name && person2Name ? (
          <NavLink to="/resultcard">
            <button
              className="battle-btn"
              onClick={() => personDataAll(person1Data, person2Data)}
            >
              Battle
            </button>
          </NavLink>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default Players;