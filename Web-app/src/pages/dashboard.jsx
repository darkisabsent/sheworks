import { useEffect, useState } from "react";
import DashboardSIdebar from "../Components/dashboardSIdebar";
import { useSelector } from "react-redux";
import menu from "/assets/menu.png";
import { Link } from "react-router-dom";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { getDatabase, ref, get } from 'firebase/database';
function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  useEffect(() => {
    const userUid = '7TMp0h935ab9vUPj8nDX4iyYo762'; // Replace with the actual user UID

    const fetchData = async () => {
      const db = getDatabase();
      const userRef = ref(db, `users/${userUid}/username`);

      try {
        const snapshot = await get(userRef);
        const fetchedUsername = snapshot.val();

        if (fetchedUsername) {
          setUsername(fetchedUsername);
          console.log('Username in Dashboard:', fetchedUsername);
        }
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    // Fetch username when the component mounts
    fetchData();
   
  }, []);
  const user = useSelector((state) => state.user);
  
  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  return (
    <>
      <DashboardSIdebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="lg:ml-[309px]">
        {/* desktop */}
        <nav
          className="hidden lg:flex border-[#eee5ee] border-b-[1px]  
        lg:justify-end px-16 py-5 lg:items-center flex-row"
        >
          <div className="mr-10">
            <img
              className="inline w-5 h-5 mr-1"
              src="/assets/lang.png"
              alt="this"
            />
            English
          </div>
          <div>
            <img className="inline" src="/assets/notes.png" alt="this" /> Notes
          </div>
          <div>
            <img
              className="ml-4 rounded-full h-10 w-10 inline mr-2"
              src="/assets/img.png"
              alt=""
            />
            {user.providerData[0].displayName || "User"}
          </div>
        </nav>

        {/* mobile */}
        <nav
          className="lg:hidden text-center border-[#E6E5EE] border-b-[1px] 
        px-16 py-4 flex-between"
        >
          <img src={menu} onClick={() => setIsOpen(!isOpen)} alt="menu icon" />
          <p className="font-semibold text-[32px]">Dashboard</p>
          <div></div>
        </nav>

        {/* <Intro /> */}
      </main>
      <main className="lg:ml-[309px]">
        <div className="bg-white min-h-screen p-2 sm:p-[40px]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-1">
              <h2 className="text-md">Welcome Selim to your dashboard ! 👋</h2>
              <h2 className="text-xl mt-5">Your agenda</h2>
              <Link
            to="/"
            className="lg:inline-block rounded-lg ml-60 border-[#656565] border-[1px] py-[15px] px-5 max-w-[200px] transition-all duration-300 hover:bg-yellow-500 hover:text-white hover:shadow-sm"          >
            Add an appointment
          </Link>
          <Link
            to="/"
            className="lg:inline-block rounded-lg ml-10 border-[#656565] border-[1px] py-[15px] px-5 max-w-[200px] transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-sm"          >
            Cancel an appointment
          </Link>
            </div>
            <div>
            {/* Your FullCalendar component */}
            <FullCalendar
              plugins={[dayGridPlugin]}
              eventContent={renderEventContent}
            />
          </div>
 
         

            

            
            
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
