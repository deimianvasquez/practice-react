import React, { useState } from "react";
import Menu from "../components/Menu.jsx";

const Home = () => {
  const [contactList, setContactList] = useState([]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    myPhoneNumber: "",
  });

  const saveContactList = (event) => {
    if (
      contact.name.trim() !== "" &&
      contact.email.trim() !== "" &&
      contact.myPhoneNumber.trim() !== ""
    ) {
      //guardo el contacto
      setContactList([...contactList, contact]);

      setContact({
        name: "",
        email: "",
        myPhoneNumber: "",
      });

      setError(false);
    } else {
      setError(true);
    }
  };

  const [error, setError] = useState(false);

  const addContact = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Menu />
      <div className="container">
        <div className="row">
          <div className="col-12 my-2">
            <h1 className="text-center">My contact list</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 border">
            <form>
              <div className="form-group my-3">
                <label>Email: </label>
                <input
                  className="form-control"
                  placeholder="Email"
                  type="text"
                  name="email"
                  value={contact.email}
                  onChange={addContact}
                />
              </div>
              <div className="form-group my-3">
                <label>Name: </label>
                <input
                  className="form-control"
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={contact.name}
                  onChange={addContact}
                />
              </div>
              <div className="form-group my-3">
                <label>Phone Number: </label>
                <input
                  className="form-control"
                  placeholder="Phone Number"
                  type="text"
                  name="myPhoneNumber"
                  value={contact.myPhoneNumber}
                  onChange={addContact}
                />
              </div>
              <div className="form-group my-3">
                <button
                  className="btn btn-primary w-100"
                  onClick={saveContactList}
                  type="button"
                >
                  Save Contact
                </button>
              </div>
            </form>
          </div>
          <div className="">
            Contact{" "}
            {contactList.length <= 0
              ? "No tiene contactos registrdos"
              : "Usted tiene" +contactList.length + "registrados"}
          </div>

          {error ? (
            <div className="alert alert-danger">
              Todos los Campos son Validos
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-12">
            {contactList.map((conta, index) => {
              return (
                <div
                  key={index}
                  className="border border-danger contact-list my-2"
                >
                  <div className="contact-list--img">
                    <img
                      src="https://picsum.photos/id/10/80/80"
                      alt="profile"
                    />
                  </div>
                  <div className="contact-list--address">
                    <p>
                      <span>Name:</span>
                      {conta.name}
                    </p>
                    <p>
                      <span>Phone Number:</span>
                      {conta.myPhoneNumber}
                    </p>
                    <p>
                      <span>Email:</span>
                      {conta.email}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
