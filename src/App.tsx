import { Outlet } from 'react-router';
import './App.css';
import { Header } from './shared/layout/header/Header';
import { SidebarPanel } from './shared/layout/sidebar-panel/Sidebar-Panel';

function App() {
  return (
    <div className="flex min-h-screen w-full">
      <SidebarPanel />

      <main className="flex flex-1 flex-col">
        <Header />

        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;

