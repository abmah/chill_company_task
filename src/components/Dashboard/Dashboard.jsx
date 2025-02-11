
import Score from '../Charts/Score';
import DetectionDetails from '../DetectionDetails/DetectionDetails';
import HistoryList from '../HistoryList/HistoryList';
import VideoDescription from '../VideoDescription/VideoDescription';
import OriginalVideo from '../VideoPlayer/OriginalVideo';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <main className="flex w-full bg-gray-50 py-4 justify-center">

      <article className="w-full md:w-[90%] mx-auto p-4 flex">
        <aside className="mr-6">
          <Sidebar />
        </aside>
        <div className="flex-1">
          <DashboardHeader />
          <section className="lg:flex space-x-6 flex-col lg:flex-row">

            <div className="lg:w-7/10 mb-6 lg:mb-0 w-full">
              <section className="flex flex-col space-y-6">
                <article className=" flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-end">
                  <div className=" w-full">
                    <VideoPlayer />
                  </div>
                  <aside className="w-full md:max-w-[300px]">
                    <Score />
                  </aside>
                </article>
                <article className="w-full">
                  <VideoDescription />
                </article>
                <article className="w-full">
                  <DetectionDetails />
                </article>
              </section>
            </div>
            <aside className="w-full lg:w-3/10 mx-auto justify-end">
              <section className="flex flex-col space-y-6">
                <article className="w-full">
                  <OriginalVideo />
                </article>
                <article className="w-full">
                  <HistoryList />
                </article>
              </section>
            </aside>
          </section>
        </div>
      </article>

    </main>
  );
};

export default Dashboard;