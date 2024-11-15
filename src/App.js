import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { IndividualBlog } from './pages/IndividualBlog';
import { AllBlogs } from './pages/AllBlogs';
import { ProductOne } from './pages/Products/ProductOne';
import { ProductTwo } from './pages/Products/ProductTwo';
import { ProductThree } from './pages/Products/ProductThree';
import { ProductFour } from './pages/Products/ProductFour';
import { ProductFive } from './pages/Products/ProductFive';
import { Login } from './pages/Auth/login';
import { SignUp } from './pages/Auth/signup';
import { ResetPassword_One } from './pages/Auth/resetpassword_one';
import { ResetPassword_Two } from './pages/Auth/resetpassword_two';
import { OTP } from './pages/Auth/otp';
import { Congratulations } from './pages/Auth/congrejulations';
import { DashboardLayout } from './pages/Dashboard/DashboardLayout';
import { Generate } from './pages/Dashboard/Generate';
import { Recent } from './pages/Dashboard/Recent';
import { Setting } from './pages/Dashboard/Setting';
import { Support } from './pages/Dashboard/Support';
import { Dashboard_Home } from './pages/Dashboard/Home';
import { ProductSix } from './pages/Products/ProductSix';
import { ImageToVideo } from './pages/Dashboard/Products/ImageToVideo';
import { TextToVideo } from './pages/Dashboard/Products/TextToVideo';
import { FoodExportAssistant } from './pages/Dashboard/Products/FoodExportAssistant';
import { VideoMenuGen } from './pages/Dashboard/Products/VideoMenuGen';

function App() {
  // const navigate = useNavigate()
  const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.userId && user?.token) return true;
    else return false;
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/pricing',
      element: <Pricing />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/services',
      element: <Services />,
    },
    {
      path: '/individualblog/:id',
      element: <IndividualBlog />,
    },
    {
      path: '/allblogs',
      element: <AllBlogs />,
    },
    {
      path: '/productone',
      element: <ProductOne />,
    },
    {
      path: '/producttwo',
      element: <ProductTwo />,
    },
    {
      path: '/productthree',
      element: <ProductThree />,
    },
    {
      path: '/productfour',
      element: <ProductFour />,
    },
    {
      path: '/productfive',
      element: <ProductFive />,
    },
    {
      path: '/productsix',
      element: <ProductSix />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
    {
      path: '/resetpassword-one',
      element: <ResetPassword_One />,
    },
    {
      path: '/otp',
      element: <OTP />,
    },
    {
      path: '/resetpassword-two',
      element: <ResetPassword_Two />,
    },
    {
      path: '/congratulations',
      element: <Congratulations />,
    },
    {
      path: ':id/dashboard',
      element: isAuthenticated() ? (
        <DashboardLayout />
      ) : (
        <Navigate to='/login' />
      ),
      children: [
        { path: 'home', element: <Dashboard_Home /> },
        { path: 'generate', element: <Generate /> },
        { path: 'recent', element: <Recent /> },
        { path: 'setting', element: <Setting /> },
        { path: 'support', element: <Support /> },
      ],
    },
    { path: '/:id/dashboard/generate/imagetovideo', element: <ImageToVideo /> },
    { path: '/:id/dashboard/generate/texttovideo', element: <TextToVideo /> },
    {
      path: ':id/dashboard/generate/foodexportassistant',
      element: <FoodExportAssistant />,
    },
    {
      path: '/:id/dashboard/generate/videomenugeneration',
      element: <VideoMenuGen />,
    },
  ]);
  // return <RouterProvider router={router} />;
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='/individualblog/:id' element={<IndividualBlog />} />
        <Route path='/allblogs' element={<AllBlogs />} />
        <Route path='/productone' element={<ProductOne />} />
        <Route path='/producttwo' element={<ProductTwo />} />
        <Route path='/productthree' element={<ProductThree />} />
        <Route path='/productfour' element={<ProductFour />} />
        <Route path='/productfive' element={<ProductFive />} />
        <Route path='/productsix' element={<ProductSix />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/resetpassword-one' element={<ResetPassword_One />} />
        <Route path='/otp' element={<OTP />} />
        <Route path='/resetpassword-two' element={<ResetPassword_Two />} />
        <Route path='/congratulations' element={<Congratulations />} />
        <Route
          path=':id/dashboard'
          element={
            // isAuthenticated() ? 
            <DashboardLayout />
            //  : <Navigate to='/login' />
          }
        >
          <Route path='home' element={<Dashboard_Home />} />
          <Route path='generate' element={<Generate />} />
          <Route path='recent' element={<Recent />} />
          <Route path='setting' element={<Setting />} />
          <Route path='support' element={<Support />} />
        </Route>

        <Route
          path='/:id/dashboard/generate/imagetovideo'
          element={<ImageToVideo />}
        />
        <Route
          path='/:id/dashboard/generate/texttovideo'
          element={<TextToVideo />}
        />
        <Route
          path=':id/dashboard/generate/foodexportassistant'
          element={<FoodExportAssistant />}
        />
        <Route
          path='/:id/dashboard/generate/videomenugeneration'
          element={<VideoMenuGen />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
