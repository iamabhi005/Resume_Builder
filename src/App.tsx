import { FormSidebar } from './components/Form/FormSidebar';
import { PreviewWrapper } from './components/Preview/PreviewWrapper';
import { Controls } from './components/UI/Controls';
import { ResumeProvider, useResume } from './context/ResumeContext';
import { Login } from './components/Auth/Login';

function AppContent() {
  const { user } = useResume();

  if (!user) {
    return <Login />;
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Controls />
      <main className="flex flex-1 overflow-hidden">
        <div className="w-[400px] shrink-0 border-r border-gray-200 dark:border-gray-800">
          <FormSidebar />
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <PreviewWrapper />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <ResumeProvider>
      <AppContent />
    </ResumeProvider>
  );
}

export default App;
