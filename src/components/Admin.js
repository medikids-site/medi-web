import React, { useState, useEffect, useCallback } from "react";
import "../styles/Admin.css";

function Admin() {
  // --- State Variables ---
  const [files, setFiles] = useState([]);
  const [section, setSection] = useState("doctors");
  
  // Doctor fields
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  
  // News fields
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  // Partner fields
  const [partnerName, setPartnerName] = useState("");
  const [partnerLink, setPartnerLink] = useState("");
  
  // Review fields
  const [reviewerName, setReviewerName] = useState("");
  const [reviewNote, setReviewNote] = useState("");
  
  const [message, setMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [items, setItems] = useState([]);
  const [stats, setStats] = useState({});

  const API_BASE_URL = "https://medi-back-iltx.onrender.com";

  // --- Handlers for Input Changes ---
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setMessage("");
    if (selectedFiles.length > 0) {
      const totalSize = selectedFiles.reduce((sum, f) => sum + f.size, 0);
      setMessage(`Selected: ${selectedFiles.length} file(s) (${(totalSize / 1024 / 1024).toFixed(2)} MB)`);
    }
  };

  const handleSectionChange = (e) => {
    const newSection = e.target.value;
    setSection(newSection);
    
    // Clear all fields
    setName("");
    setPosition("");
    setTitle("");
    setContent("");
    setPartnerName("");
    setPartnerLink("");
    setReviewerName("");
    setReviewNote("");
    setFiles([]);
    setMessage("");
    
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  // --- Helper Function to Get Dynamic Labels ---
  const getFieldInfo = useCallback(() => {
    switch (section) {
      case "doctors":
        return { 
          requiresImage: true,
          requiresName: true,
          requiresPosition: true,
          imageLabel: "Doctor Photo",
          acceptFiles: "image/*"
        };
      case "news":
        return { 
          requiresTitle: true,
          requiresContent: true,
          imageOptional: true,
          imageLabel: "News Image (Optional)",
          acceptFiles: "image/*"
        };
      case "partners":
        return { 
          requiresImage: true,
          imageLabel: "Partner Logo",
          acceptFiles: "image/*"
        };
      case "reviews":
        return { 
          requiresNote: true,
          imageOptional: true
        };
      default:
        return {};
    }
  }, [section]);

  // --- File Upload Logic ---
  const handleUpload = async () => {
    // Validation based on section
    if (section === "doctors") {
      if (!files || files.length === 0) {
        setMessage("❌ Please select a doctor photo!");
        return;
      }
      if (!name.trim()) {
        setMessage("❌ Please enter the doctor name");
        return;
      }
      if (!position.trim()) {
        setMessage("❌ Please enter the doctor position");
        return;
      }
    }

    if (section === "news") {
      if (!title.trim()) {
        setMessage("❌ Please enter the news title");
        return;
      }
      if (!content.trim()) {
        setMessage("❌ Please enter the news content");
        return;
      }
    }

    if (section === "partners") {
      if (!files || files.length === 0) {
        setMessage("❌ Please select a partner logo!");
        return;
      }
    }

    if (section === "reviews") {
      if (!reviewNote.trim()) {
        setMessage("❌ Please enter the review note");
        return;
      }
    }

    // Check file type for sections with images
    if (files && files.length > 0 && section !== "reviews") {
      const allImages = files.every(f => f.type.startsWith('image/'));
      if (!allImages) {
        setMessage("❌ Please select only image files!");
        return;
      }
    }

    // Prepare Upload
    setIsUploading(true);
    setMessage("⏳ Uploading...");
    
    try {
      let endpoint;
      const formData = new FormData();

      if (section === "doctors") {
        endpoint = `${API_BASE_URL}/doctors/upload`;
        formData.append("image", files[0]);
        formData.append("name", name.trim());
        formData.append("position", position.trim());
      } else if (section === "news") {
        endpoint = `${API_BASE_URL}/news/upload`;
        formData.append("title", title.trim());
        formData.append("content", content);
        if (files && files.length > 0) {
          formData.append("image", files[0]);
        }
      } else if (section === "partners") {
        endpoint = `${API_BASE_URL}/partners/upload`;
        formData.append("logo", files[0]);
        if (partnerName.trim()) {
          formData.append("name", partnerName.trim());
        }
        if (partnerLink.trim()) {
          formData.append("link", partnerLink.trim());
        }
      } else if (section === "reviews") {
        endpoint = `${API_BASE_URL}/reviews/upload`;
        formData.append("note", reviewNote.trim());
        if (reviewerName.trim()) {
          formData.append("name", reviewerName.trim());
        }
      }

      // Make API Call
      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        setMessage(`✅ Upload successful! Item saved in "${section}" section.`);
        
        // Add new item to list
        const newItem = data.doctor || data.news || data.partner || data.review;
        if (newItem) {
          setItems(prevItems => [newItem, ...prevItems]);
        }

        // Clear form fields
        setFiles([]);
        setName("");
        setPosition("");
        setTitle("");
        setContent("");
        setPartnerName("");
        setPartnerLink("");
        setReviewerName("");
        setReviewNote("");
        
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) {
          fileInput.value = '';
        }

        // Refresh stats and items
        loadItems();
        loadStats();
      } else {
        setMessage(`❌ Upload failed: ${data.error || "Unknown error"}`);
      }
    } catch (err) {
      console.error("Upload error:", err);
      setMessage("❌ Upload failed: Network error. Make sure the server is running.");
    } finally {
      setIsUploading(false);
    }
  };

  // --- Fetching Items ---
  const loadItems = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/${section}`);
      if (!res.ok) {
        if (res.status === 404) {
          setItems([]);
          return;
        }
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      
      const itemsArray = data.doctors || data.news || data.partners || data.reviews || [];
      setItems(itemsArray);
    } catch (err) {
      console.error("Error loading items:", err);
      setItems([]);
    }
  }, [section]);

  // --- Fetching Upload Statistics ---
  const loadStats = useCallback(async () => {
    try {
      const sections = ["doctors", "news", "partners", "reviews"];
      const newStats = {};
      
      for (const sec of sections) {
        try {
          const res = await fetch(`${API_BASE_URL}/${sec}`);
          if (res.ok) {
            const data = await res.json();
            const itemsArray = data.doctors || data.news || data.partners || data.reviews || [];
            newStats[sec] = itemsArray.length;
          }
        } catch (err) {
          console.error(`Error loading stats for ${sec}:`, err);
        }
      }
      
      setStats(newStats);
    } catch (err) {
      console.error("Error loading stats:", err);
      setStats({});
    }
  }, []);

  // --- Deleting an Item ---
  const deleteItem = async (itemId, displayName) => {
    if (!window.confirm(`Are you sure you want to delete "${displayName}"?`)) return;

    try {
      const res = await fetch(`${API_BASE_URL}/${section}/${itemId}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (res.ok) {
        setMessage(`✅ "${displayName}" deleted successfully!`);
        setItems(prevItems =>
          prevItems.filter(item => item._id !== itemId)
        );
        loadStats();
      } else {
        setMessage(`❌ Delete failed: ${data.error || "Unknown error"}`);
      }
    } catch (err) {
      console.error("Delete error:", err);
      setMessage("❌ Delete failed: Network error.");
    }
  };

  // --- Effect Hooks ---
  useEffect(() => {
    loadItems();
  }, [loadItems]);

  useEffect(() => {
    loadStats();
  }, [loadStats]);

  const fieldInfo = getFieldInfo();

  // Section names mapping
  const sectionNames = {
    "doctors": "Doctors",
    "news": "News",
    "partners": "Partner Logos",
    "reviews": "Customer Reviews"
  };

  // --- JSX Rendering ---
  return (
    <div className="admin-container">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <h2 className="admin-title">🏥 Medikids - Admin Panel</h2>
      </div>
      
      {/* Stats Display */}
      <div className="stats-section">
        <h3 className="stats-title">📊 Items Count:</h3>
        {Object.keys(stats).length > 0 ? (
          <div className="stats-grid">
            {Object.entries(stats).map(([key, count]) => (
              <div key={key} className="stat-card">
                <strong>{sectionNames[key] || key}:</strong> {count} item(s)
              </div>
            ))}
          </div>
        ) : (
          <p className="no-stats">Statistics not available. Try uploading content!</p>
        )}
      </div>

      {/* Upload Form */}
      <div className="upload-form">
        <h3 className="form-title">📤 Add New Item</h3>
        
        <div className="form-group">
          <label className="form-label">Section:</label>
          <select
            value={section}
            onChange={handleSectionChange}
            disabled={isUploading}
            className="form-select"
          >
            <option value="doctors">👨‍⚕️ Doctors</option>
            <option value="news">📰 News</option>
            <option value="partners">🤝 Partner Logos</option>
            <option value="reviews">⭐ Customer Reviews</option>
          </select>
        </div>

        {/* Doctor Fields */}
        {section === "doctors" && (
          <>
            <div className="form-group">
              <label className="form-label">Name *:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isUploading}
                className="form-input"
                placeholder="Enter doctor name"
                maxLength={100}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Position *:</label>
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                disabled={isUploading}
                className="form-input"
                placeholder="e.g., Pediatrician, Chief Medical Officer"
                maxLength={100}
              />
            </div>
            <div className="form-group">
              <label className="form-label">{fieldInfo.imageLabel} *:</label>
              <input
                type="file"
                accept={fieldInfo.acceptFiles}
                onChange={handleFileChange}
                disabled={isUploading}
                className="form-file-input"
              />
            </div>
          </>
        )}

        {/* News Fields */}
        {section === "news" && (
          <>
            <div className="form-group">
              <label className="form-label">Title *:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={isUploading}
                className="form-input"
                placeholder="Enter news title"
                maxLength={200}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Content *:</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                disabled={isUploading}
                className="form-textarea"
                placeholder="Enter news content. Use double line breaks to separate paragraphs. Format section headers naturally."
                maxLength={50000}
                style={{ minHeight: '300px' }}
              />
              <small style={{ color: '#666', display: 'block', marginTop: '5px' }}>
                💡 Formatting tips: Use double line breaks for paragraphs. Write headers as regular text on their own line.
              </small>
            </div>
            <div className="form-group">
              <label className="form-label">{fieldInfo.imageLabel}:</label>
              <input
                type="file"
                accept={fieldInfo.acceptFiles}
                onChange={handleFileChange}
                disabled={isUploading}
                className="form-file-input"
              />
              <small style={{ color: '#666', display: 'block', marginTop: '5px' }}>
                💡 Image is optional for news articles
              </small>
            </div>
          </>
        )}

        {/* Partner Fields */}
        {section === "partners" && (
          <>
            <div className="form-group">
              <label className="form-label">Company Name (Optional):</label>
              <input
                type="text"
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
                disabled={isUploading}
                className="form-input"
                placeholder="Enter partner company name"
                maxLength={100}
              />
              <small style={{ color: '#666', display: 'block', marginTop: '5px' }}>
                💡 Name is optional. You can upload just the logo.
              </small>
            </div>
            <div className="form-group">
              <label className="form-label">Website Link (Optional):</label>
              <input
                type="url"
                value={partnerLink}
                onChange={(e) => setPartnerLink(e.target.value)}
                disabled={isUploading}
                className="form-input"
                placeholder="https://www.partnerwebsite.com"
                maxLength={500}
              />
              <small style={{ color: '#666', display: 'block', marginTop: '5px' }}>
                💡 Link is optional. Used to make the logo clickable.
              </small>
            </div>
            <div className="form-group">
              <label className="form-label">{fieldInfo.imageLabel} *:</label>
              <input
                type="file"
                accept={fieldInfo.acceptFiles}
                onChange={handleFileChange}
                disabled={isUploading}
                className="form-file-input"
              />
              <small style={{ color: '#666', display: 'block', marginTop: '5px' }}>
                💡 SVG, PNG, and JPG formats supported
              </small>
            </div>
          </>
        )}

        {/* Review Fields */}
        {section === "reviews" && (
          <>
            <div className="form-group">
              <label className="form-label">Customer Name (Optional):</label>
              <input
                type="text"
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
                disabled={isUploading}
                className="form-input"
                placeholder="Enter customer name"
                maxLength={100}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Review Note *:</label>
              <textarea
                value={reviewNote}
                onChange={(e) => setReviewNote(e.target.value)}
                disabled={isUploading}
                className="form-textarea"
                placeholder="Enter customer review or testimonial"
                maxLength={1000}
                style={{ minHeight: '150px' }}
              />
            </div>
          </>
        )}

        <button
          onClick={handleUpload}
          disabled={isUploading}
          className={`upload-button ${isUploading ? 'disabled' : ''}`}
        >
          {isUploading ? '⏳ Uploading...' : '📤 Upload'}
        </button>

        {message && (
          <p className={`message ${message.includes('✅') ? 'success' : 'error'}`}>
            {message}
          </p>
        )}
      </div>

      {/* Items List Display */}
      <div className="items-section">
        <h3 className="items-title">
          🖼️ {sectionNames[section]} Items ({items.length})
        </h3>
        
        {items.length > 0 ? (
          <div className="items-grid">
            {items.map((item) => {
              let displayTitle = "";
              let displayDescription = "";
              let displayLink = "";
              let mediaUrl = null;
              
              if (section === "doctors") {
                displayTitle = item.name || "Untitled";
                displayDescription = item.position || "";
                mediaUrl = item.imageUrl;
              } else if (section === "news") {
                displayTitle = item.title || "Untitled";
                displayDescription = item.content || "";
                mediaUrl = item.imageUrl;
              } else if (section === "partners") {
                displayTitle = item.name || "Partner Logo";
                displayDescription = "";
                displayLink = item.link || "";
                mediaUrl = item.logoUrl;
              } else if (section === "reviews") {
                displayTitle = item.name || "Anonymous";
                displayDescription = item.note || "";
                mediaUrl = null;
              }
              
              return (
                <div key={item._id} className="item-card">
                  {mediaUrl && (
                    <img
                      src={mediaUrl}
                      alt={displayTitle}
                      className="item-image"
                      style={section === "partners" ? { 
                        objectFit: 'contain', 
                        padding: '20px',
                        background: '#f5f5f5'
                      } : {}}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        console.warn(`Failed to load image: ${mediaUrl}`);
                      }}
                    />
                  )}
                  
                  <div className="item-content">
                    <h4 className="item-title">{displayTitle}</h4>
                    
                    {displayDescription && (
                      <p className="item-description">
                        {displayDescription.length > 150
                          ? `${displayDescription.substring(0, 150)}...`
                          : displayDescription
                        }
                      </p>
                    )}

                    {displayLink && (
                      <p className="item-description">
                        🔗 <a href={displayLink} target="_blank" rel="noopener noreferrer">{displayLink}</a>
                      </p>
                    )}

                    <button
                      onClick={() => deleteItem(item._id, displayTitle)}
                      className="delete-button"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="no-items">
            No items uploaded yet in "{sectionNames[section]}" section.
          </p>
        )}
      </div>
    </div>
  );
}

export default Admin;