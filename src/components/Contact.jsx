import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";
import toast from "react-hot-toast";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     borderRadius: '20px',

//   },
//   overlay: {

//     backgroundColor: 'black'
//   }
// };

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
      .unwrap()
      .then(() => toast("Contact deleted"));
  };
  return (
    <>
      <div>
        <Modal
          className={css.content}
          isOpen={isModalOpen}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <div>
            <b className={css.modalText}>Are you sure you want to delete the contact?</b>
            <div className={css.btnWrapper}>
              <button type="button" onClick={handleDelete}>
                Yes
              </button>
              <button type="button" onClick={() => setIsModalOpen(false)}>
                No
              </button>
            </div>
          </div>
        </Modal>
        <div className={css.name}>
          <IoPersonSharp />
          <h2>{contact.name}</h2>
        </div>
        <div className={css.number}>
          <FaPhone />
          <p>{contact.number}</p>
        </div>
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className={css.contactButton}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
