import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import config from '../../config.js';
import { FormattedMessage } from '../../util/reactIntl';
import { ensureOwnListing } from '../../util/data';
import { findOptionsForSelectFilter } from '../../util/search';

import { ListingLink } from '../../components';
import { EditListingRestrictionForm } from '../../forms';

// Create this file using EditListingDescriptionPanel.module.css
// as a template.
import css from './EditListingRestrictionPanel.module.css';
// import EditListingRestrictionForm from '../../forms/EditListingRestrictionForm/EditListingRestrictionForm.js';

const EditListingRegistrationPanel = props => {
  const {
    className,
    rootClassName,
    listing,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  const { publicData } = currentListing.attributes;

  const panelTitle = currentListing.id ? (
    <FormattedMessage
      id="EditListingRegistrationPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingRegistrationPanel.createListingTitle" />
  );
  const capacityOptions = findOptionsForSelectFilter(
    'amenities',
    config.custom.filters
  );

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingRestrictionForm
        className={css.form}
        initialValues={{ restriction: publicData.restriction }}
        onSubmit={values => {
          const { restriction } = values;
          const updateValues = {
            publicData: {
                restriction,
            },
          };
          onSubmit(updateValues);
        }}
        onChange={onChange}
        saveActionMsg={submitButtonText}
        updated={panelUpdated}
        updateError={errors.updateListingError}
        updateInProgress={updateInProgress}
        capacityOptions={capacityOptions}
      />
    </div>
  );
};

const { func, object, string, bool } = PropTypes;

EditListingRegistrationPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditListingRegistrationPanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingRegistrationPanel;