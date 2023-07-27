import { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useAuthContext } from 'context/AuthProvider';
import { useLangContext } from 'context/LangProvider';
import CardWithMenu from 'common/CardWithMenu';
import PropTypes from 'prop-types';

import FileUploader from '../FileUploader';
import s from './Item.module.css';

const Item = ({
  itemTitle,
  imgUrl,
  id,
  editData,
  deleteData,
  setImage,
  setModalData,
  brends,
}) => {
  const [editedData, setEditedData] = useState(null); //{ imgUrl, itemTitle }
  const { isLogin } = useAuthContext();
  const { lang } = useLangContext();

  const match = useRouteMatch();
  const history = useHistory();

  const openModal = () => {
    setModalData({ brends, itemTitle, id });
    history.push({ pathname: `${match.url}/${id}` });
  };
  const openEditSets = () => setEditedData({ imgUrl, itemTitle });

  const handleEditData = imgUrl => {
    const { itemTitle } = editedData;
    let data = null;
    if (imgUrl && itemTitle) {
      data = { itemTitle, imgUrl };
    } else if (imgUrl) {
      data = { imgUrl };
    } else if (itemTitle) {
      data = { itemTitle };
    } else return;

    editData(id, data).finally(() => setEditedData(null));
  };

  const handleDeleteData = () => {
    deleteData(id);
  };

  const handleEditTitle = e =>
    setEditedData(prev => ({
      ...prev,
      itemTitle: {
        ...prev.itemTitle,
        [e.target.name]: e.target.value,
      },
    }));

  return (
    <li key={id} className={s.item}>
      <div className={s.imgWrapper}>
        {!editedData ? (
          <img className={s.img} src={imgUrl} alt={itemTitle}></img>
        ) : (
          <FileUploader
            setImage={setImage}
            editData={editData}
            uploadData={handleEditData}
          />
        )}
      </div>

      <div className={s.itemMenu}>
        {!editedData ? (
          <p className={s.title}> {itemTitle[lang]}</p>
        ) : (
          <>
            <input
              type="text"
              value={editedData.itemTitle.ru}
              name="ru"
              onChange={handleEditTitle}
            />
            <input
              type="text"
              value={editedData.itemTitle.en}
              name="en"
              onChange={handleEditTitle}
            />
          </>
        )}
        <button onClick={openModal} className={s.button}>
          Смотреть бренды
        </button>
      </div>

      {isLogin && (
        <CardWithMenu
          isEditing={editedData?.itemTitle}
          onEdit={openEditSets}
          onDelete={handleDeleteData}
        />
      )}
    </li>
  );
};

Item.propTypes = {};

export default Item;
