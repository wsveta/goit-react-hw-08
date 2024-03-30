import css from "./Home.module.css"

export default function Home() {
  return (
    <>
      <h1 className={css.homeTitle}>Contact Manager</h1>
      <p className={css.mainParagraph}>
        The Contact Manager is a web application that allows users to manage
        their contacts efficiently. It provides various features to help users
        organize and maintain their contact list effectively.
      </p>
      <h2>Key Features:</h2>
      <ul className={css.features}>
        <li className={css.feature}>
          <h3>Account Creation:</h3>
          <p>
            Users can create their personal accounts by providing necessary
            details such as username, email, and password. This ensures a
            personalized experience for each user.
          </p>
        </li>
        <li className={css.feature}>
          <h3>Adding Contacts:</h3>
          <p>
            Users can add contacts to their contact list by entering the name
            and phone number of the contact. This feature helps users to keep
            track of their acquaintances and important contacts.
          </p>
        </li>
        <li className={css.feature}>
          <h3>Editing Contacts:</h3>
          <p>
            The application allows users to edit the details of existing
            contacts. Users can update the name or phone number of a contact
            whenever necessary, ensuring that their contact list remains
            up-to-date.
          </p>
        </li>
        <li className={css.feature}>
          <h3>Deleting Contacts:</h3>
          <p>
            Users have the ability to delete unwanted or outdated contacts from
            their contact list. This feature helps users to declutter their
            contact list and maintain only relevant contacts.
          </p>
        </li>
        <li className={css.feature}>
          <h3>Searching Contacts:</h3>
          <p>
            The Contact Manager provides a search functionality that enables
            users to search for contacts by name or phone number. Users can
            easily find specific contacts within their contact list by entering
            relevant search queries.
          </p>
        </li>
      </ul>

      <p>
        Overall, the Contact Manager is a user-friendly application designed to
        streamline the process of managing contacts. Whether it's adding new
        contacts, editing existing ones, or searching for specific contacts,
        users can efficiently organize their contact list to meet their needs.
      </p>
    </>
  );
}
