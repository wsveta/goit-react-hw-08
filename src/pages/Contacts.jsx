import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import ContactForm from "../components/ContactForm";
import SearchBox from "../components/SearchBox";
import ContactList from "../components/ContactList";
import { Toaster } from "react-hot-toast";

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
    <Toaster/>
      <ContactForm/>
      <SearchBox />
      <ContactList />
    </>
  );
}
