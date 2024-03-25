import React, {useEffect, useState} from "react";
import { Button, Modal } from "react-bootstrap";
import User from "../../../Classes/User";

export function DeleteUser({ selectedUser })
{
  const [showDeleteModal, setShowDeleteModal] = useState(true);

  useEffect(() => {
    setShowDeleteModal(true);
  }, []);
  const handleDeleteUser = async () => {
    await User.removeUser(selectedUser);
    setShowDeleteModal(false); // Close the modal after deleting the user
  };
  return (
    <div>
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteUser}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


