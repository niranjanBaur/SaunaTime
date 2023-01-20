import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';

import css from './ListingPage.module.css';


const SectionRestrictionMaybe = props => {
  const { restriction } = props;

  console.log("restriction",restriction);

  return restriction ? <div>
    <div className={css.sectionRestriction}>
    <h2 className={css.restrictionTitle}>
        <FormattedMessage id="ListingPage.restrictionTitle" />
    </h2>
    <p className={css.restriction}>
        {restriction}
    </p>
    </div>
  </div> : null;
};

export default SectionRestrictionMaybe;
