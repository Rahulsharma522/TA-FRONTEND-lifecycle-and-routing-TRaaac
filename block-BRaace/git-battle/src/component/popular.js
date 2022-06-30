function Popular(props) {
    var { darkMode, fatchCard } = props;
    return (
      <>
        <div className="flex-sb flex-wrap">
          {fatchCard.map((each) => (
            <article
              className={
                darkMode === true
                  ? 'flex-23  article darkcard'
                  : 'flex-23  article '
              }
              key={each.id}
            >
              <div className="article-img">
                <img src={each.owner.avatar_url} alt="" />
                <h2>{each.name}</h2>
              </div>
  
              <div>
                <h3>
                  <i className="fas fa-user-alt person"></i> {each.name}
                </h3>
                <p>
                  <i className="fas fa-star star"></i> {each.stargazers_count}{' '}
                  Stars
                </p>
                <p>
                  <i className="fas fa-code-branch forks"></i> {each.forks_count}{' '}
                  forks
                </p>
                <p>
                  <i className="fas fa-exclamation-triangle warning"></i>{' '}
                  {each.open_issues_count} open issues
                </p>
              </div>
            </article>
          ))}
        </div>
      </>
    );
  }
  export default Popular;