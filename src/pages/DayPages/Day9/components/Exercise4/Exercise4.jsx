import ExerciseCard from "../../../../../components/ExerciseCard";
import AutoSaveForm from "./components/AutoSaveForm";

import "./styles.css";
export default function Exercise4() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={4} title="Dashboard với Multiple Widgets" />

      <ExerciseCard.Description>
        {`
// TODO: Implement auto-save form

function AutoSaveForm() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: [],
    category: ''
  });

  const [saveStatus, setSaveStatus] = useState('saved'); // 'saved' | 'saving' | 'unsaved'
  const [lastSaved, setLastSaved] = useState(null);
  const [savingError, setSavingError] = useState(null);

  // TODO: Effects
  // 1. Load draft from localStorage on mount
  // 2. Debounced auto-save (2 seconds after user stops typing)
  // 3. Save to localStorage
  // 4. Show save status
  // 5. Handle save errors

  // Load draft on mount
  useEffect(() => {
    const saved = localStorage.getItem('draft');
    if (saved) {
      setFormData(JSON.parse(saved));
      setLastSaved(new Date(localStorage.getItem('draft-timestamp')));
    }
  }, []);

  // Debounced auto-save
  useEffect(() => {
    // Set status to 'unsaved' immediately when data changes
    setSaveStatus('unsaved');

    // Debounce save
    const timer = setTimeout(() => {
      // TODO: Save to localStorage
      // Set status to 'saving'
      // Simulate API call
      // Set status to 'saved'
      // Update lastSaved
    }, 2000);

    return () => clearTimeout(timer);
  }, [formData]);

  // Warn before leaving with unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (saveStatus === 'unsaved' || saveStatus === 'saving') {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [saveStatus]);

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Final submit
    // Clear draft from localStorage
  };

  return (
    <form onSubmit={handleSubmit} className="auto-save-form">
      <h1>Tạo bài viết</h1>

      <div className="save-status">
        {saveStatus === 'saved' && (
          <span className="status-saved">
            ✓ Đã lưu {lastSaved && \`lúc \${lastSaved.toLocaleTimeString()}\`}
          </span>
        )}
        {saveStatus === 'saving' && (
          <span className="status-saving">💾 Đang lưu...</span>
        )}
        {saveStatus === 'unsaved' && (
          <span className="status-unsaved">● Chưa lưu</span>
        )}
        {savingError && (
          <span className="status-error">❌ Lỗi: {savingError}</span>
        )}
      </div>

      <div>
        <label>Tiêu đề:</label>
        <input
          value={formData.title}
          onChange={(e) => updateField('title', e.target.value)}
        />
      </div>

      <div>
        <label>Nội dung:</label>
        <textarea
          value={formData.content}
          onChange={(e) => updateField('content', e.target.value)}
          rows={10}
        />
      </div>

      <div>
        <label>Category:</label>
        <select
          value={formData.category}
          onChange={(e) => updateField('category', e.target.value)}
        >
          <option value="">Chọn category</option>
          <option value="tech">Tech</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="travel">Travel</option>
        </select>
      </div>

      <button type="submit">Xuất bản</button>
    </form>
  );
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <AutoSaveForm />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
