import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { SessionList } from './components/SessionList';
import { Quiz } from './components/Quiz';
import { Result } from './components/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessions/:categoryId" element={<SessionList />} />
        <Route path="/quiz/:sessionId" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;