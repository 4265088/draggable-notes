import React, { useState, useEffect, useRef } from 'react';
import { GripVertical, X, Moon, Sun, Plus } from 'lucide-react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState('');
  const [draggedNote, setDraggedNote] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [darkMode, setDarkMode] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const savedNotes = localStorage.getItem('draggableNotes');
    const savedDarkMode = localStorage.getItem('darkMode');

    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }

    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    } else {
      const defaultNotes = [
        {
          id: 1,
          text: '📌 Check the description for my Frontend Interview Prep Course',
          position: { x: 50, y: 200 }
        },
        {
          id: 2,
          text: '📌 Like this Video and Subscribe to Roadside Coder',
          position: { x: 300, y: 350 }
        }
      ];
      setNotes(defaultNotes);
      localStorage.setItem('draggableNotes', JSON.stringify(defaultNotes));
    }
  }, []);

  useEffect(() => {
    if (notes.length >= 0) {
      localStorage.setItem('draggableNotes', JSON.stringify(notes));
    }
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const findRandomPosition = () => {
    const maxAttempts = 100;
    const containerWidth = containerRef.current?.clientWidth || 800;
    const containerHeight = containerRef.current?.clientHeight || 600;

    for (let i = 0; i < maxAttempts; i++) {
      const x = Math.random() * (containerWidth - 250);
      const y = Math.random() * (containerHeight - 100);

      const testNote = { position: { x, y } };
      const hasOverlap = notes.some(note => checkOverlap(testNote, note));

      if (!hasOverlap) {
        return { x, y };
      }
    }

    return { x: 10, y: 10 };
  };

  const addNote = () => {
    if (inputText.trim() === '') return;

    const newNote = {
      id: Date.now(),
      text: '📌 ' + inputText,
      position: findRandomPosition()
    };

    setNotes([...notes, newNote]);
    setInputText('');
  };

  const removeNote = (noteId) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addNote();
    }
  };

  const checkOverlap = (note1, note2) => {
    const padding = 10;
    const note1Rect = {
      left: note1.position.x,
      right: note1.position.x + 250,
      top: note1.position.y,
      bottom: note1.position.y + 100
    };
    const note2Rect = {
      left: note2.position.x - padding,
      right: note2.position.x + 250 + padding,
      top: note2.position.y - padding,
      bottom: note2.position.y + 100 + padding
    };

    return !(note1Rect.right < note2Rect.left ||
      note1Rect.left > note2Rect.right ||
      note1Rect.bottom < note2Rect.top ||
      note1Rect.top > note2Rect.bottom);
  };

  const handleMouseDown = (e, note) => {
    if (e.target.closest('.remove-btn')) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON') return;

    e.preventDefault();
    const noteElement = e.currentTarget;
    const rect = noteElement.getBoundingClientRect();

    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });

    setDraggedNote({ ...note, originalPosition: note.position });
  };

  const handleMouseMove = (e) => {
    if (!draggedNote || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let newX = e.clientX - containerRect.left - dragOffset.x;
    let newY = e.clientY - containerRect.top - dragOffset.y;

    newX = Math.max(0, Math.min(newX, containerRect.width - 250));
    newY = Math.max(0, Math.min(newY, containerRect.height - 100));

    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === draggedNote.id
          ? { ...note, position: { x: newX, y: newY } }
          : note
      )
    );
  };

  const handleMouseUp = () => {
    if (!draggedNote) return;

    const currentNote = notes.find(n => n.id === draggedNote.id);
    const hasOverlap = notes.some(note =>
      note.id !== draggedNote.id && checkOverlap(currentNote, note)
    );

    if (hasOverlap) {
      const newPosition = findRandomPosition();
      setNotes(prevNotes =>
        prevNotes.map(note =>
          note.id === draggedNote.id
            ? { ...note, position: newPosition }
            : note
        )
      );
    }

    setDraggedNote(null);
  };

  useEffect(() => {
    if (draggedNote) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [draggedNote, dragOffset, notes]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const AnimatedBubbles = () => (
    <div className="bubbles-container">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className={`bubble ${darkMode ? 'bubble-dark' : 'bubble-light'}`}
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <AnimatedBubbles />

      <div className="content-wrapper">
        <div className="header">
          <h1 className="title">✨ Draggable Notes</h1>

          <button
            onClick={toggleDarkMode}
            className="theme-toggle"
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        <div className="input-section">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a New Note"
            className="note-input"
          />
          <button onClick={addNote} className="add-button">
            <Plus size={20} />
            Add Note
          </button>
        </div>

        <div
          ref={containerRef}
          className="notes-container"
          style={{ cursor: draggedNote ? 'grabbing' : 'default' }}
        >
          {notes.map((note) => (
            <div
              key={note.id}
              onMouseDown={(e) => handleMouseDown(e, note)}
              className={`note ${draggedNote?.id === note.id ? 'dragging' : ''}`}
              style={{
                left: `${note.position.x}px`,
                top: `${note.position.y}px`
              }}
            >
              <button
                onClick={() => removeNote(note.id)}
                className="remove-btn"
                title="Remove note"
              >
                <X size={16} />
              </button>
              <div className="note-content">
                <GripVertical size={20} className="grip-icon" />
                <p className="note-text">{note.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;