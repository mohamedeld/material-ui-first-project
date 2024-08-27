import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@material-ui/styles"
import theme from "./components/ui/Theme"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import Services from "./Pages/Services.jsx";
import CustomSoftware from "./Pages/CustomSoftware.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import MobileDevelopment from "./Pages/MobileDevelopment.jsx";
import WebsiteDevelopment from "./Pages/WebsiteDevelopment.jsx";
import Revolution from "./Pages/Revolution.jsx";
import Layout from "./Pages/Layout.jsx";



const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children:[
          {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,},
          {
            path: "/services",
            element: <Services />,
            errorElement: <ErrorPage />,
    
          },
          {
            path: "/customsoftware",
            element: <CustomSoftware />,
            errorElement: <ErrorPage />,
    
          },
          {
            path: "/about",
            element: <AboutUs />,
            errorElement: <ErrorPage />,
    
          },
          {
            path: "/contact",
            element: <ContactUs />,
            errorElement: <ErrorPage />,
    
          },
          {
            path: "/web",
            element: <WebsiteDevelopment />,
            errorElement: <ErrorPage />,
    
          },
          {
            path: "/mobile",
            element: <MobileDevelopment />,
            errorElement: <ErrorPage />,
    
          },
          {
            path: "/revolution",
            element: <Revolution />,
            errorElement: <ErrorPage />,
    
          },
        
        ]
      },
      
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
);
