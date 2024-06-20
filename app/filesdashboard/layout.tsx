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
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Navbar />
          <ContentHeader
            title="All RFR reports"
            instructions="Manage your document in the Reports screen, RFR: add, delete, or create new reports easily."
          />
          <div className="flex flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
