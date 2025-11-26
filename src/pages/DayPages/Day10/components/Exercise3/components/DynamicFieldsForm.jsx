import { useFieldArray } from "../hooks/useFieldArray";
import { useForm } from "../hooks/useForm";

// Demo 2: Dynamic Field Array Form
export default function DynamicFieldsForm() {
  const form = useForm({
    name: "",
    skills: [],
  });

  const skillsArray = useFieldArray("skills", form);

  const onSubmit = async (values) => {
    console.log("Skills submitted:", values);
    alert(`✅ Submitted ${values.skills.length} skills!`);
  };

  return (
    <div className="form-container">
      <h2>🎯 Dynamic Fields (Skills)</h2>

      <div className="form-wrapper">
        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            value={form.values.name}
            onChange={form.handleChange("name")}
          />
        </div>

        <div className="field-array-section">
          <h3>Skills ({skillsArray.fields.length})</h3>

          {skillsArray.fields.map((skill, index) => (
            <div key={index} className="field-array-item">
              <input
                type="text"
                value={skill}
                onChange={(e) => {
                  const newSkills = [...skillsArray.fields];
                  newSkills[index] = e.target.value;
                  form.setFieldValue("skills", newSkills);
                }}
                placeholder={`Skill ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => skillsArray.remove(index)}
                className="btn-remove"
              >
                🗑️
              </button>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => skillsArray.swap(index, index - 1)}
                  className="btn-move"
                >
                  ⬆️
                </button>
              )}
              {index < skillsArray.fields.length - 1 && (
                <button
                  type="button"
                  onClick={() => skillsArray.swap(index, index + 1)}
                  className="btn-move"
                >
                  ⬇️
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={() => skillsArray.push("")}
            className="btn-add"
          >
            ➕ Add Skill
          </button>
        </div>

        <div className="form-actions">
          <button type="button" onClick={form.handleSubmit(onSubmit)}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
