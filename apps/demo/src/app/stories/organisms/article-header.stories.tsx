export default {
  title: 'Organisms/Article Header',
  parameters: {
    layout: 'fullscreen',
  },
};

export const ArticleHeader = () => (
  <>
    <section className="rw-article-header">
      <hgroup className="rw-article-header__title">
        <a className="rw-article-author__container" href="">
          <img className="rw-avatar-sm" src="avatar.png" alt="user avatar" />
          <div className="rw-article-author__content">
            <span>Gerome Grignon</span>
            <span className="rw-date">December 9, 2022</span>
          </div>
        </a>
        <h2>Try to transmit the HTTP card, maybe it will override the multi-byte hard drive!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur blanditiis,
          cumque, debitis dicta error facere, id in ipsum iste maiores minus nesciunt numquam
          perspiciatis quo quod ratione reiciendis rerum.
        </p>
      </hgroup>
      <img className="rw-article-header__cover" src="avatar.png" alt="user avatar" />
      <button className="rw-btn-secondary rw-btn-follow">Like me</button>
    </section>
    <ul className="rw-tag-list-horizontal rw-article-header__tags">
      <li className="rw-tag">
        <a href="">#web</a>
      </li>
      <li className="rw-tag">
        <a href="">#chill</a>
      </li>
      <li className="rw-tag">
        <a href="">#batman</a>
      </li>
    </ul>
  </>
);