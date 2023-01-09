import React from 'react';
import useDateCountdown from '@/hooks/useDateCountdown';
import CountItem from './CountItem';
//import ButtonLive from '../WeddingSection/ButtonLive';
import { styMargin } from './styles';

function CountContainer() {
  const { days, hours, minutes, seconds, timeHasRunOut } = useDateCountdown();

  if (timeHasRunOut)
    return (
      <>
        <div className="row">
          <div className="col-md-12" style={{ fontSize: '20px' }}>
            {`THE EVENT IS ON!`}
          </div>
        </div>

      </>
    );

  return (
    <div className="col-md-12" css={styMargin('0 0 16px 0')}>
      <CountItem text="Days" number={days} />
      <CountItem text="Hours" number={hours} />
      <CountItem text="Minutes" number={minutes} />
      <CountItem text="Seconds" number={seconds} />
    </div>
  );
}

export default CountContainer;
