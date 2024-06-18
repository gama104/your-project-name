'use client'
import Image from "next/image";
import Sidebar from '@/components/ui/Sidebar';
import Navbar from '@/components/ui/Navbar';
import MainContent from '@/components/ui/MainContent';
import ContentHeader from '@/components/ui/ContentHeader';
export default function Home() {
  return (
    <main className="flex flex-col h-screen">
<div className="flex flex-1">
              <Sidebar />
              <div className="flex flex-1 flex-col">
                  <Navbar />
                  <ContentHeader
                      title="All RFR reports"
                      instructions="Manage your document in the Reports screen, RFR: add, delete, or create new reports easily."
                  />
                  <div className="flex flex-1">
                      <MainContent />
                  </div>
              </div>
          </div>
    </main>
  );
}
