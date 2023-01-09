import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/p-renu.jpg';
import Groom from '@assets/images/p-sudhi.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = 'Friday, 27 January 2023';

  return (
	<Fragment>
	  <div id="fh5co-couple" css={styWrapper}>
		<div className="container">
		  <div className="row">
			<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
			  <h2 className="main-font">Wedding Reception</h2>
			  <h3 className="sub-title hs">{finalSubtitle}</h3>
			  <p className="info">
				We invite you all to be part of our most precious occasion 
			  </p>
			</div>
		  </div>
		  <div className="couple-wrap">
			<div className="couple-half">
			  <div className="groom">
				<img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
			  </div>
			  <div className="desc-groom">
			  <br></br><br></br>
				<h3 className="main-font">Renuka Jayan</h3>
			  </div>
			</div>
			<p className="heart text-center">
			  <i className="icon-heart2"></i>
			</p>
			<div className="and-love">
			  <i>&</i>
			</div>
			<div className="couple-half">
			  <div className="bride">
				<img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
			  </div>
			  <div className="desc-bride">
				<br></br><br></br>
				<h3 className="main-font">Sudheesh Unni</h3>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
