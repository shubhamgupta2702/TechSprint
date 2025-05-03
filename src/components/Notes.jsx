import { useState, useEffect } from 'react';

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    if (editingId) {
      // Update existing note
      setNotes(notes.map(note => 
        note.id === editingId ? { ...note, title, content } : note
      ));
      setEditingId(null);
    } else {

      const newNote = {
        id: Date.now(),
        title,
        content,
        createdAt: new Date().toISOString()
      };
      setNotes([newNote, ...notes]);
    }


    setTitle('');
    setContent('');
  };

  
  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setTitle('');
      setContent('');
    }
  };


  const startEditing = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note.id);
  };

  
  const cancelEditing = () => {
    setTitle('');
    setContent('');
    setEditingId(null);
  };

  
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 mt-16  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Journals</h1>
          <p className="mt-2 text-sm text-gray-600">
            {editingId ? 'Edit your Journals' : 'Write your Heart Out'}
          </p>
        </div>

        
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search journals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>


        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Journal title"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                Content
              </label>
              <textarea
                id="content"
                rows="5"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Write your thoughts..."
                required
              />
            </div>
            <div className="flex justify-end space-x-3">
              {editingId && (
                <button
                  type="button"
                  onClick={cancelEditing}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {editingId ? 'Update Journal' : 'Save Journal'}
              </button>
            </div>
          </form>
        </div>

        
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {searchTerm ? 'Search Results' : 'Your Journal'} ({filteredNotes.length})
          </h2>
          
          {filteredNotes.length === 0 ? (
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <p className="text-gray-500">
                {searchTerm ? 'No matching journal found' : 'No journals yet. Add your first journal above!'}
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {filteredNotes.map((note) => (
                <li key={note.id} className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{note.title}</h3>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => startEditing(note)}
                          className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(note.id)}
                          className="text-red-600 hover:text-red-900 text-sm font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-600 whitespace-pre-line">{note.content}</p>
                    <div className="mt-3 text-xs text-gray-500">
                      Created: {new Date(note.createdAt).toLocaleString()}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesApp;