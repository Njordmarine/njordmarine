import { useTranslation } from 'react-i18next';
import { Suspense, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import BigButton from 'common/BigButton';
import Form from 'common/Form';
import Modal from 'common/Modal';
import AfterSendEmail from './AfterSendEmail';

import s from './SendInfo.module.css';
import Loader from 'common/Loader';

const SendInfo = ({ linkName = '', linkPath = '', hideLink }) => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEmailSended, setEmailSended] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setEmailSended(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={s.contacts}>
      <Suspense
        // fallback={<h2>"Loading..."</h2>}
        fallback={<Loader />}
      >
        <BigButton onClick={openModal} text={t('sendInfo.bigBtn')} />
        <NavLink
          to={linkPath}
          className={clsx(hideLink && s.isHideLink)}
          activeClassName={s.NavItemActive}
          onClick={scrollToTop}
        >
          <span className={s.link}>{linkName}</span>
        </NavLink>

        {isModalOpen && (
          <Modal
            title={t('sendInfo.bigBtn')}
            onClose={closeModal}
            isEmailSended={isEmailSended}
          >
            {!isEmailSended ? (
              <Form isTitle={false} setEmailSended={setEmailSended} />
            ) : (
              <AfterSendEmail
                closeModal={closeModal}
                setEmailSended={setEmailSended}
              />
            )}
          </Modal>
        )}
      </Suspense>
    </div>
  );
};

SendInfo.propTypes = {
  linkName: PropTypes.string,
  linkPath: PropTypes.string,
  hideLink: PropTypes.bool.isRequired,
};

export default SendInfo;
