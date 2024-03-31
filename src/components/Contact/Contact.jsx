import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import { useState } from "react";
import Modal from "react-modal";
import EditForm from "../EditForm";

Modal.setAppElement("#root");

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
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
          isOpen={isModalEditOpen}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setIsModalEditOpen(false)}
        >
          <EditForm
            fullContact={contact}
            setIsModalEditOpen={setIsModalEditOpen}
          />
        </Modal>

        <Modal
          className={css.content}
          isOpen={isModalOpen}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <div className={css.deleteModal}>
            <b className={css.modalText}>
              Are you sure you want to delete the contact?
            </b>
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
      <div className={css.btnWrapper}>
        <button
          className={css.contactButton}
          onClick={() => setIsModalEditOpen(true)}
        >
          Edit
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className={css.contactButton}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
