import { useEffect, useState } from 'react';
import Popular from './Popular';

function FetchCard(props) {
  var { darkMode } = props;
  var [fatchCard, setfatchCard] = useState([]);
  var [isLoading, setisLoding] = useState(true);
  var [activeName, setactiveName] = useState('All');
  var tags = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  function fatchAllData() {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${activeName}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('somthing is wrong');
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setfatchCard(data.items);
        setisLoding(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fatchAllData();
    // console.log(fatchCard);
  }, [activeName]);

  function handelName(each) {
    setactiveName(each);
  }

  if (isLoading) {
    <h1>Loadiing....</h1>;
  }

  return (
    <>
      <div className="container">
        <div
          className={
            darkMode === true ? 'text-white flex button ' : 'flex button'
          }
        >
          {tags.map((each) => (
            <h3
              key={each}
              className={activeName === each ? 'active ' : ''}
              onClick={() => handelName(each)}
            >
              {each}
            </h3>
          ))}
        </div>
        <div>
          {fatchCard ? (
            <Popular darkMode={darkMode} fatchCard={fatchCard} />
          ) : (
            'loading'
          )}
        </div>
      </div>
    </>
  );
}

export default FetchCard;