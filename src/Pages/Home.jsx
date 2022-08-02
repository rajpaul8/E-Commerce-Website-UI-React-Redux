import SwiperComponent from "../components/Home/SwiperComponent"
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { getProducts, reset } from '../features/products/productSlice';
import { FiFacebook, FiTwitter } from 'react-icons/fi'
import { SiInstagram } from 'react-icons/si'


function Home() {
  // Products for rendering the pages via navbar--> including products state in home
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <>
        <SwiperComponent />
      <div className="min-h-screen container">
        {/* Home 2nd Screen Categories Segment */}
        <div className="flex justify-center">
          <div className="homeCategoriesComponent">
            <div className="container">
              <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--1 phone_flex_col overflow-y-hidden">

                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--1 md:pr-2 hoverImageScaleZoomOut">
                  <Link to='/products/women'>
                    <div className="homeCategoriesImage bg-unsplash-[dlxLGIy-2VU] bg-cover"></div>
                    <div className="relative">
                      <div className="homeCategoriesImageCaptions ">
                        <h3> Shop Women </h3>
                        <p className="category-caption-2">Loreum Ipsum doior sit amet</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--1 hoverImageScaleZoomOut">
                  <Link to='/products/men'>
                    <div className="homeCategoriesImage bg-unsplash-[nsRBbE6-YLs] bg-cover "></div>
                    <div className="homeCategoriesImageCaptions">
                      <h3> Shop Men </h3>
                      <p className="category-caption-2">Loreum Ipsum doior sit amet</p>
                    </div>
                  </Link>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--1 md:pl-2 hoverImageScaleZoomOut">
                  <Link to='/products/jewelery'>
                    <div className="homeCategoriesImage bg-unsplash-[eKY3r-ErHLA] bg-cover "></div>
                    <div className="homeCategoriesImageCaptions">
                      <h3> Jewelery </h3>
                      <p className="category-caption-2">Loreum Ipsum doior sit amet</p>
                    </div>
                  </Link>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--1 cat_grid md:pl-2 hoverImageScaleZoomOut">
                  <Link to='/products/electronics'>
                    <div className="homeCategoriesImage bg-unsplash-[4rK-Julj0cg] bg-cover "></div>
                    <div className="homeCategoriesImageCaptions">
                      <h3> Electronics </h3>
                      <p className="category-caption-2">Loreum Ipsum doior sit amet</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Home 3rd Screen Segment */}
        <div className="flex justify-center">
          <div className=" home-section-three">
            <div className="container">
              <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--1 !flex flex-col md:flex-row-reverse">
                <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--5 aem-GridColumn--phone--1">
                  <img src="https://images.unsplash.com/photo-1517940310602-26535839fe84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="section-three-image object-cover" />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--7 aem-GridColumn--phone--1 md:flex">
                  <div className="section-three-text md:flex md:justify-center">
                    <h1 className="section-three-text">Take off in the new Signature Legging</h1>
                    <h2 className="py-1">Lorem Ipsum Dolor Tempor</h2>
                    <p className="py-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                    <div className="flex flex-col items-center md:flex-row md:justify-start py-8 space-y-5 md:space-y-0 md:space-x-5">
                      <button className="organgeButtonOutline">SHOP COLLECTION</button>
                      <button className="organgeButtonFilled">SHOP NOW</button>
                    </div>
                    <div className=" flex justify-center md:justify-start"><div className="breaker-hr-orangeBar"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Home 4th Screen Segment */}
        <div className="flex md:justify-center mb-80 ">
          <div className=" home-section-four">
            <div className="container">
              <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--1 ">
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--8 aem-GridColumn--phone--1">
                  <img src="https://images.unsplash.com/photo-1524842823338-7b141b2bc8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1293&q=80" className="section-four-image object-cover" />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--1 px-5 md:px-0 -mt-7 md:mt-0">
                  <div className="section-four-textBox bg-[#1B252C]">
                    <div className="">
                      <h1 className="!text-center">Conquer your next adventure</h1>
                      <h2 className="!text-center">Lorem Ipsum Dolor Tempor</h2>
                      <div style={{ width: '100%' }} className="flex justify-center">
                        <button className="btn btn-ghost shopDeviceBTN">SHOP DEVICES</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer Here */}
              <div >
                <div className="footerStyle pt-7">

                      <footer className="footer p-10 bg-base-200 text-base-content space-x-7">
                        
                        <div>
                          <span className="footer-title">Account</span>
                          <a className="link link-hover">Sign In</a>
                          <a className="link link-hover">Register</a>
                          <a className="link link-hover">Order Status</a>
                        </div>
                        <div>
                          <span className="footer-title">About Us</span>
                          <a className="link link-hover">Our Story</a>
                          <a className="link link-hover">Careers</a>
                        </div>
                        <div>
                          <span className="footer-title">Help</span>
                          <a className="link link-hover">Contact Us</a>
                          <a className="link link-hover">Order Status</a>
                          <a className="link link-hover">Returns</a>
                        </div>
                        <div>
                          <span className="footer-title">Follow Us!</span>
                          <a style={{ width: '300px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </a>
                          <div className='flex space-x-3 py-3'>
                            <a href="#instagram" className='text-xl'><SiInstagram /></a>
                            <a href="#fb" className='text-xl'><FiFacebook /></a>
                            <a href="#twitter" className='text-xl'><FiTwitter /></a>
                          </div>
                        </div>
                      </footer>
                      <footer className="hidden md:footer  px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                        <div className="items-center grid-flow-col">
                          <p className='text-lg'>V E N I A</p>
                        </div>
                        <div className='text-sm flex justify-center'>© Company Name Address Ave, City Name, State ZIP</div>
                        <div className="md:place-self-center md:justify-self-end">
                          <div className="grid grid-flow-col gap-4">
                            <a href="#" className='underline underline-offset-1'>Terms of Use</a>
                            <a href="#" className='underline underline-offset-1'>Privacy Policy</a>
                          </div>
                        </div>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>


        
      </div>
    </>
  )
}

export default Home