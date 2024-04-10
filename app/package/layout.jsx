
import 'leaflet/dist/leaflet.css';

const RootLayout = async ({ children }) => {


    return (
      <>
        <div className="px-5 ">
          {children}
        </div>
      </>
    );
  };
  
  export default RootLayout;
  