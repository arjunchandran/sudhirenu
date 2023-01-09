import React, { Fragment } from 'react';
import { bool } from 'prop-types';

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">&copy; 2023 Created by Arjun with lots of 🤎 for Renu and Sudhi.<br></br>#RenuSudhi</small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
