import { Skeleton } from "../../components/Skeleton";
import Alert from "./components/Alert";
import { DataFetcher } from "./components/DataFetcher";
import DataTable from "./components/DataTable";
import Dropdown from "./components/Dropdown";
import Modal from "./components/Modal";
import { Wizard } from "./components/Wizard";
import {
  AccountStep,
  ProfileStep,
  ReviewStep,
} from "./components/Wizard/WizardStep";
import WizardMix from "./components/WizardMix";
import { ProductCard } from "./ProductCard";
import "./styles.css";
// Usage
const columns = [
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
  {
    key: "status",
    label: "Status",
    render: (value) => <span className={`badge ${value}`}>{value}</span>,
  },
];

const users = [
  { name: "John", age: 30, status: "active" },
  { name: "Jane", age: 25, status: "inactive" },
  { name: "Bob", age: 35, status: "active" },
];
const Day4 = () => {
  const handleComplete = (formData) => {
    console.log(formData);
  };
  return (
    <>
      <h2>Component Composition Patterns</h2>
      <hr />
      <div className="exercise-wrapper">
        <p>Demo 1: Dropdown với Compound Components</p>
        <Dropdown>
          <Dropdown.Toggle>Action ▼</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => console.log("Edit")}>
              ✏️ Edit
            </Dropdown.Item>
            <Dropdown.Item onClick={() => console.log("Delete")}>
              🗑️ Delete
            </Dropdown.Item>
            <Dropdown.Item onClick={() => console.log("Share")}>
              📤 Share
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <hr />
      <div className="exercise-wrapper">
        <p>Demo 2: Modal với Render Props</p>
        <Modal
          trigger={({ open }) => (
            <button onClick={open} className="trigger-modal">
              Open
            </button>
          )}
        >
          {({ close }) => (
            <div className="modal-wrapper">
              <h2>Modal Title</h2>
              <p>Modal content here...</p>
              <button onClick={close}>Close</button>
            </div>
          )}
        </Modal>
      </div>
      <hr />
      <div className="exercise-wrapper">
        <p>Demo 3: Data Table với Container/Presentational</p>
        <div>
          <DataTable columns={columns} data={users} />
        </div>
      </div>
      <hr />
      <div className="exercise-wrapper">
        <p>Exercise 1: Alert/Toast System (Compound Components)</p>
        <div>
          {/* Success Alert */}
          <Alert variant="success" dismissible autoDismiss={3000}>
            <Alert.Icon />
            <div>
              <Alert.Title>Success!</Alert.Title>
              <Alert.Description>
                Your changes have been saved successfully.
              </Alert.Description>
            </div>
            <Alert.CloseButton />
          </Alert>

          {/* Warning Alert */}
          <Alert variant="warning">
            <Alert.Icon />
            <div>
              <Alert.Title>Warning</Alert.Title>
              <Alert.Description>
                This action cannot be undone.
              </Alert.Description>
            </div>
          </Alert>

          {/* Error Alert */}
          <Alert variant="error" dismissible>
            <Alert.Icon />
            <div>
              <Alert.Title>Operation Failed</Alert.Title>
              <Alert.Description>
                Please try again later or contact support.
              </Alert.Description>
            </div>
            <Alert.CloseButton />
          </Alert>

          {/* Info Alert - Auto dismiss */}
          <Alert variant="info" autoDismiss={5000}>
            <Alert.Icon />
            <div>
              <Alert.Title>Info</Alert.Title>
              <Alert.Description>
                This message will disappear in 5 seconds.
              </Alert.Description>
            </div>
          </Alert>
        </div>
      </div>
      <hr />
      <div className="exercise-wrapper">
        <p>Exercise 2: Wizard/Stepper (Compound Components)</p>
        <p> Option 1: (Compound Components)</p>
        <Wizard onComplete={handleComplete}>
          <Wizard.Steps>
            <Wizard.Step stepId={1} title="Account" />
            <Wizard.Step stepId={2} title="Profile" />
            <Wizard.Step stepId={3} title="Review" />
          </Wizard.Steps>

          <Wizard.Panels>
            <Wizard.Panel stepId={1}>
              <AccountStep />
            </Wizard.Panel>

            <Wizard.Panel stepId={2}>
              <ProfileStep />
            </Wizard.Panel>

            <Wizard.Panel stepId={3}>
              <ReviewStep />
            </Wizard.Panel>
          </Wizard.Panels>

          <Wizard.Navigation />
        </Wizard>

        <br />
        <p> Option 2: (Mixed Patterns)</p>
        <div>
          <WizardMix onComplete={handleComplete}>
            <WizardMix.Steps>
              <WizardMix.Step stepId={1} title="Account" />
              <WizardMix.Step stepId={2} title="Profile" />
              <WizardMix.Step stepId={3} title="Review" />
            </WizardMix.Steps>

            <WizardMix.Panels>
              <WizardMix.Panel
                stepId={1}
                render={(wizard) => {
                  const { formData, updateFormData } = wizard;
                  const username = formData.username || "";

                  return (
                    <>
                      <h2>Account Information</h2>
                      <input
                        placeholder="Username"
                        value={username}
                        onChange={(e) =>
                          updateFormData("username", e.target.value)
                        }
                      />
                      <input type="password" placeholder="Password" />
                    </>
                  );
                }}
              />

              <WizardMix.Panel
                stepId={2}
                render={(wizard) => {
                  const { formData, updateFormData } = wizard;
                  return (
                    <>
                      <h2>Profile Details</h2>
                      <input
                        placeholder="Full Name"
                        value={formData.name || ""}
                        onChange={(e) => updateFormData("name", e.target.value)}
                      />
                    </>
                  );
                }}
              />

              <WizardMix.Panel
                stepId={3}
                render={(wizard) => {
                  const { formData } = wizard;
                  return (
                    <>
                      <h2>Review & Submit</h2>
                      <pre>{JSON.stringify(formData)}</pre>
                    </>
                  );
                }}
              />
            </WizardMix.Panels>
            <WizardMix.Navigation />
          </WizardMix>

          {/* {Object.keys(formData).length > 0 && (
            <div className="result">
              <h3>Submitted Data:</h3>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
          )} */}
        </div>
      </div>
      <hr />

      <div className="exercise-wrapper">
        <p>Exercise 3: Data Fetcher (Render Props)- Gia lap 3s fetching </p>
        <DataFetcher url="https://fakestoreapi.com/products/1">
          {({ data: product, loading }) => {
            if (loading) return <Skeleton width="300px" height="400px" />;
            return <ProductCard product={product} />;
          }}
        </DataFetcher>
      </div>

      <div className="exercise-wrapper">
        <p>Exercise 4: Form Builder (Mixed Patterns - Challenge)</p>
      </div>
    </>
  );
};

export default Day4;
