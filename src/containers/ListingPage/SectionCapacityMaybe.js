import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';

import css from './ListingPage.module.css';


const SectionCapacityMaybe = props => {
  const { capacity } = props;

  console.log("capacity",capacity);

  return capacity ? <div>
    <div className={css.sectionCapacity}>
    <h2 className={css.capacityTitle}>
        <FormattedMessage id="ListingPage.capacityTitle" />
    </h2>
    <p className={css.capacity}>
        {capacity}
    </p>
    </div>
  </div> : null;
};

export default SectionCapacityMaybe;
