import {
  Input,
  Button,
  Select,
  Checkbox,
  Switch,
  Card,
  Modal,
  Tooltip,
} from "@ui";
import "@ui/global.css";
import { useState } from "react";

function UIShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("option1");
  const [isChecked, setIsChecked] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const components = [
    { id: "input", name: "Input", category: "form" },
    { id: "button", name: "Button", category: "action" },
    { id: "select", name: "Select", category: "form" },
    { id: "checkbox", name: "Checkbox", category: "form" },
    { id: "switch", name: "Switch", category: "form" },
    { id: "card", name: "Card", category: "layout" },
    { id: "modal", name: "Modal", category: "overlay" },
    { id: "tooltip", name: "Tooltip", category: "overlay" },
  ];

  const scrollToComponent = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a0e1a 0%, #0f172a 100%)",
      }}
    >
      {/* Hero Section */}
      <header
        style={{
          padding: "80px 40px",
          textAlign: "center",
          background:
            "linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(0, 163, 204, 0.05) 100%)",
          borderBottom: "1px solid #1e293b",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "700",
            background: "linear-gradient(135deg, #00D9FF 0%, #00A3CC 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "16px",
          }}
        >
          UI Component Library
        </h1>
        <p
          style={{
            fontSize: "20px",
            color: "#94a3b8",
            maxWidth: "600px",
            margin: "0 auto 40px",
          }}
        >
          Modern, beautiful, and fully customizable React components for your
          next project
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="secondary" size="lg">
            View on GitHub
          </Button>
        </div>
      </header>

      {/* Navigation */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          background: "rgba(10, 14, 26, 0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #1e293b",
          padding: "20px 40px",
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            gap: "12px",
            overflowX: "auto",
          }}
        >
          {["all", "form", "action", "layout", "overlay"].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "primary" : "ghost"}
              size="sm"
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 40px",
        }}
      >
        {/* Component Grid Navigation */}
        <section style={{ marginBottom: "80px" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "600",
              color: "#e4e4e7",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Components
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {components
              .filter((c) => activeTab === "all" || c.category === activeTab)
              .map((component) => (
                <Card
                  key={component.id}
                  style={{
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "transform 0.2s ease",
                  }}
                  onClick={() => scrollToComponent(component.id)}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-4px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <h3
                    style={{
                      fontSize: "18px",
                      color: "#e4e4e7",
                      margin: "0 0 8px 0",
                    }}
                  >
                    {component.name}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>
                    {component.category}
                  </p>
                </Card>
              ))}
          </div>
        </section>

        {/* Input Component */}
        <section id="input" style={{ marginBottom: "80px" }}>
          <Card>
            <Card.Header>
              <Card.Title>Input</Card.Title>
              <Card.Subtitle>
                Text input fields with labels, icons, and validation
              </Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <Input
                  label="Basic Input"
                  placeholder="Enter text here..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Input
                  label="With Helper Text"
                  placeholder="username"
                  helperText="Choose a unique username"
                />
                <Input
                  label="With Error"
                  placeholder="email@example.com"
                  error="Invalid email format"
                />
                <Input label="With Icon" placeholder="Search..." icon="🔍" />
                <Input label="Disabled" placeholder="Cannot edit" disabled />
              </div>
            </Card.Content>
          </Card>
        </section>

        {/* Button Component */}
        <section id="button" style={{ marginBottom: "80px" }}>
          <Card>
            <Card.Header>
              <Card.Title>Button</Card.Title>
              <Card.Subtitle>
                Multiple variants and sizes for different use cases
              </Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                <div>
                  <h4
                    style={{
                      color: "#94a3b8",
                      fontSize: "14px",
                      marginBottom: "16px",
                    }}
                  >
                    Variants
                  </h4>
                  <div
                    style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
                  >
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="danger">Danger</Button>
                  </div>
                </div>
                <div>
                  <h4
                    style={{
                      color: "#94a3b8",
                      fontSize: "14px",
                      marginBottom: "16px",
                    }}
                  >
                    Sizes
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Button variant="primary" size="sm">
                      Small
                    </Button>
                    <Button variant="primary" size="md">
                      Medium
                    </Button>
                    <Button variant="primary" size="lg">
                      Large
                    </Button>
                  </div>
                </div>
                <div>
                  <h4
                    style={{
                      color: "#94a3b8",
                      fontSize: "14px",
                      marginBottom: "16px",
                    }}
                  >
                    States
                  </h4>
                  <div
                    style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
                  >
                    <Button variant="primary" icon="✨">
                      With Icon
                    </Button>
                    <Button variant="primary" loading>
                      Loading
                    </Button>
                    <Button variant="primary" disabled>
                      Disabled
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Content>
          </Card>
        </section>

        {/* Select Component */}
        <section id="select" style={{ marginBottom: "80px" }}>
          <Card>
            <Card.Header>
              <Card.Title>Select</Card.Title>
              <Card.Subtitle>
                Dropdown selection with custom styling
              </Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <Select
                  label="Country"
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                  options={[
                    { value: "vn", label: "Vietnam" },
                    { value: "us", label: "United States" },
                    { value: "jp", label: "Japan" },
                    { value: "kr", label: "South Korea" },
                    { value: "sg", label: "Singapore" },
                  ]}
                />
                <Select
                  label="Disabled Select"
                  disabled
                  options={[{ value: "option1", label: "Cannot change" }]}
                />
              </div>
            </Card.Content>
          </Card>
        </section>

        {/* Checkbox Component */}
        <section id="checkbox" style={{ marginBottom: "80px" }}>
          <Card>
            <Card.Header>
              <Card.Title>Checkbox</Card.Title>
              <Card.Subtitle>
                Selection controls for multiple choices
              </Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <Checkbox
                  label="Accept terms and conditions"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <Checkbox label="Subscribe to newsletter" />
                <Checkbox label="Enable notifications" defaultChecked />
                <Checkbox label="Disabled option" disabled />
              </div>
            </Card.Content>
          </Card>
        </section>

        {/* Switch Component */}
        <section id="switch" style={{ marginBottom: "80px" }}>
          <Card>
            <Card.Header>
              <Card.Title>Switch</Card.Title>
              <Card.Subtitle>Toggle between on/off states</Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <Switch
                  label="Dark mode"
                  checked={isSwitchOn}
                  onChange={(e) => setIsSwitchOn(e.target.checked)}
                />
                <Switch label="Auto-save" defaultChecked />
                <Switch label="Enable analytics" />
                <Switch label="Disabled switch" disabled />
              </div>
            </Card.Content>
          </Card>
        </section>

        {/* Card Component */}
        <section id="card" style={{ marginBottom: "80px" }}>
          <Card>
            <Card.Header>
              <Card.Title>Card</Card.Title>
              <Card.Subtitle>
                Flexible container for grouping content
              </Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "20px",
                }}
              >
                <Card>
                  <Card.Header>
                    <Card.Title>Basic Card</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <p style={{ margin: 0, color: "#94a3b8" }}>
                      This is a simple card with just content.
                    </p>
                  </Card.Content>
                </Card>

                <Card>
                  <Card.Header>
                    <Card.Title>With Subtitle</Card.Title>
                    <Card.Subtitle>Additional description</Card.Subtitle>
                  </Card.Header>
                  <Card.Content>
                    <p style={{ margin: 0, color: "#94a3b8" }}>
                      Cards can have subtitles for more context.
                    </p>
                  </Card.Content>
                </Card>

                <Card>
                  <Card.Header>
                    <Card.Title>With Footer</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <p style={{ margin: 0, color: "#94a3b8" }}>
                      Add actions in the footer section.
                    </p>
                  </Card.Content>
                  <Card.Footer>
                    <Button variant="primary" size="sm">
                      Action
                    </Button>
                  </Card.Footer>
                </Card>
              </div>
            </Card.Content>
          </Card>
        </section>

        {/* Modal Component */}
        <section id="modal" style={{ marginBottom: "80px" }}>
          <Card>
            <Card.Header>
              <Card.Title>Modal</Card.Title>
              <Card.Subtitle>
                Overlay dialogs for important information
              </Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                  Open Modal
                </Button>
              </div>

              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Header onClose={() => setIsModalOpen(false)}>
                  Example Modal
                </Modal.Header>
                <Modal.Body>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <p style={{ color: "#94a3b8", margin: 0 }}>
                      This is a modal dialog with custom styling. It includes a
                      header, body, and footer section.
                    </p>
                    <Input label="Your Name" placeholder="Enter your name" />
                    <Checkbox label="Remember my choice" />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Confirm
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Content>
          </Card>
        </section>

        {/* Tooltip Component */}
        <section id="tooltip" style={{ marginBottom: "80px" }}>
          <Card>
            <Card.Header>
              <Card.Title>Tooltip</Card.Title>
              <Card.Subtitle>Helpful hints that appear on hover</Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Tooltip content="This is a helpful tooltip">
                  <Button variant="primary">Hover me</Button>
                </Tooltip>
                <Tooltip content="You can add tooltips to any element">
                  <Button variant="secondary">Another one</Button>
                </Tooltip>
                <Tooltip content="Tooltips help explain features">
                  <span
                    style={{
                      display: "inline-block",
                      padding: "12px 20px",
                      background: "#1e293b",
                      borderRadius: "8px",
                      color: "#e4e4e7",
                      cursor: "help",
                    }}
                  >
                    Hover this text
                  </span>
                </Tooltip>
              </div>
            </Card.Content>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #1e293b",
          padding: "40px",
          textAlign: "center",
          color: "#64748b",
        }}
      >
        <p style={{ margin: "0 0 16px 0" }}>
          Built with React • Styled with custom CSS • Open Source
        </p>
        <div
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button variant="ghost" size="sm">
            Documentation
          </Button>
          <Button variant="ghost" size="sm">
            GitHub
          </Button>
          <Button variant="ghost" size="sm">
            Examples
          </Button>
        </div>
      </footer>
    </div>
  );
}

export default UIShowcase;
