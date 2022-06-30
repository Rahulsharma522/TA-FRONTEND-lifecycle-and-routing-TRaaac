import { NavLink } from 'react-router-dom';

function ResultCard(props) {
  var { perData1, perData2, darkMode } = props;
  return (
    <>
      <div className="flex-se container vh">
        <div className="flex-35">
          {perData1 ? (
            <article
              className={darkMode === true ? ' article darkcard' : '  article '}
            >
              {perData1.public_repos > perData2.public_repos ? (
                <h5>Winner</h5>
              ) : (
                <h5>Looser</h5>
              )}
              <div className=" article-img">
                <img src={perData1.avatar_url} alt="" />
                <h2>{perData1.name}</h2>
              </div>

              <div className="article_data">
                <h3>
                  <i className="fas fa-user-alt person"></i> {perData1.name}
                </h3>
                <p>
                  <i class="fas fa-user-friends star"></i>
                  {perData1.following} following
                </p>
                <p>
                  <i class="fas fa-users forks"></i> {perData1.followers}{' '}
                  followers
                </p>
                <p>
                  <i class="fas fa-code warning code"></i>{' '}
                  {perData1.public_repos} repositories
                </p>
              </div>
            </article>
          ) : (
            ''
          )}
        </div>

        <div className="flex-35">
          {perData2 ? (
            <article
              className={darkMode === true ? '  article darkcard' : ' article '}
            >
              {perData1.public_repos > perData2.public_repos ? (
                <h5>Looser</h5>
              ) : (
                <h5>winner</h5>
              )}
              <div className="article-img">
                <img src={perData2.avatar_url} alt="" />
                <h2>{perData2.name}</h2>
              </div>

              <div className="article_data">
                <h3>
                  <i className="fas fa-user-alt person"></i> {perData2.name}
                </h3>
                <p>
                  <i class="fas fa-user-friends star"></i>
                  {perData2.following} following
                </p>
                <p>
                  <i class="fas fa-users forks"></i> {perData2.followers}{' '}
                  followers
                </p>
                <p>
                  <i class="fas fa-code warning code"></i>{' '}
                  {perData2.public_repos} repositories
                </p>
              </div>
            </article>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="container battle">
        <NavLink to="/github">
          <button className="battle-btn">Reset</button>
        </NavLink>
      </div>
    </>
  );
}

export default ResultCard;