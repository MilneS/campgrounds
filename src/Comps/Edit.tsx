import classes from "./Edit.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const Edit = () => {

    return (
      <div className={classes.container}>
        <h1 className={classes.h1}>Update CampGround</h1>
        <Form className={classes.form}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control type="text" id="title"  />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="location">Location</Form.Label>
            <Form.Control
              type="text"
              id="location"
              
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="price">Campground price</Form.Label>
            <Form.Control
              type="number"
              id="price"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              id="description"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control type="file" id="image" />
          </Form.Group>
          <div className={classes.button}>
            <Button
              variant="success"
              size="lg"
              type="button"
              className="mb-3"
            >
              Update campground
            </Button>
          </div>
        </Form>
      </div>
    );
  };

  export default Edit;