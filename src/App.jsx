import { useState } from 'react'
import './App.css'

function App() {
  const panelData = [
    'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80',
    'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  ];

  const [activeIndex, setAciveIndex] = useState(0);

  const handlePanelClick =(index => {
    setAciveIndex(index)
  })

  return (
    <div className="container">
      {panelData.map((imageUrl, index) => (
        <div
          key={index}
          className={`panel ${activeIndex === index ? 'active' : ''}`}
          style={{ backgroundImage: `url('${imageUrl}')` }}
          onClick={() => handlePanelClick(index)}
        >
          <h3>Panel {index + 1}</h3>
        </div>
      ))}
    </div>
  );
}

export default App
