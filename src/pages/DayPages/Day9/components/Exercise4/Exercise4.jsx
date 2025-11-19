import ExerciseCard from "../../../../../components/ExerciseCard";
import AutoSaveForm from "./components/AutoSaveForm";

import "./styles.css";
export default function Exercise4() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={4} title="Form Auto-Save" />

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
import { useCallback, useEffect, useState } from "react";

function AutoSaveForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: [],
    category: "",
  });

  const [tagInput, setTagInput] = useState("");
  const [saveStatus, setSaveStatus] = useState("saved"); // 'saved' | 'saving' | 'unsaved'
  const [lastSaved, setLastSaved] = useState(null);
  const [savingError, setSavingError] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Load draft from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("draft");
      const timestamp = localStorage.getItem("draft-timestamp");

      if (saved) {
        setFormData(JSON.parse(saved));
        if (timestamp) {
          setLastSaved(new Date(timestamp));
        }
      }
    } catch (error) {
      console.error("Failed to load draft:", error);
    }
  }, []);

  // Save draft function
  const saveDraft = useCallback(async () => {
    try {
      setSaveStatus("saving");
      setSavingError(null);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Save to localStorage
      localStorage.setItem("draft", JSON.stringify(formData));
      localStorage.setItem("draft-timestamp", new Date().toISOString());

      setSaveStatus("saved");
      setLastSaved(new Date());
    } catch (error) {
      setSavingError("Failed to save draft" + error);
      setSaveStatus("unsaved");
    }
  }, [formData]);

  // Debounced auto-save
  useEffect(() => {
    // Set status to 'unsaved' immediately when data changes
    if (
      formData.title ||
      formData.content ||
      formData.tags.length > 0 ||
      formData.category
    ) {
      setSaveStatus("unsaved");
    }

    // Debounce save (2 seconds after user stops typing)
    const timer = setTimeout(() => {
      if (saveStatus === "unsaved") {
        saveDraft();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [formData, saveStatus, saveDraft]);

  // Warn before leaving with unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (saveStatus === "unsaved" || saveStatus === "saving") {
        e.preventDefault();
        e.returnValue =
          "You have unsaved changes. Are you sure you want to leave?";
        return e.returnValue;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [saveStatus]);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addTag = () => {
    const tag = tagInput.trim();
    if (tag && !formData.tags.includes(tag)) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.content.trim()) {
      setSavingError("Title and content are required");
      return;
    }

    try {
      setSaveStatus("saving");
      setSavingError(null);

      // Simulate API call for publishing
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Clear draft from localStorage
      localStorage.removeItem("draft");
      localStorage.removeItem("draft-timestamp");

      // Show success modal
      setShowSuccessModal(true);

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          title: "",
          content: "",
          tags: [],
          category: "",
        });
        setSaveStatus("saved");
        setLastSaved(null);
        setShowSuccessModal(false);
      }, 2000);
    } catch (error) {
      setSavingError("Failed to publish post " + error);
      setSaveStatus("unsaved");
    }
  };

  const clearDraft = () => {
    if (window.confirm("Are you sure you want to clear this draft?")) {
      setFormData({
        title: "",
        content: "",
        tags: [],
        category: "",
      });
      localStorage.removeItem("draft");
      localStorage.removeItem("draft-timestamp");
      setSaveStatus("saved");
      setLastSaved(null);
    }
  };

  const getCharCount = (text) => text.length;
  const getWordCount = (text) =>
    text.trim().split(/\\s+/).filter(Boolean).length;

  return (
    <div className="auto-save-app">
      <div className="app-container">
        {/* Header */}
        <div className="app-header">
          <div className="header-content">
            <h1 className="header-title">📝 Auto-Save Form</h1>
            <p className="header-subtitle">
              Your work is automatically saved as you type
            </p>
          </div>

          {/* Save Status */}
          <div className="save-status-bar">
            {saveStatus === "saved" && lastSaved && (
              <div className="status-saved">
                <span className="status-icon">✓</span>
                <span className="status-text">
                  Saved at {lastSaved.toLocaleTimeString()}
                </span>
              </div>
            )}
            {saveStatus === "saving" && (
              <div className="status-saving">
                <div className="saving-spinner"></div>
                <span className="status-text">Saving...</span>
              </div>
            )}
            {saveStatus === "unsaved" && (
              <div className="status-unsaved">
                <span className="status-icon">●</span>
                <span className="status-text">Unsaved changes</span>
              </div>
            )}
            {savingError && (
              <div className="status-error">
                <span className="status-icon">❌</span>
                <span className="status-text">{savingError}</span>
              </div>
            )}
          </div>
        </div>

        {/* Form */}
        <div className="form-container">
          <div className="form-main">
            {/* Title */}
            <div className="form-group">
              <label className="form-label">
                Title <span className="required">*</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => updateField("title", e.target.value)}
                placeholder="Enter your post title..."
                className="form-input form-title-input"
              />
              <div className="input-hint">
                {getCharCount(formData.title)} characters
              </div>
            </div>

            {/* Content */}
            <div className="form-group">
              <label className="form-label">
                Content <span className="required">*</span>
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => updateField("content", e.target.value)}
                placeholder="Write your content here..."
                rows={15}
                className="form-textarea"
              />
              <div className="textarea-stats">
                <span>{getWordCount(formData.content)} words</span>
                <span>•</span>
                <span>{getCharCount(formData.content)} characters</span>
              </div>
            </div>

            {/* Category */}
            <div className="form-group">
              <label className="form-label">Category</label>
              <select
                value={formData.category}
                onChange={(e) => updateField("category", e.target.value)}
                className="form-select"
              >
                <option value="">Choose a category...</option>
                <option value="tech">Technology</option>
                <option value="design">Design</option>
                <option value="business">Business</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="travel">Travel</option>
                <option value="food">Food</option>
                <option value="health">Health</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Tags */}
            <div className="form-group">
              <label className="form-label">Tags</label>
              <div className="tags-input-wrapper">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addTag();
                    }
                  }}
                  placeholder="Type a tag and press Enter..."
                  className="form-input"
                />
                <button onClick={addTag} className="btn-add-tag" type="button">
                  Add Tag
                </button>
              </div>

              {formData.tags.length > 0 && (
                <div className="tags-list">
                  {formData.tags.map((tag, index) => (
                    <div key={index} className="tag-item">
                      <span className="tag-text">{tag}</span>
                      <button
                        onClick={() => removeTag(tag)}
                        className="tag-remove"
                        type="button"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Form Actions */}
            <div className="form-actions">
              <button
                onClick={clearDraft}
                className="btn-secondary"
                type="button"
                disabled={saveStatus === "saving"}
              >
                Clear Draft
              </button>
              <button
                onClick={handleSubmit}
                className="btn-primary"
                type="button"
                disabled={
                  saveStatus === "saving" ||
                  !formData.title.trim() ||
                  !formData.content.trim()
                }
              >
                {saveStatus === "saving" ? "Publishing..." : "Publish Post"}
              </button>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="form-sidebar">
            <div className="info-card">
              <h3 className="info-title">💡 Auto-Save Info</h3>
              <div className="info-content">
                <div className="info-item">
                  <span className="info-icon">⚡</span>
                  <p>Your work is automatically saved every 2 seconds</p>
                </div>
                <div className="info-item">
                  <span className="info-icon">💾</span>
                  <p>Drafts are stored locally in your browser</p>
                </div>
                <div className="info-item">
                  <span className="info-icon">🔒</span>
                  <p>You'll be warned before leaving with unsaved changes</p>
                </div>
                <div className="info-item">
                  <span className="info-icon">🎨</span>
                  <p>Use tags to organize your posts</p>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3 className="info-title">📊 Writing Stats</h3>
              <div className="stats-grid">
                <div className="stat-box">
                  <div className="stat-value">
                    {getWordCount(formData.content)}
                  </div>
                  <div className="stat-label">Words</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">
                    {getCharCount(formData.content)}
                  </div>
                  <div className="stat-label">Characters</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">{formData.tags.length}</div>
                  <div className="stat-label">Tags</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">
                    {formData.category ? "✓" : "–"}
                  </div>
                  <div className="stat-label">Category</div>
                </div>
              </div>
            </div>

            {lastSaved && (
              <div className="info-card">
                <h3 className="info-title">🕐 Last Saved</h3>
                <div className="last-saved-details">
                  <p className="saved-time">{lastSaved.toLocaleTimeString()}</p>
                  <p className="saved-date">{lastSaved.toLocaleDateString()}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-content success-modal">
            <div className="success-icon">🎉</div>
            <h2 className="success-title">Published Successfully!</h2>
            <p className="success-text">
              Your post has been published and draft cleared.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AutoSaveForm;

---

// ✅ Tính năng đã implement:
// 🎯 Core Features:

// Auto-save draft - Tự động lưu sau 2s khi user ngừng typing
// LocalStorage persistence - Lưu draft và timestamp
// Load draft on mount - Tự động load draft khi mở lại
// Save status indicator - Saved, Saving, Unsaved, Error states
// Before unload warning - Cảnh báo trước khi rời trang với unsaved changes
// Form validation - Required fields check
// Success feedback - Modal animation khi publish thành công

// 📝 Form Fields:

// Title - Required, character count
// Content - Required, word & character count, 15 rows textarea
// Category - Select dropdown với 8 options
// Tags - Add/remove tags, Enter key support, duplicate prevention
// Clear Draft - Button để clear toàn bộ form

// 🎨 UI/UX:

// Real-time statistics - Words, characters, tags count
// Save status bar - Prominent status display ở header
// Info sidebar - Auto-save tips và writing stats
// Last saved time - Display với date & time
// Character/word counters - Live updates
// Smooth animations - Status transitions, modal
// Form validation feedback - Disable publish button nếu thiếu required fields

// 🔧 useEffect Usage:

// Load draft on mount:

// useEffect(() => {
//   const saved = localStorage.getItem('draft');
//   if (saved) {
//     setFormData(JSON.parse(saved));
//     setLastSaved(new Date(timestamp));
//   }
// }, []); // Chỉ chạy 1 lần khi mount

// Debounced auto-save (KEY FEATURE):

// useEffect(() => {
//   // Mark as unsaved immediately
//   setSaveStatus('unsaved');
  
//   // Debounce 2 seconds
//   const timer = setTimeout(() => {
//     saveDraft(); // Save to localStorage
//   }, 2000);
  
//   return () => clearTimeout(timer); // ✅ Cleanup
// }, [formData]); // Chạy khi formData thay đổi

// Before unload warning:

// useEffect(() => {
//   const handleBeforeUnload = (e) => {
//     if (saveStatus === 'unsaved' || saveStatus === 'saving') {
//       e.preventDefault();
//       e.returnValue = 'You have unsaved changes';
//     }
//   };
  
//   window.addEventListener('beforeunload', handleBeforeUnload);
//   return () => window.removeEventListener('beforeunload', handleBeforeUnload);
// }, [saveStatus]);
// 

// ### 💡 Highlights:
// - **Debounce pattern** - Chỉ save sau 2s không có thay đổi
// - **Immediate feedback** - Status chuyển "unsaved" ngay lập tức
// - **Error handling** - Try-catch cho localStorage operations
// - **Memory leak prevention** - Cleanup timers properly
// - **Race condition free** - Clear timer trước khi set timer mới
// - **User-friendly** - Không spam save requests
// - **Data persistence** - Draft survive browser refresh

// ### 🎮 Test Features:
// 1. **Type in any field** - Xem status chuyển "unsaved" → "saving" → "saved"
// 2. **Wait 2 seconds** - Auto-save triggers
// 3. **Refresh page** - Draft được load lại
// 4. **Try to close tab** - Browser warning xuất hiện
// 5. **Add/remove tags** - Enter key hoặc button
// 6. **Click Publish** - Success modal + clear draft
// 7. **Click Clear Draft** - Confirmation + reset form

// ### 📊 Data Flow:
// User types → setSaveStatus('unsaved')
//             ↓
// Wait 2 seconds (debounce)
//             ↓
// saveDraft() → Save to localStorage
//             ↓
// setSaveStatus('saved') + setLastSaved(now)
// 🚀 Advanced Patterns Used:

// Debouncing - Delay execution until user stops typing
// Optimistic UI - Show "saving" immediately
// Error recovery - Try-catch with error messages
// Cleanup functions - Proper timer cleanup
// Browser APIs - beforeunload event
// LocalStorage - Persistent storage

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
