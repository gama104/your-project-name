import ContentHeader from "./(components)/filedashboard/ContentHeader";
import Navbar from "./(components)/filedashboard/Navbar";
import Sidebar from "./(components)/filedashboard/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-y-auto">
          <ContentHeader
            title="All RFR reports"
            instructions="Manage your document in the Reports screen, RFR: add, delete, or create new reports easily."
          />
          <div className="flex flex-1 p-4 md:p-8 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
