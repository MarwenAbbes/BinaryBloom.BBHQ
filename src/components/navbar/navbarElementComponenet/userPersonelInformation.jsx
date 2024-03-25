import React from "react";
import { Table, Badge, Button, Form, Modal } from "react-bootstrap";
function UserPersonelInformation({ formData, handleInputChange }) {
  return (
    <div>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBirthDay">
        <Form.Label>BirthDay</Form.Label>
        <Form.Control
          type="date"
          name="birthDay"
          value={formData.birthDay}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCin">
        <Form.Label>CIN</Form.Label>
        <Form.Control
          type="text"
          name="cin"
          value={formData.cin}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
    </div>
  );
}

function UserContactInformation({ formData, handleInputChange }) {
  return (
    <div>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
    </div>
  );
}

function UserCredentialsInformation({
  formData,
  handleInputChange,
  stores,
  roles,
}) {
  return (
    <div>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPasswordConfirmation">
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control
          type="password"
          name="passwordConfirmation"
          value={formData.passwordConfirmation}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formStore">
        <Form.Label>Store</Form.Label>
        <Form.Select
          name="store_id"
          value={formData.store_id}
          onChange={handleInputChange}
          required
        >
          <option value="">Select store...</option>
          {stores.map((store) => (
            <option key={store.id} value={store.id}>
              {store.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRole">
        <Form.Label>Role</Form.Label>
        <Form.Select
          name="role_id"
          value={formData.role_id}
          onChange={handleInputChange}
          required
        >
          <option value="">Select role...</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </div>
  );
}

export {
  UserPersonelInformation,
  UserContactInformation,
  UserCredentialsInformation,
};
