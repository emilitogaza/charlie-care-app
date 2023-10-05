import React from "react";
import Button from "../components/Button";
import "../styles/App.scss";

const App = () => {
  return (
    <div className="content">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      <p>This is a short paragraph. It gives a glimpse of the typography.</p>

      <p>
        This is a sample paragraph. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Duis vehicula, dui ut blandit feugiat, quam erat
        pharetra lacus, ac porta enim tellus et elit. Vivamus id fringilla
        neque. Maecenas in dui facilisis, condimentum quam tincidunt, suscipit
        quam.
      </p>

      <p className="body-bold">
        This is a bold paragraph. Nullam aliquam odio at massa viverra, quis
        consequat ligula interdum.
      </p>

      <ul>
        <li>Unordered list item 1</li>
        <li>Unordered list item 2</li>
        <li>Unordered list item 3</li>
      </ul>

      <ol>
        <li>Ordered list item 1</li>
        <li>Ordered list item 2</li>
        <li>Ordered list item 3</li>
      </ol>

      <a href="#!">This is a sample link</a>

      <span className="caption">This is a caption text.</span>

      <div className="btn-container">
        <div className="btn-group">
          <Button variant="btn-cta">Call to action</Button>
          <Button variant="btn-cta" icon="ArrowLeft" iconPosition="left">
            Call to action
          </Button>
          <Button variant="btn-cta" icon="ArrowRight" iconPosition="right">
            Call to action
          </Button>
        </div>
        <div className="btn-group">
          <Button variant="btn-primary">Primary button</Button>
          <Button variant="btn-primary" icon="ArrowLeft" iconPosition="left">
            Primary button
          </Button>
          <Button variant="btn-primary" icon="ArrowRight" iconPosition="right">
            Primary button
          </Button>
        </div>
        <div className="btn-group">
          <Button variant="btn-secondary">Secondary button</Button>
          <Button variant="btn-secondary" icon="ArrowLeft" iconPosition="left">
            Secondary button
          </Button>
          <Button
            variant="btn-secondary"
            icon="ArrowRight"
            iconPosition="right"
          >
            Secondary button
          </Button>
        </div>
        <div className="btn-group">
          <Button variant="btn-tertiary">Tertiary button</Button>
          <Button variant="btn-tertiary" icon="ArrowLeft" iconPosition="left">
            Tertiary button
          </Button>
          <Button variant="btn-tertiary" icon="ArrowRight" iconPosition="right">
            Tertiary button
          </Button>
        </div>{" "}
      </div>
    </div>
  );
};

export default App;
