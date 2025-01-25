import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import {
  AdminDashboard,
  AgencyLogin,
  ChatRoom,
  Collaborate,
  EmergencyHistory,
  Feedback,
  Help,
  Home,
  Layout,
  ManageProfile,
  MapOverview,
  RaiseEmergency,
  RegisterAgency,
  ResourceAllocation,
  UserHelp,
} from './components';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='register-agency' element={<RegisterAgency />} />
        <Route path='raise-emergency' element={<RaiseEmergency />} />
        <Route path='agency-login' element={<AgencyLogin />} />
        <Route path='collaborate' element={<Collaborate />} />
        <Route path='chat-room' element={<ChatRoom />} />
        <Route path='user-raise-help-request' element={<UserHelp />} />
        <Route path='admin-dashboard' element={<AdminDashboard />} />
        <Route path='manage-profile' element={<ManageProfile />} />
        <Route path='emergency-history' element={<EmergencyHistory />} />
        <Route path='map-overview' element={<MapOverview />} />
        <Route path='resource-allocation' element={<ResourceAllocation />} />
        <Route path='help' element={<Help />} />
        <Route path='feedback' element={<Feedback />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
