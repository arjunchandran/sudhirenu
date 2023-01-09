import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
//import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font main-font__wedding">Wedding Reception</h2>
              <span className="sub-title sub-title__wedding">Please be present at the occasion and shower your blessings upon us !</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
            <WeddingInfoBox
                title="Marriage Ceremony"
                time="04:00 PM - 08:00 PM"
                date="Friday, 27 January 2023"
                description="Sanjoe Parish Hall, Nellimattam, St Josephs Church Rd, Kothamangalam, Kerala 686691"
            />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
